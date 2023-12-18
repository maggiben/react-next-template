import styled from "styled-components";
import { 
  UserIcon, 
  CheckCircleIcon, 
  TableView, 
  Column, 
  Cell, 
  CloseCircleIcon, 
  QuestionCircleIcon, 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  Button,
  IconButton,
  EditIcon,
} from '@fravega-it/bumeran-ds-fvg'

import { Person } from '../index';
import ClientTable from '@components/content/ClientTable'
import { Children } from "react";

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
  person: Person;
}
  
const ClientCard = (props: ClientCardProps) => {
  const { person } = props;
  return (
    <Card>
      <Grid>
        <GridItem xs={6} justifySelf="start" alignSelf="center">
          <Centered>
            <UserIcon size="l" color="violet" colorTone="600" /><Heading size="s">Name: {person.name}</Heading>
          </Centered>
        </GridItem>
        <GridItem xs={5} alignSelf="center" justifySelf="center">
          <Centered>
            <QuestionCircleIcon size="l" color="violet" colorTone="600" /><Heading size="s">Status:</Heading><Label leftIcon={person.profession ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={person.status.label} color={person.status.color as 'red' | 'green'}/>
          </Centered>
        </GridItem>
        <GridItem xs={1} alignSelf="center" justifySelf="end">
          <IconButton icon={<EditIcon />} size="s" />
        </GridItem>
        <GridItem xs={12}>
          <ClientTable person={person} />
        </GridItem>
      </Grid>
    </Card>
  )
};

  export default ClientCard;
