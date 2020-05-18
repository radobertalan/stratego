import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { MainPage } from './components/MainPage'
import { Game } from './components/Game'
import { Preparation } from './components/Preparation'
import { Waiting } from './components/Waiting'

class App extends React.Component{
  render(){
    return (
      <div>
      <Router>
        <Redirect exact from="/" to="MAIN_PAGE" />
        <Route path="/MAIN_PAGE" component={MainPage}/>
        <Route path="/WAITING_FOR_SECOND_PLAYER" component={Waiting}/>
        <Route path="/PREPARE_GAME" component={Preparation}/>
        <Route path="/IN_GAME" component={Game}/>
      </Router>
      </div>
    );
  }
}

export default App;
