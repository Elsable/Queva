import React from 'react'
import { Container } from '../../styles/Utils';
import HomeIndex from './components/index'
export default function Home(props, match){
    return(
        <div className="col-md-12">
            <div className=" container" style={{background:'linear-gradient(76213deg, rgb(171, 210, 19), rgb(87, 101, 116))'}}>
                <HomeIndex  character={props.character} SetCharacter={props.SetCharacter} {...match}/>
            </div>
        </div>
    )
}