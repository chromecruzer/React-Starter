import React, { useState } from "react";
import _ from "lodash";

// chatting
const State = () => {
    const [val, setVal] = useState([
      "SunnyLeone",
      "MiaKhalifa",
      "DaniDaniels",
      "ChristinaCarter",
    ]);
  
    const handleAdd = () => {
      const newItem = document.getElementById("ItemInput").value;
      document.getElementById("ItemInput").value = "";
      setVal((prevVal) => [...prevVal, newItem]);
    };
  
    const cancelAdd = (item) => {
      setVal((prevVal) => _.filter(prevVal, (c) => c !== item));
    };
    
    const lodMap = _.map(val, (c, index) => <li key={index} onClick={()=>cancelAdd(c)}>{c}</li>);
  
    return (
      <>
        <div>
          <h1>List of Items</h1>
          <ul>{lodMap}</ul>
          <br />
          <input type="text" id="ItemInput" placeholder="Enter Your choice"  />
          <button onClick={handleAdd}>Add</button>
          <button onClick={() => cancelAdd(document.getElementById("ItemInput").value)}>Cancel</button>
        </div>
      </>
    );
  };

  export default State;
  