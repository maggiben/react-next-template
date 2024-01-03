import ClientCard from '../ClientCard/ClientCard';
import EmptyCard from '../EmptyCard/EmptyCard';
import { Person } from 'types/type';

interface CardProps {
  person?: Person;
}
const Card = (props: CardProps): JSX.Element => {
  if (props.person) {
    return <ClientCard person={props?.person} />
  }
  return <EmptyCard />;
};

export default Card;
