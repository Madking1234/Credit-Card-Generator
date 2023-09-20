import React, { useState } from "react";
import './form.css';

function Form({onSubmit}){
  const [cardName, setCardName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error,setError] = useState(false)
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
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
    if(cardName.length==0){
      setError(true)
    }
  };
  
  
  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div>
        <label id='label'>CARDHOLDER NAME</label>
        <div>
          <input className='input-name-number' placeholder="e.g.Soumya raj" type="text" required value={cardName} onChange={(e) => setCardName (e.target.value)} />
          {error?
        <label id='not-valid'>This name is not valid !</label>:""}
        </div>
        
      </div>
      <div>
        <label id='label'>CARD NUMBER</label>
        <div>
          <input className='input-name-number' placeholder="e.g.1234 5678 9178 0000"  required  value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <label id='not-valid'>This number is not valid !</label>
      </div>
      <div className="exp-cvc">
      <div>
        <label id='label'>EXP.DATE(MM/YY)</label>
        <div className="month-year">
            <div>
          <input className='mon' placeholder="MM" value={month} type="text" maxLength={2} pattern="(^0[1-9]|1[0-2])$" onChange={(e) => setMonth(e.target.value)} />
          </div>
          <div>
          <input  className='exp' placeholder="YY" value={year} type="text" onChange={(e) => setYear(e.target.value)} />
          </div>
        </div>
        <label id='not-valid'>This year is not valid !</label>
      </div>
      <div>
        <label id='label'>CVC</label>
        <div>
          <input className='cvc' placeholder="e.g.123" value={cvc} onChange={(e) => setCvc(e.target.value)} />
        </div>
        <label id='not-valid'>This cvc is not valid !</label>
      </div>
      </div>
      <button className="button">Confirm</button>
    </form>
  );
}
export default Form;
