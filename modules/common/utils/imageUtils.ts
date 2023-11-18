import { captureMessage } from '@sentry/core';

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
