import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  ImageContainer,
  GradientButton,
  Header,
  ImageButton,
  Separator,
} from '../../Components';
import {
  ICON_CARD,
  ICON_ARROW_LEFT,
  ICON_ARROW_LOCATION,
  ICON_PROFILE,
} from '../../Images';
import { Constants } from '../../Themes';
import styles from './styles';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handlePressLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('MainRoutes');
  }

  handlePressBack = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  }

  render() {
    return (
      <ImageContainer>
        <Header
          iconLeft={ICON_ARROW_LEFT}
          iconMiddle={ICON_PROFILE}
          onPressIconLeft={this.handlePressBack}
          text="Log In"
        />
        <View style={styles.container}>
          <View style={styles.middleItems}>
            <View style={styles.row}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#A6A6A6"
                keyboardType="email-address"
                autoFocus
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                placeholder={Constants.INPUT_EMAIL}
              />
              <Separator />
            </View>
            <View style={styles.row}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#A6A6A6"
                keyboardType="default"
                returnKeyType="go"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                underlineColorAndroid="transparent"
                placeholder={Constants.INPUT_PASSWORD}
              />
              <Separator />
            </View>
            <TouchableOpacity style={styles.textContainer}>
              <Text style={styles.text}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <GradientButton
                text="Log In"
                onPress={this.handlePressLogin}
              />
            </View>
          </View>
          <View style={styles.bottomItems}>
            <ImageButton source={ICON_ARROW_LOCATION} />
            <View style={styles.row} />
            <ImageButton source={ICON_CARD} />
          </View>
        </View>
      </ImageContainer>
    );
  }
}

LogIn.propTypes = {
  navigation: PropTypes.object,
};

export default LogIn;
