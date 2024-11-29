import { InboxOutlined } from '@ant-design/icons'

export const menuItems = [
  {
    key: 'warehouse',
    label: 'Warehouse Management',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse',
    utilities: true,
  },
  {
    key: 'add',
    label: 'ADD',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/add',
    utilities: true,
  },
]

export const menuSettingItems = [
  {
    id: 2,
    key: 'warehouse',
    label: 'WAREHOUSING',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse/warehousing',
    type: 'submenu',
    subMenu: [
      {
        key: 'warehousing-1-1',
        label: 'BARCODE PRINT',
        link: '/u/warehouse/warehousing/barcode-print',
      },
      {
        key: 'warehousing-1-2',
        label: 'BARCODE CHANGE',
        link: '/u/warehouse/warehousing/barcode-change',
      },
      {
        key: 'warehousing-1-3',
        label: 'BARCODE CONFIRM',
        link: '/u/warehouse/warehousing/barcode-confirm',
      },
    ],
  },
  {
    id: 3,
    key: 'warehouse',
    label: 'KITTING',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse/kitting',
    type: 'submenu',
    subMenu: [
      {
        key: 'kitting-1-1',
        label: 'CONFIRM',
        link: '/u/warehouse/kitting/confirm',
      },
      {
        key: 'kitting-1-2',
        label: 'KITTING OUT',
        link: '/u/warehouse/kitting/kitting-out',
      },
      {
        key: 'kitting-1-3',
        label: '1D TO 2D PRINT',
        link: '/u/warehouse/kitting/1d-to-2d-print',
      },
    ],
  },
  {
    id: 5,
    key: 'warehouse',
    label: 'MATERIAL',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/warehouse/material',
    type: 'submenu',
    subMenu: [
      {
        key: 'material-1-1',
        label: 'DELIVERY LIST',
        link: '/u/warehouse/material/delivery-list',
      },
      {
        key: 'material-1-2',
        label: 'WAITING IQC STOCK IN',
        link: '/u/warehouse/material/waiting-iqc-stock-in/none',
      },
      {
        key: 'material-1-3',
        label: 'WAITING IQC STOCK STATUS',
        link: '/u/warehouse/material/waiting-iqc-stock-status',
      },
      {
        key: 'material-1-4',
        label: 'STOCK OUT REQUEST',
        link: '/u/warehouse/material/stock-out-request',
      },
      {
        key: 'material-1-5',
        label: 'STOCK OUT (FIFO)',
        link: '/u/warehouse/material/stock-out-fifo',
      },
      {
        key: 'material-1-6',
        label: 'MATERIAL STOCK IN',
        link: '/u/warehouse/material/material-stock-in',
      },
      {
        key: 'material-1-7',
        label: 'CONVERT YYYYMM',
        link: '/u/warehouse/material/convert-yyyymm',
      },
      {
        key: 'material-1-8',
        label: 'MATERIAL STOCK IN (BULKID)',
        link: '/u/warehouse/material/material-stock-in-bulkid',
      },
    ],
  },
  {
    id: 4,
    key: 'add2',
    label: 'ADD',
    icon: <InboxOutlined style={{ fontSize: '20px' }} />,
    link: '/u/add',
    type: 'menu',
  },
]
