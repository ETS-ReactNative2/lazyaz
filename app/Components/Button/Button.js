import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { BTN_DARK, BTN_LIGHT, BTN_OUTLINE } from '../../Constants/TextConstants';
import styles from './styles';

const Button = ({
  height = 48,
  width,
  text,
  type,
  logo,
  color,
  onPress,
}) => {
  const buttonStyles = [
    styles.button,
    {
      height,
      width: wp(width),
      flexDirection: logo ? 'row' : null,
    },
  ];
  if (type === BTN_LIGHT) {
    buttonStyles.push(styles.lightButton);
  } else if (type === BTN_DARK) {
    buttonStyles.push(styles.darkButton);
  } else if (type === BTN_OUTLINE) {
    buttonStyles.push(styles.outlineButton);
  }

  const textStyles = [
    styles.text,
    { lineHeight: height },
  ];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        {logo && (
          <Image
            style={styles.logo}
            source={logo}
          />
        )}
        <Text style={[textStyles, { color }]}>
          {text.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  logo: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
