import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import NoResults from './';
import { expect } from '@jest/globals';

describe('NoResults', () => {
  it('renders the NoResults component', () => {
    const tree = renderer.create(<NoResults message='Hello World'/>);
    expect(tree).toMatchSnapshot();
  });
});
