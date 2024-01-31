import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import Welcome from './Welcome';
import { expect } from '@jest/globals';

describe('Welcome', () => {
  it('renders the Welcome component', () => {
    const tree = renderer.create(<Welcome />);
    expect(tree).toMatchSnapshot();
  });
});
