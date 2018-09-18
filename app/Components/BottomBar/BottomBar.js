import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { Button } from '..';
import { ICON_SET } from '../../Images';
import { BTN_GREY } from '../../Constants/TextConstants';
import styles from './styles';

const BottomBar = ({ destination }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {destination.title}
    </Text>
    <View style={styles.setsContainer}>
      <Image source={ICON_SET} />
      <Text style={styles.sets}>
        {`${destination.sets.length} sets`}
      </Text>
    </View>
    <Text style={styles.description}>
      {destination.description}
    </Text>
    <Button
      text="View"
      type={BTN_GREY}
      width="50%"
      color={styles.$buttonText}
    />
  </View>
);

BottomBar.propTypes = {
  destination: PropTypes.object,
};

export default BottomBar;
