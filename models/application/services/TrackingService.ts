import mixpanel from 'mixpanel-browser';

import { isDevEnv } from '@/modules/application/constants/applicationConstants';

export async function trackEvent(eventName: string, data = {}): Promise<any> {
  if (isDevEnv) {
    return;
  }

  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
    api_host: `https://backdropbeta.com/mp`,
  });

  mixpanel.track(eventName, data);
}
