import ActivityRoller from '../components/ActivityRoller';
import {View, FlatList, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Layout, ListCard} from '../components';
import {category} from '../components/styles';
import {fetch} from '../helper/fetchData';
import {useSelector, useDispatch} from 'react-redux';
import {wcCategory} from '../constants';
import {handleCount, handleName} from '../redux/searchReducer';

let originalList = [];
export function SubCategories(props) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const {value} = useSelector(state => state.search);
  const {id, name, count} = props.route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(wcCategory.route, {
      parent: id,
      per_page: 99,
      search: search,
    }).then(res => {
      console.log(
        '🚀 ~ file: SubCategories.js ~ line 24 ~ useEffect ~ res',
        res,
      );
      if (res.err) {
        console.log(
          '🚀 ~ file: SubCategories.js ~ line 28 ~ SubCategories ~ res',
          res.data,
        );
        Alert.alert('WELCOME HABBY-STORE', res.err, [
          {text: 'OK', onPress: () => props.navigation.navigate('Categories')},
        ]);
      }
      if (res.data.length === 0) {
        console.log(res.data.length);
        props.navigation.navigate('Products', {
          id: id,
          name: name,
          count: count,
        });
        // Alert.alert('WELCOME HABBY STORE', 'Select other category', [
        //   {text: 'OK', onPress: () => props.navigation.navigate('Categories')},
        // ]);
      } else {
        setCategories(res.data);
        setIsLoading(false);
        originalList = res.data;
      }
    });
    return () => {
      <SubCategories />;
    };
  }, [count, id, name, props.navigation, search]);

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
      {...item}
      onPress={() => {
        props.navigation.navigate('SubSub', {
          id: item.id,
          name: item.name,
          count: item.count,
        });
        dispatch(handleName(item.name));
        dispatch(handleCount(item.count));
      }}
      {...props}
    />
  );

  function filter() {
    setSearch(value);
  }
  return (
    <Layout backIcon header name={name} count={count} {...props}>
      <View style={category.container}>
        {isLoading ? (
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
