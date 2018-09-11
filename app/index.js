import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { RootNavigator } from './Config/Routes';
import { Colors, Metrics } from './Themes';
import configureStore from './Config/Store';

EStyleSheet.build({
  ...Colors,
  ...Metrics,
});

const { store } = configureStore();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({
        checkedSignIn: true,
        isSignedIn: store.getState().user.auth !== undefined,
      });
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { isSignedIn, checkedSignIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = RootNavigator(isSignedIn);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
