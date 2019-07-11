import React,{memo, useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from 'pages/home'
import Episodes from 'pages/episodes'
import Layout1 from 'layouts';
import Perfil from "../pages/home/components/perfil";


function NoMatch({ location }) {
    return (
      <div className="jumbotron align-items-center">
        <h3>
          Page no found <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }



  
export default memo(function Routes(props) {
  const [character, SetCharacter] = useState('');
  const [episode, SetEpisode] = useState('');
  
    return (
      <>
      <Router>
          <Switch>
          <Route path="/" exact render={(props)=>(<Layout1  character={character} SetCharacter={SetCharacter}><Home character={character} SetCharacter={SetCharacter} {...props}/></Layout1>)} /> 
          <Route path="/episodes" exact render={(props)=>(<Layout1 episode={episode} SetEpisode={SetEpisode} ><Episodes episode={episode} SetEpisode={SetEpisode}  {...props}/></Layout1>)} /> 
           <Route path={`/personaje/:id`} render={props=> ( <Perfil {...props} /> )}/> 
          <Route component={NoMatch} />
          </Switch>
      </Router>
      {console.log(character)}
      </>
    );
  })