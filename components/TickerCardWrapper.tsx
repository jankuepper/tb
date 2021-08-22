import * as React from 'react';
import { Card,Button,Text,Input } from 'react-native-elements';

export default function TickerCardWrapper(props:{title:string, ticker:string|undefined}){
    return(
        <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Divider/>
            <Button 
                title={'Go to details for '+props.ticker}
            />
        </Card>
    )
}