import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRecoilState } from 'recoil';
import DuplicateModal from '../DuplicateModal/DuplicateModal';
import Waiting from '@components/Waiting';
import { useRouter } from 'next/router';

import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { useFetch } from "@hooks/useFetch";
import ClientCardLayout from './ClientCardLayout';
import { personState, personsState } from '@states/atoms';
import array from '@utils/array';

type ClientCardProps = {
  isOpen?: boolean;
}
  
const ClientCard = (props: ClientCardProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [person, setPerson] = useRecoilState(personState);
  const [persons, setPersons] = useRecoilState(personsState);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const searchParams = useMemo(() => {
    return new URLSearchParams(router.query as Record<string, string>);
  }, [router.query]);
  const { data, error } = useFetch<Person[]>(`api/search?${searchParams.toString()}`);

  const multipleResults = useMemo(() => {
    return persons && Array.isArray(persons) && persons.length > 1;
  }, [ persons ]);

  const closeModal = useCallback((): void =>  {
    setPersons(undefined);
    setIsOpenModal(false);
    // erase search history
    router.push({
      pathname: document.location.pathname,
    });
  }, []);

  const onSelectPersonModal = useCallback((data?: Person): void =>  {
    if (data) {
      setPerson(data);
    }
    return setIsOpenModal(false);
  }, []);

  useEffect(() => {
    if (error) {
      router.push({
        pathname: `/${error.response?.status}`,
        query: {
          message: error.message
        },
      });
    }
  }, [error]);
    
  useEffect(() => {
    const a = array.removeProperty(data ?? [], 'selected');
    const b = array.removeProperty(persons ?? [], 'selected');
    const dataInSync = array.isEqual(a, b);

    if (data && !dataInSync) {
      setPersons(data);
      if (data.length === 1) {
        setIsOpenModal(false);
        setPerson(data[0]);
      }
    }
  }, [ data ]);

  /*
    Tengo un modal dentro de un useEffect que solo se abre cuando el objeto person esta vacío y 
    el array persons contiene mas de un objeto de tipo person,
    pero cuando el router setea el valor de person como undefined pero todavia tenemos multiples resultados
    en persons porque no ha cambiado el modal se vuelve a abrir, como evito esto ?
  */

  const hasSelected = useMemo(() => {
    return persons && Array.isArray(persons) && persons.some(({ selected }) => selected);
  }, [ persons ]);

  useEffect(() => {
    if (multipleResults && !person && !hasSelected) {
      setIsOpenModal(true);
    } 
  }, [ multipleResults, hasSelected ]);

  return (
    <>
      { persons && <DuplicateModal isOpen={isOpenModal} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/> }
      { person && <ClientCardLayout person={person} /> }
      { !person && !persons && <Waiting message={t('searching')} /> }
    </>
  )
};

  export default ClientCard;
