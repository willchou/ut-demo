import React from 'react';
import render from 'react-test-renderer';
import Clock from '../src/Clock';

jest.useFakeTimers();
Date.now = jest.fn(() => 1615972229101);

beforeEach(() => {
  jest.clearAllTimers();
})

test('clock snapshot', () => {
  const tree = render.create(<Clock />).toJSON();

  expect(tree).toMatchSnapshot();
})

test('setTimeout tests', () => {
  const tree = render.create(<Clock />).toJSON();
  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1800);
})
