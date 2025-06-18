// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CardFi {
    
    mapping(address => uint256[]) public cards;
    bytes[] public cardsData;
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    address public lpAddress;
    constructor() {
        cards[msg.sender].push(2);
    }
    function applyETH() external payable {
        require(msg.value > 0, "Must deposit more than 0 ETH");
    }

    function getCard(uint256 amount) public view returns(uint256) {
        return 0;
    }

    function getUserInfo(address who) public view returns(uint256) {
        return 0;
    }

}
