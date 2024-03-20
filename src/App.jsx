import "./App.css";
//import { SaveHistory as Shahul } from './components/useparams';
// css using external, module, inline
// props
import Header from "./components/Header";
import Footer from "./components/Footer";
import Foot from "./components/Foot";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import Students from "./components/Students";

// Hooks + custom Hooks
import Hooks from "./components/Hooks";

// Part-2
import Part2 from "./components/Part2";

// passerprops
import PropFromParent from "./components/props";
import ColorPicker from "./components/ColorPicker";
import State from "./components/State";
import TodoList from "./components/TodoList";

const vegies = [
  { id: 1, name: "brinjal" },
  { id: 2, name: "carrot" },
  { id: 3, name: "peas" },
  { id: 4, name: "cauliflower" },
  { id: 5, name: "ginger" },
];

const nuts = [
  { id: 6, name: "pista" },
  { id: 7, name: "crumbles" },
  { id: 8, name: "almond" },
  { id: '9', name: "peanut" },
  { id: 10, name: "cashew" },
];

function App() {
  return (
    <>
      <Header />
      <Foot />
      <Card />
      <Card />
      <Button />
      <Students name="mani" age={90} isStudent={true} />{" "}
      {/** Remember if string u can pass directly if number, bool use {} OK */}
      <Students age={90} isStudent={false} />{" "}
      {/** Default props triggered coz name not present  */}
      {/*Yea to Hooks hay Beta */}
      <Hooks />
      <Part2/>
      {vegies.length > 0 && <PropFromParent items={vegies} category={"Green"} />}
      {nuts.length > 0 ?<PropFromParent items={nuts} category={"Deserts + Rich Nuts"} /> : null}
      {/* <Footer/> */}
      <br />
      <ColorPicker/>
      <br />
      <State/>
      <br />
      <TodoList/>
    </>
  );
}

export default App;
