import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {Basket, History, Profile} from './pages';
import {StackCategory, StackHome} from './stacknavigator';

export default function Store(props) {
  const {data} = useSelector(state => state.basket);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Card') {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 13, fontWeight: '600', letterSpacing: 1.2},
      }}>
      <Tab.Screen name="Home" component={StackHome} />
      <Tab.Screen name="Category" component={StackCategory} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{tabBarBadge: data.length}}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
