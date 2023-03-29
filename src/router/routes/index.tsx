import {lazy} from 'react';
import {lazyLoad} from '@/utils/lazyload';
import type {RouteObj} from "@/router/type";
import React from 'react';

const routes: RouteObj[] = [
  {
    path: '/home',
    element: lazyLoad(lazy(() => import('@/page/Home'))),
    meta: {
      title: '首页',
      icon: "HomeIcon"
    },
  },
  {
    path: '/dashboard',
    meta: {
      title: '仪表盘',
      icon: "DashboardIcon"
    },
    children: [
      {
        path: "/dashboard/workplace",
        element: lazyLoad(lazy(() => import("@/page/Dashboard/Workplace"))),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "/dashboard/analyse",
        element: lazyLoad(lazy(() => import("@/page/Dashboard/Analyse"))),
        meta: {
          title: "分析页"
        }
      },

    ]
  },
  {
    // element: <>表单</>,
    path: '/form',
    meta: {
      title: '表单',
      icon: "FormIcon"
    },
    children: [
      {
        path: '/form/dynamic',
        element: lazyLoad(lazy(() => import('@/page/Form/DynamicForms'))),
        meta: {
          title: '动态表单',
        },
      },
      {
        path: '/form/steps',
        element: lazyLoad(lazy(() => import('@/page/Form/StepsForm'))),
        meta: {
          title: '分步表单',
        },
      },
    ],
  },
  {
    path: '/table',
    meta: {
      title: '表格 Table',
      icon: "TableIcon"
    },
    children: [
      {
        path: '/table/pro',
        element: lazyLoad(
          lazy(() => import('@/page/Table/ProTable/proTable'))),
        meta: {
          title: '查询表格',
        },
      },
      {
        path: '/table/detail',
        element: lazyLoad(
          lazy(() => import('@/page/Table/ProTable/tableDetail'))),
        meta: {
          hideInMenu: true,
          title: '表格详情',
        },
      },
      {
        path: '/table/edit',
        element: lazyLoad(lazy(() => import('@/page/Table/editTable'))),
        meta: {
          title: '编辑表格',
        },
      },
    ],
  },
  {
    path: '/auth',
    meta: {
      title: '权限管理',
      icon: "AuthIcon"
    },
    children: [
      {
        path: '/auth/page',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionPage'))),
        meta: {
          title: '界面权限',
        },
      },
      {
        path: '/auth/comp',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionComponent'))),
        meta: {
          title: '按钮等其他权限控制',
          auth: {
            permissionBtn: ['save'],
          },
        },
      },
      {
        path: '/auth/admin',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionPage/Admin'))),
        meta: {
          title: 'Auth-Admin-page',
          auth: {
            roles: ['admin'],
          },
        },
      },
      {
        path: '/auth/editor',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionPage/Editor'))),
        meta: {
          title: 'Auth-Editor-Page',
          auth: {
            roles: ['editor'],
          },
        },
      },
      {
        path: '/auth/guest',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionPage/Guest'))),
        meta: {
          title: 'Auth-Guest-Page',
          auth: {
            roles: ['guest'],
          },
        },
      },
      {
        path: '/auth/editor-guest',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionPage/EditorGuest'))),

        meta: {
          title: 'Auth-Editor & Guest-Page',
          auth: {
            roles: ['guest', 'editor'],
          },
        },
      },
    ],

  },
  {
    path: '/menu',
    meta: {
      title: '菜单嵌套',
      icon: "MenuIcon"
    },
    children: [
      {
        path: '/menu/menu-1',
        element: <h2>menu-1</h2>,
        meta: {
          title: '菜单 menu-1',
        },
      }, {
        path: '/menu/menu-2',
        meta: {
          title: '菜单 menu-2',
        },
        children: [
          {
            path: '/menu/menu-2/menu-2-1',
            element: <h2>menu-2-1</h2>,
            meta: {
              title: 'menu-2-1',
            },
          },
          {
            path: '/menu/menu-2/menu-2-2',
            element: <h2>menu-2-2</h2>,
            meta: {
              title: 'menu-2-2',
            },
          },
          {
            path: '/menu/menu-2/menu-2-3',
            element: <h2>menu-2-3</h2>,
            meta: {
              title: 'menu-2-3',
            },
          },
        ],
      },
      {
        path: '/menu/menu-3',
        element: <h2>menu-3</h2>,
        meta: {
          title: '菜单 menu-3',
        },
      },
    ],
  },
  {
    path: '/system',
    meta: {
      title: '系统管理',
      icon: "SystemIcon"
    },
    children: [
      {
        path: "/system/dept",
        element: lazyLoad(lazy(() => import("@/page/System/Dept"))),
        meta: {
          title: "部门管理",
        }
      },
      {
        path: '/system/role-management',
        element: lazyLoad(lazy(() => import("@/page/System/Role"))),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: '/system/menu',
        element: lazyLoad(lazy(() => import("@/page/System/Menu"))),
        meta: {
          title: '菜单管理',
        },
      },
    ],
  },
  {
    path: '/other',
    meta: {
      title: '其他',
      icon: "OthIcon"
    },
    children: [
      {
        path: '/other/file-download',
        element: <h2>文件下载</h2>,
        meta: {
          title: '文件下载',
        },
      },
    ],
  },
  {
    path: "/user",
    meta: {
      title: "个人中心",
      icon: "UserIcon"
    },
    children: [
      {
        path: "/user/info",
        element: lazyLoad(lazy(() => import("@/page/User/Info"))),
        meta: {
          title: "用户信息"
        }
      },
      {
        path: "/user/setting",
        element: lazyLoad(lazy(() => import("@/page/User/Setting"))),
        meta: {
          title: "用户设置"
        }
      },
    ]
  }

];

export default routes;