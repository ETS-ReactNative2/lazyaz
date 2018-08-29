import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Container = ({ children }) => (
  <SafeAreaView>{children}</SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
