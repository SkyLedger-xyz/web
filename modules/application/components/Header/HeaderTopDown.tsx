'use client';

import { ConnectWallet } from '@thirdweb-dev/react';
import Link from 'next/link';

import { getUrlIndex } from '@/models/application/services/UrlService';
import { Text } from '@/modules/application/components/DesignSystem';
import SkyledgerLogo from '@/modules/common/components/SkyledgerLogo';

const HeaderTopDown = () => (
  <div className="flex items-center justify-between p-4 md:px-0">
    <div>
      <Link href={getUrlIndex()}>
        <div className="flex items-center gap-4">
          <div className="w-10">
            <SkyledgerLogo />
          </div>
          <Text size="xxl" fontWeight="bold">
            SkyLedger
          </Text>
        </div>
      </Link>
    </div>
    <div className="flex">
      <ConnectWallet switchToActiveChain={true} modalSize="compact" />
    </div>
  </div>
);

export default HeaderTopDown;
