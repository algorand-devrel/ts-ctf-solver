import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { ChallengeClient } from '../contracts/clients/ChallengeClient';

const fixture = algorandFixture();

let appClient: ChallengeClient;

describe('Challenge', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;

    appClient = new ChallengeClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod
    );

    await appClient.create.createApplication({});
  });

  test('setAddress', async () => {
    await appClient.setAddress({});
  });
});
