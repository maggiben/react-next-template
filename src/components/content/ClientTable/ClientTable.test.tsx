import React from 'react';
import { renderer } from '@helpers/testing';
import 'jest-styled-components';
import ClientTable from './ClientTable';

import { expect } from '@jest/globals';

test('Check ClientCard works', () => {
    const person = {
      id: '0001',
      name: 'Steve',
      age: 45,
      identification: {
        type: 'dni',
        number: 3000000
      },
      faceapi: true,
      email: {
        address: 'steve@fravega.com.ar',
        confirmed: true
      },
      profession: 'Doctor',
      city: 'Buenos Aires',
      cp: '1414',
      selected: false,
      status: {
        label: 'Ok',
        color: 'green',
      }
    }
    const tree = renderer.create(<ClientTable person={person} />).toJSON();
    expect(tree).toMatchSnapshot();
});
