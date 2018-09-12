import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { Container, ImageButton, GradientButton } from '..';
import { ICON_ARROW_LOCATION_DARK, ICON_ARROW_DROPDOWN } from '../../Images';
import styles from './styles';

class Header extends Component {
  onPressIconLeft = () => {
    const { auth, navigation } = this.props;
    if (auth !== undefined) {
      // user is logged in; go to Profile Screen
    } else {
      navigation.goBack(null);
    }
  }

  onPressIconRight = () => {
  }

  onPressLocation = () => {
  }

  render() {
    const {
      iconLeft,
      iconMiddle,
      iconRight,
      text,
    } = this.props;

    return (
      <Container
        backgroundColor={iconMiddle ? null : styles.$backgroundColor}
      >
        <View style={styles.topContainer}>
          <ImageButton
            source={iconLeft}
            onPress={this.onPressIconLeft}
          />
          {iconMiddle
            ? <Image source={iconMiddle} style={styles.image} />
            : (
              <View>
                <TouchableOpacity
                  style={styles.location}
                  onPress={this.onPressLocation}
                >
                  <Image
                    style={[styles.image, styles.locationIcon]}
                    source={ICON_ARROW_LOCATION_DARK}
                  />
                  <Text style={styles.locationText}>
                    Enter your address
                  </Text>
                  <Image
                    style={[styles.image, styles.locationIcon]}
                    source={ICON_ARROW_DROPDOWN}
                  />
                </TouchableOpacity>
              </View>
            )
          }
          <ImageButton
            source={iconRight}
            style={styles.image}
            onPress={this.onPressIconRight}
          />
        </View>
        <View style={styles.bottomContainer}>
          { text
            ? <Text style={styles.text}>{text.toUpperCase()}</Text>
            : (
              <GradientButton
                text="Find Place & Place Order"
                height={40}
                width="90%"
              />
            )
          }
        </View>
      </Container>
    );
  }
}

Header.propTypes = {
  iconLeft: PropTypes.number,
  iconMiddle: PropTypes.number,
  iconRight: PropTypes.number,
  text: PropTypes.string,
  navigation: PropTypes.object,
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps)(Header);
