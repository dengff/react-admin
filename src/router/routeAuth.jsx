import {
  Navigate,
  useLocation,
  matchRoutes,
  useNavigate,
} from 'react-router-dom';
import {getToken} from '@/utils/index.js';
import store from '@/store/index.js';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {routeConfig} from '@/router/index.jsx';
import {getUserInfo} from '@/store/global/actions.js';
// const token = getToken();



const RequireAuth = (props) => {
  const navigate = useNavigate();
  const globalState = useSelector(state => state.global);
  const {pathname} = useLocation();
  const location = useLocation();
  const match = matchRoutes(routeConfig, location);
  const {token, userInfo} = globalState;
  const curRoute = match.find(item => item.pathname === pathname);
  const {route} = curRoute;
  useEffect( () => {
    if (!token && pathname !== '/login') {
      return navigate('/login', {replace: true});
    }
    if (token && pathname === '/login') {
      return navigate('/home', {replace: true});
    }
    if (userInfo?.role !== "admin" && route?.meta?.auth?.roles?.length && !route?.meta?.auth?.roles?.includes(userInfo.role)) {
      return navigate('/error', {replace: true});
    }
  }, [token, pathname]);
  return props.children;
};

export default RequireAuth;