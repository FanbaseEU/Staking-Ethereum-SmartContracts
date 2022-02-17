

## Setup

Both **Node.js** and **npm** are required for package management and testing. See instructions
for installation [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

This project uses [OpenZeppelin](https://docs.openzeppelin.com/)
and [Truffle](https://www.trufflesuite.com/docs/truffle)
for development, testing, and deployment.

To install these packages along with other dependencies:
```
npm install
```


## Deploy

Copy `.env.template` to `.env` and `TREASURY_ADDRESS` variables.


To deploy the factory contract to mainnet
```
npx truffle migrate --network mainnet --f 2 --to 2
```

Once the factory is deployed, define the `FACTORY_ADDRESS` variable in your `.env` file.


To deploy the ERC20 staking module factory to mainnet
```
npx truffle migrate --network mainnet --f 3 --to 3
```


To deploy the ERC20 competitive reward module factory to mainnet
```
npx truffle migrate --network mainnet --f 4 --to 4
```

Follow the remaining migration steps to deploy all contracts and libraries.
