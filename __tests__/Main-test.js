import 'react-native';
import React from 'react';
import Main from '../src/Main';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Main snapshot', () => {
  const snap = renderer.create(
    <Main />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
