import classNames from 'classnames';

import Spinner from '@/modules/common/components/Spinner';

const mapThemeBorder = {
  solid: '',
  ghost: 'border-2',
  bare: '',
};

const mapThemeColor = {
  solid: {
    default: `text-white bg-primary-500 disabled:bg-gray-200 disabled:text-gray-400 font-medium
    hover:bg-primary-700 active:bg-primary-700
    focus:bg-primary-700 focus:shadow-outline-primary`,
    red: `text-white bg-red-600 disabled:bg-red-400 font-medium
    hover:bg-red-600 active:bg-red-600
    focus:bg-red-600 focus:shadow-outline-danger`,
    white:
      'bg-white font-medium text-primary-700 focus:bg-gray-200 focus:shadow-outline disabled:bg-gray-200 hover:bg-primary-50 disabled:text-gray-400 font-medium',
  },
  ghost: {
    default: `font-medium text-primary-500 border-primary-500 disabled:text-gray-600 disabled:border-gray-300
    hover:bg-primary-500 hover:text-white`,
    red: `font-medium text-red-600 border-red-500
    hover:text-white hover:bg-red-600
    focus:shadow-outline-danger`,
    white: 'font-medium text-white border-white hover:text-primary-500 hover:bg-white focus:shadow-outline',
  },
  bare: {
    default: 'font-medium text-gray-950 hover:text-primary-500',
    red: 'font-medium text-red-600',
    white: 'font-medium text-white',
  },
};

const mapBaseSize = {
  s: {
    full: 'h-9 md:h-10 px-4 text-sm w-full rounded-md',
    auto: 'h-9 md:h-10 px-4 text-sm rounded-md',
    square: 'h-9 w-9 md:h-10 md:w-10 text-sm rounded-md md:rounded-lg shrink-0',
    round: 'h-9 w-9 md:h-10 md:w-10 text-sm rounded-full shrink-0',
    none: 'h-9 md:h-10 text-sm',
  },
  m: {
    full: 'h-12 px-4 w-full rounded-lg',
    auto: 'h-12 px-6 rounded-lg',
    square: 'h-12 w-12 rounded-lg shrink-0',
    round: 'h-12 w-12 rounded-full shrink-0',
    none: 'h-12',
  },
  l: {
    full: 'h-16 px-8 text-lg w-full rounded-',
    auto: 'h-16 px-8 text-lg rounded-lg',
    square: 'h-16 w-16 text-lg rounded-lg shrink-0',
    round: 'h-16 w-16 text-lg rounded-full shrink-0',
    none: 'h-16 text-lg',
  },
};

const mapAlign = {
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
};

const getButtonChildren = (children) => {
  let buttonChildren = children;
  if (!Array.isArray(buttonChildren)) {
    buttonChildren = [buttonChildren];
  }

  buttonChildren = buttonChildren.map((child) => {
    if (child?.type?.role === 'Button.Icon') {
      return <div key="icon">{child}</div>;
    }

    if (typeof child === 'string' || child instanceof String) {
      return <div key={`label-${child}`}>{child}</div>;
    }

    return null;
  });

  return buttonChildren;
};

const ButtonBase = ({ theme, size, color, status, width, align, children, onClick, type, forwardRef }) => {
  const buttonChildren = getButtonChildren(children);

  const className = classNames(
    'flex relative items-center gap-2 whitespace-no-wrap disabled:cursor-not-allowed focus:outline-none',
    mapThemeBorder[theme],
    mapThemeColor[theme][color],
    mapBaseSize[size][width],
    mapAlign[align]
  );

  return (
    <button
      /* eslint-disable react/button-has-type */
      type={type}
      onClick={onClick}
      disabled={status === 'disabled' || status === 'busy'}
      className={className}
      ref={forwardRef}
    >
      {status === 'busy' ? (
        <div className="relative flex items-center space-x-2">
          <div className="absolute flex w-full items-center justify-center">
            <Spinner size="s" />
          </div>
          <div className="flex flex-row opacity-30">{buttonChildren.filter((buttonChild) => buttonChild)}</div>
        </div>
      ) : (
        <div className="flex items-center gap-2 whitespace-pre">
          {buttonChildren.filter((buttonChild) => buttonChild)}
        </div>
      )}
    </button>
  );
};

export default ButtonBase;
