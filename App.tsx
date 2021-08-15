import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AppContextInterface, context } from './context/AppContext';
import { useState } from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [token, setTokenState] = useState('');
  const tbAppContext: AppContextInterface = {
    token: token,
    setToken: setTokenIntern
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <context.Provider value={tbAppContext}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </context.Provider>
      </SafeAreaProvider>
    );
  }
  function setTokenIntern(token:string):void{
    setTokenState(token);
  }
}

