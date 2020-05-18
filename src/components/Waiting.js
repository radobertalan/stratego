import React from 'react';
import { Logo } from './Logo'

export class Waiting extends React.Component{
  render(){
    return (
      <div className="container">
          <Logo/>
          <div className="row d-flex justify-content-center text-white">
              <h1>Szoba kódja: XQC32</h1>
          </div>
          <div className="row d-flex justify-content-center text-white">
              <h1>Várakozás az ellenfélre</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
      </div>
    );
  }
}