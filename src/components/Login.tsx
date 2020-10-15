import React from 'react';

import { BoxLogin } from '../styles/components/user';

type LoginProps = {
  login: string;
  htmlUrl: string;
};

const Login = ({ login, htmlUrl }: LoginProps) => {
  return (
    <BoxLogin target="_blank" rel="noopener noreferrer" href={htmlUrl}>
    <p>{login}</p>
  </BoxLogin>
  );
};

export default Login;
