import React, { Component } from 'react';

class TicTacToe extends Component {

  constructor() {
    super();
    this.state = {
      playerOneSymbol: 'X',
      playerTwoSymbol: 'O',
      currentTurn: 'X',
      board: Array(9).fill([[], ['c'], []]),
      };
      this.boardView = [];
      this.checkWin = this.checkWin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i, index, value) {
    if(this.state.board[index[i]]=== ' ') {
      this.setState = {
        board: this.state.board,
        currentTurn: this.state.currentTurn===this.state.playerOneSymbol ? this.state.playerTwoSymbol : this.state.playerOneSymbol
      }
    }
    const boardState = {};
    boardState[[index, i]] = value || '0 value';
    console.log('Board state: ', boardState)
    this.boardView = this.boardView.concat(boardState);
    console.log(this.boardView, 'boardViews');
    this.checkWin();
  }

  drawTreeForMoves() {}
  randomMove() {}
  decideResult() {}
  checkWin() {
    if(this.board === [0,0]) {
      alert('Hw');
    }
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) =>
          cell.map((current, i) => {
            return <div className="square"
            onClick={() => console.log(index, i)}>{index}{this.handleClick(i, index, current)} </div>
            })
        )}
      </div>
    );
  }
}

export default TicTacToe;
