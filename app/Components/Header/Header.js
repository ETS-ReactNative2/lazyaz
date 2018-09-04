import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Container, ImageButton, GradientButton } from '..';
import { ICON_ARROW_LOCATION_DARK, ICON_ARROW_DROPDOWN } from '../../Images';
import styles from './styles';

const Header = ({
  iconLeft,
  iconMiddle,
  iconRight,
  text,
}) => (
  <Container
    backgroundColor={iconMiddle ? null : styles.$backgroundColor}
  >
    <View style={styles.topContainer}>
      <ImageButton source={iconLeft} />
      {iconMiddle
        ? <Image source={iconMiddle} style={styles.image} />
        : (
          <View>
            <TouchableOpacity style={styles.location}>
              <Image
                style={[styles.image, styles.locationIcon]}
                source={ICON_ARROW_LOCATION_DARK}
              />
              <Text style={styles.locationText}>Enter your address</Text>
              <Image
                style={[styles.image, styles.locationIcon]}
                source={ICON_ARROW_DROPDOWN}
              />
            </TouchableOpacity>
          </View>
        )
      }
      <ImageButton source={iconRight} style={styles.image} />
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

Header.propTypes = {
  iconLeft: PropTypes.number,
  iconMiddle: PropTypes.number,
  iconRight: PropTypes.number,
  text: PropTypes.string,
};

export default Header;
