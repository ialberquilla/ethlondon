// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Stake {
    struct Match {
        string team1;
        string team2;
        uint256 team1Stake;
        uint256 team2Stake;
        uint256 winner;
    }

    event Stake (
        address indexed staker,
        uint256 matchId,
        uint256 team,
        uint256 amount
    );

    mapping(uint256 => Match) public matches;
    mapping(address => uint256) public stakes;
    uint256 public totalStakers;

    function createMatch(string memory _team1, string memory _team2) public {
        uint256 matchId = uint256(keccak256(abi.encodePacked(_team1, _team2)));
        matches[matchId] = Match(_team1, _team2, 0, 0, 0);
    }

    function stake(uint256 _matchId, uint256 _team, uint256 _amount) public {
        require(matches[_matchId].winner == 0, "Match already won");

        stakes[msg.sender] += _amount;
        if (_team == 1) {
            matches[_matchId].team1Stake += _amount;
        } else {
            matches[_matchId].team2Stake += _amount;
        }

        totalStakers += 1;

        emit Stake(msg.sender, _matchId, _team, _amount);
    }

    function declareWinner(uint256 _matchId, uint256 _team) public {
        require(matches[_matchId].winner == 0, "Match already won");
        matches[_matchId].winner = _team;
    }

    function distributeStake(uint256 _matchId) public {
        require(matches[_matchId].winner != 0, "Match not won yet");

        for (uint256 i = 0; i < totalStakers; i++) {
            if (stakes[msg.sender] > 0) {
                stakes[msg.sender] = 0;
            }
        }
    }

    function getMatch(uint256 _matchId)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            matches[_matchId].team1,
            matches[_matchId].team2,
            matches[_matchId].team1Stake,
            matches[_matchId].team2Stake,
            matches[_matchId].winner
        );
    }
}
