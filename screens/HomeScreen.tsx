import * as React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { context } from '../context/AppContext';
import TokenCard from '../components/TokenCard';
import TickerSearchBar from '../components/TickerSearchBar';
import TickerCardWrapper from '../components/TickerCardWrapper';

export default function HomeScreen(){
    const cxtx = useContext(context);
    const [toRender, setToRender] = useState<JSX.Element|null>(null);
    const [tickerCards, setTickerCards] = useState<JSX.Element|null>(null);
    useEffect(()=>{
        if(cxtx?.token===''){
            setToRender(()=>{return <TokenCard/>});
        }else{
            setToRender(()=>{return <TickerSearchBar />});
        }
    },[cxtx?.token])
    useEffect(()=>{
        if(cxtx?.currentTicker!==''){
            setTickerCards(()=>{return <TickerCardWrapper title='End of Day Information' ticker={cxtx?.currentTicker} />});
        }else{
            setTickerCards(null);
        }
    },[cxtx?.currentTicker])
    return(
        <View>
            {toRender}
            {tickerCards}
        </View>
    )
}