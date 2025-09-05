export const adminMenu = [
    // quản lý người dùng
    {
        //hệ thống
        name: 'menu.admin.user-manage',
        menus: [
            { name: 'menu.admin.crud', link: '/system/user-manage' },
            { name: 'menu.admin.crud-redux', link: '/system/user-redux' },
            {
                name: 'menu.admin.doctor-manage', link:' /system/doctor-manage'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ],
            },
            { name: 'menu.admin.admin-manage', link: '/system/admin-manage' }
           
        ],
    },
    // quản lý phòng khám
    {
        //hệ thống
        name: 'menu.admin.clinic-manage',
        menus: [
            { name: 'menu.admin.clinic-manage', link: '/system/clinic-manage' },
         
        ],
    },
     //Chuyên khoa
    {
        //hệ thống
        name: 'menu.admin.specialty-manage',
        menus: [
            { name: 'menu.admin.specialty-manage', link: '/system/specialty-manage' },
         
        ],
    },
     // Bài đăng
    {
        //hệ thống
        name: 'menu.admin.handbook-manage',
        menus: [
            { name: 'menu.admin.handbook-manage', link: '/system/handbook-manage' },
         
        ],
    },
];
