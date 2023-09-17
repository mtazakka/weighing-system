import { Button, Card, Grid, Select, TextInput } from '@mantine/core';
import { useState } from 'react';

import { CardTitle, ConfirmationModal, MantineTable, PageContainer } from '@/components';

const columnData = [
  { accessorKey: 'nama', header: 'Nama' },
  { accessorKey: 'kdUser', header: 'KD User' },
  { accessorKey: 'level', header: 'Level' },
];

const SettingPasswordPage = () => {
  const initialFormValues = {
    namaUser: '',
    logIn: '',
    password: '',
    level: '',
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
  const handleSelectLevel = (e) => {
    setForm((prev) => ({ ...prev, level: e }));
  };

  const isDisabled = !form.namaUser || !form.logIn || !form.password || !form.level;

  return (
    <PageContainer title="Utility / Setting Password">
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

      <Card shadow="md" withBorder padding="lg" radius="md">
        {/* Start Title Container */}
        <CardTitle title="SETTING PASSWORD" />
        {/* End Title Container */}

        {/* Start Form Container */}
        <Grid span={12} component="form" mx="auto" mt="xl">
          <Grid.Col span={12}>
            <TextInput label="Nama User" withAsterisk name="namaUser" placeholder="Nama User" onChange={handleChange} />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Log-in" withAsterisk name="logIn" placeholder="Log-in" onChange={handleChange} />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput label="Password" withAsterisk name="password" placeholder="Password" onChange={handleChange} />
          </Grid.Col>
          <Grid.Col span={12}>
            <Select
              label="Level"
              withAsterisk
              placeholder="Pick one"
              searchable
              onSearchChange={handleSelectLevel}
              searchValue={form.level}
              nothingFound="No options"
              data={['1', '2', '3', '4']}
            />
          </Grid.Col>
          {/* End Title Container */}

          {/* Start of Material  */}
          <Grid.Col span={12} mt="xl">
            <MantineTable columnData={columnData} data={[]} />
          </Grid.Col>
          {/* End of Material Table */}

          {/* Start Button Action */}
          <Grid.Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="red" onClick={() => setConfirmationModalHapus(false)} mr="xl">
                Hapus
              </Button>
              {/* <div> */}
              <Button mr="xl">Bersih</Button>
              <Button onClick={() => setConfirmationModalSimpan(true)} disabled={isDisabled}>
                Simpan
              </Button>
              {/* </div> */}
            </div>
          </Grid.Col>
          {/* End Button Action */}
        </Grid>
      </Card>
    </PageContainer>
  );
};

export default SettingPasswordPage;
