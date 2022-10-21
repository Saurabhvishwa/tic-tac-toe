import React, { useEffect } from "react";
import Cell from "../cell/Cell";
import "./Board.css";

export default function Board({
  state,
  setState,
  player,
  changePlayer,
  moves,
  setMoves,
  winner,
  setWinner,
}) {
  function updateCell(index) {
    let arr = [...state];
    if (arr[index] === null) {
      arr[index] = player;
      setState(arr);
      setMoves(moves + 1);
    }
    if (moves === 9) {
      setWinner("Tie");
      return;
    }
    changePlayer();
  }
  useEffect(() => {
    function checkWinner() {
      const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (var i = 0; i < arr.length; i++) {
        if (
          state[arr[i][0]] != null &&
          state[arr[i][0]] === state[arr[i][1]] &&
          state[arr[i][0]] === state[arr[i][2]]
        ) {
          setWinner(state[arr[i][0]]);
        }
      }
      if (moves === 9) {
        setWinner("Tie");
      }
    }
    checkWinner();
  }, [state, moves, setWinner]);
  return (
    <div className="board">
      <div className="row first">
        <Cell
          updateCell={updateCell}
          index={0}
          playerValue={state[0]}
          winner={winner}
        />
        <Cell
          updateCell={updateCell}
          index={1}
          playerValue={state[1]}
          winner={winner}
        />
        <Cell
          updateCell={updateCell}
          index={2}
          playerValue={state[2]}
          winner={winner}
        />
      </div>
      <div className="row second">
        <Cell
          updateCell={updateCell}
          index={3}
          playerValue={state[3]}
          winner={winner}
        />
        <Cell
          updateCell={updateCell}
          index={4}
          playerValue={state[4]}
          winner={winner}
        />
        <Cell
          updateCell={updateCell}
          index={5}
          playerValue={state[5]}
          winner={winner}
        />
      </div>
      <div className="row third">
        <Cell
          updateCell={updateCell}
          index={6}
          playerValue={state[6]}
          winner={winner}
        />
        <Cell
          updateCell={updateCell}
          index={7}
          playerValue={state[7]}
          winner={winner}
        />
        <Cell
          updateCell={updateCell}
          index={8}
          playerValue={state[8]}
          winner={winner}
        />
      </div>
    </div>
  );
}
