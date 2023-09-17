import { Card, Grid, Space, Text, TextInput } from '@mantine/core';
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

const DataPenimbanganKeduaPage = () => {
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
    <PageContainer title="File / Data Penimbangan Kedua">
      {/* Confirmation Modal Hapus */}
      <ConfirmationModal
        title="Apa anda yakin?"
        label="Hapus semua data"
        isOpen={isConfirmationModalHapus}
        onClose={() => setConfirmationModalHapus(false)}
        onConfirm={handleClearForm}
      />

      {/* Confirmation Modal Simpan */}
      <ConfirmationModal
        title="Apa anda yakin?"
        label="Simpan Data"
        isOpen={isConfirmationModalSimpan}
        onClose={() => setConfirmationModalSimpan(false)}
        onConfirm={handleSaveForm}
      />

      <Card shadow="md" withBorder padding="xl" radius="md">
        {/* Start Title Container */}
        <CardTitle title="Data Timbangan Kedua" color="#CCFFBD" />
        {/* End Title Container */}
        <Space h="xl" />
        {/* Start Form Container */}
        <Card withBorder>
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={5}>
              <DatePickerInput
                type="range"
                valueFormat="DD MMMM YYYY"
                maxDate={new Date()}
                numberOfColumns={2}
                dropdownType="modal"
                label="Tanggal"
                placeholder="Tanggal"
                value={rangeDate}
                onChange={handleSelectRangeDate}
                // mx="auto"
                // maw={400}
              />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="NO. ID" withAsterisk name="noId" placeholder="NO. ID" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NO. Slip" withAsterisk name="noSlip" placeholder="NO. Slip" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Nama Supir" withAsterisk name="namaSupir" placeholder="Nama Supir" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="Nama Langganan" withAsterisk name="namaLangganan" placeholder="Nama Langganan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Nama Barang" withAsterisk name="namaBarang" placeholder="Nama Barang" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NO. D/O" withAsterisk name="noDo" placeholder="NO. D/O" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Operator" withAsterisk name="operator" placeholder="Operator" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="No. SPB" withAsterisk name="noSpb" placeholder="No. SPB" onChange={handleChange} />
            </Grid.Col>
          </Grid>

          <Grid span={12} component="form" mx="auto" my="lg">
            <Grid.Col span={5}>
              <Card withBorder py="xl">
                <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid.Col span={1} offset={1}>
                    <Text>Bruto</Text>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <TextInput name="tanggalBruto" placeholder="Tanggal" onChange={handleChange} />
                  </Grid.Col>
                  <Grid.Col span={2}>
                    <TextInput name="jamBruto" placeholder="Jam" onChange={handleChange} />
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <TextInput name="timbanganBruto" placeholder="Timbangan" onChange={handleChange} />
                  </Grid.Col>
                </Grid>
                <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid.Col span={1} offset={1}>
                    <Text>Tara</Text>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <TextInput name="tanggalTara" placeholder="Tanggal" onChange={handleChange} />
                  </Grid.Col>
                  <Grid.Col span={2}>
                    <TextInput name="jamTara" placeholder="Jam" onChange={handleChange} />
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <TextInput name="timbanganTara" placeholder="Timbangan" onChange={handleChange} />
                  </Grid.Col>
                </Grid>
                <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid.Col span={1} offset={6}>
                    <Text>Netto</Text>
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <TextInput name="timbanganTara" placeholder="Timbangan" onChange={handleChange} />
                  </Grid.Col>
                </Grid>
              </Card>
            </Grid.Col>
            <Grid.Col span={5} offset={1}>
              <Grid mx={0}>
                <Grid.Col span={6}>
                  <TextInput label="BJ" withAsterisk name="bj" placeholder="BJ" onChange={handleChange} />
                </Grid.Col>
                <Grid.Col span={6}>
                  <TextInput label="Satuan" withAsterisk name="satuan" placeholder="Satuan" onChange={handleChange} />
                </Grid.Col>
              </Grid>
              <Grid.Col span={12}>
                <TextInput label="Potongan" withAsterisk name="potongan" placeholder="Potongan" onChange={handleChange} />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput label="Total" withAsterisk name="total" placeholder="Total" onChange={handleChange} />
              </Grid.Col>
            </Grid.Col>
          </Grid>
          {/* End Form Container */}
          {/* Start of Material  */}
          <Grid>
            <Grid.Col span={12} mt="xl">
              <MantineTable columns={columns} data={[]} />
            </Grid.Col>
          </Grid>
        </Card>
        {/* End of Material Table */}
        <Space h="xl" />
        {/* Start Button Action */}
        <ButtonFooter
          firstTitle="Hapus"
          firstAction={() => setConfirmationModalHapus(true)}
          secondTitle="Cetak"
          thirdTitle="Simpan"
          thirdAction={() => setConfirmationModalSimpan(true)}
          isDisabled={isDisabled}
        />
        {/* End Button Action */}
      </Card>
    </PageContainer>
  );
};

export default DataPenimbanganKeduaPage;
