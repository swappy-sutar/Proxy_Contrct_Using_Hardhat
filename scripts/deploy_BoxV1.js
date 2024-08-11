const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");

  const proxyContract = await upgrades.deployProxy(Box, [88], {
    initializer: "setVal",
  });

  await proxyContract.waitForDeployment();

  const proxyContractAddress = await proxyContract.getAddress();
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyContractAddress
  );
  const adminAddress = await upgrades.erc1967.getAdminAddress(
    proxyContractAddress
  );

  console.log("Proxy contract address:", proxyContractAddress);
  console.log("Implementation contract address:", implementationAddress);
  console.log("Admin contract address:", adminAddress);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

// Proxy contract address: 0x42d84389E37eC37f60782992278f87fd5Bf2e607
// Implementation contract address: 0xcE045e054a5E6377545e595F755a4FEC74FaC494
// Admin contract address: 0xB334905AF318F4533a3cE7C79e9E1be54A21cbEA
