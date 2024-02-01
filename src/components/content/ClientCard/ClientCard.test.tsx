import React from 'react';
import { renderer } from '@helpers/testing';
import { act, RenderResult } from '@testing-library/react';
import 'jest-styled-components';
import { useRouter } from 'next/router';
import { useFetch, useMediaQuery } from 'usehooks-ts';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom';
import {
  screen,
  getAllByRole,
} from "@testing-library/react";
import { personState, personsState } from '@states/atoms';
import { expect } from '@jest/globals';
import ClientCard from './ClientCard';
import { Person } from 'types/type';
import DuplicateModal, { DuplicateModalProps } from '../DuplicateModal/DuplicateModal';

const clients: Person[] = [
  {
      "id": "001",
      "name": "Federico",
      "lastname": "Garcia",
      "age": "1983-01-24",
      "validations": {
          "facephi": true,
          "renaper": true,
          "email": true,
          "phone": true,
          "identificationExpired": true
      },
      "identification": {
          "type": "dni",
          "number": 30000000,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "email": {
          "address": "federico@gmail.com",
          "confirmed": false
      },
      "selected": false,
      "phone": {
          "number": 55512345,
          "prefix": 11,
          "codeArea": 356
      },
      "status": "onboardingfull",
      "address": {
          "zipCode": "1100",
          "street": "AV. Corrientes",
          "number": "1700",
          "floor": "0",
          "apartment": "C",
          "city": "Neuquen",
          "state": "Neuquen",
          "country": "Arg"
      }
  },
  {
      "id": "002",
      "name": "Facundo",
      "lastname": "Perez",
      "age": "2001-03-02",
      "validations": {
          "facephi": false,
          "renaper": true,
          "email": true,
          "phone": false,
          "identificationExpired": false
      },
      "identification": {
          "type": "dni",
          "number": 30000001,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "email": {
          "address": "facundo@gmail.com",
          "confirmed": false
      },
      "selected": false,
      "phone": {
          "number": 55512345,
          "prefix": 11,
          "codeArea": 299
      },
      "status": "dnicaduco",
      "renaper": {
          "confirmed": true,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "address": {
          "zipCode": "1414",
          "street": "Castillo",
          "number": "1414",
          "floor": "1",
          "apartment": "A",
          "city": "CABA",
          "state": "CABA",
          "country": "Arg"
      }
  },
  {
      "id": "003",
      "name": "Facundo",
      "lastname": "Perez",
      "age": "1961-02-24",
      "validations": {
          "facephi": true,
          "renaper": false,
          "email": false,
          "phone": false,
          "identificationExpired": true
      },
      "identification": {
          "type": "dni",
          "number": 30000001,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "email": {
          "address": "facundo@gmail.com",
          "confirmed": false
      },
      "selected": false,
      "phone": {
          "number": 1234567,
          "prefix": 11,
          "codeArea": 264
      },
      "status": "onboardingfull",
      "renaper": {
          "confirmed": true,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "address": {
          "zipCode": "8400",
          "street": "Mitre",
          "number": "12",
          "floor": "1",
          "apartment": "A",
          "city": "S.C. de Bariloche",
          "state": "Rio Negro",
          "country": "Arg"
      }
  },
  {
      "id": "004",
      "name": "Jeremías",
      "lastname": "Springfield",
      "age": "2003-06-05",
      "validations": {
          "facephi": true,
          "renaper": false,
          "email": false,
          "phone": true,
          "identificationExpired": false
      },
      "identification": {
          "type": "dni",
          "number": 30000002,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "email": {
          "address": "jeremías@gmail.com",
          "confirmed": true
      },
      "selected": false,
      "phone": {
          "number": 5559876,
          "prefix": 22,
          "codeArea": 987
      },
      "status": "onboardingincompleto",
      "renaper": {
          "confirmed": true,
          "expiration": "2023-12-29T12:33:32.740Z"
      },
      "address": {
          "zipCode": "4400",
          "street": "Palacios",
          "number": "12",
          "floor": "7",
          "apartment": "A",
          "city": "Salta",
          "state": "Salta",
          "country": "Arg"
      }
  }
];

const person: Person = {
  "id": "001",
  "name": "Federico",
  "lastname": "Garcia",
  "age": "1983-01-24",
  "validations": {
      "facephi": true,
      "renaper": true,
      "email": true,
      "phone": true,
      "identificationExpired": true
  },
  "identification": {
      "type": "dni",
      "number": 30000000,
      "expiration": "2023-12-29T12:33:32.740Z"
  },
  "email": {
      "address": "federico@gmail.com",
      "confirmed": false
  },
  "selected": false,
  "phone": {
      "number": 55512345,
      "prefix": 11,
      "codeArea": 356
  },
  "status": "onboardingfull",
  "address": {
      "zipCode": "1100",
      "street": "AV. Corrientes",
      "number": "1700",
      "floor": "0",
      "apartment": "C",
      "city": "Neuquen",
      "state": "Neuquen",
      "country": "Arg"
  }
};

const MockClientCardLayout = jest.fn().mockReturnValue(() => {
  return (
    <div data-testid="card-layout" />
  );
});

let closeModalMock = jest.fn();
let onSelectPersonModalMock = jest.fn();

jest.mock('./../DuplicateModal/DuplicateModal', () => function DuplicateModal(props: any) {
  const isOpen = props.isOpen;
  closeModalMock = props.closeModal;
  onSelectPersonModalMock = props.onSelectPersonModal;
  return (
    <div data-testid="card-modal" data-isopen={isOpen.toString()}></div>
  );
});



jest.mock('@components/Waiting', () => function Waiting() {
  return (
      <div data-testid="waiting">
        {/* Mock DuplicateModalBody component */}
        {/* {persons && persons.map(person => (
          <label key={person.id}>
            <input
              type="checkbox"
              value={person.id}
              checked={person.selected || false}
              onChange={(e) => handleSelection(e.target.checked, { event: e, value: person.id })}
            />
            {person.name}
          </label>
        ))} */}
      </div>
  );
});
// // mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('usehooks-ts', () => ({
  useRouter: jest.fn(),
  useFetch: jest.fn(),
  useMediaQuery: jest.fn(),
}));
const mockUseRouter = useRouter as jest.Mock;
const mockUseFetch = useFetch as jest.Mock;

describe('ClientCard', () => {

  beforeEach(() => {
    const pushMock = jest.fn();
    mockUseRouter.mockReturnValue({
      pathname: '/mocked-path',
      push: pushMock,
    });
    mockUseFetch.mockReturnValue({
      data: [person],
      error: undefined,
    });
  });

  it('renders the ClientCard component', async () => {
    let tree: RenderResult | undefined = undefined;
    await act(async () => {
      tree = renderer.create(
        <RecoilRoot>
          <ClientCard />
        </RecoilRoot>
      );
    });
    
    if(tree) {
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
      // console.log((tree as RenderResult).getByRole('modal').attributes)
      // expect((tree as RenderResult).getByRole('modal')).not.toBeInTheDocument();
    }
  });

  it('renders the ClientCard component close dupicate modal', async () => {
    jest.mock('./ClientCardLayout', () => MockClientCardLayout);
    mockUseFetch.mockReturnValue({
      data: clients,
      error: undefined,
    });
    let tree: RenderResult | undefined = undefined;
    mockUseFetch.mockReturnValue({
      data: clients,
      error: undefined,
    });
    await act(async () => {
      tree = renderer.create(
        <RecoilRoot initializeState={(snapshot) => snapshot.set(personsState, clients)}>
          <ClientCard />
        </RecoilRoot>
      );
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
    });
    
    if(tree) {
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
      await act(async () => {
        closeModalMock();
      });
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
    }
  });

  it('renders the ClientCard component select person in dupicate modal', async () => {
    jest.mock('./ClientCardLayout', () => MockClientCardLayout);
    mockUseFetch.mockReturnValue({
      data: clients,
      error: undefined,
    });
    let tree: RenderResult | undefined = undefined;
    mockUseFetch.mockReturnValue({
      data: clients,
      error: undefined,
    });
    await act(async () => {
      tree = renderer.create(
        <RecoilRoot initializeState={(snapshot) => snapshot.set(personsState, clients)}>
          <ClientCard />
        </RecoilRoot>
      );
    });
    
    if(tree) {
      await act(async () => {
        onSelectPersonModalMock(clients[1]);
      });
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
    }
  });
});
