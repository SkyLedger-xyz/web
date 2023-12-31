import { forwardRef } from 'react';

import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

interface Hyperlink {
  children: any;
  size?: 'inherit' | 'xs' | 's' | 'm' | 'l';
  theme?: 'bare' | 'decorated' | 'silent';
  color?: 'default' | 'gray' | 'inherit';
  href?: string;
  target?: string;
  onClick?: () => any;
}

const Hyperlink = forwardRef<HTMLAnchorElement, any>(
  ({ children, color = 'inherit', theme = 'bare', size = 'm', ...others }: Hyperlink, ref) => {
    const linkClassnames = classNames('cursor-pointer inline-flex', {
      'border-b border-gray-200': theme === 'decorated',
      'text-xs font-medium': size === 'xs',
      'text-sm font-medium': size === 's',
      'text-base font-medium': size === 'm',
      'text-lg font-semibold': size === 'l',
      'text-gray-400 hover:text-gray-700': color === 'gray',
      'text-primary-500 hover:text-primary-700': color === 'default',
    });

    let Tag: any = 'a';
    let type: any = null;
    if (!others.href && others.onClick) {
      Tag = 'button';
      type = 'button';
    }

    return (
      <Tag
        className={linkClassnames}
        href={others.href}
        onClick={others.onClick}
        ref={ref}
        type={type}
        target={others.target}
      >
        {children}
        {others.target === '_blank' && theme === 'decorated' && <ArrowUpRightIcon className="w-4 text-gray-400" />}
      </Tag>
    );
  }
);

export default Hyperlink;
