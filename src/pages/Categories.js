import React, {useState, useEffect} from 'react';
import {ListCard, HeaderText, SearchBar, IconButton} from '../components';
import {View, FlatList, Alert} from 'react-native';
import {category} from '../components/styles';
import {useSelector} from 'react-redux';
import {fetch} from '../helper/fetchData';
import {wcCategory} from '../constants';
import Layout from '../components/Layout';
import ActivityRoller from '../components/ActivityRoller';
import {
  siteName,
  apiBaseUrl,
  categories,
  consumer_key,
  consumer_secret,
} from '@env';

let originalList = [];

export function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const {value, count, name, parent} = useSelector(state => state.search);

  useEffect(() => {
    fetch(wcCategory.route, {
      parent: parent,
      per_page: 99,
      search: search,
    }).then(res => {
      console.log('🚀 ~ file: Categories.js ~ line 21 ~ fetch ~ res', res);

      if (res.err) {
        console.log('err', res.err);
      }
      if (res.data.length === 0) {
        Alert.alert(
          'WELCOME HABBY STORE',
          `Try again Please${res.data.length}`,
          [
            {
              text: 'OK',
              onPress: () => props.navigation.navigate('Categories'),
            },
          ],
        );
      } else {
        console.log('🚀 ~ file: Categories.js ~ line 33 ~ fetch ~ res', res);
        setCategories(res.data);
        originalList = res.data;
        setIsLoading(false);
      }
    });
    return () => {
      <Categories />;
    };
  }, [parent, props.navigation, search]);

  function filter() {
    setSearch(value);
  }

  // useEffect(() => {
  //   const filteredData = originalList.filter(data => {
  //     const inputVal = value.toLowerCase().replace(/\s/g, '');
  //     const name = data.name.toLowerCase().replace(/\s/g, '');
  //     return name.indexOf(inputVal) > -1;
  //   });
  //   setCategories(filteredData);
  // }, [value]);

  const renderItem = ({item}) => {
    return (
      <ListCard
        {...item}
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
  };

  return (
    <Layout>
      <SearchBar placeholder="Enter search key" onPress={filter} {...props}>
        <IconButton
          name="keyboard-arrow-left"
          onPress={() => props.navigation.goBack()}
          {...props}
        />
        <HeaderText {...props}>
          {name}
          {count}
        </HeaderText>
      </SearchBar>
      <View style={category.container}>
        {isLoading ? (
          <ActivityRoller />
        ) : (
          <FlatList
            style={{flex: 1}}
            data={categories}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
      </View>
    </Layout>
  );
}
