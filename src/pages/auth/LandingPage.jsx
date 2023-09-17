import { Box, Card, Center, Container, Text, Title } from '@mantine/core';

export default function LandingPage() {
  return (
    <Center
      sx={{
        minHeight: '100vh',
      }}
    >
      <Container size="xs" sx={{ width: 480 }}>
        <Card withBorder padding="md" shadow="sm">
          <Title align="center" fz="xl" fw={900} c="red">
            WEIGHING SYSTEM
          </Title>
          <Title align="center" fz="md" mt={3} fw={500} c="green">
            ADDRESS 1
          </Title>
          <Title align="center" fz="md" mt={3} fw={500} c="green">
            ADDRESS 2
          </Title>
          <Title align="center" fz="md" mt={3} fw={500}>
            TELP FAX
          </Title>
          <Center mt="md" mb="xl">
            <Box style={{ border: '1px solid black', width: 200, height: 100 }}>
              <Text align="center">Image</Text>
            </Box>
          </Center>
          <Title align="center" fz="md" mt={3} fw={500} c="green">
            Copyright (c) Nopember 2002 By: Rizki
          </Title>
          <Title align="center" fz="md" mt={3} fw={500}>
            Version 0.0.0
          </Title>
          {/* <Image maw={240} mx="auto" radius="md" src="./avatar.png" alt="Random image" /> */}
        </Card>
      </Container>
    </Center>
  );
}
