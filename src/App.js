import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number , setNumber] = useState(0)
  const [isActive , setIsActive] = useState(false)

  useEffect(()=>{
      console.log(number)
      console.log(isActive)
  },[number])

  const changeNumberHandler =  ()=>{
      //  setNumber(number + 1)
      // console.log(number)
  }

  const changeThemeHandler = ()=>{
    if(number>= 2) {
       setIsActive(true)
      // console.log(isActive)
    }

  }


  return (
    <div className="App">

      <button onClick={changeNumberHandler}>ChangeNaumber</button>
      <button onClick={changeThemeHandler}>ChangeTheme</button>

 
    </div>
  );
}

export default App;
