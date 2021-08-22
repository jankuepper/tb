import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { useContext, useState } from 'react';
import { context } from '../context/AppContext';

export default function TickerSearchBar(props: any){
    const [userInput, setUserInput] = useState('');
    const cxtx = useContext(context);
    return(
        <SearchBar 
            placeholder="Search for a ticker"
            onChangeText={value=>setUserInput(value)}
            value={userInput}
            platform='android'
            onSubmitEditing={()=>{
                cxtx?.setCurrentTicker(userInput);
            }}
        />
    )
}