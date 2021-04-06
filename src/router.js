import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {initialState, SearchContext} from './redux/store';

import {Provider} from 'react-redux';
import store from './redux/store';

import {Home, Login, Favorites} from './pages';
import {Products, Details} from './components';

const Tab = createBottomTabNavigator();

export function Store() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Store" component={Store} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
