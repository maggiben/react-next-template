import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from "styled-components";
import { 
  UserIcon, 
  CheckCircleIcon, 
  CloseCircleIcon, 
  QuestionCircleIcon, 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  IconButton,
  EditIcon,
} from '@fravega-it/bumeran-ds-fvg'
import DuplicateModal from '../DuplicateModal/DuplicateModal';
import Waiting from '../Waiting';
import { useRouter } from 'next/router';

import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { useFetch } from "@hooks/useFetch";
import ClientCardLayout from './ClientCardLayout';
import { personState, personsState } from '@states/atoms';
import getConfig from "next/config";

import ClientTable from '@components/content/ClientTable/ClientTable'
import { FormValues } from '@components/forms/SearchForm/SearchForm';

const Card = styled.div`
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

type ClientCardProps = {
  isOpen?: boolean;
}
  
const ClientCard = (props: ClientCardProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [person, setPerson] = useRecoilState(personState);
  const [persons, setPersons] = useRecoilState(personsState);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const searchParams = new URLSearchParams(router.query as Record<string, string>);
  const { data, error } = useFetch<Person[]>(`api/search?${searchParams.toString()}`);

  const closeModal = useCallback((): void =>  {
    return setIsOpenModal(false);
  }, []);

  const onSelectPersonModal = useCallback((data?: Person): void =>  {
    if (data) {
      setPerson(data);
    }
    return setIsOpenModal(false);
  }, []);

  const multipleResults = useMemo(() => {
    return data && Array.isArray(data) && data.length > 1;
  }, [ data ]);

  useEffect(() => {
    // si no hay personas pero ya fecheamos los datos setear
    if (!persons && data && Array.isArray(data)) {
      setPersons(data);
    }
    if (multipleResults && !person) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [ data, person, persons ])

  return (
    <Card>
      { persons && <DuplicateModal isOpen={isOpenModal} persons={persons} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/> }
      { person && <ClientCardLayout person={person} /> }
      { !person && !persons && <Waiting message={t('searching')} /> }
    </Card>
  )
};

  export default ClientCard;
