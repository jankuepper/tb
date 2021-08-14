import * as React from 'react';
import { FunctionComponent } from 'react';

export interface AppContextInterface {
    token: string
}
export const context = React.createContext<AppContextInterface|null>(null);