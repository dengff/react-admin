import {matchRoutes, useLocation} from 'react-router-dom';
import {routeConfig} from '@/router/index.jsx';
export const useRoute = () => {
  const location = useLocation();
  const match = matchRoutes(routeConfig, location);
  return match.find(item => item.pathname === location.pathname);
};