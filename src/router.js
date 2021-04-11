import * as React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
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

const Tab = createBottomTabNavigator();

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

const Stack = createStackNavigator();

function StackRouter(props) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="SubCategories" component={SubCategories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
function Store(props) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={StackRouter} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

function Router(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Store">
          <Drawer.Screen name="Store" component={Store} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
