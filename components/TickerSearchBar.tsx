import * as React from 'react';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';

export default function TickerSearchBar(props: any){
    const [userInput, setUserInput] = useState('');
    return(
        <SearchBar 
            placeholder="Search for a ticker"
            onChangeText={value=>setUserInput(value)}
            value={userInput}
            platform='android'
            onSubmitEditing={()=>{
                console.log('test: '+userInput)
            }}
        />
    )
}