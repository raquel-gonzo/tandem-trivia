import "./App.css";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
import Data from './data.json';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [questions, setQuestions] = useState([]);

  const funcStart = (e) => {
    e.preventDefault();
    setStartGame(true);
    setQuestions(Data);
  };

  return (
    <div className="App">
      <h1>Tandem Trivia</h1>

      {startGame ? (
        <GameBoard questions={questions} />
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
