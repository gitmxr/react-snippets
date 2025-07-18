import { useState } from 'react';

function App() {
let [counter, setCounter] = useState(0);

const AddValue = () => {
  if(counter < 20) {
   setCounter(counter +1);
  } else {
    alert("Counter cannot exceed 20");
  }
}
const RemoveValue = () => {
  if(counter > 0) {
   setCounter(counter-1);
  } else {
    alert("Counter cannot be less than 0");
  }
}
  return (
    <>
    <h1>This is a simple Counter App for undertanding Hooks concepts</h1>
    <br/>
    <h2>Counter Value: {counter}</h2>
    <button onClick={AddValue}>Add Value</button>
    <button onClick={RemoveValue} >Remove Value</button>
    </>
    
  );
}

export default App;
