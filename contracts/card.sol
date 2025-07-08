// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CardFi {
    
    mapping(address => uint256[]) public cards;
    mapping(address => bool) public usd;
    bytes[] public cardsData;
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    address public vault;
    //Events
    event deposite(address from , uint256 amount , bytes to);
    event applyViaETH(address from , bytes to , bytes info);

    constructor(address[] memory _usd ,address _vault ) {
        for(uint i = 0 ; i < _usd.length ; i++)
        {
            usd[_usd[i]] = true;
        }
        vault = _vault;
    }
    function applyETH() external payable {
        require(msg.value > 0, "Must deposit more than 0 ETH");
    }

    function deposit(address token,uint256 amount , bytes memory to) public returns(uint256) {
        require(usd[token],"Token not support");
        IERC20(token).transferFrom(msg.sender, vault, amount);
        emit deposite(msg.sender, amount, to);
        return 0;
    }

    function getCard(uint256 amount) public view returns(uint256) {
        return 0;
    }

    function getUserInfo(address who) public view returns(uint256) {
        return 0;
    }

}
