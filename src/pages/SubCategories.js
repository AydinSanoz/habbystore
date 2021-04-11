import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {ListCard, IconButton, HeaderText, SearchBar} from '../components';
import {category} from '../components/styles';
import {useSelector} from 'react-redux';
import {fetch} from '../helper/fetchData';
import {wcCategory} from '../constants';
import Layout from '../components/Layout';
import ActivityRoller from '../components/ActivityRoller';

let originalList = [];
export function SubCategories(props) {
  const [categories, setCategories] = useState([]);
  const {value} = useSelector(state => state.search);
  const {id, name, count} = props.route.params;

  useEffect(() => {
    fetch(wcCategory.route, {
      parent: id,
      per_page: count,
    }).then(res => {
      if (res.err) {
        Alert.alert('WELCOME HABBY-STORE', res.err, [
          {text: 'OK', onPress: () => props.navigation.goBack()},
        ]);
      } else {
        setCategories(res.data);
        originalList = res.data;
      }
    });
  }, [count, id, props.navigation]);

  useEffect(() => {
    const filteredData = originalList?.filter(data => {
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
        props.navigation.navigate('Products', {
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
        {!categories?.length > 0 ? (
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
