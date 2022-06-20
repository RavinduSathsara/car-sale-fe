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
    title: 'Swap',
    path: '/dashboard/swap',
    icon: getIcon('ic:baseline-swap-horizontal-circle'),
  },
  {
    title: 'Inquiry',
    path: '/dashboard/inquiry',
    icon: getIcon('fa-solid:question-circle'),
  },
];

export default navConfig;
