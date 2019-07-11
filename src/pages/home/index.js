import React from 'react'
import { Container } from '../../styles/Utils';
import HomeIndex from './components/index'
export default function Home(props, match){
    return(
        <div className="col-md-12">
            <div className="jumbotron container" >
                <HomeIndex  character={props.character} SetCharacter={props.SetCharacter} {...match}/>
            </div>
        </div>
    )
}