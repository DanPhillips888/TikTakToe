//child
const Square = ({id, player})=>{
  return (
    <button onClick= {()=>{alert(`I'm Square ${id}`)}}>
      <h1>{id}</h1>  
    </button>  //switch id for player
  )
}

//parent
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  const toggle = ()=> setMounted(!mounted);
  const reRender = () => setRandom(Math.random());
  function renderSquare(i) {
  return <Square id={i} player={player}></Square>;
  }
  return (
    <div
      className="game-board">
        <div className="grid-row">
          {mounted && renderSquare(0)}
          {mounted && renderSquare(1)}
          {mounted && renderSquare(2)}
        </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-Render</button>
        <h1> Turn of Player {player}</h1>
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