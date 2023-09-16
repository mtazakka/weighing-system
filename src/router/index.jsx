/* eslint-disable react/prop-types */
import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components';
import { Home, Login } from '../pages';
import Private from './Private';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <Private>
        <Navbar />
      </Private>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
