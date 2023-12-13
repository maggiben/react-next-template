import { atom } from 'recoil';

export const personState = atom({
  key: 'personState',
  default: {
    id: '',
    name: '',
    age: 0,
    identification: {
      type: '',
      number: 0
    },
    faceapi: false,
    email: {
      address: '',
      confirmed: false
    },
    profession: '',
    city: '',
    cp: '',
    selected: false,
    status: {
      label: '',
      color: '',
    }
  }
})