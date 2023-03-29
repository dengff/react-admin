import {reqLogin, reqUserInfo, reqLogout} from '@/common/api';
import actionsType from './constants';
import {setToken, setUserInfo as setInfo} from '@/utils';
import {resetTopHeaderState} from '@/store/topHeader/actions';
import {resetThemeState} from '@/store/theme/actions';

export const login = ({username, password}: { username: string, password: string }) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      reqLogin({username, password}).then(res => {
        const {status, token} = res.data;
        if (status === 0) {
          dispatch(setUserToken(token));
          setToken(token);
          resolve(res);
        } else {
          reject();
        }
      });
    });
  };
};
export const getUserInfo = (token:string) => {
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
export const logout = (token:string) => {
  return dispatch => new Promise((resolve, reject) => {
    reqLogout(token).then(res => {
      if (res?.data.status === 0) {
        dispatch(setUserToken(undefined));
        dispatch(resetUserInfo());
        dispatch(resetTopHeaderState());
        // dispatch(resetThemeState());
        window.localStorage.clear();
        resolve(true);
      }
    }).catch(err => reject(err));

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