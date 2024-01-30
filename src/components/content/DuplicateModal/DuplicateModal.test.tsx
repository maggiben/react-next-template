/* eslint-env jest */
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderer } from '@helpers/testing';
import { RecoilRoot } from 'recoil';
import DuplicateModal from './DuplicateModal';
import { personsState } from '@states/atoms';
import { Person } from 'types/type';
import i18next from 'i18next';
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('DuplicateModal', () => {
  it('renders with default values and handles selection', () => {
    const onSelectPersonModal = jest.fn();
    const closeModal = jest.fn();
    const mockedPerson = {
      id: '123',
      name: 'John',
      lastname: 'Doe',
      age: '30',
      validations: {
        email: true,
        renaper: false,
        facephi: true,
      },
      identification: {
        type: 'ID',
        number: 123456789,
        expiration: '2022-12-31',
      },
      email: {
        address: 'john.doe@example.com',
        confirmed: true,
        expiration: '2022-12-31',
      },
      selected: false,
      status: {
        label: 'Active',
        color: 'green',
      },
      phone: {
        number: 987654321,
        prefix: 1,
        codeArea: 123,
      },
      address: {
        zipCode: '12345',
        street: 'Main Street',
        number: '123',
        floor: '2',
        apartment: 'A',
        city: 'Cityville',
        state: 'CA',
        country: 'USA',
      },
    };
    const mockedTom = {...mockedPerson, id: '543', name: 'Tom'};
    const mockedPersons = [mockedPerson, mockedPerson, mockedTom, mockedPerson];
    
    const tree = renderer.create(
      <RecoilRoot initializeState={(snapshot) => snapshot.set(personsState, mockedPersons)}>
        <DuplicateModal isOpen={true} onSelectPersonModal={onSelectPersonModal} closeModal={closeModal} />
      </RecoilRoot>
    );
    expect(tree.baseElement).toMatchSnapshot();

    const acceptButton = tree.getByRole('button', { name: i18next.t('accept') });//, { name: 'Accept' })[0];
    const selection = tree.getByRole('radio', { name: 'Tom Doe'});
    // console.log('tomRadioButtons', tomRadioButtons);
    // const radioButtons = tree.getAllByRole('radio');
    // const selection = radioButtons[2];
    fireEvent.click(selection);
    fireEvent.click(acceptButton);
    expect(onSelectPersonModal).toHaveBeenCalledWith({...mockedTom, selected: true});
    // expect(closeModal).toHaveBeenCalled();
    // expect(tree.baseElement).toMatchSnapshot();
  });
});

