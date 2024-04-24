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

const main = async () => {
  // get balances before tx
  const senderBalanceBefore = await provider.getBalance(account1)
  const recieverBalanceBefore = await provider.getBalance(account2);

  console.log(`\nSender balance before: ${ethers.formatEther(senderBalanceBefore)}`)
  console.log(`reciever balance before: ${ethers.formatEther(recieverBalanceBefore)}\n`)

  // create tx request
  const txRequest: ethers.TransactionRequest = {
    to: account2,
    value: ethers.parseEther("0.025"),
  };

  // send ether
  const tx = await wallet.sendTransaction(txRequest);

  // wait for transaction to be mined
  await tx.wait();

  console.log(tx);

  // log balances after tx
  const senderBalanceAfter = await provider.getBalance(account1)
  const recieverBalanceAfter = await provider.getBalance(account2);

  console.log(`\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`)
  console.log(`reciever balance after: ${ethers.formatEther(recieverBalanceAfter)}\n`)
};

main();
