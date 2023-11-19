import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getRootUrl, getUrlBaseScan } from '@/models/application/services/UrlService';
import { ContentLayoutTopDown, Text } from '@/modules/application/components/DesignSystem';
import { Footer } from '@/modules/application/components/Footer';
import { HeaderTopDown } from '@/modules/application/components/Header';
import { APPLICATION_DESCRIPTION, APPLICATION_NAME } from '@/modules/application/constants/applicationConstants';

export const metadata: Metadata = {
  metadataBase: new URL(getRootUrl()),
  title: APPLICATION_NAME,
  description: APPLICATION_DESCRIPTION,
};

export default async function SkyLedgerPage({ params }) {
  if (!params.address) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-primary-600 to-primary-300">
      <ContentLayoutTopDown>
        <ContentLayoutTopDown.Header>
          <HeaderTopDown />
        </ContentLayoutTopDown.Header>
        <ContentLayoutTopDown.Content>
          <div className="m-auto my-5">
            <Text>{getUrlBaseScan(params.address)}</Text>
          </div>
        </ContentLayoutTopDown.Content>
        <ContentLayoutTopDown.Footer>
          <Footer />
        </ContentLayoutTopDown.Footer>
      </ContentLayoutTopDown>
    </div>
  );
}
