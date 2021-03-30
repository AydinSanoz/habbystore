import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Login, Product, Favorites, Categories} from './pages';
import {SafeAreaView} from 'react-native';

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Brand" component={Product} />
      <Tab.Screen name="Favorites" component={Favorites} />
      {/* <Tab.Screen name="Category" component={Categories} /> */}
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
