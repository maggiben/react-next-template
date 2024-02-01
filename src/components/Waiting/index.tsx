import { Spinner, Heading } from "@fravega-it/bumeran-ds-fvg";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface WaitingProps {
  message?: string;
}

const Waiting = (props: WaitingProps) => {
  return (
    <Center data-testid="waiting-container">
      <Heading>{props.message}</Heading>
      <Spinner size="l" />
    </Center>
  )
}

export default Waiting;