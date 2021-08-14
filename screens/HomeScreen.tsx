import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Card,Button,Text,Input } from 'react-native-elements';

export default function HomeScreen(){
    const [tiingoToken, setTiingoToken] = useState('');
    const [buttonChanges, setButtonChanges] = useState({color:'#6bc9e6', text:'Submit!'});
    return(
        <View>
            <Card>
                <Card.Title>Tiingo API Token</Card.Title>
                <Card.Divider/>
                <Text>Please insert your Tiingo API Token here to use the underlying API. Disclaimer: This App is in no way associated with Tiingo and their products!</Text>
                <Input
                    placeholder='Tiingo API Token'
                    onChangeText={value=>setTiingoToken(value)}
                />
                <Button 
                    title={buttonChanges.text}
                    buttonStyle={{backgroundColor: buttonChanges.color}}
                    onPress={()=>{
                        fetch('https://api.tiingo.com/api/test?token='+tiingoToken,{
                            headers: {'Content-Type': 'application/json'}
                        })
                        .then(res=>res.json()).then((data)=>{
                            console.log(data)
                            if(data.message==='You successfully sent a request'){
                                setButtonChanges({color:'#7ef2c7', text:'Confirmed!'});
                            }else{
                                setButtonChanges({color:'#e94cdd', text:'Denied!'});
                            }
                        });
                    }}
                />
            </Card>
        </View>
    )
}