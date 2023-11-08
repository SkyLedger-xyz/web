import { getRootUrl } from '@/models/application/services/UrlService';
import { ApiMethods, createApi } from '@/modules/application/utils/api';

export const internalApi = (): ApiMethods => {
  const baseUrl = `${getRootUrl()}/api`;
  return createApi(baseUrl);
};
