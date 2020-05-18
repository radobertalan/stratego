import React from 'react';

export class Game extends React.Component {
    render() {
      return (
            <div className="container board">
                <div className="row d-flex justify-content-center">
                    <div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div><div className="square grass hostile"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square water"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square water"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square water"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div><div className="square grass"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass friendly">3</div><div className="square grass friendly">5</div><div className="square grass friendly">3</div><div className="square grass friendly">4</div><div className="square grass friendly">9</div><div className="square grass friendly">4</div><div className="square grass friendly">8</div><div className="square grass friendly">6</div><div className="square grass friendly">5</div><div className="square grass friendly">2</div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass friendly">9</div><div className="square grass bomb"></div><div className="square grass friendly">4</div><div className="square grass friendly">5</div><div className="square grass friendly">7</div><div className="square grass friendly">3</div><div className="square grass bomb"></div><div className="square grass friendly">9</div><div className="square grass friendly">2</div><div className="square grass friendly">4</div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass friendly">5</div><div className="square grass friendly">4</div><div className="square grass friendly">2</div><div className="square grass bomb"></div><div className="square grass friendly">3</div><div className="square grass friendly">2</div><div className="square grass friendly">4</div><div className="square grass friendly">8</div><div className="square grass friendly">4</div><div className="square grass friendly">3</div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="square grass friendly">3</div><div className="square grass friendly">1</div><div className="square grass friendly">4</div><div className="square grass flag"></div><div className="square grass friendly">7</div><div className="square grass friendly">9</div><div className="square grass friendly">9</div><div className="square grass friendly">3</div><div className="square grass friendly">3</div><div className="square grass friendly">2</div>
                </div>
            </div>
        );
    }
  }