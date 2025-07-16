// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CardFi {
    mapping(address => bool) public usd;
    mapping(address => bytes[]) public cards;
    mapping(address => bytes) public info;
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    address public vault;
    //Events
    event deposite(address from , uint256 amount , address token , bytes to);
    event applyCard(address owner , bytes info , address token , uint256 amount);

    uint256 public applyFeeETH = 0;
    uint256 public applyFeeUSD = 10;
    constructor(address[] memory _usd ,address _vault,uint256[] memory applyFees ) {
        for(uint i = 0 ; i < _usd.length ; i++)
        {
            usd[_usd[i]] = true;
        }
        vault = _vault;
        applyFeeETH = applyFees[0];
        applyFeeUSD = applyFees[1];
        owner = msg.sender;
    }
    function applyETH() external payable {
        require(msg.value >= applyFeeETH, "Must apply more than 0 ETH");
        _apply(address(0),msg.value);
    }
    function applyUSD(address token) external {
        require(usd[token],"Token not support");
        require(IERC20(token).transferFrom(msg.sender,vault,applyFeeUSD),"Transfer failed");
        _apply(token,applyFeeUSD);
    }


    function _apply(address token , uint256 amount) internal {
        emit applyCard(msg.sender , info[msg.sender],token,amount);
    }

    function deposit(address token,uint256 amount , bytes memory to) public returns(uint256) {
        require(usd[token],"Token not support");
        IERC20(token).transferFrom(msg.sender, vault, amount);
        emit deposite(msg.sender, amount,token, to);
        return 0;
    }

    function updateInfo(bytes memory _info) public returns (bool) {
        info[msg.sender] = _info;
        return true;
    }
}
