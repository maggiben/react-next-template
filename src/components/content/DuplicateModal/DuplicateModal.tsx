import { useRecoilState } from 'recoil';
import { Modal, ModalHeader, ModalBody, ModalFooter, NotificationIcon, TextBody, ButtonGroup, Button } from '@fravega-it/bumeran-ds-fvg';
import { Person } from 'types/type';
import { useTranslation } from 'react-i18next';
import { personsState } from '@states/atoms';
import DuplicateModalBody from './DuplicateModalBody';


export type DuplicateModalProps = {
  isOpen?: boolean;
  closeModal: (person?: Person) => void;
  onSelectPersonModal: (person?: Person) => void;
}

const DuplicateModal = (props: DuplicateModalProps) => {
  const { t } = useTranslation();
  const {isOpen, onSelectPersonModal, closeModal} = props;
  const [persons, setPersons] = useRecoilState(personsState);

  const handleChange = (checked: boolean, meta: { event: React.ChangeEvent<HTMLInputElement>; value: string; }): void => {
    setPersons((prev: Person[] | undefined) => {
      return prev && structuredClone(prev).map((value: Person) => {
        value.selected = checked && (value.id === meta.value) ? true : false;
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
        <DuplicateModalBody persons={persons ?? []} handleSelection={handleChange} />
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