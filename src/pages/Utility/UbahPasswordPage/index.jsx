import { Button, Card, Grid, TextInput } from '@mantine/core';
import { useState } from 'react';

import { CardTitle, ConfirmationModal, PageContainer } from '@/components';

const UbahPasswordPage = () => {
  const initialFormValues = {
    namaUser: '',
    logIn: '',
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
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

  const isDisabled = !form.namaUser || !form.logIn || !form.oldPassword || !form.newPassword || !form.confirmNewPassword;

  return (
    <PageContainer title="Utility / Ubah Password">
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
        <CardTitle title="UBAH PASSWORD" color="#ccf9ff" />
        {/* End Title Container */}

        {/* Start Form Container */}
        <Card withBorder my="xl">
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={6}>
              <TextInput label="Nama User" withAsterisk name="namaUser" placeholder="Nama User" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Log-in" withAsterisk name="logIn" placeholder="Log-in" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Password" withAsterisk name="password" placeholder="Password" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Password" withAsterisk name="password" placeholder="Password" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput label="Password" withAsterisk name="password" placeholder="Password" onChange={handleChange} />
            </Grid.Col>
          </Grid>
        </Card>
        {/* End Title Container */}

        {/* Start Button Action */}
        <Grid>
          <Grid.Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="red" onClick={() => setConfirmationModalHapus(false)} mr="xl">
                Bersih
              </Button>
              <div>
                <Button onClick={() => setConfirmationModalSimpan(true)} disabled={isDisabled}>
                  Simpan
                </Button>
              </div>
            </div>
          </Grid.Col>
          {/* End Button Action */}
        </Grid>
      </Card>
    </PageContainer>
  );
};

export default UbahPasswordPage;
