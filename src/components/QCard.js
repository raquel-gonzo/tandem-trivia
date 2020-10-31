import React, { useState, useEffect } from "react";
import QInput from "./QInput";

const QCard = ({ data, handleSelect, qNum }) => {
  // destructuring props (an object)
  const [allOptions, setAllOptions] = useState([]);

  useEffect(() => {
    const options = [...data.incorrect, data.correct];
    const shuffleAllOptions = () => {
      for (var i = options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = options[i];
        options[i] = options[j];
        options[j] = temp;
      }
      setAllOptions(options);
    };
    shuffleAllOptions();
  }, [data]);

  return (
    <div >
      <h2 id="qNum">Question {qNum}</h2>
      <h3>{data.question}</h3>
      <QInput allOptions={allOptions} handleSelect={handleSelect} />
    </div>
  );
};

export default QCard;
