import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {ImageCard, HeaderText, SearchBar, IconButton} from '../components';
import HTMLView from 'react-native-htmlview';
import Layout from '../components/Layout';
import {Picker} from '@react-native-picker/picker';

export function Details(props) {
  const [selectedAttributeName, setSelectedAttributeName] = useState();
  const [selectedAttribute, setSelectedAttribute] = useState();
  const [selectedOption, setSelectedoption] = useState();
  const {item} = props.route.params;
  const images = item.images;

  console.log('🚀 ~ file: Details.js ~ line 9 ~ Details ~ item', item);
  return (
    <Layout>
      <SearchBar placeholder="Enter search key" {...props}>
        <IconButton
          name="keyboard-arrow-left"
          onPress={() => props.navigation.goBack()}
          {...props}
        />
      </SearchBar>
      <ScrollView>
        <HeaderText>{item.name}</HeaderText>
        <ScrollView horizontal>
          {images.map((image, i) => (
            <View key={i}>
              <ImageCard source={image.src} />
            </View>
          ))}
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Picker
            style={{flex: 1}}
            selectedValue={selectedAttributeName}
            onValueChange={(attributeName, atttibuteId) =>
              setSelectedAttributeName(attributeName)
            }>
            {item.attributes.map((attribute, i) => (
              <Picker.Item label={attribute.name} value={i} />
            ))}
          </Picker>
          <Picker
            style={{flex: 1}}
            selectedValue={selectedOption}
            onValueChange={(optionVal, optionId) =>
              setSelectedoption(optionVal)
            }>
            {item.attributes.map((attribute, id) =>
              attribute.options.map((item, i) => (
                <Picker.Item label={item} value={attribute.id} />
              )),
            )}
          </Picker>
        </View>
        <IconButton name="menu" onPress={() => alert('Add')} />
        <HTMLView value="<h2>DESCRIPTION</h2>" stylesheet={styles} />
        <HTMLView value={item.description} stylesheet={styles} />
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  p: {
    textAlign: 'justify',
    fontSize: 20,
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h3: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  li: {
    fontSize: 20,
    textDecorationStyle: 'double',
  },
});
