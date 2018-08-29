import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Button, Container, GradientButton } from '../../Components';
import styles from './styles';
import { Constants } from '../../Themes';

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../Images/Backgrounds/pizza.jpg')}
          style={styles.image}
        >
          <View style={styles.overlay} />
          <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
              <Image
                source={require('../../Images/Logos/logo.png')}
                style={styles.logo}
              />
              <Button
                text="Login with Facebook"
                type={Constants.BTN_LIGHT}
                logo
              />
              <Image
                source={require('../../Images/Icons/dots.png')}
                style={styles.dots}
              />
              <GradientButton text="Log In" />
              <View style={styles.middleView} />
              <Button
                text="Sign Up"
                type={Constants.BTN_DARK}
              />
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity>
                <Text style={styles.text}>{'Explore LazyAz'.toUpperCase()}</Text>
                <Image
                  source={require('../../Images/Icons/arrowDown.png')}
                  style={styles.logo}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default LoginSignup;
