import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Container, connectAlert } from '../../Components';
import { getMainOccasion } from '../../Actions/MainOccasion';
import styles from './styles';

class MainOccasion extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMainOccasion());
  }

  componentWillReceiveProps(nextProps) {
    const { alertWithType } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container} />
      </Container>
    );
  }
}

MainOccasion.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.string,
  alertWithType: PropTypes.func,
};

const mapStateToProps = state => ({
  occasions: state.occasions.occasions,
  error: state.occasions.error,
});

export default connect(mapStateToProps)(connectAlert(MainOccasion));
