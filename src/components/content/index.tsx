import { useState, useEffect } from 'react';
import { Heading, TextBody, ButtonGroup, Checkbox, Label, Grid, GridItem, DropdownButton, Button } from "@fravega-it/bumeran-ds-fvg";
import { List, ListItem, ListHeader, ListDivider } from '@fravega-it/bumeran-ds-fvg'
import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { CheckCircleIcon, CloseCircleIcon } from '@fravega-it/bumeran-ds-fvg'
import { TableView, Column, Cell } from '@fravega-it/bumeran-ds-fvg'
import DuplicateModal from './duplicateModal';
import ClientCard from './ClientCard';
import FilterForm, { FormValues } from '../forms/FilterForm';
import api from '../../services/api';
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
  selected: boolean;
}

const Content = (): JSX.Element => {
  const config = getConfig();
  const [open, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = (): boolean =>  {
    setIsModalOpen(false);
    return false;
  };

  const onSelectPersonModal = (data?: Person): boolean =>  {
    if (data) {
      setPerson(data);
    }
    setIsModalOpen(false);
    return false;
  };

  const [persons, setPersons] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line no-console
    api.get('/searchResults.json').then((result) => {
      setPersons(result);
    });
  }, []);

  const onSearch = (data: FormValues) => {
    const person = persons.filter((persons) => {
      return data.documentNumber === persons.identification.number;
    });
    if (person.length >= 1 && person.length < 2) {
      setPersons([...person]);
      setPerson(person[0]);
      setIsOpen(false);
    } else if (person.length >= 2) {
      setPersons([...person]);
      setIsOpen(false);
      setIsModalOpen(true);
    }
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
          { person && <ClientCard person={person} /> }
        </GridItem>
      </Grid>
    </Container>
    <DuplicateModal isOpen={isModalOpen} persons={persons} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/>
    </>
  );
};

export default Content;
