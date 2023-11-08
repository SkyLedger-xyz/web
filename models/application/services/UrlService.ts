import slugify from 'slugify';

import { ProjectInterface } from '@/models/projects/interfaces/ProjectInterface';
import { ReleaseInterface } from '@/models/releases/interfaces/ReleaseInterface';
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

export function getUrlProjectInvite(project: ProjectInterface, code: string): string {
  return `/${project.slug}/join/${code}`;
}

export function getUrlTerms(): string {
  return '/terms';
}

export function getUrlPrivacy(): string {
  return '/privacy';
}

export function getUnsubscribeUrl(token: string): string {
  return `${getRootUrl()}/unsubscribe?token=${token}`;
}

export function getUrlProject(
  project: ProjectInterface,
  route: '' | 'updates' | 'settings' | 'contributors' | 'testers' = ''
): string {
  let url = `/${project.slug}`;

  if (route) {
    url += `/${route}`;
  }

  return url;
}

export function getUrlUserSettings(): string {
  return `/settings`;
}

export function getUrlCreateUpdate(project: ProjectInterface): string {
  return `${getUrlProject(project)}/updates/new`;
}

export function getUrlUpdate(project: ProjectInterface, release: ReleaseInterface): string {
  return `${getUrlProject(project)}/updates/${release.slug}`;
}

export function getUrlManageUpdate(project: ProjectInterface, release: ReleaseInterface): string {
  return `${getUrlUpdate(project, release)}/manage`;
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
