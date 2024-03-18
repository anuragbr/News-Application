
import Navbar from './component/Navbar'
import Newsboard from './component/Newsboard'
import {useState} from 'react'
import './App.css'

function App() {
  const[category,setCategory]=useState("general")

  return (
   
<div>
<Navbar setCategory={setCategory}/>
<Newsboard category={category}/>

</div>
  )
       
}

export default App
