import {reqLogin, reqUserInfo, reqLogout} from '@/api/index.js';
import * as actionsType from './constants.js';
import {setToken, setUserInfo as setInfo} from '@/utils/index.js';

export const login = ({username, password}) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      reqLogin({username, password}).then(res => {
        const {status, token, message} = res;
        if (status === 0) {
          dispatch(setUserToken(token));
          setToken(token);
          resolve(res);
        } else {
          reject(message);
        }
      });
    });
  };
};
export const getUserInfo = (token) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      reqUserInfo(token).then(res => {
        const {userInfo} = res;
        dispatch(setUserInfo(userInfo));
        setInfo(userInfo);
        resolve(res);
      });
    });
  };
};
export const logout = (token) => {
  return dispatch => new Promise((resolve, reject) => {
    reqLogout(token).then(res => {
      if (res?.status === 0) {
        dispatch(setUserToken(undefined));
        dispatch(resetUserInfo());
        window.localStorage.clear();
      }
    });

  });

};
export const updateCollapse = (isCollapse) => ({
  type: actionsType.UPDATE_COLLAPSE,
  collapsed: isCollapse,
});

const setUserToken = (token) => ({
  type: actionsType.USER_SET_USER_TOKEN,
  token: token,
});

const setUserInfo = (userInfo) => {
  return {
    type: actionsType.USER_SET_USER_INFO,
    userInfo: userInfo,
  };
};

const resetUserInfo = () => (
  {type: actionsType.USER_RESET_USER}
);