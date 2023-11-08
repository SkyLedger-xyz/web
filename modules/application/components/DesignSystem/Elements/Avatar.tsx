'use client';

import { useState, forwardRef } from 'react';

import { UserIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import Image from 'next/image';

import nextImageDomains from '@/modules/application/constants/nextImageDomains';

interface AvatarInterface {
  alt: string;
  src?: string;
  size: 'xs' | 's' | 'm' | 'l' | 'inherit';
  radius?: 'full' | 'half';
  priority?: boolean;
}

const Avatar = forwardRef<any, any>(
  ({ src, size = 'm', radius = 'full', priority = false, alt }: AvatarInterface, ref) => {
    const avatarClassNames = classNames({
      'relative flex items-center justify-center shrink-0 overflow-hidden': true,
      'transition ease-in-out': true,
      'bg-gray-200/50': true,

      'h-[100%] w-[100%]': size === 'inherit',
      'w-6 h-6': size === 'xs',
      'w-7 h-7': size === 's',
      'w-9 h-9': size === 'm',
      'w-12 h-12': size === 'l',

      'rounded-full': radius === 'full',
      'rounded-md': (size === 's' || size === 'm') && radius === 'half',
      'rounded-lg': size === 'l' && radius === 'half',
    });

    const getImageSize = (avatarSize) => {
      switch (avatarSize) {
        case 'xs':
          return 24;
        case 's':
          return 28;
        case 'l':
          return 48;
        case 'm':
        default:
          return 36;
      }
    };

    const [isError, setIsError] = useState(false);

    // To use Next.JS image optimizations, we need to ensure a safe domain.
    // This is checking for it as using a non-safe domain with <Image> breaks things!
    const isSafeDomain = src && typeof src === 'string' ? nextImageDomains.includes(new URL(src).hostname) : true;

    return (
      <div className={avatarClassNames} ref={ref}>
        {(!src || isError) && <UserIcon className="w-5 text-gray-400" />}

        {src && !isError && isSafeDomain && (
          <Image
            src={src}
            alt={alt}
            height={getImageSize(size)}
            width={getImageSize(size)}
            priority={priority}
            quality={80}
            onError={() => setIsError(true)}
          />
        )}

        {src && !isError && !isSafeDomain && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} />
        )}
      </div>
    );
  }
);

export default Avatar;
