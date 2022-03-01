// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './StarCoin.sol';

contract Exchange {
    StarCoin public starcoin;
    uint public rate = 100;

    constructor(StarCoin _starcoin) public{
        starcoin = _starcoin;
    }

    function buy() public payable{
        uint amount = msg.value * rate;
        require(starcoin.balanceOf( address(this) ) >= amount);
        starcoin.transfer(msg.sender, amount);
    }

    function sell(uint _amount) public {
        require(starcoin.balanceOf(msg.sender) >= _amount);

        uint EthAmount = _amount / rate;
        require(address(this).balance >= EthAmount);
        starcoin.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(EthAmount);
    }
}