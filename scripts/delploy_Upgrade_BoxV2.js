const { ethers, upgrades } = require("hardhat");

const Proxy_Address = "0x42d84389E37eC37f60782992278f87fd5Bf2e607";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");

  const proxyContract = await upgrades.upgradeProxy(Proxy_Address, BoxV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    Proxy_Address
  );

  console.log("Box upgraded to v2");
  console.log(
    "Upgraded Implementation contract address:",
    implementationAddress
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

//Upgraded Implementation contract address: 0x6f97938e981615e75EcEA7a273aa321ECba82031
