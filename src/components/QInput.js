import React from "react";

const QInput = ({ incorrect, correct, handleSelect }) => {
  return (
    <div className="form-group">
      {incorrect.map((option, i) => {
        return (
          <div key={i}>
            <input id={option} value={option} onClick={handleSelect} className="form-check-input" name="option" type="radio" />
            <label htmlFor={option} className="form-check-label">{option}</label>
          </div>
        );
      })}
      <div>
        <input id={correct} value={correct} onClick={handleSelect} className="form-check-input" name="option" type="radio" />
        <label htmlFor={correct} className="form-check-label">{correct}</label>
      </div>
    </div>
  );
};

export default QInput;
