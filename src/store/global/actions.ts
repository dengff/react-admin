import {reqLogin, reqUserInfo, reqLogout} from "@/common/api";
import globalAction from "./constants";
import {setToken, setUserInfo as setInfo} from "@/utils";
import {resetTopHeaderState} from "@/store/topHeader/actions";
import {resetThemeState} from "@/store/theme/actions";
import type {UpdateCollapseAction, ResetUserInfoAction, SetUserInfoAction, SetUserTokenAction} from "./actionTypes";
import type {UserInfo} from "@/common/api/type";
import type {AppThunk} from "@/store";

export const login = ({
                        username,
                        password
                      }: { username: string, password: string }): AppThunk<ReturnType<typeof reqLogin>> => {
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
export const getUserInfo = (token: string): AppThunk => {
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
export const logout = (token: string): AppThunk => {
  return (dispatch) => new Promise((resolve, reject) => {
    reqLogout(token).then(res => {
      if (res?.data.status === 0) {
        localStorage.removeItem("token");
        dispatch(resetUserInfo());
        dispatch(setUserToken(""));
        dispatch(resetTopHeaderState());
        // dispatch(resetThemeState());
        resolve(true);
      }
    }).catch(err => reject(false));

  });

};
export const updateCollapse = (isCollapse: boolean): UpdateCollapseAction => ({
  type: globalAction.UPDATE_COLLAPSE,
  collapsed: isCollapse,
});

const setUserToken = (token: string): SetUserTokenAction => ({
  type: globalAction.USER_SET_USER_TOKEN,
  token: token,
});

const setUserInfo = (userInfo: UserInfo): SetUserInfoAction => {
  return {
    type: globalAction.USER_SET_USER_INFO,
    userInfo: userInfo,
  };
};

const resetUserInfo = (): ResetUserInfoAction => (
  {type: globalAction.USER_RESET_USER}
);