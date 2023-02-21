import * as actionTypes from './constants.js';
import {getToken, getUserInfo} from '@/utils/index.js';

const initUserInfo = {
  name: '',
  role: '',
  avatar: '',
  token: getToken(),
  userInfo: getUserInfo(),
  collapsed: false,
};

export default function reducer(state = initUserInfo, action) {
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
      return {};
    default :
      return state;

  }

};

