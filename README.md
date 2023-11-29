# CTF Challenge

## Documentation

For TEALScript documentation, go to https://tealscript.algo.xyz

## Usage

### Algokit Bootstrap

1. Create a new TestNet account using a 3-character prefix to help you identify your account on the leaderboard:
   `algokit task vanity-address <PREFIX>` where <PREFIX> is your 3-character identifier
   The response will contain your mnemonic
3. Fund your accoount using the TestNet Dispenser:
   `algokit dispenser login --ci`
4. Within the response, press Command + Click the URL link to open the Dispenser validation website
5. Follow the prompts, enter your email, check your spam folder for the verification code, complete the verification
6. You may close the Dispenser website after verification, which will return you to the CLI
7. The response will contain the ALGOKIT_DISPENSER_ACCESS_TOKEN
8. Edit the `.env.template` file to include the fields from #1 & #7
9. Bootstrap the project
   `algokit bootstrap all`
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
