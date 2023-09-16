import {
  Anchor,
  Box,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { postLogin } from '../../services';
import { useBoundStore } from '../../zustand';

function Login() {
  const navigate = useNavigate();
  const userInfo = useBoundStore((state) => state.userInfo);
  const setUserInfo = useBoundStore((state) => state.setUserInfo);
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const mutationLogin = useMutation(postLogin, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.accessToken);
      setUserInfo(data.accessToken);
      navigate('/');
    },
    onError: (err) => {
      showNotification({
        color: 'red',
        message: err.message,
      });
    },
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    mutationLogin.mutate(form);
  };

  if (userInfo) {
    return <Navigate to="/" />;
  }

  return (
    <Container
      fluid
      h="100vh"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box maw={400} mt={-72}>
        <Title
          align="center"
          color="army.7"
          mb={28}
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontSize: 32,
            fontWeight: 900,
            lineHeight: 1.1,
          })}
        >
          Boilerplate Dashboards
        </Title>
        <Paper withBorder shadow="md" p={30} m={18} radius="md">
          <form onSubmit={handleLogin}>
            <TextInput
              name="username"
              label="Username"
              placeholder="Your Username"
              required
              onChange={handleChange}
            />
            <PasswordInput
              name="password"
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              onChange={handleChange}
            />
            <Button
              fullWidth
              mt="xl"
              type="submit"
              loading={mutationLogin.isLoading}
            >
              Sign in
            </Button>
          </form>
        </Paper>
        <Text color="dimmed" size="sm" align="center">
          Do not have an account yet?{' '}
          <Anchor
            href="#"
            size="sm"
            color="red"
            onClick={(event) => event.preventDefault()}
          >
            Contact Admin
          </Anchor>
        </Text>
      </Box>
    </Container>
  );
}

export default Login;
