# Foundry MoodNft on Scaffold-ETH 2

[LIVE VERSION HERE](https://se2-moodnft.vercel.app/)

This project is a frontend to interact with MoodNft, using an adapted version of the project taught in [Patrick Collins foundry course](https://www.youtube.com/watch?t=27656&v=sas02qSFZ74&feature=youtu.be)

Used [Scaffold-ETH 2](https://www.scaffoldeth.io/) from `npx create-eth@latest` command with the Foundry option to start this repo

## Reference repos

[Development notes](https://lulox.notion.site/se2-moodnft-b81804448c6c4434aec8783491c0f970?pvs=4)

Smart contracts: [foundry-nft-f23](https://github.com/Cyfrin/foundry-nft-f23)
Frontend: [se-2-challenges > challenge-0-simple-nft](https://github.com/scaffold-eth/se-2-challenges/tree/challenge-0-simple-nft)

## Quickstart

1. Clone this repo & install dependencies

```
git clone https://github.com/luloxi/se2-moodnft
cd se2-moodnft
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/foundry/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/foundry/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `MoodNft.sol` in `packages/foundry/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/foundry/deploy`

# SE2-Documentation

Here's the [original SE2 repo documentation](./SE2-DOCUMENTATION.md)
