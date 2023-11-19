import slugify from 'slugify';

import { isDevEnv, NODE_ENVIRONMENT_DEVELOPMENT } from '@/modules/application/constants/applicationConstants';

export function getRootUrl(): string {
  if (isDevEnv) {
    if (process.env.NODE_ENV === NODE_ENVIRONMENT_DEVELOPMENT) {
      return `http://localhost:3000`;
    }

    return `https://dev.backdropbeta.com`;
  }

  return `https://backdropbeta.com`;
}

export function getUrlIndex(): string {
  return `/`;
}

export function getUrlLogin(): string {
  return `/login`;
}

export function getUrlVerifyEmail(email: string): string {
  return `/verify/email?email=${email}`;
}

export function getUrlSkyLedger(address: string): string {
  return `/skyledger/${address}`;
}

export function getUrlBaseScan(address: string): string {
  return `https://goerli.basescan.org/address/${address}`;
}

export function getUrlSignUp(): string {
  return `/signup`;
}

export function getUrlResetPassword(): string {
  return `/reset-password`;
}

export function getUrlHome(): string {
  return '/home';
}

export function getUrlProjectCreate(): string {
  return '/projects/create';
}

export function getUrlTerms(): string {
  return '/terms';
}

export function getUrlPrivacy(): string {
  return '/privacy';
}

export function getUrlXUsername(xUsername: string): string {
  return `https://x.com/${xUsername}`;
}

export function getUrlGithubUsername(githubUsername: string): string {
  return `https://github.com/${githubUsername}`;
}

export function getIdFromSlug(slug: string): string {
  if (!slug) {
    return null;
  }

  const split = slug.split('-');

  return split[split.length - 1];
}

export const createUrl = (url, params = []): string => {
  if (params && params.length > 0) {
    return `${url}?${params.join('&')}`;
  }

  return url;
};

export const createSlug = (text: string, id: string): string => {
  if (!text) {
    return id;
  }

  return `${slugify(text.slice(0, 25))}-${id}`;
};
