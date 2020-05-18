import React from 'react';

import { Logo } from './Logo'
import { Rules } from './Rules'
import { Link} from "react-router-dom";

export class MainPage extends React.Component{
    render(){
      return (
        <div>
          <Logo/>
          <div className="container">
              <div className="row d-flex justify-content-center">
              <form>
                <Link to="/WAITING_FOR_SECOND_PLAYER">
                  <button type="button" className="btn btn-primary">Új szoba indítása</button>
                </Link>
                <input class="form-control" type="text" placeholder="Szoba azonosító"></input>
                <Link to="/PREPARE_GAME">
                  <button type="button" className="btn btn-primary">Csatlakozás szobához</button>
                </Link>
              </form>
              </div>
          </div>
          <Rules/>
        </div>
      );
    }
  }