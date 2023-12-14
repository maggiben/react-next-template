import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Heading, TextBody, ButtonGroup, Checkbox, Label, Grid, GridItem, DropdownButton, Button } from "@fravega-it/bumeran-ds-fvg";
import { List, ListItem, ListHeader, ListDivider } from '@fravega-it/bumeran-ds-fvg'
import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { CheckCircleIcon, CloseCircleIcon } from '@fravega-it/bumeran-ds-fvg'
import { TableView, Column, Cell } from '@fravega-it/bumeran-ds-fvg'
import DuplicateModal from './duplicateModal';
import ClientCard from './ClientCard';
import EmptyCard from './EmptyCard';
import FilterForm, { FormValues } from '../forms/FilterForm';
import api from '../../services/api';
import styled from "styled-components";
import { personState } from '../../states/atoms';
import getConfig from "next/config";
import { useRouter } from 'next/router';
import { result } from 'cypress/types/lodash';

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
  cp: string;  
  selected: boolean;
  status: {
    label: string;
    color: string;
  }
}

const Content = (): JSX.Element => {
  const config = getConfig();
  const router = useRouter();
  // const [personX, setPersonX] = useRecoilState(personState);
  const [open, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const params = Object.fromEntries(new URLSearchParams(document.location.search));


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
    fetchResults();
  }, []);

  const fetchResults = (data?: FormValues) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    if (data) {
      Object.entries(data).forEach((datum) => {
        urlSearchParams.append(datum[0], datum[1].toString());
      });
      return api.get(`/searchResults.json?${urlSearchParams.toString()}`).then((result) => {
        setPersons(result);
        return result;
      });
    }
    return api.get('/searchResults.json').then((result) => {
      setPersons(result);
      return result;
    });
  };

  const onSearch = (data: FormValues) => {
    /*
      TODO:
      resolver problema multiples personas mismo id, email, etc...
    */
    // eslint-disable-next-line no-console
    router.push({
      pathname: document.location.pathname,
      query: data,
    });
    fetchResults(data).then((results) => {
      setPersons(results);
      const person = persons.filter((persons) => {
        return data.documentNumber === persons.identification.number;
      });
      if (person.length >= 1 && person.length < 2) {
        // setPersons([...person]);
        setPerson(person[0]);
        setIsOpen(false);
      } else if (person.length >= 2) {
        // setPersons([...person]);
        setIsOpen(false);
        setIsModalOpen(true);
      }
    });
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
        <GridItem xs={12}>
          { person && <ClientCard person={person} /> }
          { !person && <EmptyCard /> }
        </GridItem>
      </Grid>
    </Container>
    <DuplicateModal isOpen={isModalOpen} persons={persons} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/>
    </>
  );
};

export default Content;
