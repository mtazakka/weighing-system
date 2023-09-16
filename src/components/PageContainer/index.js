/* eslint-disable react/prop-types */
import { Anchor, Breadcrumbs, Container, Space, Title, useMantineTheme } from '@mantine/core';

export const PageContainer = ({ children, title, items, fluid = true }) => {
  const theme = useMantineTheme();
  const titleColor = theme.colorScheme === 'dark' ? 'gray' : 'dark';

  return (
    <Container fluid={fluid}>
      {items && items.length > 0 ? (
        <Breadcrumbs>
          {items.map((item) => (
            <Anchor key={item.label} href={item.href}>
              {item.label}
            </Anchor>
          ))}
        </Breadcrumbs>
      ) : null}

      <Title order={4} color={titleColor}>
        {title}
      </Title>

      <Space h="lg" />

      {children}
    </Container>
  );
};
