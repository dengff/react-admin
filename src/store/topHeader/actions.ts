import toHeaderAction from "@/store/topHeader/constants";
import type {
  ResetTopHeaderState,
  SetLayoutItems,
  SetLayoutMode,
  SetTabs,
  SetTabsActiveKey
} from "@/store/topHeader/actionTypes";
import type {TabList} from "@/store/topHeader/reducers";
import type {AppThunk, RootState} from "@/store";
import type {RouteObj} from "@/router/type";
import type {AgnosticRouteMatch} from "@remix-run/router";

export const addTabs = (route: AgnosticRouteMatch<string, RouteObj>, key: string): AppThunk => {
  return (dispatch, getState) => {
    const {topHeader} = getState();
    const {tabList} = topHeader;
    if (tabList.every(item => item.key !== key)) {
      const babInfo = {
        key: route.pathname,
        label: route?.route?.meta?.title!,
        closable: true
      };
      dispatch(setTabs([...tabList, babInfo]));
    }
    dispatch(setTabsActiveKey(key));
  };
};

export const deleteCurrentTab = (key: string): AppThunk<Promise<TabList>> => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    if (key === "/home") return;
    const {topHeader} = getState();
    const {tabList} = topHeader;
    let preIndex = 0;
    const _tabList = tabList.filter((item, index) => {
      if (item.key !== key) {
        return true;
      }
      if (item.key === key) {
        preIndex = index;
      }
    });
    const preItem = tabList[preIndex - 1];
    dispatch(setTabs(_tabList));
    dispatch(setTabsActiveKey(preItem?.["key"]));
    resolve(preItem);
  });
};
export const deleteOtherTab = (key: string): AppThunk => {
  return (dispatch, getState) => {
    const {topHeader} = getState();
    const {tabList} = topHeader;
    const _tabList = tabList.filter(
      item => item.key === key || item.key === "/home");
    dispatch(setTabs(_tabList));
  };
};
export const deleteAllTab = (key: string): AppThunk<Promise<boolean>> => (dispatch, getState: () => RootState) => {
  return new Promise((resolve, reject) => {
    const {topHeader} = getState();
    const {tabList} = topHeader;
    const _tabList = tabList.filter(item => item.key === "/home");
    dispatch(setTabs(_tabList));
    resolve(true);
  });

};

export const changeLayout = (items: string[]): AppThunk => dispatch => {
  dispatch(setLayoutItems(items));
};
export const changeLayoutMode = (layoutMode: string): AppThunk => dispatch => {
  if(!layoutMode) return
  dispatch(setLayoutMode(layoutMode));
};


const setTabs = (tabList: TabList[]): SetTabs => ({
  type: toHeaderAction.SET_TABS,
  tabList: tabList,
});
const setTabsActiveKey = (activeKey: string): SetTabsActiveKey => ({
  type: toHeaderAction.SET_TABS_ACTIVE_KEY,
  activeKey: activeKey,
});
const setLayoutItems = (layoutItems: string[]): SetLayoutItems => ({
  type: toHeaderAction.SET_PAGE_LAYOUT_ITEMS,
  layoutItems: layoutItems,
});
const setLayoutMode = (layoutMode: string): SetLayoutMode => ({
  type: toHeaderAction.SET_LAYOUT_MODE,
  layoutMode: layoutMode,
});
export const resetTopHeaderState = (): ResetTopHeaderState => ({
  type: toHeaderAction.RESET_TOP_HEADER_STATE,
});


