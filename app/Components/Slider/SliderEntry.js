import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image } from 'react-native';

import styles from './styles';

class SliderEntry extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { data: { type } } = this.props;
    return (
      <Image
        source={{ uri: type.image_url }}
        style={styles.image}
      />
    );
  }
}

SliderEntry.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SliderEntry;
