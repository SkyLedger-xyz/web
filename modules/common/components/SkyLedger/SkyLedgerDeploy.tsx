'use client';

import { useState } from 'react';

import { BaseGoerli } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';

import { Button, Text } from '@/modules/application/components/DesignSystem';

const SkyLedgerDeploy = () => {
  const [smartContractAddress, setSmartContractAddress] = useState(null);
  const [isBusy, setIsBusy] = useState(false);

  const handleDeploy = async () => {
    setIsBusy(true);

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
      const address = await signer.getAddress();

      const sdk = ThirdwebSDK.fromSigner(signer, BaseGoerli.chainId, {
        clientId: process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID,
      });

      const txResult = await sdk.deployer.deployPublishedContract('strangequirks.eth', 'SkyLedger', [address]);
      setSmartContractAddress(txResult);
    } catch (error) {
      toast.error('Something went wrong. Please ensure your wallet is connected and you are on Base Görli.');
      setIsBusy(false);
    }

    setIsBusy(false);
  };

  return (
    <div className="flex max-w-lg flex-col items-center rounded-2xl bg-primary-400 p-10 shadow-2xl">
      <Text spacing="m" size="xl" fontWeight="bold">
        Deploy a SkyLedger for your wallet
      </Text>
      {smartContractAddress && (
        <Text spacing="m" size="l" fontWeight="bold">
          Contract Deployed!
        </Text>
      )}
      {smartContractAddress && (
        <Button href={`https://goerli.basescan.org/address/${smartContractAddress}`} target="_blank">
          View SkyLedger
        </Button>
      )}
      {!smartContractAddress && (
        <Button onClick={handleDeploy} status={isBusy ? 'busy' : ''}>
          Deploy SkyLedger
        </Button>
      )}
    </div>
  );
};

export default SkyLedgerDeploy;
