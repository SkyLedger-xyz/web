import classNames from 'classnames';

import Option from './subcomponents/Option';

interface SelectInterface {
  children?: any;
  validate?: any;
  onBlur?: any;
  onChange?: any;
  required?: boolean;
  value?: any;
  name?: string;
  size?: 's' | 'm';
  status?: '' | 'disabled' | 'invalid';
}

const Select = ({
  name,
  size = 'm',
  value,
  required = false,
  status = '',
  children,
  onChange,
  onBlur,
}: SelectInterface) => {
  const selectClassNames = classNames(
    'w-full bg-white border-gray-200 text-primary-500 placeholder-gray-400 rounded-lg border focus:outline-none',
    {
      'focus:ring-transparent focus:border-zinc-200': status !== 'invalid',
      'border-pink-600 focus:border-pink-600 focus:ring-pink-600': status === 'invalid',

      'h-12': size === 'm',
      'text-sm h-10': size === 's',

      'opacity-50': status === 'disabled',
    }
  );

  return (
    <select
      id={name}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={value}
      className={selectClassNames}
      required={required}
      disabled={status === 'disabled'}
    >
      {children}
    </select>
  );
};

export default Object.assign(Select, { Option });
