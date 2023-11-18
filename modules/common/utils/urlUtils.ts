export const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

export const sanitizeUrl = (url) => {
  try {
    const sanitizedUrl = new URL(url);

    const VALID_PROTOCOLS = ['http:', 'https:'];

    if (!VALID_PROTOCOLS.includes(sanitizedUrl.protocol)) {
      return ''; // it's an invalid URL!
    }

    return sanitizedUrl.toString();
  } catch (error) {
    // append https to url
    if (!url.includes('http')) {
      return `https://${url}`;
    }
  }
};
