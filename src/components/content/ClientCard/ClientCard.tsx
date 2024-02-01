import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import DuplicateModal from '../DuplicateModal/DuplicateModal';
import Waiting from '@components/Waiting';
import { useRouter } from 'next/router';

import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { useFetch } from 'usehooks-ts';
import ClientCardLayout from './ClientCardLayout';
import NoResults from '@components/NoResults';
import { personState, personsState } from '@states/atoms';
import {
  hasSelectedPerson as hasSelectedPersonSelector,
  hasMultiplePerson as hasMultiplePersonSelector
} from '@states/selectors';
import * as array from '@utils/array';

const ClientCard = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [person, setPerson] = useRecoilState(personState);
  const [persons, setPersons] = useRecoilState(personsState);
  const hasSelectedPerson = useRecoilValue(hasSelectedPersonSelector);
  const hasMultiplePerson = useRecoilValue(hasMultiplePersonSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const searchParams = useMemo(() => {
    return new URLSearchParams(router.query as Record<string, string>);
  }, [router.query]);
  const { data, error } = useFetch<Person[]>(`api/searchx?${searchParams.toString()}`);

  const closeModal = useCallback((): void =>  {
    // setPersons(undefined);
    setIsOpenModal(false);
    // erase search history
    router.push({
      pathname: document.location.pathname,
    });
  }, []);

  const onSelectPersonModal = useCallback((data?: Person): void =>  {
    setIsOpenModal(false);
    if (data) {
      setPerson(data);
    }
  }, []);

  // useEffect(() => {
  //   if (error) {
  //     router.push({
  //       pathname: `/${error.cause ?? 404}`,
  //       query: {
  //         message: error.message,
  //         oldSearchParams: searchParams.toString(),
  //       },
  //     });
  //   }
  // }, [error]);
    
  useEffect(() => {
    /*
      Quitamos la prop: 'selected' que es dinamica (se usa en los radio buttons)
      El resto de los objetos deberia permanecer inmutado y la comparacion
      ser equivalente
     */

    const a = array.removeProperty(data ?? [], 'selected');
    const b = array.removeProperty(persons ?? [], 'selected');

    if (data && !array.isEqual(a, b)) {
      setPersons(data);
      if (data.length === 1) {
        setIsOpenModal(false);
        setPerson(data[0]);
      }
    }
  }, [ data ]);

  useEffect(() => {
    if (hasMultiplePerson && !hasSelectedPerson && !person ) {
      setIsOpenModal(true);
    } 
  }, [ hasMultiplePerson, hasSelectedPerson ]);

  const noResultsMessage = useMemo(() => searchParams.get('documentNumber') || searchParams.get('email') || error?.message, [error]);
  return (
    <div data-testid="client-card">
      { persons && isOpenModal && <DuplicateModal isOpen={isOpenModal} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/> }
      { person && <ClientCardLayout person={person} /> }
      { !person && !persons && !error && <Waiting message={t('searching')} /> }
      { error && <NoResults message={noResultsMessage} /> }
    </div>
  )
};

  export default ClientCard;
