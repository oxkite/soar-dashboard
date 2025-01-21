import { lazy } from 'react';
import Loadable from '../third-party/Loadable';
import Dashboard from '../pages/Dashboard';
import Setting from '../pages/Setting';

const DefaultLayout = Loadable(lazy(() => import('../layouts/DefaultLayout')));

const CoreRoutes = {
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '/overview',
      title: 'Dashboard',
      element: <Dashboard />,
    },
    {
      path: '/transaction',
      title: 'Transaction',
      element: <>Transaction</>,
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
      element: <Setting />,
    },
  ],
};

export default CoreRoutes;
