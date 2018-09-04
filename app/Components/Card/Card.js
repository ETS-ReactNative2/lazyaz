import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import { Chip } from '../Chip';
import styles from './styles';

const Card = ({
  image,
  title,
  places,
}) => (
  <ImageBackground
    source={image}
    style={styles.background}
  >
    <View style={[styles.overlay]} />
    <Text style={styles.title}>
      {title.toUpperCase()}
    </Text>
    <Chip places={places} />
  </ImageBackground>
);

Card.propTypes = {
  image: PropTypes.number,
  places: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
