import * as React from 'react';

export interface AppContextInterface {
    token: string
}

const context = React.createContext<AppContextInterface|null>(null);

export const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;