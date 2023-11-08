import classNames from 'classnames';

interface CheckboxInterface {
  children: any;
  name: string;
  size?: 'm' | 'l';
  status?: 'disabled' | 'invalid' | '';
  onChange?: (any) => any;
  onBlur?: (any) => any;
  defaultChecked?: boolean;
}

const Checkbox = ({
  children,
  name,
  size = 'm',
  onChange,
  onBlur,
  status = '',
  defaultChecked = false,
}: CheckboxInterface) => {
  const checkboxClassNames = classNames(
    'flex shrink-0 justify-center bg-transparent items-center focus:outline-none focus:ring-transparent border-2 border-gray-200 focus:border-zinc-200 focus:ring-offset-0 focus:ring-0 cursor-pointer',
    {
      'w-5 h-5 rounded-md': size === 'm',
      'w-6 h-6 rounded-md': size === 'l',
    }
  );

  return (
    <label htmlFor={name} className="flex cursor-pointer items-center">
      <div className="relative mr-2">
        <input
          type="checkbox"
          name={name}
          id={name}
          className={checkboxClassNames}
          onChange={onChange}
          onBlur={onBlur}
          defaultChecked={defaultChecked}
          disabled={status === 'disabled'}
        />
      </div>
      {children}
    </label>
  );
};

export default Checkbox;
