import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  constructor(props){
    super(props);
    this.state = {
      "clicked" : false,
      "symbol": ""
    };

    //Setup functions
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(!this.state.clicked){
      this.setState({clicked : true});
      if(this.props.turn === 0){
        this.setState({symbol : 'X'});
      }else{
        this.setState({symbol : 'O'});
      }
    }
    this.props.flipTurn(this.props.id);
  }

  render() {
    return (
      <div className="Square" onClick={this.handleClick}>
        {this.state.symbol}
      </div>
    );
  }
}

export default Square;
