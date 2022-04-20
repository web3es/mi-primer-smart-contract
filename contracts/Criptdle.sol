//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Criptdle {

    address public owner;
    
    string[] wordsTexts;

    struct word {
        string text;
        bool used;
    }        

    mapping(string=>word) public words;     

    modifier Owner(address _address) {
        require(_address == owner, "No tiene permisos para ejecutar esta operacion.");
        _;
    }

    constructor() {
        owner = msg.sender;
        console.log("La address owner del contrato es: ", owner);
    }

    function createWord(string memory _word) public Owner(msg.sender) {
        words[_word] = word(_word, false);
        wordsTexts.push(_word);
    }

    function readWords() public view returns(string[] memory) {
        return wordsTexts;
    }

    function useWord(string memory _word) public Owner(msg.sender) {
        words[_word] = word(_word, true);
    }

    function getWord() public view returns (string memory) {
        uint random = block.timestamp % wordsTexts.length;
        return wordsTexts[random];
    }

    function isUsed(string memory _word) public view returns (bool) {
        return words[_word].used;
    }
}

