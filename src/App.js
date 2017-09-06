import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="sure">
        <div className="title">
          Tic Tac Toe!
        </div>
        <Board />
        <button id="reset-btn" onClick={(event) => {
          window.location.reload();
        }}>Reset </button><br/>

      </div>
    );
  }
}

export default App;
