import {Navigate, useRoutes} from 'react-router-dom';
import {lazy} from 'react';
import routes from '@/router/routes/index.jsx';
import {lazyLoad} from '@/utils/lazyload';

export const routeConfig = [
  {
    path: '/',
    element: (<Navigate to="/dashboard/workplace"/>),
  },
  {
    path: "/login",
    element: lazyLoad(lazy(()=>import("@/page/Login/index")))
  },
  {
    element: lazyLoad(lazy(()=>import("@/page/Layout/index.jsx"))),
    children:[
      ...routes
    ]
  },
  {
    path:'*',
    element: lazyLoad(lazy(()=>import("@/page/Error")))
  }

];

const Router = () => {
  return useRoutes(routeConfig);
};

export default Router;
