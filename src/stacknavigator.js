import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {
  Categories,
  Details,
  Home,
  Products,
  SubCategories,
  SubSub,
} from './pages';

const Stack = createStackNavigator();

export function StackCategory(props) {
  const {name} = useSelector(state => state.search);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{title: 'Tüm Kategoriler'}}
      />
      <Stack.Screen
        name="SubCategories"
        component={SubCategories}
        options={{title: name}}
      />
      <Stack.Screen name="SubSub" component={SubSub} options={{title: name}} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{title: name}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: name}}
      />
    </Stack.Navigator>
  );
}
export function StackHome(props) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
