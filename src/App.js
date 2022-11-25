import React, { useState } from "react";
import useInterval from "use-interval";
import './app.css'

function App() {
  const [data, setdata] = useState()
  const [time, setTime] = useState('')
  const [stop, setStop] = useState(true)
  const [state, setState] = useState('Start')
  function setTime (){
    
    while(true){

    }
  }

  function startStop (){
    if (stop){
      setStop(false)
      setState('Stop')
    } else{ 
      setStop(true)
      setState('Start')
    }
  }

  function reset (){
    setTime('00:00:00')
  }
  
  return (
    <div className="App">
      <h1 className="title">Секундомер</h1>
      <h2 className="time">{time}</h2>
      <div className="btns">
        <button onClick={startStop}>{state}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
