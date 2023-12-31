import classNames from 'classnames';

import findChildrenByRole from '@/modules/application/utils/findChildrenByRole';

interface Header {
  children: any;
  alignItems?: 'left' | 'center' | 'right';
}

const Header = ({ children, alignItems }: Header) => {
  const cells = findChildrenByRole(children, 'Table.HeaderCell');

  const headClassNames = classNames('border-b-[1px] border-gray-150', {
    'bg-gray-100 text-md': true,
    'text-left': alignItems === 'left',
    'text-center': alignItems === 'center',
    'text-right': alignItems === 'right',
  });

  if (!cells) return null;

  return (
    <thead className={headClassNames}>
      <tr>
        {cells.map((cell: any) => (
          <th key={cell.key} className="p-4">
            {cell}
          </th>
        ))}
      </tr>
    </thead>
  );
};

Header.role = 'Table.Header';
Header.displayName = 'Table.Header';

export default Header;
