import { ethers } from "ethers";

const INFURA_ID = "a591ef7ae9b64d9394f0ffd48a7d24ad";
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const daiContractAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const daiContractABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const diaContract = new ethers.Contract(
  daiContractAddress,
  daiContractABI,
  provider
);

const main = async () => {
  const currentBlockNumber = await provider.getBlockNumber();

  const transferEvents: ethers.EventLog[] | ethers.Log[] =
    await diaContract.queryFilter(
      "Transfer",
      currentBlockNumber - 10,
      currentBlockNumber
    );

  for (const event of transferEvents) {
    console.log('\n------------------------------------------------');
    console.log('Block Number:', event.blockNumber);
    console.log('Transaction Hash:', event.transactionHash);
    console.log('------------------------------------------------');
    console.log(event.toJSON());
    console.log('------------------------------------------------\n');
  }
};

main();
