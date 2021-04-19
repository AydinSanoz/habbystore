import {Layout, AboutUs, Motto, AllProducts} from '../components';
import React from 'react';

export function Home(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Layout {...props}>
      <AllProducts {...props} />
      <AboutUs {...props} />
      <Motto {...props} />
    </Layout>
  );
}
