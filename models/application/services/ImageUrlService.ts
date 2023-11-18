import { getRootUrl } from '@/models/application/services/UrlService';

export enum STORAGE_BUCKET_ENUM {
  AVATARS = 'avatars',
}

export function getPublicImageUrl(path: string, storageBucket: STORAGE_BUCKET_ENUM): string {
  return `${getRootUrl()}/images/${storageBucket}/${path}`;
}
