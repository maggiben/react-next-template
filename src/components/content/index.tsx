import { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Grid, GridItem, DropdownButton, Button } from "@fravega-it/bumeran-ds-fvg";
import DuplicateModal from './DuplicateModal/DuplicateModal';
import ClientCard from './ClientCard/ClientCard';
import EmptyCard from './EmptyCard/EmptyCard';
import FilterForm, { FormValues } from '../forms/FilterForm';
import api from '../../services/api';
import styled from "styled-components";
import { personState } from '../../states/atoms';
import getConfig from "next/config";
import { useRouter } from 'next/router';

const Container = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
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

const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  const [query, setQuery] = useState<FormValues | undefined>(undefined);
  const [persons, setPersons] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person | undefined>(undefined);

  const closeModal = (): void =>  {
    return setIsModalOpen(false);
  };

  const onSelectPersonModal = (data?: Person): void =>  {
    if (data) {
      setPerson(data);
    }
    return setIsModalOpen(false);
  };

  const fetchResults = async (data: FormValues) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    Object.entries(data).filter(([key]) => ['documentType', 'documentNumber', 'email', 'cuid'].includes(key)).forEach((datum) => {
      urlSearchParams.append(datum[0], datum[1].toString());
    });
    return api.get(`search?${urlSearchParams.toString()}`).then((result) => {
      setPersons(result);
      return result;
    });
  };

  const doSearch = useCallback((data: FormValues) => {
    if (data) {
      fetchResults(data).then((persons) => {
        setPersons(persons);
        if (persons.length === 1) {
          setPerson(persons[0]);
          setIsOpen(false);
        } else {
          setIsOpen(false);
          setIsModalOpen(true);
        }
      });
    }
  }, []);

  const onSearch = (data?: FormValues) => {
    /*
      TODO:
      resolver problema multiples personas mismo id, email, etc...
    */
    // eslint-disable-next-line no-console
    if (data) {
      router.push({
        pathname: document.location.pathname,
        query: data,
      });
    }
  }


  useEffect(() => {
    // eslint-disable-next-line no-console
    // Query is not empty
    if (Object.keys(router.query).length) {
      doSearch(router.query);
    }
  }, [router.query, doSearch]);
  
  return (
    <Centered>
      <Container>
        <Grid>
          <GridItem xs={4}>
            <DropdownButton label="Buscar por" open={open} onOpenChange={setIsOpen}>
              <FilterForm onSearch={onSearch} {...router.query} />
            </DropdownButton>  
          </GridItem>
          <GridItem xs={12}>
            { person && <ClientCard person={person} /> }
            { !person && <EmptyCard /> }
          </GridItem>
        </Grid>
      </Container>
      <DuplicateModal isOpen={isModalOpen} persons={persons} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/>
    </Centered>
  );
};

export default Content;
