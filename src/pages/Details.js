import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  ImageCard,
  HeaderText,
  SearchBar,
  IconButton,
  Text1,
  TimelineImg,
} from '../components';
import HTMLView from 'react-native-htmlview';
import Layout from '../components/Layout';
import {Picker} from '@react-native-picker/picker';
import {fetch} from '../helper/fetchData';
import {wcProducts} from '../constants';

export function Details(props) {
  const [selectedAttributeName, setSelectedAttributeName] = useState(
    'Genişlik',
  );
  const [selectedOption, setSelectedOption] = useState('');
  const [isVisible, setIsVisible] = useState();
  const [item, setItem] = useState();
  const [varyant, setVaryant] = useState([]);

  const {id} = props.route.params;
  const images = item?.images;

  useEffect(() => {
    fetch(`/products/${id}`).then(res => {
      console.log('res', res.data);
      setItem(res.data);
    });
  }, [id]);

  useEffect(() => {
    fetch(`/products/${id}/variations`).then(({data}) => {
      console.log(data);
    });
  }, []);

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
        <HeaderText>{item?.name}</HeaderText>
        <TimelineImg images={images} {...props} />

        {item?.attributes?.length > 0 ? (
          <IconButton
            name="expand-more"
            onPress={() => setIsVisible(!isVisible)}
            {...props}>
            <TouchableOpacity>
              <Text1>Options</Text1>
            </TouchableOpacity>
          </IconButton>
        ) : null}
        {isVisible && (
          <View style={{flexDirection: 'row', marginTop: -80, zIndex: -1}}>
            <Picker
              style={{flex: 1}}
              selectedValue={selectedAttributeName}
              onValueChange={(attributeName, atttibuteId) =>
                setSelectedAttributeName(attributeName)
              }>
              {item.attributes.map((attribute, i) => (
                <Picker.Item label={attribute.name} value={attribute.name} />
              ))}
            </Picker>
            <Picker
              style={{flex: 1}}
              selectedValue={selectedOption}
              onValueChange={(optionVal, optionId) =>
                setSelectedOption(optionVal)
              }>
              {item.attributes.map((attribute, id) =>
                selectedAttributeName === attribute.name
                  ? attribute.options.map((option, i) => (
                      <Picker.Item label={option} value={option} />
                    ))
                  : null,
              )}
            </Picker>
          </View>
        )}
        <HTMLView value="<h2>DESCRIPTION</h2>" stylesheet={styles} />
        <HTMLView value={item?.description} stylesheet={styles} />
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
