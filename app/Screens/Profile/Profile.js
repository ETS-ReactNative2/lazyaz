import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import {
  ScrollContainer,
  Header,
  Button,
  SeparatorSpace,
  SeparatorLine,
  ListItem,
  connectAlert,
} from '../../Components';
import {
  ICON_ARROW_LEFT,
  ICON_ARROW_RIGHT,
  ICON_PHONE,
  ICON_EMAIL,
  ICON_WEBSITE,
} from '../../Images';
import { BTN_LIGHT, BTN_OUTLINE } from '../../Constants/TextConstants';
import { logout } from '../../Actions/User';
import { getUserProfile } from '../../Actions/Profile';
import styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    const { auth, dispatch } = this.props;
    if (auth && auth !== undefined) {
      dispatch(getUserProfile(auth));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { auth, alertWithType } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
    if (auth && auth !== nextProps.auth) {
      this.handleNavigation();
    }
  }

  onPressLogout = () => {
    const { dispatch, auth } = this.props;
    dispatch(logout(auth));
  }

  onPressIconLeft = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  }

  handleNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('NotAuthenticated');
  }

  handlePhoneCall = () => {
    const { alertWithType } = this.props;
    Linking.openURL('tel://092830218').catch(() => alertWithType('error', 'Error', 'Unable to initiate call'));
  };

  handleSendEmail = () => {
    const { alertWithType } = this.props;
    Linking.openURL('mailto:contact@lazyaz.co.nz').catch(() => alertWithType('error', 'Error', 'Unable to send email'));
  };

  handlePressSite = () => {
    const { alertWithType } = this.props;
    Linking.openURL('https://lazyaz.co.nz/#/').catch(() => alertWithType('error', 'Error', 'Unable to open link'));
  };

  handlePressTerms = () => {
    const { alertWithType } = this.props;
    Linking.openURL('https://lazyaz.co.nz/#/terms').catch(() => alertWithType('error', 'Error', 'Unable to open link'));
  };

  handlePressPrivacy = () => {
    const { alertWithType } = this.props;
    Linking.openURL('https://lazyaz.co.nz/#/privacy').catch(() => alertWithType('error', 'Error', 'Unable to open link'));
  };

  renderSectionHeading = text => (
    <Text style={styles.textSectionHeading}>
      {text.toUpperCase()}
    </Text>
  );

  renderSectionText = text => (
    <Text style={[styles.text, styles.textSectionBody]}>
      {text}
    </Text>
  );

  render() {
    const { profile } = this.props;
    return (
      <ScrollContainer>
        <View>
          <LinearGradient
            colors={[styles.$gradientColorOne, styles.$gradientColorTwo]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.gradientContainer}
          >
            <Header
              iconLeft={ICON_ARROW_LEFT}
              text="Profile"
              onPressIconLeft={this.onPressIconLeft}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.textName, styles.textWhite]}>
                {profile.name}
              </Text>
              <Text style={[styles.text, styles.textWhite]}>
                {profile.email}
              </Text>
              <Text style={[styles.text, styles.textWhite]}>
                {profile.phone}
              </Text>
            </View>
            <View style={styles.mainButtonContainer}>
              <View style={styles.buttonContainer}>
                <Button
                  text="Log Out"
                  type={BTN_LIGHT}
                  width="auto"
                  color={styles.$gradientColorOne}
                  onPress={this.onPressLogout}
                />
              </View>
              <SeparatorSpace
                height={0}
                width="5%"
              />
              <View style={styles.buttonContainer}>
                <Button
                  text="Edit"
                  type={BTN_OUTLINE}
                  width="auto"
                  color={styles.$colorWhite}
                />
              </View>
            </View>
          </LinearGradient>
          <View style={styles.bottomContainer}>
            <View>
              <View style={styles.rowContainer}>
                { this.renderSectionHeading('Credit Cards') }
                <TouchableOpacity>
                  <Text style={[styles.textSectionHeading, styles.textSectionHeadingButton]}>
                    {'Add New'.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>
              { this.renderSectionText('You have not added credit card yet.') }
            </View>
            <View style={styles.settingsContainer}>
              { this.renderSectionHeading('Settings') }
              <View style={styles.rowContainer}>
                { this.renderSectionText('Push Notifications') }
                <Switch />
              </View>
              <View style={styles.rowContainer}>
                <View style={styles.subtitleContainer}>
                  <Text style={[styles.text, styles.textSectionBody, styles.textSubtitle]}>
                    Get instant notifications about your orders updates.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.aboutContainer}>
              { this.renderSectionHeading('About') }
              <SeparatorLine
                backgroundColor={styles.$colorGrey}
                marginVertical={20}
              />
              <ListItem
                text="09 283 0218"
                image={ICON_PHONE}
                onPress={this.handlePhoneCall}
              />
              <ListItem
                text="contact@lazyaz.co.nz"
                image={ICON_EMAIL}
                onPress={this.handleSendEmail}
              />
              <ListItem
                text="lazyaz.co.nz"
                image={ICON_WEBSITE}
                onPress={this.handlePressSite}
              />
              <ListItem
                text="Terms & Conditions"
                image={ICON_ARROW_RIGHT}
                onPress={this.handlePressTerms}
              />
              <ListItem
                text="Privacy Policy"
                image={ICON_ARROW_RIGHT}
                onPress={this.handlePressPrivacy}
              />
            </View>
          </View>
        </View>
      </ScrollContainer>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  auth: PropTypes.object,
  profile: PropTypes.object,
  alertWithType: PropTypes.func,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  auth: state.user.auth,
  profile: state.profile.profile,
  error: state.profile.error,
});

export default connect(mapStateToProps)(connectAlert(Profile));
