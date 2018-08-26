import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

import LoginSignup from './screens/LoginSignup';

EStyleSheet.build({
  $primaryYellow: '#FECF33',
  $primaryLightOrange: '#FDBD39',
  $primaryPeach: '#EE6723',
});

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <LoginSignup />
    );
  }
}

export default App;
