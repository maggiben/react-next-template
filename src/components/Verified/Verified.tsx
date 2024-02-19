import {
	Label,
	CheckIcon,
	AlertIcon,
  QuestionCircleIcon,
} from '@fravega-it/bumeran-ds-fvg';
import * as string from '@utils/string';

export type StateVerified = 'VERIFIED' | 'NOT_VERIFIED' | 'INCONSISTENT';
export default function verified(stateVerified: StateVerified) {
  switch(stateVerified) {
    case 'VERIFIED':
      return <Label color="green" leftIcon={<CheckIcon />} label={string.booleanToText(true)} /> ;
    case 'INCONSISTENT':
      return <Label color="yellow" leftIcon={<QuestionCircleIcon />} label={'INCONSISTENT'} /> ;
    case 'NOT_VERIFIED':
      return <Label color="red" leftIcon={<AlertIcon />} label={string.booleanToText(false)} />
  }
}