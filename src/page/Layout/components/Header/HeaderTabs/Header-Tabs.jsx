import {Tabs} from 'antd';
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {connect, shallowEqual, useDispatch, useSelector} from 'react-redux';
import {currentRoute} from '@/utils/index.js';
import {addTabs, deleteCurrentTab} from '@/store/topHeader/actions.js';
import TabBarExtraRight
  from '@/page/Layout/components/Header/HeaderTabs/TabBarExtraRight.jsx';

const HeaderTabs = (props) => {
  const {addTabs, deleteCurrentTab} = props;
  const route = currentRoute();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // dispatch({type: actionsType.REMOVE_TABS, tabList: [..._tabList]});

  let {tabList, activeKey} = useSelector(state => state.topHeader,
    shallowEqual);
  useEffect(() => {
    const {pathname} = location;
    addTabs(route, pathname);
  }, [location.pathname]);

  const onEdit = (targetKey, action) => {
    deleteCurrentTab(targetKey).then(({key}) => navigate(key));
  };
  const onTabClick = (key) => navigate(key);
  return (
    <Tabs
      type="editable-card"
      hideAdd
      size={'small'}
      onChange={() => {
      }}
      onEdit={onEdit}
      onTabClick={onTabClick}
      activeKey={activeKey}
      items={tabList}
      tabBarExtraContent={<TabBarExtraRight/>}
    />
  );
};

export default connect(null, {addTabs, deleteCurrentTab})(HeaderTabs);