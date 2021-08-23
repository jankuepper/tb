import * as React from 'react';
import { Card } from 'react-native-elements';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { context } from '../context/AppContext';
import { ActivityIndicator,View,Text } from 'react-native';


export default function MetaDataCard(){
    const cxtx = useContext(context);
    const [render, setRender] = useState<JSX.Element>(<ActivityIndicator color={cxtx?.color.blue}/>);
    useEffect(()=>{
        fetch(`https://api.tiingo.com/tiingo/daily/${cxtx?.currentTicker}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cxtx?.token}`
            }
        })
        .then(res=>res.json())
        .then((data:{ticker:string,name:string,description:string,startDate:string,exchangeCode:string,endDate:string, detail:string})=>{
            if(data.detail != undefined){
                setRender(<Text>{data.detail}</Text>)
            }else{
                setRender(<Card>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Divider/>
                    <Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Description:</Text>
                    <Text>{data.description}</Text>
                    <Card.Divider/>
                    <Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Exchange Code:</Text>
                    <Text>{data.exchangeCode}</Text>
                    <Card.Divider/>
                    <Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Start Date: </Text>
                    <Text>{data.startDate}</Text>
                    <Card.Divider/>
                    <Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>End Date:</Text>
                    <Text>{data.endDate}</Text>
                </Card>)
            }
        })
    },[cxtx?.currentTicker])
    return(
        <View> 
            {render}
        </View>
    )
}