import React from "react";
import {currentRoute} from "@/utils";

type AuthControlProps = {
  backup?: React.ReactNode;
  permissionControl?: string[] | (() => boolean)
};

export const AuthControl = (props: React.PropsWithChildren<AuthControlProps>) => {
  const {route} = currentRoute();
  const {backup, children, permissionControl} = props;
  const _permissionControl = route.route.meta?.auth?.permissionControl;
  let hasPermission = null;
  if (typeof permissionControl === "function") {
    hasPermission = permissionControl();
  } else {
    hasPermission = _permissionControl?.filter(item => permissionControl?.includes(item));
  }
  if (hasPermission) {
    return <>{convertReactElement(children)}</>;
  }
  if (backup) {
    return <>{convertReactElement(backup)}</>;
  }
  return null;
};

function convertReactElement(node: React.ReactNode): React.ReactElement {
  if (!React.isValidElement(node)) {
    return <>{node}</>;
  }
  return node;
}