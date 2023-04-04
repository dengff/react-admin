import globalAction from "@/store/global/constants";
import type {IUserInfo} from "@/store/global/reducers";

export type UpdateCollapseAction = {
  type: typeof globalAction.UPDATE_COLLAPSE,
  collapsed: boolean,
}

export type SetUserTokenAction = {
  type: typeof globalAction.USER_SET_USER_TOKEN,
  token: string,
}

export type  SetUserInfoAction = {
  type: typeof globalAction.USER_SET_USER_INFO,
  userInfo: IUserInfo,
};

export type ResetUserInfoAction = {
  type: typeof globalAction.USER_RESET_USER,

}

export type GlobalAction =
  | UpdateCollapseAction
  | SetUserTokenAction
  | SetUserInfoAction
  | ResetUserInfoAction




