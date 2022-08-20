const playerFactory = (name, piece) => { 

  return{name, piece}
};

const gameBoard = (() => {
  
  let board = [];
  
  function _updateVisuals(node, player){
  
    player.piece === 'cross'  ? node.appendChild(document.createTextNode('X')): 
                         node.appendChild(document.createTextNode('O'));
  
  }

  const addMove = (event, player) => {
    
    _updateVisuals(event.target, player);
    
    board[event.srcElement.id] = player
  }

  const showBoard = () => {
    console.log(board);
  }
  
  return {
    addMove,
    showBoard
  }

})();

const displayController = (() => {

})();

function moveListen(){
  const squares = document.querySelectorAll('.square');

  squares.forEach(cur => {
    cur.addEventListener('click', helper);
  });

  function helper(e){
    gameBoard.addMove(event, test);
  }
}

const test = playerFactory('test', 'circle');

moveListen();
