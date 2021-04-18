import * as React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ModalPortal} from 'react-native-modals';
import {Provider} from 'react-redux';

import store from './redux/store';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Home,
  Categories,
  Products,
  Details,
  Login,
  Favorites,
  SubCategories,
} from './pages';
import {SubSub} from './pages/SubSub';

const Stack = createStackNavigator();

function StackRouter(props) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="SubCategories" component={SubCategories} />
      <Stack.Screen name="SubSub" component={SubSub} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Store(props) {
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
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Login') {
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={StackRouter} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
};

function Router(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Store">
          <Drawer.Screen name="Store" component={Store} />
        </Drawer.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </Provider>
  );
}

export default Router;
