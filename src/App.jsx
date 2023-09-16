import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ModalsProvider } from '@mantine/modals';
import router from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <Notifications />
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
