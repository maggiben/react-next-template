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
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';
import ClientTable from '@components/content/ClientTable/ClientTable'


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

type ClientCardLayoutProps = {
  person: Person;
}
  
const ClientCardLayout = (props: ClientCardLayoutProps) => {
  const { t } = useTranslation();
  const { person } = props;
  return (
    <Card>
      <Grid>
        <GridItem xs={6} justifySelf="start" alignSelf="center">
          <Centered>
            <UserIcon size="l" color="violet" colorTone="600" /><Heading size="s">{t('name')}: {person.name}</Heading>
          </Centered>
        </GridItem>
        <GridItem xs={5} alignSelf="center" justifySelf="center">
          <Centered>
            <QuestionCircleIcon size="l" color="violet" colorTone="600" /><Heading size="s">{t('status')}:</Heading><Label leftIcon={person.profession ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={person.status?.label} color={person.status?.color as 'red' | 'green'}/>
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

  export default ClientCardLayout;
