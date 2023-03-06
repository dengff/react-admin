import * as actionsType from '@/store/topHeader/constants.js';
import {useNavigate} from 'react-router-dom';

export const addTabs = (route, key) => {
  return (dispatch, getState) => {
    const {topHeader} = getState();
    const {tabList} = topHeader;
    if (tabList.every(item => item.key !== key)) {
      const babInfo = {
        key: route.pathname,
        label: route?.route?.meta?.title,
      };
      dispatch(setTabs([...tabList, babInfo]));
    }
    dispatch(setTabsActiveKey(key));
  };
};

export const deleteCurrentTab = (key) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    if (key === '/home') return;
    const {topHeader} = getState();
    const {tabList} = topHeader;
    let preIndex = null;
    const _tabList = tabList.filter((item, index) => {
      if (item.key !== key) {
        return true;
      }
      if (item.key === key) {
        preIndex = index;
      }
    });
    const preItem = tabList[preIndex - 1];
    dispatch(removeCurrentTabs(_tabList));
    dispatch(setTabsActiveKey(preItem?.['key']));
    resolve(preItem);
  });
};
export const deleteOtherTab = (key) => {
  return (dispatch, getState) => {
    const {topHeader} = getState();
    const {tabList} = topHeader;
    const _tabList = tabList.filter(
      item => item.key === key || item.key === '/home');
    dispatch(removeOtherTabs(_tabList));
  };
};
export const deleteAllTab = (key) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    const {topHeader} = getState();
    const {tabList} = topHeader;
    const _tabList = tabList.filter(item => item.key === '/home');
    dispatch(removeAllTabs(_tabList));
    resolve();
  });

};

export const changeLayout = (items) => dispatch => {
  dispatch(setLayoutItems(items));
};

const removeCurrentTabs = (tabList) => ({
  type: actionsType.DELETE_CURRENT_TAB,
  tabList: tabList,
});
const removeOtherTabs = (tabList) => ({
  type: actionsType.DELETE_OTHER_TAB,
  tabList: tabList,
});
const removeAllTabs = (tabList) => ({
  type: actionsType.DELETE_ALL_TAB,
  tabList: tabList,
});

const setTabs = (tabList) => ({
  type: actionsType.SET_TABS,
  tabList: tabList,
});
const setTabsActiveKey = (activeKey) => ({
  type: actionsType.SET_TABS_ACTIVE_KEY,
  activeKey: activeKey,
});
const setLayoutItems = (layoutItems) => ({
  type: actionsType.SET_PAGE_LAYOUT_ITEMS,
  layoutItems: layoutItems,
});

