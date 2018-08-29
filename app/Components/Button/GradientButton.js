import PropTypes from 'prop-types';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { Button } from '..';
import styles from './styles';

const GradientButton = ({
  height,
  width,
  text,
  onPress,
}) => (
  <LinearGradient
    colors={[styles.$gradientColorOne, styles.$gradientColorTwo]}
    start={{ x: 0.0, y: 1.0 }}
    end={{ x: 1.0, y: 1.0 }}
    style={styles.gradientWrapper}
  >
    <Button
      height={height}
      width={width}
      text={text}
      onPress={onPress}
    />
  </LinearGradient>
);

GradientButton.propTypes = {
  height: PropTypes.number,
  text: PropTypes.string,
  width: PropTypes.string,
  onPress: PropTypes.func,
};

export default GradientButton;
