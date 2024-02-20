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
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { AccordionItem, Accordion } from '@components/Accordion/Accordion';
import DataContainer from '@components/DataContainer/DataContainer';
import LegajoAddressBody from '@components/Legajo/LegajoAddressBody';
import LegajoDocumentsBody from '@components/Legajo/LegajoDocumentsBody';
import LegajoEmailBody from '@components/Legajo/LegajoEmailBody';
import LegajoPhonesBody from '@components/Legajo/LegajoPhonesBody';
import { SpaceBottom, SpaceTop } from '@components/Spacing/Spacing';
import { getCountryData, TCountryCode } from 'countries-list';
import { Customer, Email } from 'types/type';
import * as localization from '@utils/localization';

const datum: Customer[] = [
{
  "_id": "218e0095-e089-42a0-8ba1-34345b924375",
  "createdOn": "2024-01-08T19:00:46.950+0000",
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
  "birth": "1983-09-30",
  "nationality": "ARG",
  "placeBirth": null,
  "maritalStatus": "NOT_INFORMED",
  "receiveNewsletter": false,
  "userMail": { 
    "email": "diego@gmail.com", //Mostrar
    "stateVerified" : "VERIFIED",//Mostrar
  },
  "addresses": [{
      "originChannel": {
        "typeChannel": "Ecommerce",
        "sourceSystem": "Vtex",
        "originChannelType": "Create"
      },
      "lastUseDate": "2024-01-01T19:00:09.777+0000",
      "zipCode": "1001",
      "street": "Della Paolera ",
      "number": "265",
      "floor": "28",
      "apartment": "A",
      "city": "Ciudad Autónoma Buenos Aires",
      "state": "CIUDAD AUTÓNOMA DE BUENOS AIRES",
      "country": "ARG",
      "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
      "betweenStreets" : "Almirante Brown y Chicago",
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
      "zipCode": "8400",
      "street": "Mitre",
      "number": "500",
      "floor": "1",
      "apartment": "a",
      "city": "San Carlos de Bariloche",
      "state": "Rio Negro",
      "country": "ARG",
      "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": {
        "latitude": "-71.30248274567434",
        "longitude": "-41.134002019411035"
      },
      "stateVerified": "NOT_VERIFIED",
      "channel": null,
      "applyTo": [
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
      "zipCode": "5500",
      "street": "Av. España",
      "number": "1537",
      "floor": "3",
      "apartment": null,
      "city": "Mendoza",
      "state": "Mendoza",
      "country": "ARG",
      "_id": "abdd4c45-e13b-4e6a-9205-6ea0c9bfb843",
      "betweenStreets": null,
      "references": null,
      "geoCoordinates": {
        "latitude": "-68.84058043414383",
        "longitude": "-32.885424480775086"
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
  },{
    "lastUseDate": "2024-01-31T19:00:09.700+0000",
    "_id": "78c7c0e2-b341-487e-bec7-8e19e85b6b2f",
    "email": "sonic@gmail.com",
    "receiveNewsletter": null,
    "isMain": null,
    "verified": false,
    "stateVerified": "VERIFIED",
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
  "creationOriginOn": "2021-01-31T19:00:46.950+0000",
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
  "userMail": { 
    "email": "diego@gmail.com", //Mostrar
    "stateVerified" : "VERIFIED",//Mostrar
  },
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
  "userMail": { 
    "email": "diego@gmail.com", //Mostrar
    "stateVerified" : "VERIFIED",//Mostrar
  },
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
  "userMail": { 
    "email": "diego@gmail.com", //Mostrar
    "stateVerified" : "VERIFIED",//Mostrar
  },
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
}
];

const LegajoBody = styled.div`
  min-height: calc(100vh - (80px + 2rem));
`;

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
  const { t } = useTranslation();
  
  const legajo = datum[0];

  const addreses = legajo.addresses.map((address) => ({
    label: 'Direcciones',
    body: <LegajoAddressBody address={address} />
  }));

  const phones = legajo.phones.map((phone) => ({
    label: 'Phones',
    body: <LegajoPhonesBody phone={phone}/>,
  }));

  const documents = legajo.documents.map((doc) => ({
    label: 'Documents',
    body: <LegajoDocumentsBody doc={doc} />,
  }));

  const emails = [...[legajo.userMail], ...legajo.emails].map((email) => ({
    label: 'Emails',
    body: <LegajoEmailBody email={email as Email} />,
  }));

  const constryData = legajo.nationality && getCountryData(localization.countryISOMapping[legajo.nationality] as TCountryCode);
  
  const rootData: Record<string, string>[] = [{
    'CUID': legajo._id,
  },{
    [t('name')]: legajo.firstName,
  },{
    [t('lastname')]: legajo.lastName,
  },{
    [t('birth date')]: legajo.birth ? localization.toLocaleDateString(legajo.birth) : '',
  },{
    [t('creation date')]: localization.toLocaleDateString(legajo.createdOn),
  }, {
    [t('nacionality')]: constryData ? constryData.name : '',
  }, {
    [t('sex')]: legajo.gender,
  }];
  
  return (
    <LegajoBody data-testid="legajo-body">
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
            <DataContainer data={rootData} columns={3} withBorder={true} background='transparent'/>
            <SpaceBottom size='m' />
            <CustomerCard>
              <GridItem xs={12}>
                <Accordion data-testid="accordionr">
                  <AccordionItem data={documents} id="documents" label={t('documents')} leftIcon={<DocumentIcon size="l" />} data-testid="accordion-documents"/>
                  <AccordionItem data={addreses} id="addreses" label={t('addresses')} leftIcon={<LocationIcon size="l" />} data-testid="accordion-addresses"/>
                  <AccordionItem data={phones} id="phones" label={t('phones')} leftIcon={<PhoneIcon size="l" />} data-testid="accordion-phones"/>
                  <AccordionItem data={emails} id='emails' label={t('emails')} leftIcon={<MailIcon size="l" />} data-testid="accordion-emails"/>
                </Accordion>
              </GridItem>
            </CustomerCard>
          </Container>
        </GridItem>
      </Grid>
    </LegajoBody>
  );
};

export default Legajo;
