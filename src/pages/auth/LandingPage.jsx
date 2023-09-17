import { Center, Container, Title } from '@mantine/core';

export default function LandingPage() {
  return (
    <Center
      sx={{
        minHeight: '100vh',
      }}
    >
      <Container size="xs" sx={{ width: 480, paddingBottom: 16 }}>
        <Title
          align="center"
          sx={{
            fontSize: 42,
            fontWeight: 900,
          }}
        >
          WEIGHING SYSTEM
        </Title>
      </Container>
    </Center>
  );
}
