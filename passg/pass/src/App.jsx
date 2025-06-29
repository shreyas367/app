import { useCallback, useEffect,useRef,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
const [numall, setnumall] = useState(false)
const [charall, setcharall] = useState(false)
const [password, setpassword] = useState("")


//ref hook
const passwordRef = useRef(null);

const copypassword = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
      if (passwordRef.current) {
        passwordRef.current.select();
      }
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
 
  }

, [password]);



const passgenerator = useCallback(()=>{
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numall) {
    chars += "0123456789"
  }
  if(charall) {
    chars += "!@#$%&_+;:?/"
  }
  
  let generatedPassword = ""

  for(let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length+1)
    generatedPassword += chars[randomIndex]
  }
  
  setpassword(generatedPassword)
}
,[length,numall,charall,setpassword]  
)


useEffect(() => {passgenerator()}, [length, numall, charall, passgenerator]);


  return (
    <>
    
<div className='w-full max-w-md mx-auto p-4 bg-grey-800 rounded-lg shadow-md
text-orange-500 px-4 py-3 my-8  text-center '>
 <h1 className='text-green text-centre'> Password Generator</h1>

<div>
  <input type="text"
  value={password}
  placeholder='Password'
  readOnly
  bg-color='white-700'
  className=' w-full py-1 px-3' 
  ref={passwordRef}

  />

  <button 
  onClick={copypassword}
  className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>
  Copy
</button>

</div>




<div>
  
<input type="range"
min={8}
max={50}
value={length}
className='cursor-pointer'
onChange={(e) =>{
  setlength(e.target.value)
}} />

<label > Length :{length}</label>

</div>

<div className='flex flex-col gap-2 mt-4'>
  <label className='flex items-center'>
    <input type="checkbox"
    checked={numall}
    onChange={(e) => {
      setnumall(prev => !prev);
    }}
    />
    Include Numbers
  </label>

  <label className='flex items-center'>
    <input type="checkbox"
    checked={charall}
    onChange={(e) => {
      setcharall(e.target.checked)
    }}
    />
    Include Special Characters
  </label>
</div>





</div>
   
    </>
  )
}

export default App
