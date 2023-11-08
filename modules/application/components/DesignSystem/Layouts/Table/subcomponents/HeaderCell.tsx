import { Text } from '@/modules/application/components/DesignSystem';

const HeaderCell = ({ children }: any) => (
  <Text fontWeight="bold" tag="div" color="gray-400" size="s">
    {children}
  </Text>
);

HeaderCell.role = 'Table.HeaderCell';
HeaderCell.displayName = 'Table.HeaderCell';

export default HeaderCell;
