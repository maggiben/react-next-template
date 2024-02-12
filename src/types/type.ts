
export type Status = 'onboardingfull' | 'onboardingincompleto' | 'dnicaduco';
export interface Person {
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

export interface Address {
  '_t'?: string;
  _id: string;
  originChannel?: {
    typeChannel: string;
    sourceSystem: string;
    originChannelType: string;
  };
  lastUseDate: string;
  zipCode: string;
  street: string;
  number: string;
  floor: string;
  apartment: string | null;
  city: string;
  state: string;
  country: string;
  betweenStreets: string | null;
  references: string | null;
  geoCoordinates: {
    latitude: string;
    longitude: string;
  } | null;
  stateVerified: string;
  channel: string | null;
  applyTo: string[];
  type: string;
}

export interface Document {
  type: string;
  number: string;
  verified: boolean | null;
  stateVerified: string;
  channel: string | null;
}

export interface Phone {
  originChannel: {
    typeChannel: string;
    sourceSystem: string;
    originChannelType: string;
  };
  lastUseDate: string;
  _id: string;
  type: string;
  areaCode: string;
  number: string;
  internal: string | null;
  verified: boolean | null;
  stateVerified: string;
  channel: string | null;
}

export interface Email {
  originChannel: {
    typeChannel: string;
    sourceSystem: string;
    originChannelType: string;
  };
  lastUseDate: string;
  _id: string;
  email: string;
  receiveNewsletter: boolean | null;
  isMain: boolean | null;
  verified: boolean | null;
  stateVerified: string;
  channel: string | null;
}

export interface Invoice {
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  ivaCondition: string;
  addresses: Address[];
  originChannel?: Record<string, string>;
}

export interface Incident {
  code: string;
  description: string;
}

export interface Customer {
  _id: string;
  createdOn: string;
  updatedOn: string | null;
  documents: Document[];
  firstName: string;
  lastName: string;
  gender: string;
  birth: string | null;
  nationality: string | null;
  placeBirth: string | null;
  maritalStatus: string;
  receiveNewsletter: boolean;
  addresses: Address[];
  phones: Phone[];
  emails: Email[];
  taxConfiguration: any | null; // Change type if known
  creditCustomer: any | null; // Change type if known
  invoices: Invoice[];
  creationOriginOn: string;
  creationChannel: string;
  active: boolean;
  disablingReason: string | null;
  traceId: string;
  incidents: Incident[];
  workData: any[]; // Change type if known
  referenceContact: any[]; // Change type if known
}