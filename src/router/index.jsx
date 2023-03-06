import {Navigate, useRoutes} from 'react-router-dom';
import {lazy} from 'react';
import routes, {lazyLoad} from '@/router/routes/index.jsx';

export const routeConfig = [
  {
    path: '/',
    element: (<Navigate to="/home"/>),
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
