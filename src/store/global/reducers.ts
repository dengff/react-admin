import {getToken, getUserInfo} from '@/utils';
import {Reducer} from "react";
import actionTypes from "./constants";

export interface InitUserInfo {
  name: string
  role: string
  avatar: string
  token: string | (() => string)
  userInfo: () => {}
  collapsed: boolean
}


const initUserInfo: InitUserInfo = {
  name: '',
  role: '',
  avatar: '',
  token: getToken(),
  userInfo: getUserInfo(),
  collapsed: false,
};

const reducer: Reducer<InitUserInfo, any> = (state: InitUserInfo = initUserInfo, action) => {
  switch (action.type) {
    case actionTypes.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.USER_SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case actionTypes.UPDATE_COLLAPSE:
      return {
        ...state,
        collapsed: action.collapsed,
      };

    case actionTypes.USER_RESET_USER:
      return {
        name: '',
        role: '',
        avatar: '',
        token: "",
        userInfo: {},
        collapsed: false,
      };
    default :
      return state;

  }
}
export default reducer


