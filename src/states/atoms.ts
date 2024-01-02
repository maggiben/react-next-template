import { atom } from 'recoil';

export const personState = atom({
  key: 'personState',
  default: {
    id: '',
    name: '',
    lastname: '',
    age: 0,
    identification: {
      type: '',
      number: 0,
      expiration: '',
    },
    faceapi: false,
    email: {
      address: '',
      confirmed: false,
    },
    renaper: {
      confirmed: false,
      expiration: '',
    },
    profession: '',
    city: '',
    cp: '',
    selected: false,
    status: {
      label: '',
      color: '',
    },
  },
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
