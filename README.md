Tutorial for truffle-deploy , Send & Get Transaction


1. Setting up the environment

Most Ethereum libraries and tools are written in JavaScript, and one of that is Hardhat. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and truffle is built on second of it.


Installing
$ npm i 

Update your .env file accordingly

API_KEY=""

PRIVATE_KEY=""

CONTRACT_ADDRESS=""



Compiling contracts:

To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.


Use existing .env files for both scripts:

Before deploying smart contract first you will have to need .env file and that file you will write secret keys like mnemoics, private keys and api-key of your ethereun node. And then you use following steps.

But must memories should be memories that .env should in those folder where sendTx and getTx are placed!!!!!!!


Deploying Contract:

$ npx truffle migrate --network rinkeby


Compiling 1 file with 0.8.13
Compilation finished successfully and then migration finished succesfully and then your contract will deploy on ethereum testnet like rinkeby.
The contract has been successfully deployed and is ready to be used.


Sending transaction to blockchain:

Send the transaction using web3-js. Run the node-js script sendTx.js present in the scripts folder, using following command:

$ node sendTx.js 

You have successfuly add 1234567890


Getting transaction from blockchain:

Get the transaction using web-3-js. Run the node-js script getTx.js present in the scripts folder, using following command:

$ node getTx.js 

Tx is succesfull.
Your added value is 1234567890
