import findChildrenByRole from '@/modules/application/utils/findChildrenByRole';

import Item from './subcomponents/MenuItem';

interface MenuInterface {
  children: any;
  icon?: any;
}

const Menu = ({ children }: MenuInterface) => {
  const items = findChildrenByRole(children, 'Menu.Item');

  return (
    <div className="">
      <ul className="flex flex-col space-y-1 text-lg font-medium text-gray-500">{items}</ul>
    </div>
  );
};

export default Object.assign(Menu, { Item });
