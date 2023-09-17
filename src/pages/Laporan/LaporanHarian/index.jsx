import { Card, Center, Grid, Group, Radio, Space, Text, TextInput } from '@mantine/core';
import { useState } from 'react';

import { ButtonFooter, CardTitle, ConfirmationModal, MantineTable, PageContainer } from '@/components';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';

const columns = [
  {
    accessorKey: 'tanggal',
    header: 'Tanggal',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'noSlip',
    header: 'NO. SLIP',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'noId',
    header: 'NO. ID',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'namaLangganan',
    header: 'Nama Langganan',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'noDo',
    header: 'NO. DO',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'noSpb',
    header: 'NO. SPB',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'namaBarang',
    header: 'Nama Barang',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'bj',
    header: 'BJ',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'satuan',
    header: 'Satuan',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'potongan',
    header: 'Potongan',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'total',
    header: 'Total',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
];

const LaporanHarianPage = () => {
  const initialFormValues = {
    tanggalAwal: '',
    tanggalAkhir: '',
    noId: '',
    noSlip: '',
    namaSupir: '',
    namaLangganan: '',
    namaBarang: '',
    noDo: '',
    operator: '',
    tanggalBruto: '',
    jamBruto: '',
    timbanganBruto: '',
    tanggalTara: '',
    jamTara: '',
    timbanganTara: '',
    netto: '',
    bj: '',
    satuan: '',
    potongan: '',
    total: '',
  };
  const [form, setForm] = useState(initialFormValues);
  const [rangeDate, setRangeDate] = useState([null, null]);
  const [isConfirmationModalHapus, setConfirmationModalHapus] = useState(false);
  const [isConfirmationModalSimpan, setConfirmationModalSimpan] = useState(false);

  const handleClearForm = () => {
    form.setValues(initialFormValues);
    setConfirmationModalHapus(false);
  };

  const handleSaveForm = () => {
    console.log(form);
    setConfirmationModalHapus(false);
  };

  const handleSelectRangeDate = (e) => {
    setRangeDate(e);
    setForm((prev) => ({ ...prev, tanggalAwal: dayjs(e[0]).format('YYYY-MM-DD'), tanggalAkhir: dayjs(e[1]).format('YYYY-MM-DD') }));
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const isDisabled =
    !form.noId ||
    !form.namaSupir ||
    !form.alamat ||
    !form.tanggalAwal ||
    !form.tanggalAkhir ||
    !form.noSlip ||
    !form.namaLangganan ||
    !form.namaBarang ||
    !form.noDo ||
    !form.operator ||
    !form.tanggalBruto ||
    !form.jamBruto ||
    !form.timbanganBruto ||
    !form.tanggalTara ||
    !form.jamTara ||
    !form.timbanganTara ||
    !form.netto ||
    !form.bj ||
    !form.satuan ||
    !form.potongan ||
    !form.total;

  return (
    <PageContainer title="Laporan / Laporan Harian">
      <Card shadow="md" withBorder padding="xl" radius="md">
        {/* Start Title Container */}
        <CardTitle title="Data Timbangan Kedua" color="#FFFADD" />
        {/* End Title Container */}
        <Space h="xl" />
        {/* Start Form Container */}
        <Card withBorder>
          <Grid span={12} component="form" mx="auto">
            <Grid.Col span={12}>
              <DatePickerInput
                type="range"
                valueFormat="DD MMMM YYYY"
                maxDate={new Date()}
                numberOfColumns={2}
                dropdownType="modal"
                label="Periode"
                placeholder="Periode"
                value={rangeDate}
                onChange={handleSelectRangeDate}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Center>
                <Radio.Group>
                  <Group mt="xs">
                    <Radio value="barangMasuk" label="Barang Masuk" />
                    <Radio value="barangKeluar" label="Barang Keluar" />
                    <Radio value="all" label="All" />
                  </Group>
                </Radio.Group>
              </Center>
            </Grid.Col>
          </Grid>
          {/* End Form Container */}
        </Card>
        {/* End of Material Table */}
        <Space h="xl" />
        {/* Start Button Action */}
        <ButtonFooter
          thirdTitle="Cetak"
          //   thirdAction={() => setConfirmationModalSimpan(true)}
        />
        {/* End Button Action */}
      </Card>
    </PageContainer>
  );
};

export default LaporanHarianPage;
