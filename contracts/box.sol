// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
    uint256 private _value;

    event ValueChanged(uint256 value);

    function setVal(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    function getVal() public view returns (uint256) {
        return _value;
    }
}