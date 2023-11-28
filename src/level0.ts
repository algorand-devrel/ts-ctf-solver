/* eslint-disable no-console */
/* eslint-disable func-names */
import * as algosdk from 'algosdk';
import * as algokit from '@algorandfoundation/algokit-utils';

import * as dotenv from 'dotenv';

(async function (network: 'localnet' | 'testnet' = 'localnet') {
  dotenv.config();

  const CURRENT_LEVEL = 476278983;

  let algodClient: algosdk.Algodv2;
  if (network === 'localnet') {
    algodClient = algokit.getAlgoClient(algokit.getDefaultLocalNetConfig('algod'));
  } else if (network === 'testnet') {
    algodClient = algokit.getAlgoClient(algokit.getAlgoNodeConfig('testnet', 'algod'));
  } else {
    throw new Error(`Unknown network: ${network}`);
  }

  const acct = await algokit.mnemonicAccountFromEnvironment({ name: 'SOLVER' }, algodClient);

  if (network === 'localnet') {
    await algokit.ensureFunded({ accountToFund: acct.addr, minSpendingBalance: algokit.algos(10) }, algodClient);
  } else if (network === 'testnet') {
    await algokit.ensureFunded(
      {
        accountToFund: acct.addr,
        minSpendingBalance: algokit.algos(0.5),
        minFundingIncrement: algokit.algos(0.1),
        fundingSource: algokit.getTestNetDispenserApiClient(),
      },
      algodClient
    );
  } else {
    throw new Error(`Unknown network: ${network}`);
  }

  const suggestedParams = await algodClient.getTransactionParams().do();

  // level 0 complete
  const appId = CURRENT_LEVEL;
  const appOptInTxn = algosdk.makeApplicationOptInTxnFromObject({
    from: acct.addr,
    appIndex: appId,
    suggestedParams,
  });
  const tx = appOptInTxn.signTxn(acct.sk);
  try {
    await algodClient.sendRawTransaction(tx).do();
    const resp = await algosdk.waitForConfirmation(algodClient, appOptInTxn.txID().toString(), 3);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
})('testnet');
