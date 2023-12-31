'use client';

import { BaseGoerli } from '@thirdweb-dev/chains';
import { ConnectWallet, useAddress, useChain } from '@thirdweb-dev/react';

import { Text } from '@/modules/application/components/DesignSystem';

import SkyLedgerDeploy from './SkyLedgerDeploy';
import SkyLedgerFind from './SkyLedgerFind';

const SkyLedgerHome = () => {
  const chain = useChain();
  const address = useAddress();

  if (!address) {
    return <ConnectWallet switchToActiveChain={true} modalSize="compact" />;
  }

  if (chain.chainId !== BaseGoerli.chainId) {
    return (
      <Text color="red-500" size="xl" fontFamily="mono" fontWeight="bold">
        Please switch to the Base Görli network.
      </Text>
    );
  }

  return (
    <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
      <div>
        <SkyLedgerDeploy />
      </div>
      <div>
        <SkyLedgerFind />
      </div>
    </div>
  );
};

export default SkyLedgerHome;
