import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { HeaderMain, TabItem } from '../Components';
import {
  LogIn,
  LoginSignup,
  Main,
  MainGoods,
  Onboarding,
  Profile,
} from '../Screens';
import { ICON_PROFILE_DARK, ICON_ORDER } from '../Images';
import { Colors } from '../Themes';

const MainRoutes = createMaterialTopTabNavigator(
  {
    Main: {
      screen: props => <Main {...props} title="Food" />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Food" {...props} />,
      },
    },
    MainGoods: {
      screen: props => <Main {...props} title="Goods" />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Goods" {...props} />,
      },
    },
    MainServices: {
      screen: props => <Main {...props} title="Services" height="30%" />,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Services" {...props} />,
      },
    },
    MainOccasions: {
      screen: MainGoods,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Occasions" {...props} />,
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Colors.$white,
      },
      renderIndicator: () => null,
    },
    swipeEnabled: true,
  },
);

const Authenticated = createStackNavigator(
  {
    MainRoutes: {
      screen: MainRoutes,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <HeaderMain iconLeft={ICON_PROFILE_DARK} iconRight={ICON_ORDER} navigation={navigation} />
        ),
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    mode: 'modal',
  },
);

const NotAuthenticated = createStackNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        header: null,
      },
    },
    LogIn: {
      screen: LogIn,
      navigationOptions: {
        header: null,
      },
    },
    LoginSignup: {
      screen: LoginSignup,
      navigationOptions: {
        header: null,
      },
    },
    MainRoutes: {
      screen: MainRoutes,
      navigationOptions: ({ navigation }) => ({
        header: () => (
          <HeaderMain iconLeft={ICON_PROFILE_DARK} navigation={navigation} />
        ),
      }),
    },
  },
  {
    mode: 'modal',
  },
);

const createRootNavigator = (isSignedIn: false) => (
  createSwitchNavigator(
    {
      Authenticated: {
        screen: Authenticated,
      },
      NotAuthenticated: {
        screen: NotAuthenticated,
      },
    },
    {
      initialRouteName: isSignedIn ? 'Authenticated' : 'NotAuthenticated',
    },
  )
);

export default createRootNavigator;
