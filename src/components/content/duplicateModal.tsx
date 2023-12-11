import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, NotificationIcon, TextBody, ButtonGroup, Button } from '@fravega-it/bumeran-ds-fvg';
import { TableView, Column, Cell, Label, Radio } from '@fravega-it/bumeran-ds-fvg'

type DuplicateModalProps = {
  isOpen?: boolean;
  closeModal: () => boolean;
}

const DuplicateModal = (props: DuplicateModalProps) => {
  const { isOpen, closeModal } = props;
  const personsObj = [
    {
      id: '001',
      name: 'Federico',
      age: 25,
      proffession: 'Ingeniero',
      faceapi: true,
      email: {
        address: 'federico@gmail.com',
        confirmed: false
      },
      city: 'Madrid',
      selected: false,
    },
    {
      id: '002',
      name: 'Facundo',
      age: 30,
      faceapi: false,
      email: {
        address: 'facundo@gmail.com',
        confirmed: false
      },
      proffession: 'Abogado',
      city: 'Barcelona',
      selected: false,
    },
    {
      id: '003',
      name: 'Jeremías',
      age: 35,
      faceapi: true,
      email: {
        address: 'jeremías@gmail.com',
        confirmed: true
      },
      proffession: 'Médico',
      city: 'Valencia',
      selected: false,
    },
  ];

  const [persons, setPersons] = useState(personsObj);

  const updatePersonSelectedStatus = (id: string) => {
    const p = persons.map((person) => {
      if(person.id === id) {
        person.selected = true;
      } else {
        person.selected = false;
      }
      return person;
    });
    setPersons(p)
  }

  const handleChange = (id: string, selected: boolean) => () => {
    updatePersonSelectedStatus(id);
  };

  return (
    <Modal onClose={closeModal} open={isOpen}>
      <ModalHeader
        leftIcon={<NotificationIcon />}
        title="Duplicado"
        description="Cliente duplicado"
      />

      <ModalBody>
        <TableView
          items={persons}
          renderColumns={() => (
            <>
              <Column minWidth={20} label="select" />
              <Column minWidth={50} label="name" />
              <Column minWidth={100} label="faceapi" />
              <Column minWidth={70} label="email" />
              <Column minWidth={70} label="email confirmed" />
              <Column minWidth={100} label="city" />
            </>
          )}
          renderCells={({ id, name, selected, faceapi, email, city }) => (
            <>
              {/* <Cell><Radio id={name} label="Radio" onChange={handleChange} name={name} value={name} /></Cell> */}
              {/* <Cell><Radio id={name} label={name} value={name} onChange={handleChange}/></Cell> */}
              <Cell><Radio id={id} label={name} value={name} checked={selected}  onChange={handleChange(id, selected)}/></Cell>
              <Cell>{name}</Cell>
              <Cell><Label label={faceapi.toString()} color={faceapi ? "green" : "red"} /></Cell>
              <Cell> {email.address}</Cell>
              <Cell><Label label={email.confirmed.toString()} color={email.confirmed ? "green" : "red"} /></Cell>
              <Cell> {city}</Cell>
            </>
          )}
        />
      </ModalBody>

      <ModalFooter>
        <ButtonGroup
          size="s"
          align="left"
          primaryLabel="Accept"
          onClickPrimary={closeModal}
          secondaryLabel="Cancel"
          onClickSecondary={closeModal}
        />
      </ModalFooter>
    </Modal>
  );
};

  export default DuplicateModal;