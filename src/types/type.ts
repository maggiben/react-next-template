
export type Status = 'onboardingfull' | 'onboardingincompleto' | 'dnicaduco';

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
    confirmed?: boolean;
  }
  selected?: boolean;
  status: Status;
  phone: {
    number: number;
    prefix: number;
    codeArea: number;
  };
  address: {
    zipCode: string;
    street: string;
    number: string;
    floor: string;
    apartment: string;
    city: string;
    state: string | null;
    country: string;
  };
}
