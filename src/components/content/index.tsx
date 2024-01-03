import { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Grid, GridItem, DropdownButton } from "@fravega-it/bumeran-ds-fvg";
import DuplicateModal from './DuplicateModal/DuplicateModal';
import Waiting from './Waiting';
import Card from './Card/Card';
import SearchForm, { FormValues } from '@components/forms/SearchForm/SearchForm';
import api from '../../services/api';
import styled from "styled-components";
import { personState } from '../../states/atoms';
import getConfig from "next/config";
import { useRouter } from 'next/router';
import { Person } from 'types/type';

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

const Content = (): JSX.Element => {
  const config = getConfig();
  const router = useRouter();
  // const [personX, setPersonX] = useRecoilState(personState);
  const [open, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setPerson(undefined);
    return api.get(`api/search?${urlSearchParams.toString()}`)
      .then((result) => {
        setLoading(false);
        return result;
      })
      .catch(setError);
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
    setIsOpen(false);
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
              <SearchForm onSearch={onSearch} {...router.query} />
            </DropdownButton>  
          </GridItem>
          <GridItem xs={12}>
            {
              loading ? <Waiting message="buscando clientes..." /> : <Card person={person} />
            }
          </GridItem>
        </Grid>
      </Container>
      <DuplicateModal isOpen={isModalOpen} persons={persons} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/>
    </Centered>
  );
};

export default Content;
