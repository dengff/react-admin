import {useRoutes, Navigate} from 'react-router-dom';

import Error from '@/page/error';
import Login from '@/page/login/index';
import Layout from "@/page/Layout/inde.jsx"
import routes from '@/router/routes/index.jsx';
export const routeConfig = [
  {
    path: '/',
    element: (<Navigate to="/home"/>),
  },
  {
    path: "/login",
    element: <Login/>
  },
  //  {
  //   path: '/',
  //   element: <Navigate to="home" />
  // },
  {
    element: (<Layout/>),
    children:[
      ...routes
    ]
  },

  {
    path:'*',
    element: <Error/>
  }

];

const Router = () => {
  return useRoutes(routeConfig);
};

export default Router;
