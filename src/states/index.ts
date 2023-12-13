import { atom, selector } from 'recoil';

export const currentFilterState = atom({
  key: 'currentFilterState',
  default: {name: '', email: '', cuid: null}
})