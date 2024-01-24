import styled from "styled-components";
import { 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  TextBody,
  AlertIcon,
  CheckIcon
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';


const Card = styled.div`
  width: 100%;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ClientCardLayoutProps = {
  person: Person;
}

const SpaceRight = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-right: ${({ theme, size }) => theme.spacing[size]};
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

const ValidationList = (props: ClientCardLayoutProps) => {
  const { t } = useTranslation();
  const { person } = props;
  return (
    <Card>
      <Grid spacing="s" rowSpacing="s">
        <GridItem xs={12} alignSelf="center" justifySelf="start" >
          <Centered>
            <Label leftIcon={<AlertIcon />} label="Falta Email" color={person.status?.color as 'red' | 'green'}/>
            <SpaceRight size="xs" />
            <TextBody size="m" color="neutral">El cliente todavía no validó su correo electrónico</TextBody>
          </Centered>
        </GridItem>
      </Grid>
      <SpaceTop size="xs" />
      <Grid spacing="s" rowSpacing="s">
        <GridItem xs={12} alignSelf="center" justifySelf="start">
          <Centered>
            <Label leftIcon={<CheckIcon />} label="Validado en Renaper" color={'green'}/>
            <SpaceRight size="xs" />
            <TextBody size="m" color="neutral">El cliente ya validó su identidad en el Registro Nacional de las Personas</TextBody>
          </Centered>
        </GridItem>
      </Grid>
      <SpaceTop size="xs" />
      <Grid spacing="s" rowSpacing="s">
        <GridItem xs={12} alignSelf="center" justifySelf="start">
          <Centered>
            <Label leftIcon={<CheckIcon />} label="Validado en Facephi" color={'green'}/>
            <SpaceRight size="xs" />
            <TextBody size="m" color="neutral">El cliente ya validó su identidad biométrica</TextBody>
          </Centered>
        </GridItem>
      </Grid>
    </Card>
  )
};

  export default ValidationList;
