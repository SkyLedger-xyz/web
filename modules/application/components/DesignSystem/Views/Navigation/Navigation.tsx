import findChildrenByRole from '@/modules/application/utils/findChildrenByRole';

import Item from './subcomponents/NavigationItem';

interface NavigationInterface {
  children: any;
  icon?: any;
}

const Navigation = ({ children }: NavigationInterface) => {
  const items = findChildrenByRole(children, 'Navigation.Item');

  return (
    <div className="border-b border-gray-200">
      <ul className="-mb-px flex flex-wrap text-center text-lg font-medium text-gray-500">{items}</ul>
    </div>
  );
};

export default Object.assign(Navigation, { Item });
