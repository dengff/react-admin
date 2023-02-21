import {Navigate} from 'react-router-dom';

import Home from '@/page/Home/index';
import {SearchPanel2, GridLayout} from '@/page/Assembly/index.jsx';

const routes = [
  {
    path: '/home',
    element: <Home/>,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/form-page',
    element: <>表单</>,
    meta: {
      title: '表单',
    },
  },
  {
    path: '/table-page',
    element: <>表格</>,
    meta: {
      title: '表格',
    },
  },
  {
    path: '/assembly',
    // element: <Navigate to="/assembly/grid-layout"/>,
    meta: { // roles:["admin","editor","guest"]
      title: '常用组件',
    },
    children: [
      {
        path: '/assembly/grid-layout',
        element: <GridLayout/>,
        meta: {
          title: '布局组件',
        },
      },
      {
        path: '/assembly/search-panel2',
        element: <SearchPanel2/>,
        meta: {
          title: '查询组件2',
        },
      },
    ],
  },

  {
    path: '/admin-page',
    element: <h2>ADMIN PAGE</h2>,
    meta: {
      title:"ADMIN PAGE",
      roles: ['admin'],
    },
  },
  {
    path: '/editor-page',
    element: <h2>EDITOR PAGE</h2>,
    meta: {
      title:"EDITOR PAGE",
      roles: ['editor'],
    },
  },
  {
    path: '/guest-page',
    element: <h2>GUEST PAGE</h2>,
    meta: {
      title:"GUEST PAGE",

      roles: ['guest'],
    },
  },
  {
    path: '/editor-guest',
    element: <h2>EDITOR GUEST PAGE</h2>,
    meta: {
      title:"EDITOR GUEST PAGE",
      roles: ['guest',"editor"],
    },
  },

];

export default routes;