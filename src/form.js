import React, { useState } from "react";
import "./form.css";

function Form({ onSubmit }) {
  const [cardName, setCardName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);

  const formatNumber = (e) => {
    const formatValue = e
      .replace(/[^0-9]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);

    setNumber(formatValue);
  };
  const handleChange = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setCardName(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const containsNumber = /\d/.test(cardName);

    

  if (cardName.length === 0 || containsNumber) {
    setError(true);
    return; 
  }
  if (cvc.length<3){
    setError(true);
    return; 
  }
  
  

    const formData = {
      cardName,
      number,
      month,
      year,
      cvc,
    };

    setCardName("");
    setNumber("");
    setYear("");
    setMonth("");
    setCvc("");

    onSubmit(formData);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div>
        <label id="label">CARDHOLDER NAME</label>
        <div>
          <input
            className="input-name-number"
            placeholder="e.g.Soumya raj"
            type="text"
            required
            value={cardName}
            onChange={handleChange}
          />
          <div>
          {error? <label id="not-valid">input is required!</label>:""}
          </div>
        </div>
      </div>
      <div>
        <label id="label">CARD NUMBER</label>
        <div>
          <input
            className="input-name-number"
            placeholder="e.g.1234 5678 9178 0000"
            required
            value={number}
            onChange={(e) => formatNumber(e.target.value)}
          />
        </div>
       {error? <label id="not-valid">input is required!</label>:""}
      </div>
      <div className="exp-cvc">
        <div>
          <label id="label">EXP.DATE(MM/YY)</label>
          <div className="month-year">
            <div>
              <input
                className="mon"
                placeholder="MM"
                value={month}
                type="text"
                maxLength={2}
                pattern="(^0[1-9]|1[0-2])$"
                required
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
            <div>
              <input
                className="exp"
                placeholder="YY"
                value={year}
                type="text"
                maxLength={2}
                required
                pattern="^(?:[23-4]\d|50)$"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
         
        </div>
        <div>
          <label id="label">CVC</label>
          <div>
            <input
              className="cvc"
              placeholder="e.g.123"
              value={cvc}
              required
              maxLength={3}
              pattern="^[0-9]{3}$"
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
          {error?<label id="not-valid">This cvc is not valid !</label>:""}
        </div>
      </div>
      <button className="button">Confirm</button>
    </form>
  );
}
export default Form;
