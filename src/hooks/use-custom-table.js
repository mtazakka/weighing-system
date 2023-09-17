import { useMantineReactTable } from 'mantine-react-table';

export const useCustomTable = (tableOptions) => {
  return useMantineReactTable({
    ...{
      columns: [],
      data: [],
      enableRowSelection: false,
      enableGlobalFilter: false,
      enableColumnResizing: true,
      paginationDisplayMode: 'pages',
      positionToolbarAlertBanner: 'bottom',
      mantineTableProps: {
        highlightOnHover: true,
      },
    },
    ...tableOptions,
  });
};
