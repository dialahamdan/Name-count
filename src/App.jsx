import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter/Counter'

function App() {
  
let [count,setCount]=useState(0);
const changeCounter =()=>{
  setCount(count+1);
  
}
  return (
    <>
     <button className='btn' onClick={changeCounter}>Diala Hamdan{count}</button>
     </>
  )
}

export default App;

