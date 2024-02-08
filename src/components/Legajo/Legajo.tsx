import { useMemo } from 'react';
import {
  Grid,
  GridItem,
  Heading,
  LocationIcon,
  PhoneIcon,
  MailIcon,
  TicketIcon,
  DocumentIcon,
  TextBody,
} from "@fravega-it/bumeran-ds-fvg";
import Card from '@components/content/Card/Card';
import { FormValues } from '@components/forms/SearchForm/SearchForm';
import styled from "styled-components";
import { useRouter } from 'next/router';
import Welcome from '@components/content/Welcome/Welcome';
import SearchForm from '@components/forms/SearchForm/SearchForm';
import Accordion from '@components/Accordion/Accordion';
import DataContainer from '@components/DataContainer/DataContainer';
import LegajoAddressBody from '@components/Legajo/LegajoAddressBody';
import LegajoEmailBody from '@components/Legajo/LegajoEmailBody';
import LegajoInvoicesBody from '@components/Legajo/LegajoInvoicesBody';
import { SpaceBottom, SpaceTop } from '@components/Spacing/Spacing';
import { Customer } from 'types/type';

const datum: Customer[] = [{
  "_id": "218e0095-e089-42a0-8ba1-34345b924375",
  "createdOn": "2024-01-31T19:00:46.950+0000",
  "updatedOn": null,
  "documents": [{
    "type": "DNI",
    "number": "38973232",
    "verified": null,
    "stateVerified": "VERIFIED",
    "channel": "CONTRIBUTOR"
  }],
  "firstName": "Karen Elizabeth",
  "lastName": "Tito",
  "gender": "NOT_INFORMED",
  "birth": null,
  "nationality": null,
  "placeBirth": null,
  "maritalStatus": "NOT_INFORMED",
  "receiveNewsletter": false,
  "addresses": [{
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.777+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": {
        "latitude": "-58.38155746459961",
        "longitude": "-34.60368347167969"
      },
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "DELIVERY",
        "INVOICE"
      ],
      "type": "0"
    },
    {
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.777+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": {
        "latitude": "-58.38155746459961",
        "longitude": "-34.60368347167969"
      },
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "DELIVERY",
        "INVOICE"
      ],
      "type": "0"
    },
    {
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.777+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": {
        "latitude": "-58.38155746459961",
        "longitude": "-34.60368347167969"
      },
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "DELIVERY",
        "INVOICE"
      ],
      "type": "0"
    }
  ],
  "phones": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "77bd4455-e135-4cc7-b2f4-3501542c7d9a",
    "type": "NOT_INFORMED",
    "areaCode": "54",
    "number": "1166169652",
    "internal": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "emails": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "78c7c0e2-b341-487e-bec7-8e19e85b6b2f",
    "email": "titokarenelizabeth@gmail.com",
    "receiveNewsletter": null,
    "isMain": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "taxConfiguration": null,
  "creditCustomer": null,
  "invoices": [{
    "firstName": "Karen Elizabeth",
    "lastName": "Tito",
    "documentType": "DNI",
    "documentNumber": "38973232",
    "ivaCondition": "EndConsumer",
    "addresses": [{
      "_t": "Address",
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.700+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "fdd61b72-5016-47f6-824c-4a917a8ccb67",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": null,
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "INVOICE"
      ],
      "type": "0"
    }]
  }],
  "creationOriginOn": "2024-01-31T19:00:46.950+0000",
  "creationChannel": "",
  "active": true,
  "disablingReason": null,
  "traceId": "0beaca31-1cba-4542-bdeb-0375bbc80959",
  "incidents": [{
      "code": "2",
      "description": "Customer’s address country ARG not found"
    },
    {
      "code": "2",
      "description": "Customer’s address state CIUDAD AUTÓNOMA DE BUENOS AIRES not found"
    }
  ],
  "workData": [

  ],
  "referenceContact": [

  ]
}, {
  "_id": "218e0095-e089-42a0-8ba1-34345b924375",
  "createdOn": "2024-01-31T19:00:46.950+0000",
  "updatedOn": null,
  "documents": [{
    "type": "DNI",
    "number": "38973232",
    "verified": null,
    "stateVerified": "VERIFIED",
    "channel": "CONTRIBUTOR"
  }],
  "firstName": "Karen Elizabeth",
  "lastName": "Tito",
  "gender": "NOT_INFORMED",
  "birth": null,
  "nationality": null,
  "placeBirth": null,
  "maritalStatus": "NOT_INFORMED",
  "receiveNewsletter": false,
  "addresses": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.777+0000",
    "zipCode": "1001",
    "street": "Della Paolera ",
    "number": "265",
    "floor": "28",
    "apartment": null,
    "city": "Ciudad Autónoma Buenos Aires",
    "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
    "country": "ARG",
    "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
    "betweenStreets": null,
    "references": null,
    "geoCoordinates": {
      "latitude": "-58.38155746459961",
      "longitude": "-34.60368347167969"
    },
    "stateVerified": "VERIFIED",
    "channel": null,
    "applyTo": [
      "DELIVERY",
      "INVOICE"
    ],
    "type": "0"
  }],
  "phones": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "77bd4455-e135-4cc7-b2f4-3501542c7d9a",
    "type": "NOT_INFORMED",
    "areaCode": "54",
    "number": "1166169652",
    "internal": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "emails": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "78c7c0e2-b341-487e-bec7-8e19e85b6b2f",
    "email": "titokarenelizabeth@gmail.com",
    "receiveNewsletter": null,
    "isMain": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "taxConfiguration": null,
  "creditCustomer": null,
  "invoices": [{
    "firstName": "Karen Elizabeth",
    "lastName": "Tito",
    "documentType": "DNI",
    "documentNumber": "38973232",
    "ivaCondition": "EndConsumer",
    "addresses": [{
      "_t": "Address",
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.700+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "fdd61b72-5016-47f6-824c-4a917a8ccb67",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": null,
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "INVOICE"
      ],
      "type": "0"
    }]
  }],
  "creationOriginOn": "2024-01-31T19:00:46.950+0000",
  "creationChannel": "",
  "active": true,
  "disablingReason": null,
  "traceId": "0beaca31-1cba-4542-bdeb-0375bbc80959",
  "incidents": [{
      "code": "2",
      "description": "Customer’s address country ARG not found"
    },
    {
      "code": "2",
      "description": "Customer’s address state CIUDAD AUTÓNOMA DE BUENOS AIRES not found"
    }
  ],
  "workData": [

  ],
  "referenceContact": [

  ]
}, {
  "_id": "218e0095-e089-42a0-8ba1-34345b924375",
  "createdOn": "2024-01-31T19:00:46.950+0000",
  "updatedOn": null,
  "documents": [{
    "type": "DNI",
    "number": "38973232",
    "verified": null,
    "stateVerified": "VERIFIED",
    "channel": "CONTRIBUTOR"
  }],
  "firstName": "Karen Elizabeth",
  "lastName": "Tito",
  "gender": "NOT_INFORMED",
  "birth": null,
  "nationality": null,
  "placeBirth": null,
  "maritalStatus": "NOT_INFORMED",
  "receiveNewsletter": false,
  "addresses": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.777+0000",
    "zipCode": "1001",
    "street": "Della Paolera ",
    "number": "265",
    "floor": "28",
    "apartment": null,
    "city": "Ciudad Autónoma Buenos Aires",
    "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
    "country": "ARG",
    "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
    "betweenStreets": null,
    "references": null,
    "geoCoordinates": {
      "latitude": "-58.38155746459961",
      "longitude": "-34.60368347167969"
    },
    "stateVerified": "VERIFIED",
    "channel": null,
    "applyTo": [
      "DELIVERY",
      "INVOICE"
    ],
    "type": "0"
  }],
  "phones": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "77bd4455-e135-4cc7-b2f4-3501542c7d9a",
    "type": "NOT_INFORMED",
    "areaCode": "54",
    "number": "1166169652",
    "internal": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "emails": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "78c7c0e2-b341-487e-bec7-8e19e85b6b2f",
    "email": "titokarenelizabeth@gmail.com",
    "receiveNewsletter": null,
    "isMain": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "taxConfiguration": null,
  "creditCustomer": null,
  "invoices": [{
    "firstName": "Karen Elizabeth",
    "lastName": "Tito",
    "documentType": "DNI",
    "documentNumber": "38973232",
    "ivaCondition": "EndConsumer",
    "addresses": [{
      "_t": "Address",
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.700+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "fdd61b72-5016-47f6-824c-4a917a8ccb67",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": null,
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "INVOICE"
      ],
      "type": "0"
    }]
  }],
  "creationOriginOn": "2024-01-31T19:00:46.950+0000",
  "creationChannel": "",
  "active": true,
  "disablingReason": null,
  "traceId": "0beaca31-1cba-4542-bdeb-0375bbc80959",
  "incidents": [{
      "code": "2",
      "description": "Customer’s address country ARG not found"
    },
    {
      "code": "2",
      "description": "Customer’s address state CIUDAD AUTÓNOMA DE BUENOS AIRES not found"
    }
  ],
  "workData": [

  ],
  "referenceContact": [

  ]
}, {
  "_id": "218e0095-e089-42a0-8ba1-34345b924375",
  "createdOn": "2024-01-31T19:00:46.950+0000",
  "updatedOn": null,
  "documents": [{
    "type": "DNI",
    "number": "38973232",
    "verified": null,
    "stateVerified": "VERIFIED",
    "channel": "CONTRIBUTOR"
  }],
  "firstName": "Karen Elizabeth",
  "lastName": "Tito",
  "gender": "NOT_INFORMED",
  "birth": null,
  "nationality": null,
  "placeBirth": null,
  "maritalStatus": "NOT_INFORMED",
  "receiveNewsletter": false,
  "addresses": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.777+0000",
    "zipCode": "1001",
    "street": "Della Paolera ",
    "number": "265",
    "floor": "28",
    "apartment": null,
    "city": "Ciudad Autónoma Buenos Aires",
    "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
    "country": "ARG",
    "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
    "betweenStreets": null,
    "references": null,
    "geoCoordinates": {
      "latitude": "-58.38155746459961",
      "longitude": "-34.60368347167969"
    },
    "stateVerified": "VERIFIED",
    "channel": null,
    "applyTo": [
      "DELIVERY",
      "INVOICE"
    ],
    "type": "0"
  }],
  "phones": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "77bd4455-e135-4cc7-b2f4-3501542c7d9a",
    "type": "NOT_INFORMED",
    "areaCode": "54",
    "number": "1166169652",
    "internal": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "emails": [{
    "originChannel": {
      "typeChannel": "Ecommerce",
      "sourceSystem": "Vtex",
      "originChannelType": "Create"
    },
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "78c7c0e2-b341-487e-bec7-8e19e85b6b2f",
    "email": "titokarenelizabeth@gmail.com",
    "receiveNewsletter": null,
    "isMain": null,
    "verified": false,
    "stateVerified": "NOT_VERIFIED",
    "channel": null
  }],
  "taxConfiguration": null,
  "creditCustomer": null,
  "invoices": [{
    "firstName": "Karen Elizabeth",
    "lastName": "Tito",
    "documentType": "DNI",
    "documentNumber": "38973232",
    "ivaCondition": "EndConsumer",
    "addresses": [{
      "_t": "Address",
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-31T19:00:09.700+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": null,
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "fdd61b72-5016-47f6-824c-4a917a8ccb67",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": null,
      "stateVerified": "VERIFIED",
      "channel": null,
      "applyTo": [
        "INVOICE"
      ],
      "type": "0"
    }]
  }],
  "creationOriginOn": "2024-01-31T19:00:46.950+0000",
  "creationChannel": "",
  "active": true,
  "disablingReason": null,
  "traceId": "0beaca31-1cba-4542-bdeb-0375bbc80959",
  "incidents": [{
      "code": "2",
      "description": "Customer’s address country ARG not found"
    },
    {
      "code": "2",
      "description": "Customer’s address state CIUDAD AUTÓNOMA DE BUENOS AIRES not found"
    }
  ],
  "workData": [

  ],
  "referenceContact": [

  ]
}];

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CustomerCard = styled.div`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  &:div {
    background-color: red;
  }
`;

const Legajo = (): JSX.Element => {
  const router = useRouter();
  const legajo = datum[0];

  const addreses = legajo.addresses.map((address) => ({
    label: 'Direcciones',
    body: <LegajoAddressBody address={address} />
  }));

  const phones = legajo.phones.map((phone) => ({
    label: 'Phones',
    body: <TextBody>{phone.number} verificado: {phone.verified}</TextBody>,
  }));

  const documents = legajo.documents.map((document) => ({
    label: 'Documents',
    body: <TextBody><span>{`${document.type}: `}</span>{document.number}</TextBody>,
  }));

  const emails = legajo.emails.map((email) => ({
    label: 'Emails',
    body: <LegajoEmailBody email={email} />,
  }));

  const invoices = legajo.invoices.map((invoice) => ({
    label: 'Invoices',
    body: <LegajoInvoicesBody invoice={invoice} />,
  }));

  return (
    <Grid>
      <GridItem xs={12}>
        {/* <Welcome /> */}
        {/* <SpaceTop size='xl' /> */}
        {/* <SearchForm onSearch={onSearch} {...router.query} /> */}
        <SpaceTop size='xl' />
        <Container data-testid="legajo">
          <GridItem xs={12} justifySelf="start" alignSelf="center">
            <Heading size="s">{legajo.firstName} {legajo.lastName}</Heading>
          </GridItem>
          <SpaceBottom size='m' />
          <DataContainer data={[{
            creado: new Date(legajo.createdOn).toLocaleDateString(),
          }, {
            nacionalidad: 'ARG',
          }]} columns={2} withBorder={true} background='transparent'/>
          <SpaceBottom size='m' />
          <CustomerCard>
            <GridItem xs={12}>
              <Accordion data={documents} id='documents' leftIcon={<DocumentIcon size="l" />}/>
              <Accordion data={addreses} id='addreses' leftIcon={<LocationIcon size="l" />}/>
              <Accordion data={phones} id='phones' leftIcon={<PhoneIcon size="l" />}/>
              <Accordion data={emails} id='emails' leftIcon={<MailIcon size="l" />}/>
              <Accordion data={invoices} id='invoices' leftIcon={<TicketIcon size="l" />}/>
            </GridItem>
          </CustomerCard>
        </Container>
      </GridItem>
    </Grid>
  );
};

export default Legajo;
