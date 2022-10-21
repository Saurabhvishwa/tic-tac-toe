import { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("A");
  const [moves, setMoves] = useState(0);
  const [winner, setWinner] = useState(null);
  function changePlayer() {
    if (player === "A") setPlayer("B");
    else setPlayer("A");
  }
  function resetGame() {
    setState(Array(9).fill(null));
    setPlayer("A");
    setMoves(0);
    setWinner(null);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="player_turn">
        <h2>
          Player : <label>{player}</label>
        </h2>
      </div>
      <Board
        state={state}
        setState={setState}
        player={player}
        changePlayer={changePlayer}
        moves={moves}
        setMoves={setMoves}
        winner={winner}
        setWinner={setWinner}
      />

      <div className="reset_wrapper">
        {winner != null && (
          <>
            <h1>Winner : {winner}</h1>
            <button onClick={() => resetGame()}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
