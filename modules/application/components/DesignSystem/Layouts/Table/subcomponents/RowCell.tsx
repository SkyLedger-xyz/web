import { Text } from '@/modules/application/components/DesignSystem';

const RowCell = ({ children }: any) => <Text tag="div">{children}</Text>;

RowCell.role = 'Table.RowCell';
RowCell.displayName = 'Table.RowCell';

export default RowCell;
