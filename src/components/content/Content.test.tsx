import React from 'react';
import { renderer } from '@helpers/testing';
import 'jest-styled-components';
import Content from '.';

import { expect } from '@jest/globals';

test('Check Content works', () => {
    const tree = renderer.create(<Content />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('expect 1 to be 1', () => {
    expect(1).toBe(1);
});
