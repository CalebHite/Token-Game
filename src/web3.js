import { ethers } from 'ethers';
import { contractABI } from './abi.js';

// Contract Information
const contractAddress = '0xe1ce88a6dea1fd3ecaea13f669d9a9c297f07d55';
let provider;
let signer;
let accounts;
let contract;

export async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
        console.log("Please install MetaMask!");
    }
}
