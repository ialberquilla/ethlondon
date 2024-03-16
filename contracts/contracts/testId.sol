// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Test {
    function createMatch(string memory _team1, string memory _team2) public {
        uint256 matchId = uint256(keccak256(abi.encodePacked(_team1, _team2)));

        console.log(matchId);
    }
}