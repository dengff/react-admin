import {lazy, Suspense} from 'react';
import {Spin} from 'antd';

/*  element: lazyLoad(React.lazy(() => import('@/views/welcome'))),*/
export function lazyLoad(Comp) {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      }
    >
      <Comp/>
    </Suspense>
  );
}

const routes = [
  {
    path: '/home',
    element: lazyLoad(lazy(() => import('@/page/Home/index'))),
    meta: {
      title: '首页',
    },
  },
  {
    // element: <>表单</>,
    path: '/form',
    meta: {
      title: '表单',
    },
    children: [
      {
        path: '/form/dynamic',
        element: lazyLoad(lazy(() => import('@/page/Form/DynamicForms.jsx'))),
        meta: {
          title: '动态表单',
        },
      },
      {
        path: '/form/steps',
        element: lazyLoad(lazy(() => import('@/page/Form/StepsForm.jsx'))),
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
    },
    children: [
      {
        path: '/table/pro',
        element: lazyLoad(
          lazy(() => import('@/page/Table/ProTable/proTable.jsx'))),
        meta: {
          title: '查询表格',
        },
      },
      {
        path: '/table/detail',
        element: lazyLoad(
          lazy(() => import('@/page/Table/ProTable/tableDetail.jsx'))),
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
    },
    children: [
      {
        path: '/auth/page',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionPage/index.jsx'))),
        meta: {
          title: '界面权限',
        },
      },
      {
        path: '/auth/comp',
        element: lazyLoad(
          lazy(() => import('@/page/Auth/PermissionComponent/index.jsx'))),
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
          lazy(() => import('@/page/Auth/PermissionPage/Admin.jsx'))),
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
          lazy(() => import('@/page/Auth/PermissionPage/Editor.jsx'))),
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
          lazy(() => import('@/page/Auth/PermissionPage/Guest.jsx'))),
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
          lazy(() => import('@/page/Auth/PermissionPage/EditorGuest.jsx'))),

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
    },
    children: [
      {
        path: '/system/account-management',
        element: <h2>账号管理</h2>,
        meta: {
          title: '账号管理',
        },
      },
      {
        path: '/system/role-management',
        element: <h2>角色管理</h2>,
        meta: {
          title: '角色管理',
        },
      },
      {
        path: '/system/department-management',
        element: <h2>部门管理</h2>,
        meta: {
          title: '部门管理',
        },
      },
    ],
  },
  {
    path: '/other',
    meta: {
      title: '其他',
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

];

export default routes;