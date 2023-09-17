/* eslint-disable react/prop-types */
import { MantineReactTable } from 'mantine-react-table';
import { useCustomTable } from '@/hooks';

const MantineTable = ({ columns, data }) => {
  const table = useCustomTable({
    columns: columns,
    data: data,
  });

  return <MantineReactTable table={table} />;
};

export default MantineTable;
