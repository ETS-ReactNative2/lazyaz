import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Chip, GradientButton } from '..';
import styles from './styles';

const Card = ({
  image, title, places, height = '20%',
}) => {
  const backgroundStyles = [
    styles.background,
    { height: hp(height) },
  ];

  const overlayStyles = [
    styles.overlay,
    { height: hp(height) },
  ];

  return (
    <ImageBackground
      source={{ uri: image }}
      style={backgroundStyles}
    >
      <View style={overlayStyles} />
      <Text style={styles.title}>
        {title.toUpperCase()}
      </Text>
      { places !== 0
        ? <Chip places={places} />
        : (
          <View style={styles.detailsContainer}>
            <Text style={styles.text}>
              You can use this service for delivery: documents, parcels,
              courier service and confidential paper delivery.
            </Text>
            <View style={styles.buttonContainer}>
              <GradientButton
                text="Make Order"
                width="50%"
              />
            </View>
          </View>
        )
      }
    </ImageBackground>
  );
};

Card.propTypes = {
  places: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
};

export default Card;
