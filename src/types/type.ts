

export type Person = {
  id: string;
  name: string;
  lastname: string;
  age: number,
  identification: {
    type: string,
    number: number;
    expiration: string;
  },
  profession: string;
  faceapi: boolean;
  email: {
    address: string;
    confirmed: boolean;
    expiration: string;
  }
  city: string;
  cp: string;  
  selected: boolean;
  status: {
    label: string;
    color: string;
  };
  renaper: {
    confirmed: boolean;
    expiration: string;
  };
  address: {
    street: string;
    number: string;
    floor: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
}
