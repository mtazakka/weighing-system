import { Card, Grid, Space, TextInput } from '@mantine/core';
import { useState } from 'react';

import { ButtonFooter, CardTitle, ConfirmationModal, MantineTable, PageContainer } from '@/components';
import { formMaterialData } from '@/utils/mockUpData';

const columns = [
  {
    accessorKey: 'codeMaterial',
    header: 'Code Material',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'namaMaterial',
    header: 'Nama Material',
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
];

const MaterialPage = () => {
  const initialFormValues = {
    nomorMaterial: '',
    namaMaterial: '',
    beratJenis: '',
    satuan: '',
    reflaksi: '',
  };
  const [form, setForm] = useState(initialFormValues);
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
  const isDisabled = !form.nomorMaterial || !form.namaMaterial || !form.beratJenis || !form.reflaksi || !form.satuan;

  return (
    <PageContainer title="File / Material">
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
        <CardTitle title="Nama Material" color="#F7E987" />
        {/* End Title Container */}
        <Space h="xl" />
        {/* Start Form Container */}
        <Card withBorder>
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={3}>
              <TextInput label="Nomor Material" withAsterisk name="nomorMaterial" placeholder="Nomor Material" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Nama Material" withAsterisk name="namaMaterial" placeholder="Nama Material" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="Berat Jenis" withAsterisk name="beratJenis" placeholder="Berat Jenis" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Satuan" withAsterisk name="satuan" placeholder="Satuan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Nama Material" withAsterisk name="namaMaterial" placeholder="Nama Material" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={4}>
              <TextInput label="Reflaksi/(Satun)" withAsterisk name="reflaksi" placeholder="Reflaksi" onChange={handleChange} />
            </Grid.Col>
            {/* End Title Container */}
          </Grid>

          <Grid>
            {/* Start of Material  */}
            <Grid.Col span={12} mt="xl">
              <MantineTable data={formMaterialData.data} columns={columns} />
            </Grid.Col>
            {/* End of Material Table */}
          </Grid>
        </Card>
        {/* End Form COntainer */}
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

export default MaterialPage;
