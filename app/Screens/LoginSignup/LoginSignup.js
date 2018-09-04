import React, { Component } from 'react';
import { View, Image } from 'react-native';

import {
  Button,
  GradientButton,
  ImageButton,
  ImageContainer,
} from '../../Components';
import { ICON_DOTS, ICON_ARROW_DOWN, LOGO_MAIN } from '../../Images';
import { Constants } from '../../Themes';
import styles from './styles';

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ImageContainer>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Image source={LOGO_MAIN} style={styles.image} />
            <Button
              text="Login with Facebook"
              type={Constants.BTN_LIGHT}
              logo
            />
            <Image source={ICON_DOTS} style={styles.dots} />
            <GradientButton text="Log In" />
            <View style={styles.middleView} />
            <Button text="Sign Up" type={Constants.BTN_DARK} />
          </View>
          <View style={styles.bottomContainer}>
            <ImageButton source={ICON_ARROW_DOWN} text="Explore LazyAz" />
          </View>
        </View>
      </ImageContainer>
    );
  }
}

export default LoginSignup;
