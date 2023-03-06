import AuthPage from '@/page/Auth/PermissionPage/Component/AuthPage.jsx';

const Guest = () => {
  return (
    <AuthPage
      fontColor={"rgba(255, 0, 128, .5)"}
      content={['Guest-Page',"", '权限role为 [ Guest ] 可见']}/>
  );
};

export default Guest;