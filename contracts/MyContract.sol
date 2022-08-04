// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.15;

contract MyContract {
   
 uint public myUint;

 function setUint(uint _myUint) public {
 myUint = _myUint;
 }

 function getUint() public view returns(uint){
    return myUint;
 }
}
