import * as React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Linking } from 'react-native';
import { Card,Button,Text,Input } from 'react-native-elements';
import { context } from '../context/AppContext';

export default function TokenCard(){
    const cxtx = useContext(context);
    const [tiingoToken, setTiingoToken] = useState('');
    const [buttonChanges, setButtonChanges] = useState({color:cxtx?.color.blue, text:'Submit!'});
    return(
        <Card>
                <Card.Title>Tiingo API Token</Card.Title>
                <Card.Divider/>
                <Text>Please insert your Tiingo API Token here to use the underlying API. Disclaimer: This App is in no way associated with Tiingo and their products!</Text>
                <Text style={{color: cxtx?.color.blue}} onPress={()=>Linking.openURL('https://api.tiingo.com/account/api/token')} >Press here to obtain your token!</Text>
                <Input
                    placeholder='Tiingo API Token'
                    onChangeText={value=>setTiingoToken(value)}
                    secureTextEntry={true}
                />
                <Button 
                    title={buttonChanges.text}
                    buttonStyle={{backgroundColor: buttonChanges.color}}
                    onPress={()=>{
                        fetch(`${cxtx?.tiingoApi}/api/test`,{
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Token ${tiingoToken}`
                            }
                        })
                        .then(res=>res.json()).then((data)=>{
                            if(data.message==='You successfully sent a request'){ //why don't they just send a bool back?!
                                setButtonChanges({color:cxtx?.color.green, text:'Confirmed!'});
                                cxtx?.setToken(tiingoToken);
                            }else{
                                setButtonChanges({color:cxtx?.color.purple, text:'Denied!'});
                            }
                        });
                    }}
                />
            </Card>
    )
}