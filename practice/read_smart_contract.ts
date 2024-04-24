import { ethers } from "ethers";

const INFURA_ID = "a591ef7ae9b64d9394f0ffd48a7d24ad";
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from --> ${address}\n`)
  console.log(`name: ${name}`);
  console.log(`symbol: ${symbol}`);
  console.log(`totalSupply: ${ethers.formatEther(totalSupply)}\n`);

  const balance = await contract.balanceOf(`0x6c6Bc977E13Df9b0de53b251522280BB72383700`)
  console.log(`\nReturned balance ${ethers.formatEther(balance)} ETH\n`)
};

main();
