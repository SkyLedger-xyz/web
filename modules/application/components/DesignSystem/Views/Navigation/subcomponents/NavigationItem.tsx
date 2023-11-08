import classNames from 'classnames';
import Link from 'next/link';

interface NavigationItemInterface {
  children: any;
  href: string;
  isActive?: boolean;
  icon?: any;
}

const NavigationItem = ({ href, icon, children, isActive = false }: NavigationItemInterface) => {
  const className = classNames('inline-flex rounded-t-lg border-b-4', {
    'border-brand p-4 text-primary-500': isActive,
    'border-transparent p-4 hover:border-gray-300 hover:text-gray-600': !isActive,
  });

  return (
    <li className="mr-2">
      <Link href={href} className={className}>
        {icon}
        {children}
      </Link>
    </li>
  );
};

NavigationItem.role = 'Navigation.Item';
NavigationItem.displayName = 'Navigation.Item';

export default NavigationItem;
