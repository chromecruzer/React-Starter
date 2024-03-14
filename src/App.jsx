import './App.css';
//import { SaveHistory as Shahul } from './components/useparams'; 
// css using external, module, inline
// props 
import Header from './components/Header';
import Footer from './components/Footer';
import Foot from './components/Foot';
import Card from './components/Card';
import Button from './components/Button/Button';
import Students from './components/Students';

// Hooks + custom Hooks
import Hooks from './components/Hooks';

// Part-2
import Part2 from './components/Part2';


function App() {
  

  return (
    <>
     <Header/>
     <Foot/>
     <Card/>
     <Card/>
     <Button/>
     <Students name="mani"age={90} isStudent={true}/>   {/** Remember if string u can pass directly if number, bool use {} OK */}
     <Students age={90} isStudent={false}/> {/** Default props triggered coz name not present  */}

     {/*Yea to Hooks hay Beta */}
     <Hooks/>

     <Part2/>
     {/* <Footer/> */}
    </>
  );
}

export default App;
