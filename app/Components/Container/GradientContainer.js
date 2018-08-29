import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const GradientContainer = ({ children }) => (
  <LinearGradient
    colors={[styles.$gradientColorOne, styles.$gradientColorTwo, styles.$gradientColorThree]}
    start={{ x: 0.2, y: 0.0 }}
    end={{ x: 0.0, y: 0.1 }}
  >
    <SafeAreaView>{children}</SafeAreaView>
  </LinearGradient>
);

GradientContainer.propTypes = {
  children: PropTypes.any,
};

export default GradientContainer;
