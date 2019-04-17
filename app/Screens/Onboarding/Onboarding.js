import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import { GradientButton, GradientContainer } from '../../Components';
import { BG_PAPERBAG } from '../../Images';
import styles from './styles';

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handlePressExplore = () => {
    const { navigation } = this.props;
    navigation.navigate('LoginSignup');
  }

  render() {
    return (
      <GradientContainer>
        <StatusBar translucent={false} barStyle="dark-content" />
        <View style={styles.mainContainer}>
          <Image
            source={BG_PAPERBAG}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.text}>Get Anything Delivered</Text>
            <GradientButton
              text="Explore LazyAz"
              height={40}
              width="50%"
              onPress={this.handlePressExplore}
            />
          </View>
        </View>
      </GradientContainer>
    );
  }
}

Onboarding.propTypes = {
  navigation: PropTypes.object,
};

export default Onboarding;
