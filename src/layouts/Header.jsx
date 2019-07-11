import React from 'react'
import Navbar from 'components/Navbar'
export default function Header(props){
    return(
        <>
        <Navbar  character={props.character} episode={props.episode} SetEpisode={props.SetEpisode}  SetCharacter={props.SetCharacter}/>
        </>
    )
}