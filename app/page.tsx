import { Metadata } from 'next';

import { getRootUrl } from '@/models/application/services/UrlService';
import { ContentLayoutTopDown, Heading, Text, Stack } from '@/modules/application/components/DesignSystem';
import { Footer } from '@/modules/application/components/Footer';
import { HeaderTopDown } from '@/modules/application/components/Header';
import { APPLICATION_DESCRIPTION, APPLICATION_NAME } from '@/modules/application/constants/applicationConstants';
import { SkyLedgerHome } from '@/modules/common/components/SkyLedger';

export const metadata: Metadata = {
  metadataBase: new URL(getRootUrl()),
  title: APPLICATION_NAME,
  description: APPLICATION_DESCRIPTION,
};

export default async function IndexPage() {
  return (
    <div className="bg-gradient-to-b from-primary-600 to-primary-300">
      <ContentLayoutTopDown>
        <ContentLayoutTopDown.Header>
          <HeaderTopDown />
        </ContentLayoutTopDown.Header>
        <ContentLayoutTopDown.Content>
          <div className="m-auto my-5">
            <Stack spacing="xxl" alignItems="center">
              <Stack.Item>
                <Heading size="xxxl">The Blockchain Pilot Logbook</Heading>
              </Stack.Item>
              <Stack.Item>
                <SkyLedgerHome />
              </Stack.Item>
              <Stack.Item>
                <div className="max-w-3xl">
                  <Text size="xxl" spacing="s" textAlign="center">
                    Air travel is essential for global connectivity, daily life, and reuniting families. Despite being
                    one of the safest transport methods, it still sees around 3,000 accidents yearly, mainly due to
                    human error.
                  </Text>
                </div>
              </Stack.Item>
              <Stack.Item>
                <div className="max-w-4xl">
                  <Heading size="xxl" textAlign="center" spacing="m">
                    The Problem
                  </Heading>
                  <Text size="xxl" textAlign="center">
                    Flight logs can get lost, damaged or corrupt
                  </Text>
                  <Text size="xxl" textAlign="center">
                    Pilots may lack experience they claim — flight log records can be easily forged.
                  </Text>
                  <Text size="xxl" textAlign="center">
                    Aircraft operators may underreport the flight hours
                  </Text>
                  <Text size="xxl" textAlign="center">
                    Lack of a common solution that would prevent any modification or distortion of log data.
                  </Text>
                </div>
              </Stack.Item>
              <Stack.Item>
                <div className="max-w-4xl">
                  <Heading size="xxl" textAlign="center" spacing="m">
                    The Solution
                  </Heading>
                  <Text size="xxl" textAlign="center">
                    Adopting blockchain technology can significantly improve aviation safety by securing critical log
                    data against loss, tampering, or falsification, thus reducing the risk of major accidents.
                  </Text>
                </div>
              </Stack.Item>
            </Stack>
          </div>
        </ContentLayoutTopDown.Content>
        <ContentLayoutTopDown.Footer>
          <Footer />
        </ContentLayoutTopDown.Footer>
      </ContentLayoutTopDown>
    </div>
  );
}
