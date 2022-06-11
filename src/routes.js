import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';

import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Vehicle from './pages/Vehicle/Vehicle';
import DashboardApp from './pages/DashboardApp';
import Staff from './pages/Staff/Staff';
import AddStaff from './pages/Staff/AddStaff';
import AddCustomer from './pages/Customer/AddCustomer';
import AddVehicle from './pages/Vehicle/AddVehicle';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'staff', element: <Staff /> },
        { path: 'vehicle', element: <Vehicle /> },
        { path: 'add-vehicle', element: <AddVehicle /> },
        { path: 'blog', element: <Blog /> },
        { path: 'add-staff', element: <AddStaff /> },
        { path: 'add-customer', element: <AddCustomer /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Login /> },
        // { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
