import './css/styles.css'
import React, { useEffect, useState } from 'react'

function Quote() {
    const [data, setData] = useState([]);
    const [quote, setQuote] = useState([]);

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then(res=>res.json())
        .then((respone)=>setData(respone));
    },[setData]);
     
    console.log(data);

    let gen = () => {
        let rno = Math.floor(Math.random() * 15);
        let eachq = [data[rno]]; 
        setQuote(eachq);
        return eachq;    
    }
    
  return (
      <div className='container'>
          <h2>Quote :</h2>
          {
            quote?.map((quote, index) => (
              <div className='quote' key={index}>
                <h3>{quote?.text}</h3>
              </div>
            ))   
          }
          <button onClick={gen}>generate</button>   
    </div>
  )
}

export default Quote
