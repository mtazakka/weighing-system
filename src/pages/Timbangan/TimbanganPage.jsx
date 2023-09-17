import { Box, Button, Card, Center, Divider, Grid, Select, Text, TextInput } from '@mantine/core';
import { useState } from 'react';

import { ConfirmationModal, PageContainer } from '@/components';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';

const TimbanganPage = () => {
  const initialFormValues = {
    namaLangganan: '',
    tanggal: '',
    noSlip: '',
    ioBarang: '',
    noDopo: '',
    noId: '',
    noSpb: '',
    namaSupir: '',
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

  const handleSelectIO = (e) => {
    setForm((prev) => ({ ...prev, ioBarang: e }));
  };
  //   const isDisabled = !form.nomorMaterial || !form.namaMaterial || !form.beratJenis || !form.reflaksi || !form.satuan;

  return (
    <PageContainer title="Timbangan">
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
        <Card withBorder>
          {/* Start Title Container */}
          <Center>
            <Text fw={700} fz="xl">
              PT.MIP / PT.MTN
            </Text>
          </Center>
          <Divider my="sm" size="md" />
          <Center>
            <Text fw={700} fz="xl">
              SLIP TIMBANGAN
            </Text>
          </Center>
          <Center>
            <Text fw={700} fz="xl">
              PENGELUARAN/PEMASUKAN BARANG
            </Text>
          </Center>
          {/* End Title Container */}

          {/* Start Form Container */}
          <Grid span={12} component="form" mx="auto" mt="xl">
            <Grid.Col span={5}>
              <TextInput label="Nama Langganan" withAsterisk name="namaLangganan" placeholder="Nama Langganan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5} offset={1}>
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
              <TextInput label="NO. Slip" withAsterisk name="noSlip" placeholder="NO. Slip" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <Select
                label="In / Out Barang"
                placeholder="Pick one"
                searchable
                onSearchChange={handleSelectIO}
                searchValue={form.port}
                nothingFound="No options"
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NO. DO / PO" withAsterisk name="noDopo" placeholder="NO. DO / PO" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="NO. ID" withAsterisk name="noId" placeholder="NO. ID" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5}>
              <TextInput label="NO. SPB" withAsterisk name="noSpb" placeholder="NO. SPB" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col offset={1} span={5}>
              <TextInput label="Nama Supir" withAsterisk name="namaSupir" placeholder="Nama Supir" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={5} offset={6}>
              <TextInput label="Nama Barang" withAsterisk name="namaBarang" placeholder="Nama Barang" onChange={handleChange} />
            </Grid.Col>
          </Grid>
          {/* End Title Container */}

          <Divider my="xl" size="md" />

          <Grid span={12} mx="auto" my="lg">
            <Grid.Col span={6}>
              <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid.Col span={3} />
                <Grid.Col span={3}>
                  <Text>Tanggal</Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Text>Jam</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Text>Timbangan</Text>
                </Grid.Col>
              </Grid>
              <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid.Col span={3} />
                <Grid.Col span={3}>{/* <Text>Tanggal</Text> */}</Grid.Col>
                <Grid.Col span={3}>{/* <Text>Jam</Text> */}</Grid.Col>
                <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {/* <Text>as</Text> */}
                  <span>Kg</span>
                </Grid.Col>
              </Grid>
              <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid.Col span={3} />
                <Grid.Col span={3}>{/* <Text>Tanggal</Text> */}</Grid.Col>
                <Grid.Col span={3}>{/* <Text>Jam</Text> */}</Grid.Col>
                <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {/* <Text>as</Text> */}
                  <span>Kg</span>
                </Grid.Col>
              </Grid>
              <Divider my="sm" size="md" />
              <Grid span={12} style={{ display: 'flex', alignItems: 'center' }}>
                <Grid.Col span={1}>
                  <Text fw={700}>NETTO</Text>
                </Grid.Col>
                <Grid.Col offset={8} span={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Text fw={700}>Kg</Text>
                </Grid.Col>
              </Grid>
            </Grid.Col>

            <Grid.Col span={5} offset={1}>
              <Grid.Col span={12}>
                <TextInput label="Potongan" withAsterisk name="potongan" placeholder="Potongan" onChange={handleChange} />
              </Grid.Col>
              <Grid.Col span={12}>
                <TextInput label="Total" withAsterisk name="total" placeholder="Total" onChange={handleChange} />
              </Grid.Col>
            </Grid.Col>
          </Grid>

          <Divider my="md" size="md" />
          <Grid span={12} mx="xl">
            <Grid.Col span={2}>
              <Text align="center">Penerima</Text>
              <Divider size="sm" my="xs" />
              <Text align="center">Siapa</Text>
            </Grid.Col>
            <Grid.Col span={2} offset={8}>
              <Text align="center">Operator</Text>
              <Divider size="sm" my="xs" />
              <Text align="center">Manager</Text>
            </Grid.Col>
          </Grid>
        </Card>

        <Card withBorder my="md">
          <Grid span={12}>
            <Grid.Col span={4}>
              <TextInput label="NO. ID" withAsterisk name="idPenimbangan" placeholder="NO. ID" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={4} offset={3}>
              <TextInput label="Penimbangan" withAsterisk name="penimbangan" placeholder="Penimbangan" onChange={handleChange} />
            </Grid.Col>
            <Grid.Col span={1} mt={30}>
              <Text>Kg</Text>
            </Grid.Col>
          </Grid>
        </Card>

        {/* Start Button Action */}
        <Grid span={12} align="center">
          <Grid.Col span={1}>
            <Button w="100%">Timbang</Button>
          </Grid.Col>
          <Grid.Col span={10}>
            <Box bg="black" p="xs">
              <Box bg="black" h={100} p="xs" style={{ border: '1px solid white', position: 'relative' }}>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: 10 }}>
                  <Text color="red">00:00:00</Text>
                  <Box style={{ width: 14, height: 14, background: 'red', borderRadius: 7, marginLeft: 10 }} />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', left: 10 }}>
                  <Text color="green">ST</Text>
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
                  <Text color="green">-</Text>
                  <Text color="green" fz={30}>
                    45000 KG
                  </Text>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', bottom: 10 }}>
                  <Text color="green">GS</Text>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={1}>
            <Button w="100%">Bersih</Button>
          </Grid.Col>
          {/* End Button Action */}
        </Grid>
      </Card>
    </PageContainer>
  );
};

export default TimbanganPage;
