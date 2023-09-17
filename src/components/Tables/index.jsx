/* eslint-disable react/prop-types */
import { MantineReactTable } from 'mantine-react-table';
import { useCustomTable } from '@/hooks';

const MantineTable = ({ columns, data, columnData }) => {
const column = columnData?.map((column) => ({
  accessorKey: column.accessorKey,
  header: column.header,
  mantineTableHeadCellProps: {
    align: 'center',
  },
  mantineTableBodyCellProps: {
    align: 'center',
  },
}));


  const table = useCustomTable({
    columns: column || columns,
    data: data,
  });

  return <MantineReactTable table={table} />;
};

export default MantineTable;
