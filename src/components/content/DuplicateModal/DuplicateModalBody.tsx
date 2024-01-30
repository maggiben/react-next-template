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
					<Column minWidth={70} label={t('email')} />
				</>
			)}
			renderCells={({ id, name, selected, email, lastname }) => (
				<>
					<Cell><Radio id={id} name={name} label={name + ' ' + lastname} value={id} checked={selected} onChange={handleSelection}/></Cell>
					<Cell>{email.address}</Cell>
				</>
			)}
    />
  );
};

  export default DuplicateModalBody;