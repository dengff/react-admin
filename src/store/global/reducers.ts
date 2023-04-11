import {getToken, getUserInfo} from "@/utils";
import {Reducer} from "redux";
import globalAction from "./constants";
import type {GlobalAction} from "./actionTypes";

const token = getToken();
const userInfo = getUserInfo();

export interface GlobalState {
  name: string;
  role: string;
  avatar: string;
  token: string;
  userInfo: IUserInfo;
}

export interface IUserInfo {
  id: string;
  role: string;
  name: string;
  avatar: string;
  description: string;
}


const initUserInfo: GlobalState = {
  name: "",
  role: "",
  avatar: "",
  token: token,
  userInfo: userInfo,
};

const reducer: Reducer<GlobalState, GlobalAction> = (state = initUserInfo, action) => {
  switch (action.type) {
    case globalAction.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case globalAction.USER_SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case globalAction.USER_RESET_USER:
      return initUserInfo;
    default :
      return state;

  }
};
export default reducer;


