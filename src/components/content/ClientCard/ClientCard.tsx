import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import DuplicateModal from '../DuplicateModal/DuplicateModal';
import Waiting from '@components/Waiting';
import { useRouter } from 'next/router';

import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { useFetch } from "@hooks/useFetch";
import ClientCardLayout from './ClientCardLayout';
import { personState, personsState } from '@states/atoms';

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

  const multipleResults = useMemo(() => {
    return data && Array.isArray(data) && data.length > 1;
  }, [ data ]);

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
    // si no hay personas pero ya fecheamos los datos setear
    if (!persons && data && Array.isArray(data)) {
      setPersons(data);
      if (data.length === 1) {
        setPerson(data[0]);
      }
    }
    if (multipleResults && !person) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [ data, person, persons ])

  return (
    <>
      { persons && <DuplicateModal isOpen={isOpenModal} closeModal={closeModal} onSelectPersonModal={onSelectPersonModal}/> }
      { person && <ClientCardLayout person={person} /> }
      { !person && !persons && <Waiting message={t('searching')} /> }
    </>
  )
};

  export default ClientCard;
