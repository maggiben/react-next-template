import 'styled-components';
import { IDefaultTheme } from '@fravega-it/bumeran-ds-fvg';

type IServerStyleSheet = ServerStyleSheet;

declare module 'styled-components' {
    export interface DefaultTheme extends IDefaultTheme {}
    export interface ServerStyleSheet extends IServerStyleSheet {
        clearTag: () => void;
    }
}
