import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BottomBar } from './index';

test('BottomBar component renders correctly', () => {
  const props = {
    destination: {},
  };
  const tree = renderer.create(<BottomBar {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
