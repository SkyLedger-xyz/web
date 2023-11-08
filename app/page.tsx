import { Metadata } from 'next';

import { getRootUrl } from '@/models/application/services/UrlService';
import { ContentLayoutTopDown, Heading, Stack } from '@/modules/application/components/DesignSystem';
import { Footer } from '@/modules/application/components/Footer';
import { APPLICATION_DESCRIPTION, APPLICATION_NAME } from '@/modules/application/constants/applicationConstants';
import SkyledgerLogo from '@/modules/common/components/SkyledgerLogo';

export const metadata: Metadata = {
  metadataBase: new URL(getRootUrl()),
  title: APPLICATION_NAME,
  description: APPLICATION_DESCRIPTION,
};

export default async function IndexPage() {
  return (
    <div className="bg-gradient-to-b from-primary-500 to-primary-400">
      <ContentLayoutTopDown>
        <ContentLayoutTopDown.Content>
          <div className="m-auto my-12 max-w-4xl">
            <Stack spacing="xl" alignItems="center">
              <Stack.Item>
                <SkyledgerLogo />
              </Stack.Item>
              <Stack.Item>
                <Heading level={1} size="xxxl" color="white" textAlign="center">
                  Hi, Early Testers!
                </Heading>
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
