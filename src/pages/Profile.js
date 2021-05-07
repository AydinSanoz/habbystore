import React from 'react';
import {Layout} from '../components';
import Logo from '../components/Logo';

import SignInForm from '../components/SignInForm';

export const Profile = ({children, props}) => {
  return (
    <Layout>
      <Logo />
      <SignInForm />
    </Layout>
  );
};
