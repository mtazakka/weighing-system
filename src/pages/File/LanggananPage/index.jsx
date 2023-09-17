import { Card, Grid, Space, TextInput } from '@mantine/core';
import { useState } from 'react';

import { ButtonFooter, CardTitle, ConfirmationModal, MantineTable, PageContainer } from '@/components';
import { formLanggananData } from '@/utils/mockUpData';

const columns = [
  {
    accessorKey: 'codeCostumer',
    header: 'Code Costumer',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'namaCostumer',
    header: 'Nama Costumer',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
  {
    accessorKey: 'alamat',
    header: 'Alamat',
    mantineTableHeadCellProps: {
      align: 'center',
    },
    mantineTableBodyCellProps: {
      align: 'center',
    },
  },
];

const LanggananPage = () => {
  const initialFormValues = {
    codeLangganan: '',
    namaLangganan: '',
    alamat: '',
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
  const isDisabled = !form.codeLangganan || !form.namaLangganan || !form.alamat;

  return (
    <PageContainer title="File / Langganan">
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
        <CardTitle title="Nama Langganan" color="#C0EEF2" />
        {/* End Title Container */}
        <Space h="xl" />
        {/* Start Form Container */}
        <Card withBorder>
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={3}>
              <TextInput label="Code Langganan" withAsterisk name="codeLangganan" placeholder="Code Langganan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Nama Langganan" withAsterisk name="namaLangganan" placeholder="Nama Material" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput label="Alamat" withAsterisk name="alamat" placeholder="Alamat" onChange={handleChange} />
            </Grid.Col>
            {/* End Title Container */}

            {/* Start of Material  */}
            <Grid.Col span={12} mt="xl">
              <MantineTable data={formLanggananData.data} columns={columns} />
            </Grid.Col>
            {/* End of Material Table */}
          </Grid>
        </Card>
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

export default LanggananPage;
