// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BoxV2 {
    uint256 public _value;

    event Value(uint256 value);

      function setVal(uint256 value) public {
        _value = value;
        emit Value(value);
    }

    function multiplyValue() public {
        _value = _value *= 2;
        emit Value(_value);
    }

    function getVal() public view returns (uint256) {
        return _value;
    }
}