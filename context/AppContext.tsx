import * as React from 'react';
import { FunctionComponent } from 'react';

export interface AppContextInterface {
    token: string,
    setToken(token:string): void,
    color:{green:string,blue:string, purple:string}
}
export const context = React.createContext<AppContextInterface|null>(null);