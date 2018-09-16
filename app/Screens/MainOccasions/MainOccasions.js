import React, { Component } from 'react';
import { View } from 'react-native';

import { Container } from '../../Components';
import styles from './styles';

class MainOccasions extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <View style={styles.container} />
      </Container>
    );
  }
}

export default MainOccasions;
