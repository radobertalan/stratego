import React from 'react';

export class Logo extends React.Component{
  render(){
    return (
        <div className="jumbotron">
        <div className="row d-flex justify-content-center">
            <div className="span4"></div>
            <div className="span4"><img className="center-block" src="../logo.png" alt="stratego logo"/></div>
            <div className="span4"></div>
        </div>
        </div>
    );
  }
}