import React from "react";
import {currentRoute} from "@/utils";

type AuthControlProps = {
  backup?: React.ReactNode;
  permissionControl?: string[] | (() => boolean);
  children: ((hasPermission: boolean) => React.ReactNode) | React.ReactNode;
};

export const AuthControl = (props: AuthControlProps) => {
  const {route} = currentRoute();
  const {backup, children, permissionControl} = props;
  const _permissionControl = route.route.meta?.auth?.permissionControl;
  const hasPermission =
    typeof permissionControl === "function"
      ? permissionControl()
      : !!_permissionControl?.filter(item => permissionControl?.includes(item))?.length;
  const renderContent = (hasPermission: boolean) => {
    if (typeof children === "function") {
      return children(hasPermission);
    }
    return hasPermission ? children : backup ?? null;
  };
  return <>{renderContent(hasPermission)}</>;
};
