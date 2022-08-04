const Web3 = require('web3');
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;
const contractAddress = process.env.contractAddress;
const MyContract = require('../build/contracts/MyContract.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const address = '0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1';

async function setUint(_myUint) {
    const provider = new HDWalletProvider(PRIVATE_KEY,API_KEY);

    const web3 = new Web3(provider);
    
    let contract = new web3.eth.Contract(
        MyContract.abi,
        contractAddress,
        provider,
    );

    let setUint = await contract.methods
    .setUint(_myUint)
    .send({from : address});
    console.log(`Your transection record`);
    console.log(setUint);
    console.log(`You have successfuly add ${_myUint}`)
};

setUint(0987654321);

