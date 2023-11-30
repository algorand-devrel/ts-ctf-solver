# CTF Challenge

## Documentation

For TEALScript documentation, go to https://tealscript.algo.xyz

## Usage

### Algokit Bootstrap

1. Create a new TestNet account using a 3-character prefix to help you identify your account on the leaderboard:
   `algokit task vanity-address <PREFIX>` where <PREFIX> is your 3-character identifier
   The response will contain your mnemonic
2. Fund your accoount using the TestNet Dispenser:
   `algokit dispenser login --ci`
3. Within the response, press Command + Click the URL link to open the Dispenser validation website
4. Follow the prompts, enter your email, check your spam folder for the verification code, complete the verification
5. You may close the Dispenser website after verification, which will return you to the CLI
6. The response will contain the ALGOKIT_DISPENSER_ACCESS_TOKEN
7. Bootstrap the project
   `algokit bootstrap all`
8. When prompted in the CLI, include the fields from #1 & #6
9. Run `npm install cross-fetch`. This is a temporary fix for a bug.
10. Register your account on the Google Form 

### Run Level 0 Challenge
1. `npx tsx src/level0.ts`
2. Confirm your account is now on the [Leaderboard]()

### Build Contract

`npm run build` will compile the contract to TEAL and generate an ABI and appspec JSON in [./contracts/artifacts](./contracts/artifacts/) and a algokit TypeScript client in [./contracts/clients](./contracts/clients/).

`npm run compile-contract` or `npm run generate-client` can be used to compile the contract or generate the contract seperately.

### Run Tests

`npm run test` will execute the tests defined in [./\_\_test\_\_](./__test__) 

### Lint

`npm run lint` will lint the contracts and tests with ESLint.
