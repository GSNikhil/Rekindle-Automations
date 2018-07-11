export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  // {
  //   name: 'Segments',
  //   url: '/segments',
  //   icon: 'icon-grid'
  // },
  // {
  //   name: 'Users',
  //   url: '/users',
  //   icon: 'icon-user'
  // },
  {
      name: 'Admin',
      url: '/admin',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Segment Type',
          url: '/admin/segment-type',
          icon: 'icon-tag'
        },
        {
          name: 'Segment',
          url: '/admin/segments',
          icon: 'icon-grid'
        },
        {
          name: 'User Group',
          url: '/admin/user-group',
          icon: 'icon-people'
        },
        {
          name: 'Users',
          url: '/admin/users',
          icon: 'icon-user'
        },
        {
          name: 'Bottle Type',
          url: '/admin/bottle-type',
          icon: 'icon-mouse'
        },
        {
          name: 'Bottle',
          url: '/admin/bottle',
          icon: 'icon-mouse'
        },
        {
          name: 'Device',
          url: '/admin/device',
          icon: 'icon-compass'
        },
      ]
    },
    {
      name: 'Bottle Mapping',
      url: '/bottle-map',
      icon: 'icon-cursor',
    },
];
