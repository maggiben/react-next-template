import { useMemo } from 'react';
import { useRouter } from 'next/router';
import ClientCard from '../ClientCard/ClientCard';
import EmptyCard from '../EmptyCard/EmptyCard';

const Card = (): JSX.Element => {
  const router = useRouter();
  const hasQuery = useMemo(() => router.query && Object.keys(router.query as Record<string, unknown>).length > 0, [ router.query ]);

  return hasQuery ? <ClientCard /> : <EmptyCard />;
};

export default Card;
