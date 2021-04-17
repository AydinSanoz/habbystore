import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {
  HeaderText,
  SearchBar,
  IconButton,
  Text1,
  TimelineImg,
  VaryantImg,
  PickerComp,
} from '../components';
import HTMLView from 'react-native-htmlview';
import Layout from '../components/Layout';
import {Picker} from '@react-native-picker/picker';
import {fetch} from '../helper/fetchData';
import {details} from '../styles';

export function Details(props) {
  const [selectedGenislik, setSelectedGenislik] = useState('');
  const [selectedUzunluk, setSelectedUzunluk] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isVaryantVisible, setIsVaryantVisible] = useState(false);
  const [hasOption, setHasOption] = useState(false);
  const [varyant, setVaryant] = useState([]);
  const {id, item} = props.route.params;
  const images = item?.images;

  console.log('🚀 ~ file: Details.js ~ line 26 ~ Details ~ item', item);

  function getVaryant() {
    fetch(`/products/${id}/variations`).then(({data}) => {
      console.log('🚀 ~ file: Details.js ~ line 44 ~ fetch ~ data', data);
      const filteredData = data.filter(
        item =>
          item.attributes[0].option === selectedGenislik &&
          item.attributes[1].option === selectedUzunluk,
      );
      setVaryant(filteredData);
    });
  }

  let uzunlukIndex = item?.attributes?.findIndex(
    attribute => attribute.name === 'Uzunluk',
  );
  let genislikIndex = item?.attributes?.findIndex(
    attribute => attribute.name === 'Genişlik',
  );
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
        {!isVaryantVisible ? (
          <TimelineImg images={images} {...props} />
        ) : (
          <VaryantImg image={varyant[0]?.image} {...props} />
        )}
        {item.attributes.length > 0 && (
          <View style={details.attributeContainer}>
            <View style={details.attributeContent}>
              <IconButton
                // name="expand-more"
                onPress={() => setIsVisible(!isVisible)}
                {...props}>
                <Text1>Genişlik</Text1>
              </IconButton>
              {isVisible && (
                <PickerComp
                  selectedValue={selectedGenislik}
                  onValueChange={(val, i) => setSelectedGenislik(val)}
                  attributes={item.attributes}
                  attributeIndex={genislikIndex}
                />
              )}
            </View>
            <View style={details.attributeContent}>
              <IconButton
                alignSelf="center"
                name="check"
                onPress={getVaryant}
                onLongPress={() => setIsVaryantVisible(!isVaryantVisible)}
              />
            </View>
            <View style={details.attributeContent}>
              <IconButton
                alignSelf="flex-end"
                // name="expand-more"
                onPress={() => setIsVisible(!isVisible)}
                onLongPress={() => alert('long pressed')}
                {...props}>
                <Text1>Uzunluk</Text1>
              </IconButton>
              {isVisible && (
                <PickerComp
                  selectedValue={selectedUzunluk}
                  onValueChange={(val, i) => setSelectedUzunluk(val)}
                  attributes={item.attributes}
                  attributeIndex={uzunlukIndex}
                />
              )}
            </View>
          </View>
        )}

        {/* id: 3 
        name: "Genişlik" 
        options: (7) ["10mm", "15mm", "20mm", "25mm","30mm", "40mm", "50mm"] 
        position: 0 
        variation: true 
        visible: true */}
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
