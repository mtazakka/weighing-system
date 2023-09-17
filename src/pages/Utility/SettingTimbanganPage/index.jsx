import { Box, Button, Card, Grid, Select, Space, Text } from '@mantine/core';
import { useState } from 'react';

import { CardTitle, ConfirmationModal, PageContainer } from '@/components';
// import MaterialTable from '../components/MaterialTable';

const SettingTimbanganPage = () => {
  //   const initialFormValues = {
  //     port: '',
  //     namaMaterial: '',
  //     beratJenis: '',
  //     satuan: '',
  //     reflaksi: '',
  //   };
  //   const [form, setForm] = useState(initialFormValues);
  const [isConfirmationModalHapus, setConfirmationModalHapus] = useState(false);
  const [isConfirmationModalSimpan, setConfirmationModalSimpan] = useState(false);

  //   const handleClearForm = () => {
  //     form.setValues(initialFormValues);
  //     setConfirmationModalHapus(false);
  //   };

  //   const handleSaveForm = () => {
  //     console.log(form);
  //     setConfirmationModalHapus(false);
  //   };

  //   const handleChange = (e) => {
  //     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };
  //   const handleSelectPort = (e) => {
  //     setForm((prev) => ({ ...prev, port: e }));
  //   };

  // const isDisabled = !form.nomorMaterial || !form.namaMaterial || !form.beratJenis || !form.reflaksi || !form.satuan;

  return (
    <PageContainer title="Utility / Setting Timbangan">
      {/* Confirmation Modal Hapus */}
      <ConfirmationModal
        title="Apa anda yakin?"
        label="Hapus semua data"
        isOpen={isConfirmationModalHapus}
        onClose={() => setConfirmationModalHapus(false)}
        // onConfirm={handleClearForm}
      />

      {/* Confirmation Modal Hapus */}
      <ConfirmationModal
        title="Apa anda yakin?"
        label="Simpan Data"
        isOpen={isConfirmationModalSimpan}
        onClose={() => setConfirmationModalSimpan(false)}
        // onConfirm={handleSaveForm}
      />

      <Card shadow="md" withBorder padding="lg" radius="md">
        <CardTitle title="Setting Timbangan" color="#ACFADF" />
        <Space h="lg" />
        <Card withBorder>
          <Text>Connection Preferences</Text>
          {/* End Title Container */}

          {/* Start Form Container */}
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={5}>
              <Select
                label="Port"
                placeholder="Pick one"
                searchable
                // onSearchChange={handleSelectPort}
                // searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
            <Grid.Col span={5} offset={1}>
              <Select
                label="Stop Bits"
                placeholder="Pick one"
                searchable
                // onSearchChange={handleSelectPort}
                // searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Select
                label="Data Bits"
                placeholder="Pick one"
                searchable
                // onSearchChange={handleSelectPort}
                // searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
            <Grid.Col span={5} offset={1}>
              <Select
                label="Baud Rate"
                placeholder="Pick one"
                searchable
                // onSearchChange={handleSelectPort}
                // searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <Select
                label="Parity Bit"
                placeholder="Pick one"
                searchable
                // onSearchChange={handleSelectPort}
                // searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
            <Grid.Col span={5} offset={1}>
              <Select
                label="Indicator"
                placeholder="Pick one"
                searchable
                // onSearchChange={handleSelectPort}
                // searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
          </Grid>
        </Card>
        <Space h="xl" />
        <Grid span={12} align="center">
          <Grid.Col span={12}>
            <Box bg="#ccf9ff" h={100} p="xs" style={{ border: '5px solid #55d0ff', position: 'relative' }} />
          </Grid.Col>
        </Grid>

        <Space h="xl" />
        {/* Start Button Action */}
        <Grid span={12} align="center">
          <Grid.Col span={12}>
            <Box bg="black" p="xs">
              <Box bg="black" h={100} p="xs" style={{ border: '1px solid white', position: 'relative' }}>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: 10 }}>
                  <Text color="red">00:00:00</Text>
                  <Box style={{ width: 14, height: 14, background: 'red', borderRadius: 7, marginLeft: 10 }} />
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                  }}
                  mx="lg"
                >
                  <Box>
                    <Text color="green" fz={28} ml={-3}>
                      +
                    </Text>
                    <Text color="green" fz={28} mt={-30}>
                      -
                    </Text>
                  </Box>
                  <Text color="green" fz={30}>
                    0 KG
                  </Text>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div>
                <Button mr="xl" w={100}>
                  TES
                </Button>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Card>
    </PageContainer>
  );
};

export default SettingTimbanganPage;
