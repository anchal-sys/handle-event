import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('Guest');
const[quantity,setQuantity]=useState(1);

const[comment,setComment]=useState('');
const[paymentMethod,setPaymentMethod]=useState('');
const [handleShipping,setShipping]=useState('');
function HandleNameChange(e) {
  setName(e.target.value)}

  
function HandleQuantityChange(e) {
  setQuantity(e.target.value)
}
function handlePaymentMethodChange(e) {
  setPaymentMethod(e.target.value)
}
function handleShippingChange(e) {
  setShipping(e.target.value)
}
  return (
  <>
  <input type="text" value={name} onChange={HandleNameChange}/>
  <p>{name}</p>
  <input type="number" value={quantity} onChange={HandleQuantityChange}/>
  <p>{quantity}</p>
  <textarea value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
  <p>{comment}</p>
  <select value={paymentMethod} onChange={handlePaymentMethodChange}>
    <option value="h">Select Payment Method</option>
    <option value="creditCard">Credit Card</option>
    <option value="paypal">PayPal</option>
    <option value="bankTransfer">Bank Transfer</option>
  </select>
  <p>{paymentMethod}</p>
  <label >
<input type="radio" value="pickup" checked={handleShipping==="pickup"} onChange={handleShippingChange}/>
    pickup
    
  </label>
  <br />
  <label>
    <input type="radio" value="delivery" checked={handleShipping==="delivery"} onChange={handleShippingChange}/>
    delivery
  </label>
  <p>shipping: {handleShipping}</p>
  </>
  )
}

export default App;
