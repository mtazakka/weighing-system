/* eslint-disable react/prop-types */
import { Container, Space, Title } from '@mantine/core';

export const PageContainer = ({ children, title, fluid = true }) => {
  return (
    <Container fluid={fluid}>
      <Title fz='md' order={4}>{title}</Title>
      <Space h="lg" />
      {children}
    </Container>
  );
};
