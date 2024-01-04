import { atom } from 'recoil';
import { Person } from 'types/type';

export const personState = atom<Person | undefined>({
  key: 'personState',
  default: undefined,
  // default: {
  //   id: '',
  //   name: '',
  //   lastname: '',
  //   age: 0,
  //   identification: {
  //     type: '',
  //     number: 0,
  //     expiration: '',
  //   },
  //   faceapi: false,
  //   email: {
  //     address: '',
  //     confirmed: false,
  //     expiration: '',
  //   },
  //   renaper: {
  //     confirmed: false,
  //     expiration: '',
  //   },
  //   address: {
  //     street: '',
  //     number: '',
  //     floor: '',
  //     city: '',
  //     province: '',
  //     postalCode: '',
  //     country: '',
  //   },
  //   profession: '',
  //   city: '',
  //   cp: '',
  //   selected: false,
  //   status: {
  //     label: '',
  //     color: '',
  //   },
  // },
});

export const personsState = atom<Person[] | undefined>({
  key: 'personsState',
  default: undefined,
});


export const currentFilterState = atom({
  key: 'currentFilterState',
  default: {
    name: undefined, 
    email: undefined, 
    cuid: undefined,
    documentType: undefined,
    documentNumber: undefined,
  },
});
