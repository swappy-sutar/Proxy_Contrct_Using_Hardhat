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
