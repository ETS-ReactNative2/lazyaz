import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7D7D7',
  },
});

class LoginSignup extends Component {
  render() {
    return (
      <View style={styles.container} />
    );
  } 
}

export default LoginSignup;
