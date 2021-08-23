import * as React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Card } from 'react-native-elements';
import PriceCard from '../components/PriceCard';
import { context } from '../context/AppContext';

export default function PriceScreen(){
    const cxtx = useContext(context);
    const [render, setRender] = useState<JSX.Element>(<ActivityIndicator color={cxtx?.color.blue}/>);
    useEffect(()=>{
        fetch(`https://api.tiingo.com/tiingo/daily/${cxtx?.currentTicker}/prices`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cxtx?.token}`
            }
        })
        .then(res=>res.json())
        .then((data)=>{
            //Who gives back an array for an endpoint with always one freaking object?!
            setRender(<PriceCard data={data[0]}/>)
        })
    },[cxtx?.currentTicker])
    //enable looking at historical pricedata
    return(<View>
        {render}
    </View>)
}