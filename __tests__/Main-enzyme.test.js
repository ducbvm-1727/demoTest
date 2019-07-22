import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme'
import Main from '../src/Main'
Enzyme.configure({ adapter: new Adapter() });

it('Main test Enzyme', () => {
  const snap = shallow(
    <Main name={'Duc'} />
  )
  expect(snap).toMatchSnapshot()

  snap.setProps({ name: 'Duc Dep trai' });

  expect(snap).toMatchSnapshot();
})