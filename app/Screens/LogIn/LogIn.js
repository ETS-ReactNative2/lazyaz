import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import {
  ImageContainer,
  GradientButton,
  Header,
  ImageButton,
  SeparatorLine,
  connectAlert,
} from '../../Components';
import {
  ICON_CARD,
  ICON_ARROW_LEFT,
  ICON_ARROW_LOCATION,
  ICON_PROFILE,
} from '../../Images';
import { INPUT_EMAIL, INPUT_PASSWORD } from '../../Constants/TextConstants';
import { login } from '../../Actions/User';
import styles from './styles';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { auth, alertWithType } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
    if (nextProps.auth && auth !== nextProps.auth) {
      this.handleNavigation();
    }
  }

  handlePressLogin = () => {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    if (username && password) {
      dispatch(login(username, password));
    }
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text });
  }

  handleChangePassword = (text) => {
    this.setState({ password: text });
  }

  handleNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Authenticated');
  }

  onPressIconLeft = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  }

  render() {
    return (
      <ImageContainer>
        <Header
          iconLeft={ICON_ARROW_LEFT}
          iconMiddle={ICON_PROFILE}
          heading="Log In"
          onPressIconLeft={this.onPressIconLeft}
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
                onChangeText={this.handleChangeUsername}
                underlineColorAndroid="transparent"
                placeholder={INPUT_EMAIL}
              />
              <SeparatorLine />
            </View>
            <View style={styles.row}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#A6A6A6"
                keyboardType="default"
                returnKeyType="go"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.handleChangePassword}
                secureTextEntry
                underlineColorAndroid="transparent"
                placeholder={INPUT_PASSWORD}
              />
              <SeparatorLine />
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
                width="75%"
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
  dispatch: PropTypes.func,
  auth: PropTypes.object,
  error: PropTypes.string,
  alertWithType: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.user.auth,
  error: state.user.error,
});

export default connect(mapStateToProps)(connectAlert(LogIn));
