const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

// These are Harhdat's deterministic accounts
// NEVER SEND REAL FUNDS TO THESE ACCOUNTS!
const account0 = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
const account1 = new ethers.Wallet("0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", provider);
const account19 = new ethers.Wallet("0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e", provider);

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // address of the new contract.
const { abi } = require("./artifacts/contracts/Hello.sol/Hello.json");

const balances = async () => {
    const account0Balance = await provider.getBalance(account0.address);
    console.log(`account0 balance: ${ethers.utils.formatEther(account0Balance)} Eth`);
    const account1Balance = await provider.getBalance(account1.address);
    console.log(`account1 balance: ${ethers.utils.formatEther(account1Balance)} Eth`);
    const account19Balance = await provider.getBalance(account19.address);
    console.log(`account19 balance: ${ethers.utils.formatEther(account19Balance)} Eth`);
}

const sendTx = async () => {
    const amount = ethers.utils.parseEther("5000") //5000 Eth.
    await account1.sendTransaction({ to: account19.address, value: amount });
    const account1Balance = await provider.getBalance(account1.address);
    console.log(`account1 balance: ${ethers.utils.formatEther(account1Balance)} Eth`);
    const account19Balance = await provider.getBalance(account19.address);
    console.log(`account19 balance: ${ethers.utils.formatEther(account19Balance)} Eth`);
}

const contractInteraction = async () => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
    const result = await contract.hello();
    console.log(`result: ${result}`);
}
