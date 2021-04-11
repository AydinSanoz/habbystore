import React from 'react';
import {ScrollView} from 'react-native';
import world from '../assets/background.mp4';
import demo from '../assets/solotex.mp4';
import {
  SearchBar,
  AboutUs,
  Motto,
  VideoComp,
  CategoryCard,
} from '../components';
import Layout from '../components/Layout';

export function Home(props) {
  return (
    <Layout {...props}>
      <SearchBar placeholder="Enter a search key" {...props} />
      <ScrollView style={{margin: 10}}>
        {/* <CategoryCard {...props} /> */}
        <AboutUs {...props} />
        {/* <VideoComp source={demo} /> */}
        <Motto {...props} />
        {/* <VideoComp source={world} /> */}
      </ScrollView>
    </Layout>
  );
}
