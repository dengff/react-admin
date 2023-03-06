import AuthPage from '@/page/Auth/PermissionPage/Component/AuthPage.jsx';

const EditorGuest = () => {
  return (
    <AuthPage
      fontColor={"rgba(255, 140, 0, .5)"}
      content={['Editor And Guest-Page',"", 'role为 [ Editor ][ Guest ] 均可见']}/>
  );
};

export default EditorGuest;