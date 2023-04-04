import AuthPage from "@/page/Auth/PermissionPage/Component/AuthPage";
import React from "react";

const Editor = () => {
  return (
    <AuthPage
      fontColor={"rgba(75, 192, 200, .5)"}
      content={["Editor-Page", "", "权限role为 [ Editor ] 可见"]}/>
  );
};

export default Editor;