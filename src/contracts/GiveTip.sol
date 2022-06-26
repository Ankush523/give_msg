// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract GiveTip{
    uint msgid;
    struct Message{
        string message;
        address owner;
        address creator;
    }

     mapping(address => mapping(uint => Message)) public messageSent;

     function sample(address creator, string memory _message) external {
         ++msgid;
         messageSent[msg.sender][msgid]=Message(_message,msg.sender,creator);
     }

     function receivemsg(uint _msgid) public view returns (Message memory){
         return messageSent[msg.sender][_msgid];
     } 
}