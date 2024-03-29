import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
  useLayoutEffect,
  useDebugValue,
} from "react";

// json obj depth
function logObject(obj) {
  console.log(JSON.stringify(obj, null, 2));
}


function MyComponent() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    alert("The hooke component has re-rendered");
    //document.title = `Kowsi`
    //return ()=>{alert ("Bye bye Hooke component")}                  // also u can call the efect the when the component is destroyed
  }, []); // val in []

  // Custom double-click handler
  //   const handleDoubleClick = () => {
  //     setVal(val - 1);
  //   };

  const Uref = useRef(null);
   //console.log(logObject(Uref));

  // use Contextprovider Hook beta

  const Moods = {
    Happy: "😊",
    Sad: "😢",
    Angry: "😡",
  };

  const MoodContext = createContext(Moods);

  // user reducer from the redux family

  const [state1, dispatch] = useReducer(reducer, 5);
  // function for use reducer beta

  function reducer(state1, action) {
    switch (action.type) {
      case "increment":
        return state1 + 1;
      case "decrement":
        return state1 - 1;
      default:
        throw new Error();
    }
  }

  // useMemo() beta  USE WITH CAUTION! use only for expensive calculations ok

  const expensiveCalculate = useMemo(() => {
    return val ** 2;
  }, [val]);

  // useCallback()

  const [count, setCount] = useState(0);

  const countHandler = useCallback(() => {
    setCount((prevCount) => prevCount + 5);
  }, []); // Empty dependency array because we're not using any external variables inside the callback

  // use layout effect() beta
  const myBtn = useRef(null);
  useLayoutEffect(() => {
    const rect = myBtn.current.getBoundingClientRect();
    console.log(`height from useRef`,rect.height);
    console.log(`width from useRef`,rect.width);
  }, []); // similiar to useeffect() hook but // caution blocks visual updates until ur callback is finished.

  return (
    <div>
      {val}
      <button onClick={() => setVal(val + 1)}>
        {" "}
        {/**  onDoubleClick={handleDoubleClick}*/}
        UseStateHook
      </button>

      <button
        onClick={() => {
          Uref.current + 1;
        }}
      >
        Click me REF
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        dispatch ++
      </button>
      <span>{state1}</span>
      {/* <span>{expensiveCalculate}This is Momoized</span> */}
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        dispatch --
      </button>
      <MoodContext.Provider value={Moods.Happy}>
        <MoodEmoji />
      </MoodContext.Provider>
      <button onClick={countHandler}>useCallback()</button>
      <button ref={myBtn}>Your Button</button>
      <span>{count}</span>
    </div>
  );

  function MoodEmoji() {
    const mood = useContext(MoodContext);
    return <p>{mood}</p>;
  }
}

export default MyComponent;

// import { useDebugValue } from 'react';

// function useCustomHook(value) {
//   // Some logic here
//   useDebugValue(value, (value) => {
//     return `Custom Value: ${value}`;
//   });

//   // Rest of the custom hook logic
// }
