import * as React from 'react';
import { Tile } from 'react-native-elements';

export default function TickerTileWrapper(props:{title:string, caption:string, nextScreen:string}){
    return(<Tile 
        title={props.title}
        caption={props.caption}
    />)
}