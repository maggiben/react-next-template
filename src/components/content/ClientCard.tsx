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
} from '@fravega-it/bumeran-ds-fvg'

import { Person } from './index';
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
        <GridItem xs={6} alignSelf="center" justifySelf="center">
          <Centered>
            <QuestionCircleIcon size="l" color="violet" colorTone="600" /><Heading size="s">Estatus:</Heading><Label leftIcon={person.profession ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={person.status.label} color={person.status.color as 'red' | 'green'}/>
          </Centered>
        </GridItem>
        <GridItem xs={12}>
        <TableView
            items={[person]}
            renderColumns={() => (
              <>
                <Column minWidth={50} label="name" />
                <Column minWidth={100} label="faceapi" />
                <Column minWidth={70} label="email" />
                <Column minWidth={70} label="email confirmed" />
                <Column minWidth={40} label="resend email" />
                <Column minWidth={100} label="city" />
              </>
            )}
            renderCells={({ id, name, faceapi, email, city }) => (
              <>
                <Cell>{name}</Cell>
                <Cell>
                  <Label leftIcon={faceapi ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={faceapi.toString()} color={faceapi ? "green" : "red"}/>                  
                  </Cell>
                <Cell>{email.address}</Cell>
                <Cell>
                  <Label leftIcon={email.confirmed ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={email.confirmed.toString()} color={email.confirmed ? "green" : "red"}/>
                </Cell>
                <Cell>
                  {(function () {
                      if(!email.confirmed) {
                        return <Button id={id} size="s" label="Resend" />
                      }
                    })()
                  }
                </Cell>
                <Cell>{city}</Cell>
              </>
            )}
          />
        </GridItem>
      </Grid>
    </Card>
  )
};

  export default ClientCard;
