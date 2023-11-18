'use client';

import { useState } from 'react';

import { BaseGoerli } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';

import { Button, Text, Card } from '@/modules/application/components/DesignSystem';

const SkyLedgerDeploy = () => {
  const [smartContractAddress, setSmartContractAddress] = useState(null);
  const [isBusy, setIsBusy] = useState(false);

  const handleDeploy = async () => {
    setIsBusy(true);

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

      const sdk = ThirdwebSDK.fromSigner(signer, BaseGoerli.chainId, {
        clientId: process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID,
      });

      const txResult = await sdk.deployer.deployPublishedContract('strangequirks.eth', 'SkyLedger', [
        '0x0b0632FaD37B28FC643EE3Ff80D8b833190aBdAa',
      ]);
      setSmartContractAddress(txResult);
    } catch (error) {
      toast.error('Something went wrong.');
      setIsBusy(false);
    }

    setIsBusy(false);
  };

  return (
    <div className="flex max-w-lg items-center">
      <Card theme="ghost">
        <Text spacing="m" size="l" fontWeight="bold">
          Deploy a SkyLedger for your wallet
        </Text>
        {smartContractAddress && (
          <Text spacing="m" size="l" fontWeight="bold">
            Contract Deployed!
          </Text>
        )}
        {smartContractAddress && (
          <Button href={`https://goerli.basescan.org/address/${smartContractAddress}`} target="_blank">
            View
          </Button>
        )}
        {!smartContractAddress && (
          <Button onClick={handleDeploy} status={isBusy ? 'busy' : ''}>
            Deploy SkyLedger
          </Button>
        )}
      </Card>
    </div>
  );
};

export default SkyLedgerDeploy;
