import { Card, Grid, Space, TextInput } from '@mantine/core';
import { useState } from 'react';

import { ButtonFooter, CardTitle, ConfirmationModal, MantineTable, PageContainer } from '@/components';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';

const columns = [
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
    accessorKey: 'namaSupir',
    header: 'Nama Supir',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
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
    accessorKey: 'jam',
    header: 'Jam',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'timbangan',
    header: 'Timbangan',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
];

const DataPenimbanganPertama = () => {
  const initialFormValues = {
    noId: '',
    namaSupir: '',
    namaLangganan: '',
    tanggal: '',
    noDo: '',
    jam: '',
    noSpb: '',
    timbangan: '',
    namaBarang: '',
  };
  const [form, setForm] = useState(initialFormValues);
  const [tanggal, setTanggal] = useState();
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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectDate = (e) => {
    setTanggal(e);
    setForm((prev) => ({ ...prev, tanggal: dayjs(e).format('YYYY-MM-DD') }));
  };
  const isDisabled =
    !form.noId ||
    !form.namaSupir ||
    !form.namaLangganan ||
    !form.tanggal ||
    !form.noDo ||
    !form.jam ||
    !form.noSpb ||
    !form.timbangan ||
    !form.namaBarang;

  return (
    <PageContainer title="File / Timbangan Pertama">
      {/* Confirmation Modal Hapus */}
      <ConfirmationModal
        title="Apa anda yakin?"
        label="Hapus semua data"
        isOpen={isConfirmationModalHapus}
        onClose={() => setConfirmationModalHapus(false)}
        onConfirm={handleClearForm}
      />

      {/* Confirmation Modal Hapus */}
      <ConfirmationModal
        title="Apa anda yakin?"
        label="Simpan Data"
        isOpen={isConfirmationModalSimpan}
        onClose={() => setConfirmationModalSimpan(false)}
        onConfirm={handleSaveForm}
      />

      <Card shadow="md" withBorder padding="xl" radius="md">
        {/* Start Title Container */}
        <CardTitle title="Data Timbangan Pertama" color="#C0EEF2" />
        {/* End Title Container */}
        <Space h="xl" />

        {/* Start Form Container */}
        <Card withBorder>
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={5}>
              <TextInput label="NO. ID" withAsterisk name="noId" placeholder="NO. ID" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Nama Supir" withAsterisk name="namaSupir" placeholder="Nama Supir" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="Nama Langganan" withAsterisk name="namaLangganan" placeholder="Nama Langganan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <DatePickerInput
                valueFormat="DD MMMM YYYY"
                maxDate={new Date()}
                label="Tanggal"
                placeholder="Tanggal"
                value={tanggal}
                onChange={handleSelectDate}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NO. DO" withAsterisk name="noDo" placeholder="NO. DO" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Jam" withAsterisk name="jam" placeholder="Jam" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NO. SPB" withAsterisk name="noSpb" placeholder="NO. SPB" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Timbangan" withAsterisk name="timbangan" placeholder="Timbangan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NAMA BARANG" withAsterisk name="namaBarang" placeholder="NAMA BARANG" onChange={handleChange} />
            </Grid.Col>
            {/* End Title Container */}

            {/* Start of Material  */}
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
          thirdTitle="Simpan"
          thirdAction={() => setConfirmationModalSimpan(true)}
          isDisabled={isDisabled}
        />
        {/* End Button Action */}
      </Card>
    </PageContainer>
  );
};

export default DataPenimbanganPertama;
