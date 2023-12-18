import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Modal, ModalHeader, ModalBody, ModalFooter, NotificationIcon, TextBody, ButtonGroup, Button } from '@fravega-it/bumeran-ds-fvg';
import { TableView, Column, Cell, Label, Radio } from '@fravega-it/bumeran-ds-fvg'
import { Person } from '../index';
import { personState } from '../../../states/atoms';

type DuplicateModalProps = {
  isOpen?: boolean;
  closeModal: (person?: Person) => void;
  onSelectPersonModal: (person?: Person) => void;
  persons: Person[];
}

const DuplicateModal = (props: DuplicateModalProps) => {
  const [person, setPerson] = useRecoilState(personState);
  const {isOpen, onSelectPersonModal, closeModal, persons} = props;
  const [personsObj, setPersonsObj] = useState<Person[]>({...props.persons});

  useEffect(() => {
    setPersonsObj(props.persons);
  }, [props.persons])

  const updatePersonSelectedStatus = useCallback(
    (id: string) => {
      const p = personsObj.map((person) => {
        if(person.id === id) {
          person.selected = true;
        } else {
          person.selected = false;
        }
        return person;
      });
      setPersonsObj(p)
    },
    [personsObj]
  );

  const setSelectedPerson = () => {
    setPerson(personsObj[personsObj.findIndex((person) => person.selected)]);
  };

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
          items={personsObj}
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
          onClickPrimary={() => {setSelectedPerson(); onSelectPersonModal(personsObj[personsObj.findIndex((person) => person.selected)]);}}
          secondaryLabel="Cancel"
          onClickSecondary={closeModal}
        />
      </ModalFooter>
    </Modal>
  );
};

  export default DuplicateModal;