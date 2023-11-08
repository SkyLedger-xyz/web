import { captureMessage } from '@sentry/core';
import { captureException } from '@sentry/nextjs';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { nanoid } from 'nanoid';

import { getPublicImageUrl, STORAGE_BUCKET_ENUM } from '@/models/application/services/ImageUrlService';
import { notifyAboutError } from '@/modules/application/utils/notifyAboutError';

export const uploadImage = async (
  file: File,
  storageBucket: STORAGE_BUCKET_ENUM
): Promise<{ path: string; imageUrl: string }> => {
  const supabase = createClientComponentClient();
  const path = `${nanoid(4)}-${file.name}`;
  const { data, error } = await supabase.storage.from(storageBucket).upload(path, file, {
    cacheControl: '3600',
    upsert: true,
  });
  if (error) {
    notifyAboutError(error, true, 'Something went wrong uploading your image');
    return;
  }

  return {
    path: data.path,
    imageUrl: getPublicImageUrl(data.path, storageBucket),
  };
};

export const uploadImageByUrlToStorage = async (
  imageUrl: string,
  storageBucket: STORAGE_BUCKET_ENUM
): Promise<{ path: string; imageUrl: string }> => {
  if (!imageUrl) {
    return null;
  }

  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    if (!blob) {
      return null;
    }

    const fileExtension = getFileExtensionFromImageType(blob.type);
    if (!fileExtension) {
      return null;
    }

    const file = new File([blob], `${nanoid(8)}.${fileExtension}`);

    return await uploadImage(file, storageBucket);
  } catch (error) {
    captureException(error);
    return null;
  }
};

export const getFileExtensionFromImageType = (imageType: string): string => {
  switch (imageType) {
    case 'image/png':
      return 'png';
    case 'image/jpeg':
      return 'jpeg';
    case 'image/gif':
      return 'gif';
    case 'image/svg+xml':
      return 'svg';
    default:
      captureMessage(`Invalid image type: ${imageType}`);
      return null;
  }
};
