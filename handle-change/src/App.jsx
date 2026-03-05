import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('Guest');
const[quantity,setQuantity]=useState(1);

const[comment,setComment]=useState('');

function HandleNameChange(e) {
  setName(e.target.value)}

  
function HandleQuantityChange(e) {
  setQuantity(e.target.value)
}


  return (
  <>
  <input type="text" value={name} onChange={HandleNameChange}/>
  <p>{name}</p>
  <input type="number" value={quantity} onChange={HandleQuantityChange}/>
  <p>{quantity}</p>
  <textarea value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
  <p>{comment}</p>
  </>
  )
}

export default App;
