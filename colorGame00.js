const Square = ({id, newState})=>{
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const XorO = ["0", "X"];
  const palet = ['red', 'blue'];
  //const getRandomColor = ()=> palet[Math.floor(Math.random()*3)];
  
  React.useEffect(()=>{
    console.log(`Render ${id}`);
    return ()=> console.log(`Unmounting square ${id}`);
  });
  //keep track of state of the square
  return (
    <button onClick={state =>{
      // let col = getRandomColor(); 
      // setColor(col);  //changing the state will cause rerender
      if (state == 0) setColor('red');
      if (state == 1) setColor('blue');
      let nextPlayer = newState(id);
      setStatus(nextPlayer);
      //e.target.style.background =  col;  //getRandomColor();
    }}> 
      <h1>{XorO [status]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState([Array(9).fill(null)]);
  
  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if (winner != null) status = `Player ${winner} wins!`;
  
  //define new state function
  const newState = idOfSquare =>{
    let thePlayer = player;
    state[idOfSquare] = player; //player is present player
    setState(state); // state is array of 0 or 1 or null
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    return thePlayer;
  }

  function checkWinner(state) {

    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 6],
      ];
    
      for (let i = 0; i < win.length; i++) {
          const [a, b, c] = win[i];
          if (state[a] == state[b] && state[a] == state[c] && state[a])
            return state[a];
      }
      return null;
    };
  
  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }
  return (
    <div
      className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      <div id="info">
        {/* <h1>It is Player {player}'s turn</h1> */}
        <h1> {status} </h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));

// From initial exercises 16.2 and 3
// onClick={(e) => {
//   setPlayer((player + 1)%2);
//   status = `Player ${player}`;
//   e.target.style.background = "red";
//   e.target.style.width = 400;
//}}
