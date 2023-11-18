'use client';

import { coinbaseWallet, metamaskWallet, ThirdwebProvider } from '@thirdweb-dev/react';

const ThirdwebProviderWrapper = ({ children }) => (
  <ThirdwebProvider
    activeChain="base-goerli"
    clientId={process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID}
    supportedWallets={[metamaskWallet(), coinbaseWallet({ recommended: true })]}
  >
    {children}
  </ThirdwebProvider>
);

export default ThirdwebProviderWrapper;
