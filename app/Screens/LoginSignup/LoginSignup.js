import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Image } from 'react-native';

import {
  Button,
  GradientButton,
  ImageButton,
  ImageContainer,
} from '../../Components';
import { ICON_DOTS, ICON_ARROW_DOWN, LOGO_MAIN } from '../../Images';
import { BTN_DARK, BTN_LIGHT } from '../../Constants/TextConstants';
import styles from './styles';

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handlePressLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('LogIn');
  }

  handlePressExplore = () => {
    const { navigation } = this.props;
    navigation.navigate('MainRoutes');
  }

  render() {
    return (
      <ImageContainer>
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <Image
              source={LOGO_MAIN}
              style={styles.image}
            />
            <Button
              text="Login with Facebook"
              type={BTN_LIGHT}
              logo
            />
            <Image
              source={ICON_DOTS}
              style={styles.dots}
            />
            <GradientButton
              text="Log In"
              onPress={this.handlePressLogin}
            />
            <View style={styles.middleView} />
            <Button
              text="Sign Up"
              type={BTN_DARK}
            />
          </View>
          <View style={styles.bottomContainer}>
            <ImageButton
              source={ICON_ARROW_DOWN}
              text="Explore LazyAz"
              onPress={this.handlePressExplore}
            />
          </View>
        </View>
      </ImageContainer>
    );
  }
}

LoginSignup.propTypes = {
  navigation: PropTypes.object,
};

export default LoginSignup;
