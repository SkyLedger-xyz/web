import { format } from 'date-fns';

import { Text } from '@/modules/application/components/DesignSystem';
import { APPLICATION_NAME } from '@/modules/application/constants/applicationConstants';

const Footer = () => (
  <div className="flex flex-col items-center justify-between py-5 md:flex-row">
    <Text size="s">{`© ${format(new Date(), 'yyyy')} ${APPLICATION_NAME}`}</Text>

    <div className="flex items-center gap-2">
      <Text size="s">
        <a href="https://github.com/SkyLedger-xyz" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </Text>
      <Text size="s">ꞏ</Text>
      <Text size="s">
        <a href="https://twitter.com/strange_quirks" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </Text>
    </div>
  </div>
);

export default Footer;
