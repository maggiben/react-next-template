import { Heading, TextBody } from "@fravega-it/bumeran-ds-fvg";
import Image from "next/image";
import styled from "styled-components";
import logo from "@images/bumeran-iso.svg";
import getConfig from "next/config";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  gap: 8px;
  text-align: center;

  img {
    margin: 0 auto 10px;
  }
`;

const Content = (): JSX.Element => {
  const config = getConfig();
  // eslint-disable-next-line no-console
  console.log(config);

  return (
    <Container>
      <Image priority src={logo} alt="Búmeran logo" />
      <Heading size="xl">React Búmeran Template</Heading>
      <TextBody size="l">A Búmeran theme to start building a new app.</TextBody>
    </Container>
  );
};

export default Content;
