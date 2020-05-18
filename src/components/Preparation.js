import React from 'react';
import {Link} from "react-router-dom";

export class Preparation extends React.Component{
    render(){
      return (
        <div>
          <div className="container">
            <div className="container">
                  <div className="row d-flex justify-content-center text-white">
                    <h1>Helyezd el a bábuid</h1>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square water"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square water"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square water"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
                  <div className="row d-flex justify-content-center">
                      <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                  </div>
              </div>
              <div className="row d-flex justify-content-center">
              <form>
                <Link to="/IN_GAME">
                  <button type="button" class="btn btn-primary">Játék indítása</button>
                </Link>
              </form>
              </div>
          </div>
        </div>
      );
    }
  }