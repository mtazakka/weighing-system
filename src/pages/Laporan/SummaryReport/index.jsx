import { Button, Card, Grid, Space, Tabs } from '@mantine/core';

import { CardTitle, PageContainer } from '@/components';
import SummaryLangganan from './SummaryLangganan';
import SummaryNamaBarang from './SummaryNamaBarang';
import SummaryDoPo from './SummaryDoPo';
import SummaryNoId from './SummaryNoIdTab';

function SummaryReportPage() {
  return (
    <PageContainer title="Laporan / Summary Report">
      <Card shadow="md" withBorder padding="xl" radius="md">
        <CardTitle title="Summary Report" />
        <Space h="md" />
        <Tabs radius="md" defaultValue="barang">
          <Tabs.List grow>
            <Tabs.Tab value="barang">Per Nama Barang</Tabs.Tab>
            <Tabs.Tab value="langganan">Per Langganan</Tabs.Tab>
            <Tabs.Tab value="doPo">Per DO/PO</Tabs.Tab>
            <Tabs.Tab value="noId">Per No. ID</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="barang" pt="xs">
            <SummaryNamaBarang />
          </Tabs.Panel>

          <Tabs.Panel value="langganan" pt="xs">
            <SummaryLangganan />
          </Tabs.Panel>

          <Tabs.Panel value="doPo" pt="xs">
            <SummaryDoPo />
          </Tabs.Panel>
          <Tabs.Panel value="doPo" pt="xs">
            <SummaryNoId />
          </Tabs.Panel>
        </Tabs>

        <Space h="xl" />
        <Grid>
          <Grid.Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div>
                <Button mr="xl" w={100}>
                  Cetak
                </Button>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Card>
    </PageContainer>
  );
}

export default SummaryReportPage;
