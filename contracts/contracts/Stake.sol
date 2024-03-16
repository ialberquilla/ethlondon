// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

import {SupporterNFT} from "./SupporterNFT.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ResultConsumer} from "./ResultConsumer.sol";
import {IHypERC20} from "./IHypERC20.sol";

contract Stake {
    constructor(
        address _supporterNFT,
        address _usdcAddress,
        address _consumerAddress,
        address _warpRouter,
        address _yieldDestination
    ) {
        supporterNFT = _supporterNFT;
        usdcAddress = _usdcAddress;
        consumerAddress = _consumerAddress;
        warpRouter = _warpRouter;
        yieldDestination = _yieldDestination;
    }

    struct Match {
        string team1;
        string team2;
        uint256 team1Stake;
        uint256 team2Stake;
        uint256 winner;
    }

    event Stake(
        address indexed staker,
        uint256 matchId,
        uint256 team,
        uint256 amount
    );

    mapping(uint256 => Match) public matches;
    mapping(address => uint256) public stakes;
    uint256 public totalStakers;
    address public supporterNFT;
    address public usdcAddress;
    address public consumerAddress;
    address public warpRouter;
    address public yieldDestination;

    function createMatch(string memory _team1, string memory _team2) public {
        uint256 matchId = uint256(keccak256(abi.encodePacked(_team1, _team2)));
        matches[matchId] = Match(_team1, _team2, 0, 0, 0);
    }

    function stake(uint256 _matchId, uint256 _team, uint256 _amount) public {
        require(matches[_matchId].winner == 0, "Match already won");

        IERC20(usdcAddress).transferFrom(msg.sender, address(this), _amount);

        stakes[msg.sender] += _amount;
        if (_team == 1) {
            matches[_matchId].team1Stake += _amount;
        } else {
            matches[_matchId].team2Stake += _amount;
        }

        totalStakers += 1;

        SupporterNFT(supporterNFT).safeMint(msg.sender);

        emit Stake(msg.sender, _matchId, _team, _amount);
    }

    function declareWinner(uint256 _matchId, uint256 _team) public {
        require(matches[_matchId].winner == 0, "Match already won");
        uint256 winner = stringToUint(ResultConsumer(consumerAddress).winner());
        matches[_matchId].winner = winner;
    }

    function distributeStake(uint256 _matchId) public {
        require(matches[_matchId].winner != 0, "Match not won yet");

        for (uint256 i = 0; i < totalStakers; i++) {
            if (stakes[msg.sender] > 0) {
                stakes[msg.sender] = 0;
            }
        }

        IHypERC20(warpRouter).transferRemote(
            88882,
            bytes32(bytes20(yieldDestination)),
            IERC20(usdcAddress).balanceOf(address(this))
        );
    }

    function getMatch(
        uint256 _matchId
    )
        public
        view
        returns (string memory, string memory, uint256, uint256, uint256)
    {
        return (
            matches[_matchId].team1,
            matches[_matchId].team2,
            matches[_matchId].team1Stake,
            matches[_matchId].team2Stake,
            matches[_matchId].winner
        );
    }

    function stringToUint(string memory s) public pure returns (uint256) {
        bytes memory b = bytes(s);
        uint256 result = 0;
        for (uint i = 0; i < b.length; i++) {
            uint256 c = uint256(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
        return result;
    }
}
