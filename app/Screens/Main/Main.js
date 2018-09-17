import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import {
  Card,
  Container,
  SeparatorSpace,
  connectAlert,
} from '../../Components';
import { getMainCategory } from '../../Actions/Main';

class Main extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMainCategory());
  }

  componentWillReceiveProps(nextProps) {
    const { alertWithType } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
  }

  render() {
    const { category, title, height } = this.props;
    const data = category && category.find(item => item.name === title);
    return (
      <Container>
        <FlatList
          data={data !== null ? data.categories : null}
          renderItem={({ item }) => (
            <Card
              image={item.image_url}
              title={item.name}
              places={item.places_count}
              height={height}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={SeparatorSpace}
        />
      </Container>
    );
  }
}

Main.propTypes = {
  category: PropTypes.array,
  dispatch: PropTypes.func,
  title: PropTypes.string,
  height: PropTypes.string,
  error: PropTypes.string,
  alertWithType: PropTypes.func,
};

const mapStateToProps = state => ({
  category: state.main.category,
  error: state.main.error,
});

export default connect(mapStateToProps)(connectAlert(Main));
