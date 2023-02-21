
export const getToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) return token;
  return undefined;

};

export const setToken = (token)=>{
  if(!token) return
  localStorage.setItem("token",JSON.stringify(token))

}

export const setUserInfo = info=>{

  localStorage.setItem("user-info",JSON.stringify(info))

}
export const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  if (userInfo) return userInfo;
  return undefined;

};