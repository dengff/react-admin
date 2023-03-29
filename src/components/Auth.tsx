import React from 'react';

interface IProps {
  render?: () => React.ReactNode
  fallback?: React.ReactNode
  auth?: (() => boolean) | boolean
}

const Auth = (props: IProps)=> {
  const {render, fallback, auth, ...rest} = props;
  const Component = render && render();
  let hasAuth = false;
  if (typeof auth === 'function') {
    hasAuth = auth();
  } else if (typeof auth === 'boolean') {
    hasAuth = auth;
  }
  if (hasAuth) return Component as JSX.Element;
  return <>{fallback ? fallback : null}</>;
};

export default Auth;