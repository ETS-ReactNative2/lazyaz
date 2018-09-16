import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import { Container, ImageButton } from '..';
import styles from './styles';

const Header = ({
  iconLeft,
  iconMiddle,
  iconRight,
  onPressIconLeft,
  onPressIconRight,
  text,
  heading,
}) => (
  <Container>
    <View style={styles.topContainer}>
      <ImageButton
        source={iconLeft}
        onPress={onPressIconLeft}
      />
      {iconMiddle
        ? <Image source={iconMiddle} style={styles.image} />
        : (
          <Text style={[styles.text, styles.middleText]}>
            {text.toUpperCase()}
          </Text>
        )
      }
      <ImageButton
        source={iconRight}
        onPress={onPressIconRight}
      />
    </View>
    <View style={styles.bottomContainer}>
      {heading && (
        <Text style={[styles.text, styles.heading]}>
          {heading.toUpperCase()}
        </Text>
      )}
    </View>
  </Container>
);

Header.propTypes = {
  iconLeft: PropTypes.number,
  iconRight: PropTypes.number,
  iconMiddle: PropTypes.number,
  onPressIconLeft: PropTypes.func,
  onPressIconRight: PropTypes.func,
  text: PropTypes.string,
  heading: PropTypes.string,
};

export default Header;
