import {Tabs,Button} from 'antd';
import {useEffect} from 'react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@/hooks/index.js';
import {addTabs, deleteCurrentTab} from '@/store/topHeader/actions.js';
import {connect} from 'react-redux';
import TabBarExtraRight from '@/page/Layout/components/header/TabBarExtraRight.jsx';
const HeaderTabs = (props) => {
  const {addTabs, deleteCurrentTab} = props;
  const route = useRoute();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // dispatch({type: actionsType.REMOVE_TABS, tabList: [..._tabList]});

  let {tabList, activeKey} = useSelector(state => state.topHeader,shallowEqual);
  useEffect(() => {
    const {pathname} = location;
    addTabs(route, pathname);
  }, [location.pathname]);

  const onEdit = (targetKey, action) => {
    deleteCurrentTab(targetKey);
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