import React, {useState, useEffect} from 'react';
import {ListCard, HeaderText, SearchBar} from '../components';
import {View, FlatList, Alert} from 'react-native';
import {category} from '../components/styles';
import {useSelector} from 'react-redux';
import {fetch} from '../helper/fetchData';
import {wcCategory} from '../constants';
import Layout from '../components/Layout';
import ActivityRoller from '../components/ActivityRoller';

let originalList = [];

export function Categories(props) {
  const [categories, setCategories] = useState([]);
  const {value} = useSelector(state => state.search);

  useEffect(() => {
    fetch(wcCategory.route, wcCategory.main).then(res => {
      if (res.err) {
        Alert.alert('WELCOME HABBY-STORE', res.err, [
          {text: 'OK', onPress: () => props.navigation.goBack()},
        ]);
      } else {
        setCategories(res.data);
        originalList = res.data;
      }
    });
  }, [props.navigation]);

  useEffect(() => {
    const filteredData = originalList.filter(data => {
      const inputVal = value.toLowerCase().replace(/\s/g, '');
      const name = data.name.toLowerCase().replace(/\s/g, '');
      return name.indexOf(inputVal) > -1;
    });
    setCategories(filteredData);
  }, [value]);

  const renderItem = ({item}) => (
    <ListCard
      category={item}
      onPress={() =>
        props.navigation.navigate('SubCategories', {
          id: item.id,
          name: item.name,
          count: item.count,
        })
      }
      {...props}
    />
  );
  return (
    <Layout>
      <SearchBar placeholder="Enter search key" {...props}>
        <HeaderText {...props}>TÜM KATEGORİLER</HeaderText>
      </SearchBar>
      <View style={category.container}>
        {!categories.length > 0 ? (
          <ActivityRoller />
        ) : (
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </View>
    </Layout>
  );
}
