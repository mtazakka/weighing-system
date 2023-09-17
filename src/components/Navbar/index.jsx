import { Box, Button, Code, Flex, Group, Image, Navbar, ScrollArea, createStyles, rem } from '@mantine/core';
import { IconBuildingLighthouse, IconLogout } from '@tabler/icons-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useBoundStore } from '../../zustand';
import LinksGroup from './LinksGroup';

const mockdata = [
  {
    label: 'File',
    icon: IconBuildingLighthouse,
    links: [
      { label: 'Material', link: '/file/material' },
      { label: 'Langganan', link: '/file/langganan' },
      { label: 'Data Penimbangan Pertama', link: '/file/penimbanganpertama' },
      { label: 'Data Penimbangan Kedua', link: '/file/penimbangankedua' },
      { label: 'Printer Setup', link: '/file/printersetup' },
    ],
  },
  {
    label: 'Timbangan',
    icon: IconBuildingLighthouse,
    link: '/timbangan',
  },
  {
    label: 'Laporan',
    icon: IconBuildingLighthouse,
    links: [
      { label: 'Summary Report', link: '/laporan/summaryreport' },
      { label: 'Laporan Harian', link: '/laporan/laporanharian' },
    ],
  },
  {
    label: 'Utility',
    icon: IconBuildingLighthouse,
    links: [
      { label: 'Seting Timbangan', link: '/utility/settingtimbangan' },
      { label: 'Reset No Slip', link: '/utility/resetnoslip' },
      { label: 'Ubah Password', link: '/utility/ubahpassword' },
      { label: 'Setting Password', link: '/utility/settingpassword' },
    ],
  },
  {
    label: 'Help',
    icon: IconBuildingLighthouse,
    links: [{ label: 'About', link: '/help/about' }],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },
}));

function NavbarNested() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const setUserInfo = useBoundStore((state) => state.setUserInfo);

  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  const handleLogout = () => {
    localStorage.clear('token');
    setUserInfo(null);
    setTimeout(() => {
      navigate('/login');
    }, 500);
  };

  return (
    <Flex>
      <Navbar height="100vh" zIndex={10} width={{ sm: 250 }} p="md" className={classes.navbar}>
        <Navbar.Section className={classes.header}>
          <Link to="/">
            <Group position="apart">
              <Image src="logo_delameta.png" width={rem(120)} alt="logo delameta" />
              <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
            </Group>
          </Link>
        </Navbar.Section>

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <Flex justify="center" align="center" p={16}>
            <Button fullWidth variant="outline" color="red.6" leftIcon={<IconLogout size="1rem" />} onClick={handleLogout}>
              logout
            </Button>
          </Flex>
        </Navbar.Section>
      </Navbar>
      <Box bg="gray.2" sx={{ flex: 1, padding: 16, height: '100vh', overflow: 'scroll' }}>
        <Outlet />
      </Box>
    </Flex>
  );
}

export default NavbarNested;
