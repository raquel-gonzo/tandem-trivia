import "./App.css";
import GameBoard from "./components/GameBoard";
import React, { useState, useEffect } from "react";

function App() {
  const [startGame, setStartGame] = useState(false);

  const funcStart = (e) => {
    e.preventDefault();
    setStartGame(true);
  };

  return (
    <div className="App">
      <h1>Tandem Trivia</h1>

      {startGame ? (
        <GameBoard />
      ) : (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={funcStart}
        >
          Start Playing
        </button>
      )}
    </div>
  );
}

export default App;
