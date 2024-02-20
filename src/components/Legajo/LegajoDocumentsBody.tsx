import styled from "styled-components";
import DataContainer from '@components/DataContainer/DataContainer';
import verified from '@components/Verified/Verified';
import { useTranslation } from 'react-i18next';
import * as string from '@utils/string';
import { Document } from 'types/type';


const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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


interface ILegajoDocumentsBodyProp {
  doc: Document;
}

const LegajoDocumentsBody = ({ doc }: ILegajoDocumentsBodyProp): JSX.Element => {
	const { t } = useTranslation()
  const documentsData: Record<string, string | JSX.Element>[] = [
    {[t('type')]: doc.type},
    {[t('number')]: doc.number},
    {[t('verified')]: verified(doc.stateVerified)},
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
