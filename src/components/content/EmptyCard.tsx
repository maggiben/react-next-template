import styled from "styled-components";
import { Heading } from '@fravega-it/bumeran-ds-fvg'

const Card = styled.div`
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

const EmptyCard = () => {
  return (
    <Card>
        <Heading>Bienvenido al buscador de clientes</Heading>
    </Card>
  );
};

  export default EmptyCard;
