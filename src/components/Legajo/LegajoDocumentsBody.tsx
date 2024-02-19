import styled from "styled-components";
import {
	Label,
	CheckIcon,
	AlertIcon,
} from '@fravega-it/bumeran-ds-fvg'
import DataContainer from '@components/DataContainer/DataContainer';
import * as string from '@utils/string';
import { Document } from 'types/type';


const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CenteredRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const CenteredColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

interface ILegajoDocumentsBodyProp {
    doc: Document;
}

const LegajoDocumentsBody = ({ doc }: ILegajoDocumentsBodyProp): JSX.Element => {
	const verified = (stateVerified: string) => stateVerified === 'VERIFIED' ? <Label color="green" leftIcon={<CheckIcon />} label={string.booleanToText(true)} /> : <Label color="red" leftIcon={<AlertIcon />} label={string.booleanToText(false)} />
  const documentsData: Record<string, string | JSX.Element>[] = [
    {'Tipo': doc.type},
    {'numero': doc.number},
    {'verificado': verified(doc.stateVerified)},
  ]
  return (
    <Centered>
      <CenteredColumn data-testid="legajo-documents-body">
        <DataContainer data={documentsData} columns={2} withBorder={false} background='transparent'/>
      </CenteredColumn>
    </Centered>
  );
};

export default LegajoDocumentsBody;
