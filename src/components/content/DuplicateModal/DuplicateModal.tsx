import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import * as utils from '@utils/index';
import { Modal, ModalHeader, ModalBody, ModalFooter, NotificationIcon, TextBody, ButtonGroup, Button } from '@fravega-it/bumeran-ds-fvg';
import { 
  TableView, 
  Column, 
  Cell, 
  Label, 
  Radio, 
  CheckCircleIcon, 
  CloseCircleIcon
} from '@fravega-it/bumeran-ds-fvg'
import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { personsState } from '../../../states/atoms';

type DuplicateModalProps = {
  isOpen?: boolean;
  closeModal: (person?: Person) => void;
  onSelectPersonModal: (person?: Person) => void;
}

const DuplicateModal = (props: DuplicateModalProps) => {
  const { t } = useTranslation();
  const {isOpen, onSelectPersonModal, closeModal} = props;
  const [persons, setPersons] = useRecoilState(personsState);

  const handleChange = (id: string, selected: boolean) => () => {
    setPersons((prev: Person[] | undefined) => {
      return prev && structuredClone(prev).map((value: Person) => {
        value.selected = (value.id === id) ? true : false;
        return value;
      });
    }); 
  };

  const onAccept = () => {
    const selectedPerson = persons && persons[persons.findIndex((person) => person.selected)];
    if (selectedPerson) {
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
        { persons && <TableView
          items={persons}
          renderColumns={() => (
            <>
              <Column minWidth={20} label={t('select')} />
              <Column minWidth={50} label="dni" />
              <Column minWidth={100} label={t('facephi')} />
              <Column minWidth={70} label={t('email')} />
              <Column minWidth={100} label={t('renaper')} />
            </>
          )}
          renderCells={({ id, name, selected, faceapi, email, renaper, identification }) => (
            <>
              <Cell><Radio id={id} label={name} value={name} checked={selected}  onChange={handleChange(id, selected)}/></Cell>
              <Cell>{identification.number}</Cell>
              <Cell>
                <Label leftIcon={faceapi ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={utils.string.booleanToText(faceapi)} color={faceapi ? "green" : "red"}/>                  
              </Cell>
              <Cell>{email.address}</Cell>
              <Cell>
                <Label leftIcon={renaper.confirmed ? <CheckCircleIcon size="s" /> : <CloseCircleIcon size="s"/> } label={utils.string.booleanToText(renaper.confirmed)} color={renaper.confirmed ? "green" : "red"}/>
              </Cell>
            </>
          )}
          />
        }
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