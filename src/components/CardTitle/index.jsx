import { Card, Center, Text } from '@mantine/core';

const CardTitle = ({ title, color }) => {
  return (
    <Card withBorder bg={color}>
      <Center>
        <Text fw={700} fz="xl">
          {title}
        </Text>
      </Center>
    </Card>
  );
};

export default CardTitle;
