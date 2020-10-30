import React from "react";

const QInput = ({ allOptions, handleSelect }) => {
  return (
    <div className="form-check">
      {allOptions.map((option, i) => {
        return (
          <div key={i}>
            <input
              id={option}
              value={option}
              onClick={handleSelect}
              className="form-check-input"
              name="option"
              type="radio"
            />
            <label htmlFor={option} className="form-check-label">
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default QInput;
