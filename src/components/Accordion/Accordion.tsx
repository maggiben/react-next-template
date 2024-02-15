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
  padding: ${({ theme }) => theme.spacing.s};
  padding-top: 0;
  line-height: 1.5;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.s};
`;

const TitleTextWithIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IAccordionContainerProps {
  label: string;
  data: Array<{
    label: string;
    body: string | JSX.Element;
  }>;
  leftIcon?: JSX.Element;
}

const AccordionContainer = ({ label, data, leftIcon }: IAccordionContainerProps): JSX.Element => {
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
                <TitleTextWithIcon>{ leftIcon && leftIcon} {label}</TitleTextWithIcon>
              { isExpanded ? <ChevronUpIcon />  : <ChevronDownIcon /> }
            </TitleContent>
          </Heading>
        </TitleContainer>
        { 
          data.map((datum, index) => (
            <ContentWrapper maxHeight={contentHeight} key={index}>
              <Content ref={contentRef}>{datum.body}</Content>
            </ContentWrapper>
          ))
        }
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
    /* padding-bottom: ${({ theme }) => theme.spacing.m}; */
  }
`;

interface IAccordionProps {
  label: string;
  data: Array<{
    label: string;
    body: string | JSX.Element;
  }>;
  id?: string;
  leftIcon?: JSX.Element;
}

const Accordion = ({label, id, data, leftIcon}: IAccordionProps) => {
  return (
    <AccordionLayout id={id} data-testid="accordion-layout">
      <AccordionContainer label={label} leftIcon={leftIcon} data={data} />
    </AccordionLayout>
  );
};

export default Accordion;