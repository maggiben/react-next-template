

export type Person = {
  id: string;
  name: string;
  lastname: string;
  age: string;
  validations: Record<string, boolean>;
  identification: {
    type: string,
    number: number;
    expiration: string;
  },
  email: {
    address: string;
    confirmed: boolean;
    expiration: string;
  }
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
