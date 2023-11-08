import classNames from 'classnames';

interface ToggleInterface {
  children: any;
  name: string;
  value: boolean;
  size?: 's' | 'm' | 'l';
  status?: 'disabled' | 'invalid' | '';
  onChange?: (any) => any;
  onBlur?: (any) => any;
  defaultChecked?: boolean;
}

const Toggle = ({ name, size = 'm', defaultChecked, onChange, onBlur, status, value, children }: ToggleInterface) => {
  const toggleClassnames = classNames({
    'border-2 rounded-full flex items-center px-0.5 mr-2 transition-all ease-in-out': true,
    'bg-gray-50 border-gray-200 justify-start': value === false,
    'bg-primary-500 border-primary-600 justify-end': value === true,
    'w-7 h-5': size === 's',
    'w-10 h-6': size === 'm',
    'w-11 h-7': size === 'l',
    'opacity-50 cursor-not-allowed': status === 'disabled',
  });

  const toggleSwitchClassName = classNames({
    'rounded-full': true,
    'bg-white': value === true,
    'bg-gray-300': value === false,
    'w-3 h-3': size === 's',
    'w-4 h-4': size === 'm',
    'w-5 h-5': size === 'l',
  });
  return (
    <label htmlFor={name} className="relative flex cursor-pointer items-center">
      <input
        id={name}
        name={name}
        type="checkbox"
        disabled={status === 'disabled'}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onBlur={onBlur}
        className="hidden"
      />
      <div className={toggleClassnames}>
        <div className={toggleSwitchClassName} />
      </div>
      {children}
    </label>
  );
};

export default Toggle;
