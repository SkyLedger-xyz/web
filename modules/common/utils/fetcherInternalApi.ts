import { executeGetQuery } from '@/models/application/services/InternalApiService';

export const fetchFromInternalApi = (url: string) => executeGetQuery(url, true);
