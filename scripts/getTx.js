const Web3 = require('web3');
require('dotenv').config();
const MyContract = require('../build/contracts/MyContract.json');
const API_KEY = process.env.API_KEY;
const contractAddress = process.env.contractAddress;
const address = '0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1';

async function getUint() {
    const web3 = new Web3(API_KEY);
    
    
    let contract = new web3.eth.Contract(
        MyContract.abi,
        contractAddress,
        web3
        );

    const getUint = await contract.methods.getUint().call();
    console.log(`Tx is succesfull.`);
    console.log(`Your added value is ${getUint}`)


};

getUint();
