import { getUrlHome } from '@/models/application/services/UrlService';
import { Button, ContentLayoutTopDown, Text } from '@/modules/application/components/DesignSystem';
import { Footer } from '@/modules/application/components/Footer';
import { HeaderTopDown } from '@/modules/application/components/Header';

export default async function NotFoundPage() {
  return (
    <ContentLayoutTopDown>
      <ContentLayoutTopDown.Header>
        <HeaderTopDown />
      </ContentLayoutTopDown.Header>
      <ContentLayoutTopDown.Content>
        <div className="m-auto flex h-full flex-col items-center justify-center space-y-6">
          <Text size="xxxl" textAlign="center" fontWeight="bold">
            🤷‍♂️
          </Text>
          <Text size="xxl" textAlign="center" fontWeight="bold">
            Sorry, what?
          </Text>
          <Text size="m" textAlign="center" fontFamily="mono">
            We couldn't find the page you were looking for.
          </Text>
          <Button href={getUrlHome()}>Home</Button>
        </div>
      </ContentLayoutTopDown.Content>
      <ContentLayoutTopDown.Footer>
        <Footer />
      </ContentLayoutTopDown.Footer>
    </ContentLayoutTopDown>
  );
}
