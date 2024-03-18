//import React from 'react'
import { useState } from "react";
import styles from "./Button.module.css";

const Button = () => {
// on change() hooks
const [name, setName] = useState('Guest')
const [comment, setComment] = useState('')
const [payment, setPayment] = useState('')

// fun() 
const handleChange = (e)=>{
  setName(e.target.value)
}

const handleCommentchange = (e)=>{
  setComment(e.target.value)
}

const handlePayment =(e)=>{
  setPayment(e.target.value)
}

  let count = 0;

  const clicker = () => {
    if (count < 3) {
      count++;
      console.log(`bro u clicked me ${count} times`);
    } else {
      console.log(`bro stop clicking me plz`);
    }
  };
  const clckerCallback = (name) =>
    console.log(`${name} bro what the heck plz stop clicking me...`);
  const names = "PulithiMuthu";

  // event parameter 

  const eButton = (e) => {
    if (e.target.textContent === "Pulithi-Muthu") {
      e.target.textContent = "Original Text"; // Replace "Original Text" with the initial text you want
    } else {
      e.target.textContent = "Pulithi-Muthu";
    }
    
    console.log(e);
  };
  

  // inline css styling

  const styleInline = {
    backgroundColor: "hsl(209, 91%, 9%)",
    color: "azure",
    padding: "20px 10px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div>
      <button onClick={clicker} className={styles.Btn}>
        CLICK ME MFS
      </button>
      <button onClick={() => clckerCallback(names)} style={styleInline}>
        CLICK ME3- MFS
      </button>
      &nbsp; &nbsp;
      <button onClick={(e)=>eButton(e)} className={styles.Btn}>Event</button>
      <div>
         <input value={name} onChange={handleChange}/>
         <h5><b>One way Binding React:</b>{name}</h5>
         <br />
         <textarea value={comment} onChange={handleCommentchange} placeholder="Enter Your cmts here Nigga! "/>
         <div><h4>You wrote:</h4>{comment}</div>
         <br />
         <select value={payment} onChange={handlePayment}>
          <option value="Visa">Visa</option>
          <option value="Rupay">Rupay</option>
          <option value="Swiss">Swiss</option>
         </select>
         <p>Payment: {payment}</p>
      </div>
    </div>
  );
};

export default Button;















// use reducer() approach 
/**import React, { useReducer } from "react";
import styles from "./Button.module.css";

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_COMMENT":
      return { ...state, comment: action.payload };
    case "CHANGE_PAYMENT":
      return { ...state, payment: action.payload };
    default:
      return state;
  }
};

const Button = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    name: "Guest",
    comment: "",
    payment: "Visa",
  });

  // Destructure state variables
  const { name, comment, payment } = state;

  // Define action creators
  const changeName = (value) =>
    dispatch({ type: "CHANGE_NAME", payload: value });
  const changeComment = (value) =>
    dispatch({ type: "CHANGE_COMMENT", payload: value });
  const changePayment = (value) =>
    dispatch({ type: "CHANGE_PAYMENT", payload: value });

  let count = 0;

  const clicker = () => {
    if (count < 3) {
      count++;
      console.log(`bro u clicked me ${count} times`);
    } else {
      console.log(`bro stop clicking me plz`);
    }
  };

  const clckerCallback = (name) =>
    console.log(`${name} bro what the heck plz stop clicking me...`);

  const names = "PulithiMuthu";

  const eButton = (e) => {
    if (e.target.textContent === "Pulithi-Muthu") {
      e.target.textContent = "Original Text"; // Replace "Original Text" with the initial text you want
    } else {
      e.target.textContent = "Pulithi-Muthu";
    }
    console.log(e);
  };

  const styleInline = {
    backgroundColor: "hsl(209, 91%, 9%)",
    color: "azure",
    padding: "20px 10px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      <button onClick={clicker} className={styles.Btn}>
        CLICK ME MFS
      </button>
      <button onClick={() => clckerCallback(names)} style={styleInline}>
        CLICK ME3- MFS
      </button>
      &nbsp; &nbsp;
      <button onClick={(e) => eButton(e)} className={styles.Btn}>
        Event
      </button>
      <div>
        <input
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
        <h5>
          <b>One way Binding React:</b>
          {name}
        </h5>
        <br />
        <textarea
          value={comment}
          onChange={(e) => changeComment(e.target.value)}
          placeholder="Enter Your cmts here Nigga! "
        />
        <div>
          <h4>You wrote:</h4>
          {comment}
        </div>
        <br />
        <select value={payment} onChange={(e) => changePayment(e.target.value)}>
          <option value="Visa">Visa</option>
          <option value="Rupay">Rupay</option>
          <option value="Swiss">Swiss</option>
        </select>
        <p>Payment: {payment}</p>
      </div>
    </div>
  );
};

export default Button;
 */
