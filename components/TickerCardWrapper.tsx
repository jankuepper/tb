import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Card,Button,Text,Input } from 'react-native-elements';

export default function TickerCardWrapper(props:{title:string}){
    const navigation = useNavigation();
    return(
        <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Divider/>
            <Button 
                title={'Go to details'}
                onPress={()=>{
                    navigation.navigate('Price')
                }}
            />
        </Card>
    )
}