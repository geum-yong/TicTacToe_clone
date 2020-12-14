import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';

class Board extends React.Component {
  renderSquare = (i) => {
    const { squares, onClick } = this.props;
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.squares !== nextProps.squares) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
