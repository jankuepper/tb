import * as React from 'react';
import { FunctionComponent } from 'react';

export interface AppContextInterface {
    token: string,
    setToken(token:string): void
}
export const context = React.createContext<AppContextInterface|null>(null);