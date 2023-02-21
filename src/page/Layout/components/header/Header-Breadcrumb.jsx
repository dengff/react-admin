import {Breadcrumb} from 'antd';
import {matchRoutes, useLocation, useNavigate} from 'react-router-dom';
import {routeConfig} from '@/router/index.jsx';

const HeaderBreadcrumb = (props) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const match = matchRoutes(routeConfig, location);
  const routeMatch = match.filter(
    item => item.pathname !== '/' && item.pathname !== '/home');
  return (
    <div>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <span>首页</span>
        </Breadcrumb.Item>
        {
          routeMatch.map(item => (
            <Breadcrumb.Item key={item?.pathname}>
              <span>{item?.route?.meta?.title}</span>
            </Breadcrumb.Item>

          ))
        }
      </Breadcrumb>
    </div>
  );
};

export default HeaderBreadcrumb;