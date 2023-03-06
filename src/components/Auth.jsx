import React from 'react';

const Auth = (props) => {
  const {render, fallback, auth, ...rest} = props;
  const Component = render && render();
  let hasAuth = false;
  if (typeof auth === 'function') {
    hasAuth = auth();
  } else if (typeof auth === 'boolean') {
    hasAuth = auth;
  }
  if (hasAuth) return Component;
  return <>{fallback ? fallback : null}</>;
};

export default Auth;