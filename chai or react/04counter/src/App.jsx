import {useState} from "react";
import './App.css'
import Hello from "./components/Hello";
import CounterValue from './components/CounterValue';
import Button from "./components/Button";

function App() {

  let [count, setCount] = useState(1)

  const addValue = (() => {
    //ount = count + 1;
    setCount(count + 1)
  })


  const removeValue = (() => {
    setCount(count-1);
  })

  return (<>

  <Hello></Hello>
  <CounterValue value={count}></CounterValue>
  <Button value={count} btnText="Add Value" onClick={addValue}></Button>
  <br></br>
  <Button value={count} btnText="Remove Value" onClick={removeValue}></Button>
     
    </>)
}

export default App;