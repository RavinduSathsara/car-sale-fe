// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'staff',
    path: '/dashboard/staff',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'vehicle',
    path: '/dashboard/vehicle',
    icon: getIcon('ant-design:car-filled'),
  },
  {
    title: 'Customer',
    path: '/dashboard/add-customer',
    icon: getIcon('material-symbols:record-voice-over-rounded'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
];

export default navConfig;
