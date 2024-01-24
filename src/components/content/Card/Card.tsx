import { useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import ClientCard from '../ClientCard/ClientCard';
import EmptyCard from '../EmptyCard/EmptyCard';
import { personState, personsState } from '@states/atoms';

const Card = (): JSX.Element => {
  const router = useRouter();
  const resetPerson = useResetRecoilState(personState);
  const resetPersons = useResetRecoilState(personsState);
  const [, setPersons] = useRecoilState(personsState);
  const currentUrlRef = useRef(router.asPath);
  useEffect(() => {
    const handleRouteChangeComplete = (url: any) => {
      if (url !== currentUrlRef.current) {
        resetPerson();
        resetPersons();
        currentUrlRef.current = url;
      } else {
        resetPerson();
        // si la url es la misma mantiene la lista de personas pero le quita el estado
        // de seleccion
        setPersons((prev) => {
          return prev && structuredClone(prev).map((value) => ({...value, selected: false}));
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      // Cleanup event listener to avoid memory leaks
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);
  const hasQuery = useMemo(() => router.query && Object.keys(router.query as Record<string, unknown>).length > 0, [ router.query ]);

  return hasQuery ? <ClientCard /> : <EmptyCard />;
};

export default Card;
