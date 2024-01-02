import { 
  CheckCircleIcon, 
  TableView, 
  Column, 
  Cell, 
  CloseCircleIcon, 
  Label,
  Button,
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
// import * as utils from '@utils/string';
import * as utils from '@utils/index';
import { Person } from 'types/type';
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

type ClientTableProps = {
  person: Person;
}

// const booleanToText = (variable: boolean) => variable ? 'confirmado' : 'no confirmado'
// const capitalized = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export default function ClientTable(props: ClientTableProps) {
  const { person } = props;
  const { t } = useTranslation();
  return (
    <TableView
      items={[person]}
      renderColumns={() => (
        <>
          <Column minWidth={50} label={t('name')} />
          <Column minWidth={50} label={t('lastname')} />
          <Column minWidth={40} label={t('birth date')}/>
          <Column minWidth={50} label={t('facephi')} />
          <Column minWidth={220} label={t('email')} />
          <Column minWidth={70} label={t('confirmed email')} />
          <Column minWidth={40} label={t('resend email')} />
          <Column minWidth={40} label={t('renaper')} />
          <Column minWidth={40} label={t('id expiration date')} />
          <Column minWidth={100} label={t('address')} />
        </>
      )}
      renderCells={({ id, name, lastname, faceapi, renaper, address, email, age, identification }) => (
        <>
          <Cell>{name}</Cell>
          <Cell>{lastname}</Cell>
          <Cell>
            <Left>
              {new Date(age).toLocaleDateString()}
            </Left>
          </Cell>
          <Cell>
            <Label leftIcon={faceapi ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={utils.string.booleanToText(faceapi)} color={faceapi ? "green" : "red"}/>                  
          </Cell>
          <Cell>
            {email.address}
          </Cell>
          <Cell>
            <Label leftIcon={email.confirmed ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={utils.string.booleanToText(email.confirmed)} color={email.confirmed ? "green" : "red"}/>
          </Cell>
          <Cell>
            <Center>  
              <Button id={id} size="s" label={t('resend')} disabled={email.confirmed} />
            </Center>
          </Cell>
          <Cell>
            <Label leftIcon={renaper.confirmed ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={utils.string.booleanToText(renaper.confirmed)} color={renaper.confirmed ? "green" : "red"}/>
          </Cell>
          <Cell>
            <Left>
              {new Date(identification.expiration).toLocaleDateString()}
            </Left>
          </Cell>
          <Cell>{address?.street}</Cell>
        </>
      )}
    />
  );
}