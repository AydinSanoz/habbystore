import * as React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {useColorScheme} from 'react-native';
import Store from './tabnavigator';
import {
  NavigationContainer,
  DrawerActions,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

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

function Navigator(props) {
  const scheme = useColorScheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator initialRouteName="Store">
          <Drawer.Screen name="Store" component={Store} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigator;
