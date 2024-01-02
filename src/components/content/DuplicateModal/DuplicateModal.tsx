import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Modal, ModalHeader, ModalBody, ModalFooter, NotificationIcon, TextBody, ButtonGroup, Button } from '@fravega-it/bumeran-ds-fvg';
import { TableView, Column, Cell, Label, Radio } from '@fravega-it/bumeran-ds-fvg'
import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { personState } from '../../../states/atoms';

type DuplicateModalProps = {
  isOpen?: boolean;
  closeModal: (person?: Person) => void;
  onSelectPersonModal: (person?: Person) => void;
  persons: Person[];
}

const DuplicateModal = (props: DuplicateModalProps) => {
  const { t } = useTranslation();
  const [person, setPerson] = useRecoilState(personState);
  const {isOpen, onSelectPersonModal, closeModal, persons} = props;
  const [personsObj, setPersonsObj] = useState<Person[]>({...props.persons});

  useEffect(() => {
    setPersonsObj(props.persons);
  }, [props.persons])

  const updatePersonSelectedStatus = useCallback(
    (id: string) => {
      const setSelectedPerson = (id: string) => {
        return personsObj.map((person) => {
          if(person.id === id) {
            person.selected = true;
          } else {
            person.selected = false;
          }
          return person;
        });
      }
      const selectedPerson = setSelectedPerson(id);
      setPersonsObj(selectedPerson)
    },
    [personsObj]
  );

  const handleChange = (id: string, selected: boolean) => () => {
    updatePersonSelectedStatus(id);
  };

  const onAccept = () => {
    const selectedPerson = personsObj[personsObj.findIndex((person) => person.selected)];
    if (selectedPerson) {
      setPerson(selectedPerson);
      onSelectPersonModal(selectedPerson);
    } else {
      alert(t('all fields empty'));
    }
  }

  return (
    <Modal onClose={closeModal} open={isOpen}>
      <ModalHeader
        leftIcon={<NotificationIcon />}
        title={t('duplicated')}
        description={t('duplicated customer')}
      />

      <ModalBody>
        <TableView
          items={personsObj}
          renderColumns={() => (
            <>
              <Column minWidth={20} label="select" />
              <Column minWidth={50} label="dni" />
              <Column minWidth={100} label="faceapi" />
              <Column minWidth={70} label="email" />
              <Column minWidth={70} label="email confirmed" />
              <Column minWidth={100} label="city" />
            </>
          )}
          renderCells={({ id, name, selected, faceapi, email, city, identification }) => (
            <>
              <Cell><Radio id={id} label={name} value={name} checked={selected}  onChange={handleChange(id, selected)}/></Cell>
              <Cell>{identification.number}</Cell>
              <Cell><Label label={faceapi.toString()} color={faceapi ? "green" : "red"} /></Cell>
              <Cell>{email.address}</Cell>
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
          primaryLabel={t('accept')}
          onClickPrimary={onAccept}
          secondaryLabel={t('cancel')}
          onClickSecondary={closeModal}
        />
      </ModalFooter>
    </Modal>
  );
};

  export default DuplicateModal;