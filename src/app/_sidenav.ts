import { INavData } from '@coreui/angular';

export const sideNavItems: INavData[] = [
  {
    name: 'หน้าหลัก',
    url: '/home',
    icon: 'icon-home'
  },
  {
    title: true,
    name: 'โปรแกรม'
  },
  {
    name: 'ค้นหาใบอนุญาติ',
    url: '/search-license',
    icon: 'cui-magnifying-glass'
  }
];
