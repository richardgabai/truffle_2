    // SPDX-License-Identifier: GPL-3.0

    pragma solidity >=0.7.0 <0.9.0;

    import './Owner.sol';

   /**
    * @title Storage
    * @dev Store & retrieve value in a variable
    */
    contract Storage is Owner {

        uint256 public number;
        string public myMsg;
        address public myAccount; 
        address public contractOwner;

        /**
        * @dev Store value in variable
        * @param num value to store
        */

        function store(uint256 num) public {
            number = num * 1e18;
            myMsg = 'Hello BCWorld';
            myAccount = msg.sender;
        }

        /**
        * @dev Return value 
        * @return value of 'number'
        */
        function retrieve() public view returns (uint256){
            return number / 1e18;
        }
    }