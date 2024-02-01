import React from 'react';
import { renderer, RecoilValueObserver, RecoilResetObserver, RecoilStateObserver } from '@helpers/testing';
import { act, RenderResult } from '@testing-library/react';
import 'jest-styled-components';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import '@testing-library/jest-dom';
import { personState, personsState } from '@states/atoms';
import { expect } from '@jest/globals';
import { Person } from 'types/type';
import Card from './Card';
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
// import ClientCard from '../ClientCard/ClientCard';
// import EmptyCard from '../EmptyCard/EmptyCard';
// import DuplicateModal from '../DuplicateModal/DuplicateModal';


const clients = [
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
      "status": "onBoardingFull",
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
      "status": "onBoardingFull",
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
      "status": "onBoardingFull",
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
      "status": "onBoardingFull",
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

const person = {
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
  "status": "onBoardingFull",
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

const MockClientCard = jest.fn().mockReturnValue(() => {
  return (
    <div data-testid="client-card" />
  );
});

const MockEmptyCard = jest.fn().mockReturnValue(() => {
  return (
    <div data-testid="empty-card" />
  );
});

// jest.mock('../EmptyCard/EmptyCard', () => jest.fn().mockReturnValue(() => {
//   return (
//     <div data-testid="empty-card" />
//   );
// }));

// jest.mock('../ClientCard/ClientCard', () => jest.fn().mockReturnValue(() => {
//   return (
//     <div data-testid="client-card" />
//   );
// }));

// Mock the FirstComponent
const EmptyCardMock = () => <div data-testid="empty-card"></div>;
jest.mock('../EmptyCard/EmptyCard', () => EmptyCardMock);

// Mock the SecondComponent
const ClientCarddMock = () => <div data-testid="client-card"></div>;
jest.mock('../ClientCard/ClientCard', () => ClientCarddMock);

// // mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockResolvedValue({
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
  }),
}));
const mockUseRouter = useRouter as jest.Mock;

describe('ClientCard', () => {
  let handlerMock: (url: string | undefined) => {};
  const pushMock = jest.fn();
  const on = (event: string, listener: (url: string | undefined) => {}) => {
    // listener('http://fravega.com.ar');
    // listener('http://fravega.com.ar');
    handlerMock = listener;
  };
  const off = jest.fn();
  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      pathname: '/mocked-path',
      push: pushMock,
      events: {
        on,
        off,
      },
      query: {
        documentType: 'dni',
        documentNumber: 30000001,
      },
    });
    // jest.mock('../ClientCard/ClientCard', () => MockClientCard);
    // jest.mock('../EmptyCard/EmptyCard', () => MockEmptyCard);
  });

  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetModules();
  });

  it('renders the ClientCard component', async () => {
    let tree: RenderResult;
    let initialState = [person] as Person[];
    
    await act(async () => {
      tree = renderer.create(
        <RecoilRoot initializeState={(snapshot) => snapshot.set(personsState, initialState)}>
          <Card />
        </RecoilRoot>
      );
      expect(tree.baseElement).toMatchSnapshot();
    });

    await act(async () => {
      expect(handlerMock).toBeDefined();
      expect(typeof handlerMock).toEqual('function');
      if (handlerMock && typeof handlerMock === 'function') {
        handlerMock('http://fravega.com.ar');
      }
    });
  });

  it('renders the ClientCard component', async () => {
    let tree: RenderResult | undefined = undefined;;
    let initialState = [person] as Person[];
    const onChange = jest.fn();
    const onChangeReset = jest.fn();

    await act(async () => {
      tree = renderer.create(
        <RecoilRoot initializeState={(snapshot) => snapshot.set(personsState, initialState)}>
          <RecoilValueObserver node={personsState} onChange={onChange} />
          <RecoilResetObserver node={personsState} onChange={onChangeReset} />
          <Card />
        </RecoilRoot>
      );
    });

    if (tree) {
      expect((tree as RenderResult).baseElement).toMatchSnapshot();
      expect(onChange).toHaveBeenCalledWith([person]);
      await act(async () => {
        expect(handlerMock).toBeDefined();
        expect(typeof handlerMock).toEqual('function');
        if (handlerMock && typeof handlerMock === 'function') {
          await act(async () => {
            handlerMock('http://fravega.com.ar');
            
          });
          expect(onChange).toHaveBeenCalledWith([person]);
          expect(onChangeReset).toHaveBeenCalledTimes(1);
        }
      });
      expect((tree as RenderResult).baseElement).toMatchSnapshot();
    }
  });

  it('renders the ClientCard component empty card will set no selected', async () => {
    let tree: RenderResult | undefined = undefined;;
    let initialState = [{ ...person, selected: true }] as Person[];
    const onChange = jest.fn();

    mockUseRouter.mockReturnValue({
      pathname: '/mocked-path',
      push: pushMock,
      events: {
        on,
        off,
      },
      query: {},
    });
    
    await act(async () => {
      tree = renderer.create(
        <RecoilRoot initializeState={(snapshot) => snapshot.set(personsState, initialState)}>
          <RecoilStateObserver node={personsState} onChange={onChange} />
          <Card />
        </RecoilRoot>
      );
    });

    if (tree) {
      expect((tree as RenderResult).baseElement).toMatchSnapshot();
      await act(async () => {
        expect(handlerMock).toBeDefined();
        expect(typeof handlerMock).toEqual('function');
        if (handlerMock && typeof handlerMock === 'function') {
          await act(() => {
            handlerMock(undefined);
          });
          // selects nothing
        }
      });
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenNthCalledWith(1, [{ ...person, selected: true }])
      expect(onChange).toHaveBeenNthCalledWith(2, [{ ...person, selected: false }])
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
    }
  });

  it('renders the ClientCard Empty component', async () => {
    mockUseRouter.mockReturnValue({
      pathname: '/mocked-path',
      push: pushMock,
      events: {
        on,
        off,
      },
      query: {},
    });
    let tree: RenderResult | undefined = undefined;;
    let initialState = [person] as Person[];
    
    await act(async () => {
      tree = renderer.create(
        <RecoilRoot initializeState={(snapshot) => {
          snapshot.set(personsState, initialState);
          snapshot.set(personsState, initialState);
        }}>
          <Card />
        </RecoilRoot>
      );
    });

    if (tree) {
      expect((tree as RenderResult).baseElement.innerHTML).toMatchSnapshot();
    }
  });
});
