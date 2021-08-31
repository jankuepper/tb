import * as React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View,ScrollView } from 'react-native';
import { Card,Button,Text,Input,Tile } from 'react-native-elements';
import { context } from '../context/AppContext';
import TokenCard from '../components/TokenCard';
import TickerSearchBar from '../components/TickerSearchBar';
import TickerCardWrapper from '../components/TickerCardWrapper';
import MetaDataCard from '../components/MetaDataCard';

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
    //Todo make a Grid Element that looks like the one in Spotify to change to different Detail Screens
    //also handle the metadata lookup here to check if its there or render not found!
    //show global news when no ticker selectd
    useEffect(()=>{
        if(cxtx?.currentTicker!==''){
            setTickerCards(()=>{return <View>
                    <MetaDataCard />
                    <TickerCardWrapper title='Price Information' />
                </View>});
        }else{
            setTickerCards(null);
        }
    },[cxtx?.currentTicker])
    return(
        <ScrollView>
            {toRender}
            {tickerCards}
        </ScrollView>
    )
}