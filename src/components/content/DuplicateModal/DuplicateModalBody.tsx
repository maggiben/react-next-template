import * as utils from '@utils/index';
import { 
  TableView, 
  Column, 
  Cell, 
  Label, 
  Radio, 
  CheckCircleIcon, 
  CloseCircleIcon
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';


type DuplicateModalBodyProps = {
  persons: Person[];
  handleSelection: ((checked: boolean, meta: { event: React.ChangeEvent<HTMLInputElement>; value: string; }) => void) | undefined;
}

const DuplicateModalBody = (props: DuplicateModalBodyProps) => {
  const { t } = useTranslation();
  const { persons, handleSelection } = props;

  return (
    <TableView
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
					<Cell><Radio id={id} label={name} value={id} checked={selected}  onChange={handleSelection}/></Cell>
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
  );
};

  export default DuplicateModalBody;