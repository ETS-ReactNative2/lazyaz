import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import { Header, TabItem } from '../Components';
import {
  LogIn,
  LoginSignup,
  MainFood,
  MainGoods,
  Onboarding,
} from '../Screens';
import { ICON_PROFILE_DARK, ICON_ORDER } from '../Images';
import { Colors } from '../Themes';

const MainRoutes = createMaterialTopTabNavigator(
  {
    MainFood: {
      screen: MainFood,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Food" {...props} />,
      },
    },
    MainGoods: {
      screen: MainGoods,
      navigationOptions: {
        tabBarLabel: props => <TabItem title="Goods" {...props} />,
      },
    },
    MainServices: {
      screen: MainGoods,
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

MainRoutes.navigationOptions = {
  header: () => (
    <Header iconLeft={ICON_PROFILE_DARK} iconRight={ICON_ORDER} />
  ),
};

const Router = createStackNavigator(
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
    },
  },
  {
    mode: 'modal',
  },
);

export default Router;
