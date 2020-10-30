import "./App.css";
import GameBoard from "./components/GameBoard";
import React, { useState } from "react";
import Data from "./data.json";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [questions, setQuestions] = useState([]);

  const shuffle = () => {
    for (var i = Data.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = Data[i];
      Data[i] = Data[j];
      Data[j] = temp;
    }
  };

  const funcStart = (e) => {
    e.preventDefault();
    setStartGame(true);
    shuffle();
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
