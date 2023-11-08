import { internalApi } from '@/modules/application/utils/internalApi';

export async function executeGetQuery<T>(endpoint: string, throwErrors = false): Promise<T | null> {
  try {
    const result = await internalApi().get(endpoint);
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
    const result = await internalApi().post(endpoint, data);
    return await result?.json();
  } catch (error) {
    if (throwErrors) {
      throw error;
    } else {
      return null;
    }
  }
}

export async function executeDeleteQuery<T>(endpoint: string, throwErrors = false): Promise<T | null> {
  try {
    const result = await internalApi().delete(endpoint);
    return await result?.json();
  } catch (error) {
    if (throwErrors) {
      throw error;
    } else {
      return null;
    }
  }
}
