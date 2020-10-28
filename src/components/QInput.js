import React from "react";

const QInput = () => {
  return (
    <div className="form-group">
      <div>
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">option1</label>
      </div>
      <div>
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">option2</label>
      </div>

      <div>
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">option3</label>
      </div>

      <div>
        <input className="form-check-input" type="radio" />
        <label className="form-check-label">option4</label>
      </div>
    </div>
  );
};

export default QInput;
