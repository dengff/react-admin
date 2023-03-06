import AuthPage from '@/page/Auth/PermissionPage/Component/AuthPage.jsx';

const Admin = () => {
  return (
    <AuthPage
      content={['Admin-Page',"", '权限role为 [ Admin ] 可见']}
      fontColor={"rgba(254, 172, 94, .5)"}
    />
  );
};

export default Admin;