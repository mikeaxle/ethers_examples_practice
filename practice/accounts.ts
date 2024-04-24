import { ethers } from "ethers";

const INFURA_ID = "a591ef7ae9b64d9394f0ffd48a7d24ad";
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);
const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH balance of ${address} --> ${ethers.formatEther(balance)} ETH\n`
  );
};

main();
