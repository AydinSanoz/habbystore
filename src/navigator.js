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
import {Basket, Categories} from './pages';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Login"
        onPress={() => props.navigation.navigate('Profile')}
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
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{}}
          initialRouteName="Store"
          drawerType="slide"
          backBehavior={DrawerActions.toggleDrawer()}
          drawerContentOptions={{
            activeTintColor: 'tomato',
            itemStyle: {marginVertical: 3},
          }}>
          <Drawer.Screen name="Store" component={Store} />
          <Drawer.Screen name="Categories" component={Categories} />
          <Drawer.Screen name="MyBasket" component={Basket} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigator;
