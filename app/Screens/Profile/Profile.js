import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import {
  Container,
  Header,
  Button,
  SeparatorSpace,
  SeparatorLine,
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

  handlePressSite = () => {
    const { alertWithType } = this.props;
    Linking.openURL('https://lazyaz.co.nz/').catch(() => alertWithType('error', 'Error', "LazyAz can't be opened"));
  };

  render() {
    const { profile } = this.props;
    return (
      <ScrollView style={styles.mainContainer}>
        <Container>
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
                <Text style={styles.textSectionHeading}>
                  {'Credit Cards'.toUpperCase()}
                </Text>
                <TouchableOpacity>
                  <Text style={[styles.textSectionHeading, styles.textSectionHeadingButton]}>
                    {'Add New'.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={[styles.text, styles.textSectionBody]}>
                You have not added credit card yet.
              </Text>
            </View>
            <View>
              <View style={styles.settingsContainer}>
                <Text style={styles.textSectionHeading}>
                  {'Settings'.toUpperCase()}
                </Text>
                <View style={styles.rowContainer}>
                  <Text style={[styles.text, styles.textSectionBody]}>
                    Push Notifications
                  </Text>
                  <Switch />
                </View>
                <Text style={[styles.text, styles.textSectionBody, styles.textSubtitle]}>
                  Get instant notifications about your orders updates.
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.aboutContainer}>
                <Text style={styles.textSectionHeading}>
                  {'About'.toUpperCase()}
                </Text>
                <View style={{ marginVertical: '3%' }} />
                <SeparatorLine backgroundColor={styles.$colorGrey} />
                <View>
                  <TouchableOpacity style={[styles.rowContainer, styles.rowTouchable]}>
                    <Text style={[styles.text, styles.textSectionBody]}>
                      09 283 0218
                    </Text>
                    <Image source={ICON_PHONE} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowTouchable} />
                <SeparatorLine backgroundColor={styles.$colorGrey} />
                <View>
                  <TouchableOpacity style={[styles.rowContainer, styles.rowTouchable]}>
                    <Text style={[styles.text, styles.textSectionBody]}>
                      contact@lazyaz.co.nz
                    </Text>
                    <Image source={ICON_EMAIL} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowView} />
                <SeparatorLine backgroundColor={styles.$colorGrey} />
                <View>
                  <TouchableOpacity
                    style={[styles.rowContainer, styles.rowTouchable]}
                    onPress={this.handlePressSite}
                  >
                    <Text style={[styles.text, styles.textSectionBody]}>
                      lazyaz.co.nz
                    </Text>
                    <Image source={ICON_WEBSITE} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowView} />
                <SeparatorLine backgroundColor={styles.$colorGrey} />
                <View>
                  <TouchableOpacity style={[styles.rowContainer, styles.rowTouchable]}>
                    <Text style={[styles.text, styles.textSectionBody]}>
                      Terms & Conditions
                    </Text>
                    <Image source={ICON_ARROW_RIGHT} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowView} />
                <SeparatorLine backgroundColor={styles.$colorGrey} />
                <View>
                  <TouchableOpacity style={[styles.rowContainer, styles.rowTouchable]}>
                    <Text style={[styles.text, styles.textSectionBody]}>
                      Privacy Policy
                    </Text>
                    <Image source={ICON_ARROW_RIGHT} />
                  </TouchableOpacity>
                </View>
                <View style={styles.rowView} />
                <SeparatorLine backgroundColor={styles.$colorGrey} />
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
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
