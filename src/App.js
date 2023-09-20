import './App.css';
import Form from './form';
import React, { useState } from "react";



function App() {
  const [cardName, setCardName] = useState("Soumya Raj");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [year, setYear] = useState("55");
  const [month, setMonth] = useState("44");
  const [cvc, setCvc] = useState("000");
  const handleFormSubmit = (formData) => {
    setCardName(formData.cardName);
    setNumber(formData.number);
    setYear(formData.year);
    setMonth(formData.month);
    setCvc(formData.cvc);
    
    
  };
  
  return (
    <>
    <div className='svg-colors'>
      <div className='credit-card'>
        <div className='contents'>
          <div className='image'></div>
        </div>
        <div className='contents-2'>
          <p id='a1'>{number}</p>
          <div className='name-expiry'>
            <p>{cardName}</p>
            <p>{month}/{year}</p>
            
          </div>
        </div>
      </div>
      <div className="back-card">
        <div className='cvcs'>
          <p>{cvc}</p>
        </div>
      </div>
    </div>
    <div className='card-detalis'>
      <div className='form-detalis'>
        <Form onSubmit={handleFormSubmit}/>
      </div>
    </div>
  </>
  )
}


export default App;
