import toHeaderAction from "@/store/topHeader/constants";
import type {TabList} from "@/store/topHeader/reducers";


export type SetTabs = {
  type: typeof toHeaderAction.SET_TABS,
  tabList: TabList[],
}
export type SetTabsActiveKey = {
  type: typeof toHeaderAction.SET_TABS_ACTIVE_KEY,
  activeKey: string,
}
export type SetLayoutItems = {
  type: typeof toHeaderAction.SET_PAGE_LAYOUT_ITEMS,
  layoutItems: string[],
}
export type SetLayoutMode = {
  type: typeof toHeaderAction.SET_LAYOUT_MODE,
  layoutMode:  "classicLayout" | "landscapeLayout"|"portraitLayout",
}
export type ResetTopHeaderState = {
  type: typeof toHeaderAction.RESET_TOP_HEADER_STATE,
}
export type UpdateCollapseAction = {
  type: typeof toHeaderAction.UPDATE_COLLAPSE,
  collapsed: boolean,
}
export type ToHeaderAction =
  | SetTabs
  | SetTabsActiveKey
  | SetLayoutItems
  | SetLayoutMode
  | ResetTopHeaderState
  | UpdateCollapseAction