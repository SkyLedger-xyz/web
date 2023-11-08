'use client';

import { useState, forwardRef } from 'react';

import classNames from 'classnames';

interface Input {
  name?: string;
  type?: string;
  size?: 's' | 'm' | 'l';
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  status?: '' | 'disabled' | 'invalid';
  theme?: 'default' | 'bare';
  maxLength?: number | undefined;
  showCount?: boolean;
  readOnly?: boolean;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
}

const Input = forwardRef<HTMLInputElement, Input>(
  (
    {
      defaultValue,
      name,
      type = 'text',
      size = 'm',
      placeholder,
      value,
      required = false,
      status = '',
      maxLength = undefined,
      showCount = false,
      onChange,
      onBlur,
      onFocus,
      theme = 'default',
      readOnly = false,
    }: Input,
    ref
  ) => {
    const inputClassNames = classNames(
      'w-full text-gray-900 bg-white placeholder-gray-300 rounded-lg focus:outline-none font-normal',
      {
        'border-2 border-gray-200': theme === 'default',
        'border-0 pl-0 focus:ring-transparent': theme === 'bare',
        'focus:ring-transparent focus:border-gray-800': status !== 'invalid' && theme === 'default',
        'border-pink-600 focus:border-pink-600 focus:ring-pink-600': status === 'invalid' && theme === 'default',
        'text-xl leading-tight tracking-tight': size === 'l',

        // padding
        'px-3': size === 's',
        'px-4': size === 'm',
        'px-6': size === 'l',
        'pr-12': showCount,

        // height
        'h-12': size === 'm',
        'text-sm h-10': size === 's',

        // status
        'opacity-50': status === 'disabled',
      }
    );

    const [inputValue, setInputValue] = useState(value);

    return (
      <div className="relative w-full">
        <input
          defaultValue={defaultValue}
          readOnly={readOnly}
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          className={inputClassNames}
          required={required}
          disabled={status === 'disabled'}
          maxLength={maxLength}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={(e) => {
            onChange && onChange(e);
            setInputValue(e.target.value);
          }}
          value={value}
        />
        {showCount && maxLength && (
          <div
            className={`absolute right-0 mr-3 flex h-full items-center justify-center text-sm font-semibold leading-none ${
              inputValue && inputValue.length >= maxLength ? 'font-semibold text-red-600' : 'text-gray-300'
            }`}
          >
            {maxLength - (inputValue ? inputValue.length : 0)}
          </div>
        )}
      </div>
    );
  }
);

export default Input;
