import React from 'react';
import {Button, Text, View} from 'react-native';
import {Layout} from '../components';
import Logo from '../components/Logo';
import {StackProfile} from '../stacknavigator';

export const Profile = props => {
  return (
    <Layout {...props}>
      <Logo />
      <StackProfile />
    </Layout>
  );
};
