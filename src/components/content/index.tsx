import { useState } from 'react';
import { Heading, TextBody, ButtonGroup, Checkbox, Label, Grid, GridItem, DropdownButton, Button } from "@fravega-it/bumeran-ds-fvg";
import { List, ListItem, ListHeader, ListDivider } from '@fravega-it/bumeran-ds-fvg'
import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { TableView, Column, Cell } from '@fravega-it/bumeran-ds-fvg'
import DuplicateModal from './duplicateModal';
import FilterForm, { FormValues } from '../forms/FilterForm';
import Image from "next/image";
import styled from "styled-components";
import logo from "@images/bumeran-iso.svg";
import getConfig from "next/config";

const Container = styled.div`
  display: block;
  height: 100vh;
`;

const Pill = styled.h1`
  background-color: red
  color: withe;
`;


const Title = styled.h1`
  min-height: 120px;
  min-width: 180px;
  color: blue;
`;

const Content = (): JSX.Element => {
  const config = getConfig();
  const [open, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = (): boolean =>  {
    setIsModalOpen(false);
    return false;
  };

  const personsObj = [
    {
      id: '001',
      name: 'Federico',
      age: 25,
      identification: {
        dni: 30000000,
      },
      proffession: 'Ingeniero',
      faceapi: true,
      email: {
        address: 'federico@gmail.com',
        confirmed: false
      },
      city: 'Madrid',
    },
    {
      id: '002',
      name: 'Facundo',
      age: 30,
      identification: {
        dni: 30000001,
      },
      faceapi: false,
      email: {
        address: 'facundo@gmail.com',
        confirmed: false
      },
      proffession: 'Abogado',
      city: 'Barcelona',
    },
    {
      id: '003',
      name: 'Facundo',
      age: 30,
      identification: {
        dni: 30000001,
      },
      faceapi: false,
      email: {
        address: 'facundo@gmail.com',
        confirmed: false
      },
      proffession: 'Concierge',
      city: 'Madrid',
    },
    {
      id: '004',
      name: 'Jeremías',
      age: 35,
      identification: {
        dni: 30000002,
      },
      faceapi: true,
      email: {
        address: 'jeremías@gmail.com',
        confirmed: true
      },
      proffession: 'Médico',
      city: 'Valencia',
    },
  ];

  const [persons, setPersons] = useState(personsObj);

  const onSearch = (data: FormValues) => {
    setIsModalOpen(true);
  }

  return (
    <>
    <Container>
      <Grid>
        <GridItem xs={4}>
          <DropdownButton label="Filtrar por" open={open} onOpenChange={setIsOpen} >
            <FilterForm onSearch={onSearch} />
          </DropdownButton>  
        </GridItem>
        <GridItem xs={8}>
        </GridItem>
        <GridItem xs={12}>
          <TableView
            items={persons}
            renderColumns={() => (
              <>
                <Column minWidth={50} label="name" />
                <Column minWidth={100} label="faceapi" />
                <Column minWidth={70} label="email" />
                <Column minWidth={70} label="email confirmed" />
                <Column minWidth={100} label="city" />
              </>
            )}
            renderCells={({ id, name, faceapi, email, city }) => (
              <>
                <Cell>{name}</Cell>
                {/* <Cell><Button id={id} label={faceapi.toString()} /></Cell> */}
                <Cell>
                  { (function () {
                      if(faceapi) {
                        return (
                          <input type="checkbox" id={id} checked={faceapi} readOnly/>
                        );
                      } else {
                        return <Button id={id} size="s" label="Resend" />
                      }
                    })()
                  }
                  </Cell>
                {/* <Cell><Label label={faceapi.toString()} color={faceapi ? "green" : "red"}/></Cell> */}
                <Cell>{email.address}</Cell>
                {/* <Cell><input type="checkbox" id={id} checked={email.confirmed} readOnly/></Cell> */}
                <Cell>
                { (function () {
                      if(email.confirmed) {
                        return (
                          <input type="checkbox" id={id} checked={email.confirmed} readOnly/>
                        );
                      } else {
                        return <Button id={id} size="s" label="Resend" />
                      }
                    })()
                  }
                </Cell>
                {/* <Cell><Label label={email.confirmed.toString()} color={email.confirmed ? "green" : "red"}/></Cell> */}
                <Cell>{city}</Cell>
              </>
            )}
          />
        </GridItem>
      </Grid>
    </Container>
    <DuplicateModal isOpen={isModalOpen} closeModal={closeModal}/>
    </>
  );
};

export default Content;
