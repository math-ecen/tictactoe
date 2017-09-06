import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      "turn":1,
      "gamestate": ["","","","","","","","",""]
    };
    this.checkForWinner = this.checkForWinner.bind(this);
    this.checkPartners = this.checkPartners.bind(this);
    this.checkForDraw = this.checkForDraw.bind(this);
  }

  flipTurn(id){
    this.setState((prevState, props)=>{
        var x = prevState['gamestate'];
        var sym = '';
        if(this.state.turn == 1){
          sym = 'O';
        }else{
          sym = 'X';
        }
        x[id] = sym;
        if(this.checkForWinner(id)){
          var textnode = document.createTextNode("Congratulations " + sym);
          document.getElementById("sure").append(textnode);
        }
        else{
          if(this.checkForDraw()){
            console.log("WIENER!!! " + sym);
            var textnode = document.createTextNode("Congratulations O and X!" +
              " You're BOTH winners in my book!");
            document.getElementById("sure").append(textnode);
          }
        }
        return {
            "gamestate" : x,
            "turn": 1 - this.state.turn
        };
      }
    );

  }

  checkForWinner(id){
    if(id == 0){
      if(this.checkPartners(0, 1, 2) || this.checkPartners(0, 3, 6) ||
        this.checkPartners(0, 4,  8))
        return true;
    }
    else if(id == 1){
      if(this.checkPartners(0, 1, 2) || this.checkPartners(1, 4, 7))
        return true;
    }
    else if(id == 2){
      if(this.checkPartners(0, 1, 2) || this.checkPartners(2,  5, 8) ||
        this.checkPartners(2, 4, 6))
        return true;
    }
    else if(id == 3){
      if(this.checkPartners(3, 4, 5) || this.checkPartners(0, 3, 6))
        return true;
    }
    else if(id == 4){
      if(this.checkPartners(3, 4, 5) || this.checkPartners(1, 4, 7) ||
        this.checkPartners(0, 4,  8) || this.checkPartners(2, 4, 6))
        return true;
    }
    else if(id == 5){
      if(this.checkPartners(3, 4, 5) || this.checkPartners(2, 5, 8))
        return true;
    }
    else if(id == 6){
      if(this.checkPartners(6, 7, 8) || this.checkPartners(0, 3, 6) ||
        this.checkPartners(2, 4, 6))
        return true;
    }
    else if(id == 7){
      if(this.checkPartners(6, 7, 8) || this.checkPartners(1, 4, 7))
        return true;
    }
    else{
      if(this.checkPartners(6, 7, 8) || this.checkPartners(2, 5, 8) ||
        this.checkPartners(0, 4,  8))
        return true;
    }
    return false;
  }

  checkForDraw(){
    for(var i = 0; i < 9; i++){
      if(this.state.gamestate[i] == '')
        return false;
    }
    return true;
  }

  checkPartners(one, two, three){
    if(this.state.gamestate[one] === this.state.gamestate[two] &&
      this.state.gamestate[two] === this.state.gamestate[three]){
        return true;
    }
    return false;
  }

  render() {
    return (
      <div className="Board">
        <Square id='0' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='1' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='2' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='3' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='4' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='5' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='6' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='7' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
        <Square id='8' turn={this.state.turn} flipTurn={this.flipTurn.bind(this)}/>
      </div>
    );
  }
}

export default Board;
