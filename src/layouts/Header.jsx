import React from 'react'
import { Redirect ,withRouter} from "react-router-dom";

import Navbar from 'components/Navbar'
export default withRouter(function Header({match,character,episode,SetEpisode,SetCharacter}){
    return(
        <>
        {/* SetCharacter(inputRef.current.value) */}
        {match.url === "/" ?   SetEpisode(""): SetCharacter("")}
        <Navbar  character={character} episode={episode} SetEpisode={SetEpisode}  SetCharacter={SetCharacter}/>
        </>
    )
})