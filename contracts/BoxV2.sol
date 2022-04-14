//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BoxV2 {
  uint256 public value;
  string public name;

  constructor(uint _value) {
      value = _value;
  }

  function initialize(string memory _name) external {
    name = _name;
  }

  function setValue(uint256 _value) public {
    value = _value * 2;
    emit StateTransition(_value, value);
  }

  function increase() public {
    value = value + 1;
  }

  function setName(string memory _name) public {
    name = _name;
  }


  // Not allow to do this operation
  /* function destroy() external { */
  /*   selfdestruct(payable(address(this))); */
  /* } */

  /* function call(address a) external { */
  /*   (bool success, ) = a.delegatecall(abi.encode(sha256("innocence()")));  */
  /*   require(success, "delegatecall failed!"); */
  /* } */
}
