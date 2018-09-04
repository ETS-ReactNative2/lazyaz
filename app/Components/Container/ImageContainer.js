import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, SafeAreaView, View } from 'react-native';

import { BG_PIZZA } from '../../Images';
import styles from './styles';

const ImageContainer = ({ children }) => (
  <SafeAreaView>
    <ImageBackground source={BG_PIZZA} style={styles.background}>
      <View style={styles.overlay} />
      {children}
    </ImageBackground>
  </SafeAreaView>
);

ImageContainer.propTypes = {
  children: PropTypes.any,
};

export default ImageContainer;
