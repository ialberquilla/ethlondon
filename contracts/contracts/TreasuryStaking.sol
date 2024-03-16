// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

import {SupporterNFT} from "./SupporterNFT.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ResultConsumer} from "./ResultConsumer.sol";
import {IHypERC20} from "./IHypERC20.sol";

contract TreasuryStaking {

    function stake (uint256 _matchId, uint256 _team, uint256 _amount) public {
        require(matches[_matchId].winner == 0, "Match already won");

        IERC20(usdcAddress).transferFrom(msg.sender, address(this), _amount);

        stakes[msg.sender] += _amount;
    }

}