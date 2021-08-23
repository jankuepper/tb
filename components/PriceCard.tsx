import * as React from 'react';
import { useContext } from 'react';
import { Card,Text } from 'react-native-elements';
import { context } from '../context/AppContext';

export default function PriceCard(props:{data:{date:string,open:number,high:number,low:number,close:number,volume:number,adjOpen:number,adjHigh:number,adjLow:number,adjClose:number,adjVolume:number,divCash:number,splitFactor:number}}){
    const cxtx = useContext(context);
    //The used currency is missing!
    return(<Card>
        <Card.Title>Daten des {props.data.date}</Card.Title>
        <Card.Divider/>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Open:</Text> {props.data.open}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>High:</Text> {props.data.high}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Low:</Text> {props.data.low}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Close:</Text> {props.data.close}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Volume:</Text> {props.data.volume}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Adj. Open:</Text> {props.data.adjOpen}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Adj. High:</Text> {props.data.adjHigh}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Adj. Low:</Text> {props.data.adjLow}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Adj. Close:</Text> {props.data.adjClose}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Adj. Volume:</Text> {props.data.adjVolume}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Dividend:</Text> {props.data.divCash}</Text>
        <Text><Text style={{fontWeight:'bold',color:cxtx?.color.blue}}>Split:</Text> {props.data.splitFactor}</Text>
    </Card>)
}