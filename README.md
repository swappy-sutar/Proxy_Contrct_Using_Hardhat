## proxy contract deploying on testNet using hardhat

```# SETUP commands
    npm init --y
    npm install --save-dev hardhat
    npx init hardhat
    npx hardhat run --network sepolia scripts/deploy_BoxV1.js
    npx hardhat verify --network sepolia <proxy_Contract>

```

```# Dependencies
    npm install --save-dev @openzeppelin/hardhat-upgrades
    npm install dotenv
```

```# Adresses
check on "https://sepolia.etherscan.io/"

 Proxy contract address: 0x42d84389E37eC37f60782992278f87fd5Bf2e607
 Implementation contract address: 0xcE045e054a5E6377545e595F755a4FEC74FaC494
 Admin contract address: 0xB334905AF318F4533a3cE7C79e9E1be54A21cbEA

Upgraded Implementation contract address: 0x6f97938e981615e75EcEA7a273aa321ECba82031

```
