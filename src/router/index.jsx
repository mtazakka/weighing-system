/* eslint-disable react/prop-types */
import {
  AboutPage,
  DataPenimbanganKedua,
  DataPenimbanganPertama,
  LandingPage,
  LanggananPage,
  LaporanHarianPage,
  LoginPage,
  MaterialPage,
  PrinterSetupPage,
  ResetNoSlipPage,
  SettingPasswordPage,
  SettingTimbanganPage,
  SummaryReportPage,
  TimbanganPage,
  UbahPasswordPage,
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { Navbar } from '../components';
import PrivateRoute from './Private';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Navbar />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'file/material',
        element: <MaterialPage />,
      },
      {
        path: 'file/langganan',
        element: <LanggananPage />,
      },
      {
        path: 'file/penimbanganpertama',
        element: <DataPenimbanganPertama />,
      },
      {
        path: 'file/penimbangankedua',
        element: <DataPenimbanganKedua />,
      },
      {
        path: 'file/printersetup',
        element: <PrinterSetupPage />,
      },
      {
        path: 'timbangan',
        element: <TimbanganPage />,
      },
      {
        path: 'laporan/summaryreport',
        element: <SummaryReportPage />,
      },
      {
        path: 'laporan/laporanharian',
        element: <LaporanHarianPage />,
      },
      {
        path: 'utility/settingtimbangan',
        element: <SettingTimbanganPage />,
      },
      {
        path: 'utility/resetnoslip',
        element: <ResetNoSlipPage />,
      },
      {
        path: 'utility/ubahpassword',
        element: <UbahPasswordPage />,
      },
      {
        path: 'utility/settingpassword',
        element: <SettingPasswordPage />,
      },
      {
        path: 'help/about',
        element: <AboutPage />,
      },
    ],
  },
]);
export default router;
