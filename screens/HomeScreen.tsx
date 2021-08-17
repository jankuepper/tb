import * as React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { context } from '../context/AppContext';
import TokenCard from '../components/TokenCard';
import TickerSearchBar from '../components/TickerSearchBar';

export default function HomeScreen(){
    const cxtx = useContext(context);
    const [toRender, setToRender] = useState<JSX.Element|null>(null); //TODO change null to something more interesting like newsfeed...
    useEffect(()=>{
        if(cxtx?.token===''){
            setToRender(()=>{return <TokenCard/>});
        }else{
            setToRender(()=>{return <TickerSearchBar />});
        }
    },[cxtx?.token])
    return(
        <View>
            {toRender}
        </View>
    )
}