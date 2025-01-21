import { lazy } from 'react';
import Loadable from '../third-party/Loadable';
import Dashboard from '../pages/Dashboard';

const DefaultLayout = Loadable(lazy(() => import('../layouts/DefaultLayout')));

const CoreRoutes = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '/dashboard',
      title: 'Dashboard',
      element: <Dashboard />,
    },
    {
      path: '/transaction',
      title: 'Transaction',
      element: <>trans</>,
    },
    {
      path: '/accounts',
      title: 'Accounts',
      element: <>Account</>,
    },
    {
      path: '/investments',
      title: 'Investment',
      element: <>investment</>,
    },
    {
      path: '/credit-cards',
      title: 'Credit-cards',
      element: <>credit-cards</>,
    },
    {
      path: '/loans',
      title: 'Loans',
      element: <>Loans</>,
    },
    {
      path: '/services',
      title: 'Service',
      element: <>service</>,
    },
    {
      path: '/privileges',
      title: 'Privileges',
      element: <>privileges</>,
    },
    {
      path: '/setting',
      title: 'Setting',
      element: <>setting</>,
    },
  ],
};

export default CoreRoutes;
