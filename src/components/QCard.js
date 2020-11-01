import React, { useState, useEffect } from "react";
import QInput from "./QInput";
import { shuffle } from "../functions";

const QCard = ({ data, handleSelect, qNum, rightAns, isAnswered }) => {
  // destructuring props (an object)
  const [allOptions, setAllOptions] = useState([]);

  useEffect(() => {
    const options = [...data.incorrect, data.correct];
    const shuffledOptions = shuffle(options);
    setAllOptions(shuffledOptions);
  }, [data]);

  return (
    <div >
      <h2 id="qNum">Question {qNum}</h2>
      <h3>{data.question}</h3>
      <QInput allOptions={allOptions} handleSelect={handleSelect} isAnswered={isAnswered} rightAns={rightAns}/>
    </div>
  );
};

export default QCard;
