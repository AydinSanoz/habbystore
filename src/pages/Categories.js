import ActivityRoller from '../components/ActivityRoller';
import {View, FlatList, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {category} from '../components/styles';
import {ListCard, Layout} from '../components';
import {fetch} from '../helper/fetchData';
import {useDispatch, useSelector} from 'react-redux';
import {wcCategory} from '../constants';
import {handleName} from '../redux/searchReducer';

let originalList = [];

export function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  const {value, count, name, parent} = useSelector(state => state.search);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const filteredData = originalList.filter(data => {
      const inputVal = value.toLowerCase().replace(/\s/g, '');
      const name = data.name.toLowerCase().replace(/\s/g, '');
      return name.indexOf(inputVal) > -1;
    });
    setCategories(filteredData);
  }, [value]);

  const renderItem = ({item}) => {
    const {id, name, count} = {...item};
    return (
      <ListCard
        id={id}
        name={name}
        count={count}
        onPress={() => {
          props.navigation.navigate('SubCategories', {
            id,
            name,
            count,
          });
          console.log(item.name);
          dispatch(handleName(item.name));
        }}
        {...props}
      />
    );
  };

  return (
    <Layout backIcon={true} header={true} name={name} count={count} {...props}>
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
