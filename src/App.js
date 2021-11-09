import {useState} from 'react'; 
import './App.css';


function App() {
  const [data,setData]=useState("Rituraj")
  function getData(){
    if(data=="Rituraj")
    {
      setData("Borgohain");
    }
    else
    {
      setData("Rituraj");
    }
  }
  return (
    <div className="App">
        <h2>{data}</h2>
        <button onClick={getData}>Click Me</button>
    </div>
  );
}

export default App;
