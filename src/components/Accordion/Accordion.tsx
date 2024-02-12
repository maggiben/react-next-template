import { useRef, useCallback, useState } from 'react';
import {
  Grid,
  GridItem,
  ChevronDownIcon,
  ChevronUpIcon,
  Heading,
} from "@fravega-it/bumeran-ds-fvg";
import styled from "styled-components";

const Container = styled.div`
  /* border: 0.125rem solid black; */
  border: 0px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.neutral[300]};
  padding: 0 ${({ theme }) => theme.spacing.s};
  & + & {
    margin-top: ${({ theme }) => theme.spacing.s};
  }
`;

const TitleContainer = styled.div`
  cursor: pointer;
`;

const ContentWrapper = styled.div<{ maxHeight: number }>`
  max-height: ${(p) => `${p.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 0 0 1rem;
  line-height: 1.5;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.s};
  padding-bottom: ${({ theme }) => theme.spacing.s};
`;

const TitleTextWithIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IAccordionProps {
  title: string;
  children: JSX.Element | string;
  leftIcon?: JSX.Element;
}

const AccordionContainer = ({ title, children, leftIcon }: IAccordionProps): JSX.Element => {
  const [isExpanded, setExpand] = useState<boolean>();

  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = contentRef.current?.scrollHeight && isExpanded ? contentRef.current?.scrollHeight : 0;

  const handleExpandToggle = useCallback(() => {
    setExpand(!isExpanded);
  }, [isExpanded]);

  return (
    <div className='accordion-container'>
      <Container data-testid="accordion-container">
        <TitleContainer>
          <Heading>
            <TitleContent onClick={handleExpandToggle}>
                <TitleTextWithIcon>{ leftIcon && leftIcon} {title}</TitleTextWithIcon>
              { isExpanded ? <ChevronUpIcon />  : <ChevronDownIcon /> }
            </TitleContent>
          </Heading>
        </TitleContainer>
        <ContentWrapper maxHeight={contentHeight}>
          <Content ref={contentRef}>{children}</Content>
        </ContentWrapper>
      </Container>
    </div>
  );
};

const AccordionLayout = styled.div<{ color?: string; }>`
  background-color: ${({ theme, color }) => color || theme.colors.neutral[100]};
  font-family: inherit;
  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.m};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.m};
  }
  &:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.m};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.m};
    .accordion-container:last-child {
      div[data-testid="accordion-container"] {
        border-bottom-width: 0px;
      }
    }
  }
  &:not(:last-child) {
    padding-bottom: ${({ theme }) => theme.spacing.m};
  }
`;

interface IAccordiomProps {
  data: Array<{
    label: string;
    body: string | JSX.Element;
  }>;
  id?: string;
  leftIcon?: JSX.Element;
}

const Accordion = ({id, data, leftIcon}: IAccordiomProps) => {
  return (
    <AccordionLayout id={id}>
      {
        data.map((datum, index) => (
          <AccordionContainer key={index} title={datum.label} leftIcon={leftIcon}>{datum.body}</AccordionContainer>
        ))
      }
    </AccordionLayout>
  );
};

export default Accordion;