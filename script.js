const playerFactory = (piece, turn) => { 

  return{piece, turn}
};

const gameBoard = (() => {
  
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const addMove = (move,piece) => {
    board[move] = piece;
  }

  const valid = (move) => {
    return (board[move] === 0);
  }

  const showBoard = () => {
    console.log(board);
  }

  const draw = () => {
    let over = true;
    board.forEach(cur => {
      if(cur === 0) over = false; 
    });
    return over;
  }

  const winner = (piece) => {
    if(board[0] === piece){
      if(board[1] === piece && board[2] === piece) return true;
      if(board[4] === piece && board[8] === piece) return true;
      if(board[3] === piece && board[6] === piece) return true;
    }
    else if(board[8] === piece){
      if(board[5] === piece && board[2] === piece) return true;
      if(board[7] === piece && board[6] === piece) return true;
    }
    else if(board[6] === piece && board[4] === piece && board[2]) return true;
    else if(board[1] === piece && board[4] === piece && board[7]) return true;
    else if(board[3] === piece && board[4] === piece && board[5]) return true;
    else return false;
  }
  
  return {
    addMove,
    showBoard,
    valid,
    draw, 
    winner
  }

})();

const displayController = (() => {

  function _moveListen(event, player){

    player.piece === 'cross' ? 
      event.target.appendChild(document.createTextNode('X')): 
      event.target.appendChild(document.createTextNode('O'));
    
    gameBoard.addMove(event.srcElement.id, player.piece);
  }

  const newMove = (event, player) => {
    _moveListen(event, player);
  }

  return {
    newMove
  }
})();

(function logic(){

  one  = playerFactory('cross', true);
  two  = playerFactory('circle', false);

  const squares = document.querySelectorAll('.square');
  squares.forEach(cur => {
    cur.addEventListener('click', helper);
  })
  
  function helper(event){
    
    let cur = one.turn ? one : two;
    if(gameBoard.valid(event.srcElement.id)){

      displayController.newMove(event, cur);

      //Check if player who just moved has won
      if(gameBoard.winner(cur.piece)){
        console.log(`Player ${cur.piece} Has Won`);
      }
      else if(gameBoard.draw()) {
        console.log('Draw');
      }

      one.turn = !one.turn;
      two.turn = !two.turn;
    }
  }
})()




