import styled from "styled-components";
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

  const documentsData: Record<string, string>[] = [
    {'Tipo': doc.type},
    {'numero': doc.number},
    {'verificado': string.booleanToText(doc.stateVerified === 'VERIFIED' ? true : false)},
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
