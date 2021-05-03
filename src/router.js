import * as React from 'react';
import {
  NavigationContainer,
  DrawerActions,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ModalPortal} from 'react-native-modals';
import {useSelector, Provider} from 'react-redux';
import store from './redux/store';
import {useColorScheme} from 'react-native';
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
  SubSub,
  History,
} from './pages';

const Stack = createStackNavigator();

function StackCategory(props) {
  const {count, name} = useSelector(state => state.search);
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
function StackHome(props) {
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

const Tab = createBottomTabNavigator();

function Store(props) {
  const {data} = useSelector(state => state.favorites);

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
      <Tab.Screen name="Home" component={StackHome} />
      <Tab.Screen name="Category" component={StackCategory} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{tabBarBadge: data.length}}
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

export default Router;
