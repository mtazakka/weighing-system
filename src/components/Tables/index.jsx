/* eslint-disable react/prop-types */
import { MantineReactTable } from 'mantine-react-table';
import { useCustomTable } from '@/hooks';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Box, Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

const MantineTable = ({ data, columnData }) => {
  const columns = columnData?.map((column) => ({
    accessorKey: column.accessorKey,
    header: column.header,
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  }));

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save('mrt-pdf-example.pdf');
  };

  const table = useCustomTable({
    columns: columns,
    data: data,
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export
        </Button>
      </Box>
    ),
  });

  return <MantineReactTable table={table} />;
};

export default MantineTable;
