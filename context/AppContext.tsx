import * as React from 'react';

export interface AppContextInterface {
    token: string,
    setToken(token:string): void,
    color:{green:string,blue:string, purple:string},
    tiingoApi:string,
    currentTicker: string
    setCurrentTicker(ticker:string):void
}
export const context = React.createContext<AppContextInterface|null>(null);