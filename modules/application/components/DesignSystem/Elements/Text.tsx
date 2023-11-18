import { forwardRef } from 'react';

import classNames from 'classnames';

interface Text {
  children: any;
  spacing?: 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';
  size?: 'inherit' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  tag?: 'span' | 'div' | 'p';
  fontFamily?: 'sans' | 'mono';
  textAlign?: 'left' | 'center' | 'right';
  color?:
    | 'inherit'
    | 'default'
    | 'white'
    | 'primary-100'
    | 'primary-200'
    | 'primary-300'
    | 'primary-400'
    | 'primary-500'
    | 'primary-600'
    | 'primary-700'
    | 'primary-800'
    | 'primary-900'
    | 'primary-950'
    | 'red-500'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900'
    | 'blue-500';
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  lineClamp?: 'none' | 1 | 2 | 3 | 4;
}

const Text = forwardRef<any, Text>(
  (
    {
      children,
      spacing = 'none',
      size = 'm',
      tag: Tag = 'p',
      fontWeight = 'normal',
      color = 'white',
      textAlign = 'left',
      fontFamily = 'sans',
      lineClamp = 'none',
      transform = 'none',
    }: Text,
    ref
  ) => {
    const classNamesComputed = classNames({
      'font-mono': fontFamily === 'mono',
      'font-sans': fontFamily === 'sans',

      'text-left': textAlign === 'left',
      'text-center': textAlign === 'center',
      'text-right': textAlign === 'right',

      'mb-1': spacing === 'xs',
      'mb-2': spacing === 's',
      'mb-4': spacing === 'm',
      'mb-6': spacing === 'l',
      'mb-8': spacing === 'xl',

      'text-xxs tracking-wide': size === 'xxs',
      'text-xs': size === 'xs',
      'text-sm': size === 's',
      'text-base': size === 'm',
      'text-lg': size === 'l',
      'text-xl tracking-tight': size === 'xl',
      'text-3xl leading-tight tracking-tighter': size === 'xxl',
      'text-5xl leading-tight tracking-tighter': size === 'xxxl',
      'tracking-wide': (size === 's' || size === 'xs') && fontFamily === 'sans',

      'font-light': fontWeight === 'light',
      'font-normal': fontWeight === 'normal',
      'font-medium': fontWeight === 'medium',
      'font-semibold': fontWeight === 'semibold',
      'font-bold': fontWeight === 'bold',

      'text-primary-100': color === 'primary-100',
      'text-primary-200': color === 'primary-200',
      'text-primary-300': color === 'primary-300',
      'text-primary-400': color === 'primary-400',
      'text-primary-500': color === 'primary-500',
      'text-primary-600': color === 'primary-600',
      'text-primary-700': color === 'primary-700',
      'text-primary-800': color === 'primary-800',
      'text-primary-900': color === 'primary-900',
      'text-primary-950': color === 'primary-950',
      'text-blue-500': color === 'blue-500',
      'text-red-500': color === 'red-500',
      'text-gray-400': color === 'gray-400',
      'text-gray-500': color === 'gray-500',
      'text-gray-600': color === 'gray-600',
      'text-gray-700': color === 'gray-700',
      'text-gray-800': color === 'gray-800',
      'text-gray-900': color === 'gray-900',
      'text-gray-950': color === 'default',
      'text-white': color === 'white',

      'line-clamp-none': lineClamp === 'none',
      'line-clamp-1': lineClamp === 1,
      'line-clamp-2': lineClamp === 2,
      'line-clamp-3': lineClamp === 3,
      'line-clamp-4': lineClamp === 4,

      uppercase: transform === 'uppercase',
      capitalize: transform === 'capitalize',
      lowercase: transform === 'lowercase',
    });

    return (
      <Tag className={classNamesComputed} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default Text;
