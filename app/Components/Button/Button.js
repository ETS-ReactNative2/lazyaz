import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { ICON_FACEBOOK } from '../../Images';
import { BTN_DARK, BTN_LIGHT } from '../../Constants/TextConstants';
import styles from './styles';

const Button = ({
  height = 48,
  width = '75%',
  text,
  type,
  logo,
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
  }

  const textStyles = [
    styles.text,
    { lineHeight: height },
  ];
  textStyles.push(type === BTN_LIGHT ? styles.darkText : styles.lightText);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        {logo && (
          <Image
            style={styles.logo}
            source={ICON_FACEBOOK}
          />
        )}
        <Text style={textStyles}>
          {text.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  logo: PropTypes.bool,
  height: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
