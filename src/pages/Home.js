import {Layout, AboutUs, Motto, AllProducts} from '../components';
import React from 'react';
import {ScrollView} from 'react-native';

export function Home(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Layout {...props}>
      <AllProducts {...props} />
      <ScrollView>
        <AboutUs {...props} />
        <Motto {...props} />
      </ScrollView>
    </Layout>
  );
}
