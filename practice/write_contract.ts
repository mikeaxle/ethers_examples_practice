import { ethers } from "ethers";

const INFURA_ID = "a591ef7ae9b64d9394f0ffd48a7d24ad";
const provider = new ethers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/${INFURA_ID}`
);

const account1 = "0xD8ca2cF94f701AaB3792A818cf514e894869839C";
const account2 = "0x3252Cb5011c7a07354a099A9cc5900a5DE7c34dA";

const privateKey1 =
  "6f3940c54d518f9b70ddbd9378431b140e30b5212fee9c75f0bf1bd066325a76";
const wallet = new ethers.Wallet(privateKey1, provider);

const contractAddress = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

const contractABI = [
  "function transfer(address to, uint amount) returns (bool)",
  "function balanceOf(address) view returns (uint)",
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1)

  console.log(`\nReading from ${contractAddress}\n`)
  console.log(`Balance of sender: ${balance}\n`)

  const contractWithWallet = contract.connect(wallet)

  const tx = await contractWithWallet.transfer(account2, balance)
  await tx.wait()

  console.log(tx)

  const balanceOfSender = await contract.balanceOf(account1)
  const balanceOfReciever = await contract.balanceOf(account2)

  console.log(`\nBalance of sender: ${balanceOfSender}`)
  console.log(`Balance of reciever: ${balanceOfReciever}\n`)
};

main();
