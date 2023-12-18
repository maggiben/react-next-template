import { 
  CheckCircleIcon, 
  TableView, 
  Column, 
  Cell, 
  CloseCircleIcon, 
  Label,
  Button,
} from '@fravega-it/bumeran-ds-fvg'

import { Person } from '../index';

type ClientTableProps = {
  person: Person;
}
  
export default function ClientTable(props: ClientTableProps) {
  const { person } = props;
  return (
    <TableView
      items={[person]}
      renderColumns={() => (
        <>
          <Column minWidth={50} label="name" />
          <Column minWidth={100} label="faceapi" />
          <Column minWidth={70} label="email" />
          <Column minWidth={70} label="email confirmed" />
          <Column minWidth={40} label="resend email" />
          <Column minWidth={100} label="city" />
        </>
      )}
      renderCells={({ id, name, faceapi, email, city }) => (
        <>
          <Cell>{name}</Cell>
          <Cell>
            <Label leftIcon={faceapi ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={faceapi.toString()} color={faceapi ? "green" : "red"}/>                  
            </Cell>
          <Cell>{email.address}</Cell>
          <Cell>
            <Label leftIcon={email.confirmed ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={email.confirmed.toString()} color={email.confirmed ? "green" : "red"}/>
          </Cell>
          <Cell>
            {(function () {
                if(!email.confirmed) {
                  return <Button id={id} size="s" label="Resend" />
                }
              })()
            }
          </Cell>
          <Cell>{city}</Cell>
        </>
      )}
    />
  );
}