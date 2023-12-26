

export type Person = {
  id: string;
  name: string;
  age: number,
  identification: {
    type: string,
    number: number;
  },
  profession: string;
  faceapi: boolean;
  email: {
    address: string;
    confirmed: boolean;
  }
  city: string;
  cp: string;  
  selected: boolean;
  status: {
    label: string;
    color: string;
  }
}
