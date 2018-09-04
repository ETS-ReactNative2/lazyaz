import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Chip = ({ places }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`${places} places`}
    </Text>
  </View>
);

Chip.propTypes = {
  places: PropTypes.number,
};

export default Chip;
