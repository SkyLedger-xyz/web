import classNames from 'classnames';
import Link from 'next/link';

interface MenuItemInterface {
  children: any;
  href: string;
  isActive?: boolean;
  icon?: any;
}

const MenuItem = ({ href, icon, children, isActive = false }: MenuItemInterface) => {
  const className = classNames('inline-flex border-primary-500 border-l-4', {
    'border-brand p-4 text-primary-500': isActive,
    'border-transparent p-4 hover:border-primary-500 hover:text-primary-500': !isActive,
  });

  return (
    <li>
      <Link href={href} className={className}>
        {icon}
        {children}
      </Link>
    </li>
  );
};

MenuItem.role = 'Menu.Item';
MenuItem.displayName = 'Menu.Item';

export default MenuItem;
