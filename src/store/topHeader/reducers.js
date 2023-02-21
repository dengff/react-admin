import * as actionsType from './constants.js';

const initTabs = {

  tabList: [
    {
      label: '首页',
      key: '/home',
      closable: false,
    }],
  activeKey: '/home',
};

export default function reducer(state = initTabs, action) {
  switch (action.type) {
    case actionsType.SET_TABS:
      return {
        ...state,
        tabList: action.tabList,

      };
    case actionsType.DELETE_CURRENT_TAB:
      return {
        ...state,
        tabList: action.tabList,
      };
    case actionsType.DELETE_ALL_TAB:
      return {
        ...state,
        tabList: action.tabList,
      };
    case actionsType.DELETE_OTHER_TAB:
      return {
        ...state,
        tabList: action.tabList,
      };
    case actionsType.SET_TABS_ACTIVE_KEY:
      return {
        ...state,
        activeKey: action.activeKey,
      };
    default :
      return state;
  }

}