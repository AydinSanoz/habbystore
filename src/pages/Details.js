import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import HTMLView from 'react-native-htmlview';
import {fetch} from '../helper/fetchData';
import {details} from '../styles';
import {
  Layout,
  HeaderText,
  IconButton,
  Text1,
  TimelineImg,
  VaryantImg,
  PickerComp,
} from '../components';

export function Details(props) {
  const [selectedGenislik, setSelectedGenislik] = useState('');
  const [selectedUzunluk, setSelectedUzunluk] = useState('');
  const [isVaryantVisible, setIsVaryantVisible] = useState(false);
  const [varyant, setVaryant] = useState([]);
  const {item} = props.route.params;
  const images = item?.images;
  const id = item.id;
  const uzunlukIndex = item?.attributes?.findIndex(
    attribute => attribute.name === 'Uzunluk',
  );
  const genislikIndex = item?.attributes?.findIndex(
    attribute => attribute.name === 'Genişlik',
  );
  function getVaryant(width, height) {
    console.log('selectedUzunluk', height);
    console.log('selectedGenislik', width);

    fetch(`/products/${id}/variations`).then(({data}) => {
      console.log('Details.js ~ line 44 ~ fetch ~ data', data);
      const filteredData = data.filter(item => {
        if (
          item.attributes[0].option === width &&
          item.attributes[1].option === height
        ) {
          return item;
        } else {
          null;
        }
      });
      console.log('Details.js ~ line 36 ~ fetch ~ filteredData', filteredData);
      filteredData.length > 0
        ? setIsVaryantVisible(true)
        : setIsVaryantVisible(false);
      setVaryant(filteredData);
    });
  }

  useEffect(() => {
    if (selectedGenislik && selectedUzunluk) {
      getVaryant(selectedGenislik, selectedUzunluk);
    }
    return () => {
      <Details />;
    };
  }, [selectedGenislik, selectedUzunluk]);

  return (
    <Layout backIcon={true} {...props}>
      <ScrollView>
        <HeaderText>{item?.name}</HeaderText>
        {!isVaryantVisible ? (
          <TimelineImg images={images} {...props} />
        ) : (
          <VaryantImg
            images={varyant[0]?.woo_variation_gallery_images}
            {...props}
          />
        )}
        <IconButton name="heart-outline">
          <Text1>Add To Fav</Text1>
        </IconButton>
        {item.attributes.length > 0 && (
          <View style={details.attributeContainer}>
            <Text1 style={details.attributeContent}>Genişlik</Text1>
            <View style={details.attributeContent}>
              <PickerComp
                selectedValue={selectedGenislik}
                onValueChange={(val, i) => setSelectedGenislik(val)}
                attributes={item.attributes}
                attributeIndex={genislikIndex}
              />
            </View>
            <Text1 style={details.attributeContent}>Uzunluk</Text1>
            <View style={details.attributeContent}>
              <PickerComp
                selectedValue={selectedUzunluk}
                onValueChange={(val, i) => setSelectedUzunluk(val)}
                attributes={item.attributes}
                attributeIndex={uzunlukIndex}
              />
            </View>
          </View>
        )}

        {/* id: 3 
        name: "Genişlik" 
        options: (7) ["10mm", "15mm", "20mm", "25mm","30mm", "40mm", "50mm"] 
        position: 0 
        variation: true 
        visible: true */}
        <View style={{margin: 10, textAlign: 'justify-content'}}>
          <HTMLView value="<h2>DESCRIPTION</h2>" stylesheet={styles} />
          <HTMLView value={item?.description} stylesheet={styles} />
        </View>
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
