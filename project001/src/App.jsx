import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

// let count = 0;
const Subval= () => {
  count = count - 1;
  setCount(count);

}
const Addval = () => {
  // count = count + 1;
  setCount(count+1);
  // setCount(count);
  }

  return (
    <>
      <h1>SHREYAS RANJAN</h1>
      <h2>COUNTER VALUE : {count}</h2>

      <button
      onClick={Addval}>add val {count}</button>
      <br />
      <button
      onClick={Subval}>subtr val {count}</button>

    </>
  )
}

export default App
