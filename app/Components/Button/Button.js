import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import styles from './styles';
import { Constants } from '../../Themes';

const Button = ({
  height = 48,
  width = '80%',
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
  if (type === Constants.BTN_LIGHT) {
    buttonStyles.push(styles.lightButton);
  } else if (type === Constants.BTN_DARK) {
    buttonStyles.push(styles.darkButton);
  }

  const textStyles = [
    styles.text,
    { lineHeight: height },
  ];
  textStyles.push(type === Constants.BTN_LIGHT ? styles.darkText : styles.lightText);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        {logo && <Image style={styles.logo} source={require('../../Images/Icons/facebook.png')} />}
        <Text style={textStyles}>{text.toUpperCase()}</Text>
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
