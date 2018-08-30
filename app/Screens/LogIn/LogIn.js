import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Container,
  GradientButton,
  ImageButton,
  Separator,
} from '../../Components';
import {
  ICON_CARD,
  ICON_ARROW_LEFT,
  ICON_ARROW_LOCATION,
  ICON_PROFILE_ICON,
} from '../../Images';
import { Constants } from '../../Themes';
import styles from './styles';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={require('../../Images/Backgrounds/pizza.jpg')}
          style={styles.image}
        >
          <View style={styles.overlay} />
          <View style={styles.topContainer}>
            <View style={styles.topLeftItem}>
              <View style={styles.arrowLeft}>
                <ImageButton source={ICON_ARROW_LEFT} />
              </View>
            </View>
            <Image source={ICON_PROFILE_ICON} style={styles.profileImage} />
            <View style={styles.topRightItem} />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>{'Log In'.toUpperCase()}</Text>
            </View>
            <View style={styles.middleItems}>
              <View style={styles.row}>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#A6A6A6"
                  keyboardType="email-address"
                  autoFocus
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  placeholder={Constants.INPUT_EMAIL}
                />
                <Separator />
              </View>
              <View style={styles.row}>
                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="#A6A6A6"
                  keyboardType="default"
                  returnKeyType="go"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  underlineColorAndroid="transparent"
                  placeholder={Constants.INPUT_PASSWORD}
                />
                <Separator />
              </View>
              <View style={styles.textContainer}>
                <TouchableOpacity>
                  <Text style={styles.text}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <GradientButton text="Log In" />
              </View>
            </View>
            <View style={styles.bottomItems}>
              <ImageButton source={ICON_ARROW_LOCATION} />
              <View style={styles.row} />
              <ImageButton source={ICON_CARD} />
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default LogIn;
