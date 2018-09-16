import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const SeparatorLine = ({ backgroundColor = styles.$defaultColor }) => {
  const lineStyles = [styles.line, { backgroundColor }];

  return (
    <View style={lineStyles} />
  );
};

SeparatorLine.propTypes = {
  backgroundColor: PropTypes.string,
};

export default SeparatorLine;
