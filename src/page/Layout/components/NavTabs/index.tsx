import {Tabs} from 'antd';
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {connect, shallowEqual, useDispatch, useSelector} from 'react-redux';
import {currentRoute} from '@/utils';
import {addTabs, deleteCurrentTab} from '@/store/topHeader/actions';
import TabBarExtraRight
  from '@/page/Layout/components/NavTabs/TabBarExtraRight';
import Auth from '@/components/Auth';
import React from 'react';

const HeaderTabs = (props) => {
  const {addTabs, deleteCurrentTab,style} = props;
  const route = currentRoute();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  // dispatch({type: actionsType.REMOVE_TABS, tabList: [..._tabList]});

  let {tabList, activeKey} = useSelector((state:any) => state.topHeader,
    shallowEqual);
  const {pageConfig} = useSelector((state:any) => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  useEffect(() => {
    const {pathname} = location;
    addTabs(route, pathname);
  }, [location.pathname]);

  const onEdit = (targetKey, action) => {
    deleteCurrentTab(targetKey).then(({key}) => navigate(key));
  };
  const onTabClick = (key) => navigate(key);
  return (
    <Auth
      auth={layoutItems?.includes('tabs')}
      render={() => <Tabs
        type="editable-card"
        hideAdd
        size={'small'}
        onChange={() => {
        }}
        tabBarGutter={-1}
        animated
        onEdit={onEdit}
        onTabClick={onTabClick}
        activeKey={activeKey}
        items={tabList}
        tabBarExtraContent={<TabBarExtraRight/>}
        style={style}
      />}

    />

  );
};

export default connect(null, {addTabs, deleteCurrentTab})(HeaderTabs);