import globalAction from "@/store/global/constants";
import type {IUserInfo} from "@/store/global/reducers";

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
  | SetUserTokenAction
  | SetUserInfoAction
  | ResetUserInfoAction




