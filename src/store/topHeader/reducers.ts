import actionsType from "./constants";
import {Reducer} from "redux";
import type {ToHeaderAction} from "@/store/topHeader/actionTypes";

export interface TabList {
  label: string;
  key: string;
  closable: boolean;
}

export interface PageConfig {
  layoutItems: string[];
  layoutMode: string;
}

export interface TopHeader {
  tabList: TabList[];
  activeKey: string;
  pageConfig: PageConfig;
}

const initTabs: TopHeader = {

  tabList: [
    {
      label: "首页",
      key: "/home",
      closable: false,
    }],
  activeKey: "/home",
  pageConfig: {
    layoutItems: ["tabs", "breadcrumb", "logo", "pageFooter"],
    layoutMode: "classicLayout",
  },
};

const reducer: Reducer<TopHeader, ToHeaderAction> = (state = initTabs, action) => {
  switch (action.type) {
    case actionsType.SET_TABS:
      return {
        ...state,
        tabList: action.tabList,

      };

    case actionsType.SET_TABS_ACTIVE_KEY:
      return {
        ...state,
        activeKey: action.activeKey,
      };
    case actionsType.SET_PAGE_LAYOUT_ITEMS:
      return {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          layoutItems: action.layoutItems,
        },
      };
    case actionsType.SET_LAYOUT_MODE:
      return {
        ...state,
        pageConfig: {
          ...state.pageConfig,
          layoutMode: action.layoutMode,
        },
      };
    case actionsType.RESET_TOP_HEADER_STATE:
      return initTabs;
    default :
      return state;
  }
};
export default reducer;