import { Card, Divider, Grid, Select, Text, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useState } from 'react';

const SummaryDoPo = () => {
  const [value, setValue] = useState([null, null]);

  return (
    <Card withBorder pb={40} mt="lg">
      <Divider my="xs" variant="dashed" labelPosition="center" label={<Text fz="lg">Per DO PO</Text>} />
      {/* End Title Container */}

      {/* Start Form Container */}
      <Grid span={12} component="form" mx="auto" mt="xl">
        <Grid.Col span={5}>
          <Select
            label="Per Barang"
            placeholder="Pick one"
            searchable
            // onSearchChange={handleSelectPort}
            // searchValue={form.port}
            nothingFound="No options"
            data={['KELUAR DAN MASUK', 'Angular', 'Svelte', 'Vue']}
          />
        </Grid.Col>
        <Grid.Col span={5} offset={1}>
          <TextInput label="DO PO" withAsterisk name="doPO" placeholder="DO PO" />
        </Grid.Col>
        <Grid.Col span={5}>
          <DatePickerInput
            type="range"
            label="Pick dates range"
            placeholder="Pick dates range"
            value={value}
            onChange={setValue}
            dropdownType="modal"
            numberOfColumns={2}
            // mx="auto"
          />
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default SummaryDoPo;
