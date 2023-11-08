import { createApi } from '@/modules/application/utils/api';

const api = createApi('');

export async function executeGetQuery<T>(endpoint: string, throwErrors = false): Promise<T | null> {
  try {
    const result = await api.get(endpoint);
    return await result?.json();
  } catch (error) {
    if (throwErrors) {
      throw error;
    } else {
      return null;
    }
  }
}

export async function executePostQuery<T>(
  endpoint: string,
  data: Record<string, unknown>,
  throwErrors = false
): Promise<T | null> {
  return doPostQuery(endpoint, data, throwErrors);
}

async function doPostQuery<T>(endpoint: string, data: Record<string, unknown>, throwErrors = false): Promise<T | null> {
  try {
    const result = await api.post(endpoint, data);

    return result?.json();
  } catch (error) {
    if (throwErrors) {
      throw error;
    } else {
      return null;
    }
  }
}
