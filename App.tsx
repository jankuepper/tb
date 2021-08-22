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
  const [tickerIntern, setTickerIntern] = useState('');
  const tbAppContext: AppContextInterface = {
    token: token,
    setToken: setTokenIntern,
    color:{green:'#7ef2c7',blue:'#6bc9e6',purple:'#e94cdd'},
    tiingoApi:'https://api.tiingo.com',
    currentTicker:tickerIntern,
    setCurrentTicker: setCurrentTickerIntern
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
  function setCurrentTickerIntern(ticker:string):void{
    setTickerIntern(ticker);
  }
}

