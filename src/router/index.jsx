/* eslint-disable react/prop-types */
import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '@/features/auth/pages/LandingPage';
import LoginPage from '@/features/auth/pages/LoginPage';
import { LanggananPage, MaterialPage, PenimbanganKeduaPage, PenimbanganPertamaPage, PrinterSetupPage } from '@/features/file/pages';
import { TimbanganPage } from '@/features/timbangan/pages';
import { LaporanHarianPage, SummaryReportPage } from '@/features/laporan/pages';
import { ResetNoSlipPage, SettingPasswordPage, SettingTimbanganPage, UbahPasswordPage } from '@/features/utility/pages';
import { AboutPage } from '@/features/help/pages';

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
        element: <PenimbanganPertamaPage />,
      },
      {
        path: 'file/penimbangankedua',
        element: <PenimbanganKeduaPage />,
      },
      {
        path: 'file/printsetup',
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
