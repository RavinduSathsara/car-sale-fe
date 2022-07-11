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
import CustomerForm from './pages/Customer/CustomerForm';
import UpdateVehicle from './pages/Vehicle/UpdateVehicle';
import ViewStaff from './pages/Staff/ViewStaff';
import UpdateStaff from './pages/Staff/UpdateStaff';
import SwapDeal from './pages/Swap/SwapDeal';
import VehicleInquiry from './pages/VehicleInquiry/VehicleInquiry';
import TestRun from './pages/TestRun/TestRun';
import ViewVehicleInquiry from './pages/VehicleInquiry/ViewVehicleInquiry';
import ViewSwapDeal from './pages/Swap/ViewSwapDeal';
import ViewTestRun from './pages/TestRun/ViewTestRun';
import ViewVehicle from './pages/Vehicle/ViewVehicle';

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
        { path: 'update-vehicle/:id', element: <UpdateVehicle /> },
        { path: 'view-vehicle/:id', element: <ViewVehicle /> },
        { path: 'blog', element: <Blog /> },
        { path: 'add-staff', element: <AddStaff /> },
        { path: 'view-staff/:id', element: <ViewStaff /> },
        { path: 'update-staff/:id', element: <UpdateStaff /> },
        { path: 'add-customer', element: <AddCustomer /> },
        { path: 'add-customer-form', element: <CustomerForm /> },
        { path: 'swap', element: <SwapDeal /> },
        { path: 'view-swap-deal/:id', element: <ViewSwapDeal /> },
        { path: 'inquiry', element: <VehicleInquiry /> },
        { path: 'view-vehicle-inquiry/:id', element: <ViewVehicleInquiry /> },
        { path: 'test-run', element: <TestRun /> },
        { path: 'view-test-run/:id', element: <ViewTestRun /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
