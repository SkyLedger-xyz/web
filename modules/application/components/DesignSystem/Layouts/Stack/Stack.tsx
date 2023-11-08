import classNames from 'classnames';

import findChildrenByRole from '@/modules/application/utils/findChildrenByRole';

import Item from './subcomponents/Item';

interface Stack {
  children: any;
  spacing?: 'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  alignItems?: 'left' | 'center' | 'right';
  showDivider?: boolean;
}

const Stack = ({ children, spacing = 'm', showDivider = false, alignItems = 'left' }: Stack) => {
  const items = findChildrenByRole(children, 'Stack.Item');
  if (!items) {
    return null;
  }

  const stackClassNames = classNames('w-full flex flex-col', {
    'divide-y divide-solid divide-gray-150': showDivider,
    'space-y-1': spacing === 'xxs',
    'space-y-2': spacing === 'xs',
    'space-y-3': spacing === 's',
    'space-y-4': spacing === 'm',
    'space-y-6': spacing === 'l',
    'space-y-8': spacing === 'xl',
    'space-y-10': spacing === 'xxl',
    'space-y-16': spacing === 'xxxl',

    // alignment
    'items-center': alignItems === 'center',
    'items-start': alignItems === 'left',
    'items-end': alignItems === 'right',
  });

  const stackItemClassNames = classNames('w-full flex flex-col', {
    'items-center': alignItems === 'center',
    'items-start': alignItems === 'left',
    'items-end': alignItems === 'right',
  });

  return children ? (
    <div className={stackClassNames}>
      {items.map((item: any) => (
        <div className={stackItemClassNames} key={`${item.toString()}_${item.key}`}>
          {item}
        </div>
      ))}
    </div>
  ) : null;
};

export default Object.assign(Stack, { Item });
