import React from 'react';
import {Layout} from '../components';
import Logo from '../components/Logo';
import {StackProfile} from '../stacknavigator';

export const Profile = ({children, props}) => {
  return (
    <Layout>
      <Logo />
      <StackProfile />
    </Layout>
  );
};
