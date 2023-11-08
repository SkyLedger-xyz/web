import { ExclamationCircleIcon, CheckCircleIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

import { Text } from '../Elements';

interface NoteInterface {
  children: any;
  color?: 'blue' | 'red' | 'green' | 'yellow' | 'black';
  type?: 'none' | 'error' | 'info' | 'alert' | 'success';
  align?: 'left' | 'center' | 'right';
  theme?: 'bare' | 'solid';
  size?: 'xs' | 's' | 'm';
}

const Note = ({
  children,
  color = 'black',
  type = 'none',
  align = 'left',
  size = 'm',
  theme = 'bare',
}: NoteInterface) => {
  const containerClassNames = classNames({
    'flex items-center': true,
    'justify-center text-center': align === 'center',
    'justify-start': align === 'left',
    'justify-end': align === 'right',

    'text-blue-500': color === 'blue',
    'text-red-500': color === 'red',
    'text-green-600': color === 'green',
    'text-yellow-700': color === 'yellow',
    'text-gray-900': color === 'black',

    'rounded-lg p-3': theme === 'solid' && size === 'm',
    'rounded-md p-2': theme === 'solid' && (size === 's' || size === 'xs'),

    'bg-blue-50': color === 'blue' && theme === 'solid',
    'bg-red-50': color === 'red' && theme === 'solid',
    'bg-green-50': color === 'green' && theme === 'solid',
    'bg-yellow-50': color === 'yellow' && theme === 'solid',
    'bg-gray-100': color === 'black' && theme === 'solid',
  });

  return (
    <div className={containerClassNames} role="alert">
      <div className="flex space-x-4">
        {type !== 'none' && (
          <div>
            {type === 'alert' && <ExclamationCircleIcon className="w-5" />}
            {type === 'info' && <InformationCircleIcon className="w-5" />}
            {type === 'success' && <CheckCircleIcon className="w-5" />}
            {type === 'error' && <XMarkIcon className="w-5" />}
          </div>
        )}
        <div>
          <Text color="default" fontFamily="mono" size={size} fontWeight="semibold" tag="div" textAlign={align}>
            <span>{children}</span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Note;
