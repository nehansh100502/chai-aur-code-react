import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState(0)

  return (
    <>
    <div className='w-full h-screen duration-200 '
    style={{backgroundColor:color}}>

     <h2 className='justify-center text-white'>Background Changer</h2>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px=3 py-2 rounded-3xl'>
        <button onClick={()=> setcolor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=> setcolor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=> setcolor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'Blue'}}>Blue</button>
        <button onClick={()=> setcolor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>Orange</button>
        <button onClick={()=> setcolor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'Olive'}}>Olive</button>
        <button onClick={()=> setcolor('dodgerblue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'dodgerblue'}}>skyblue</button>
        <button onClick={()=> setcolor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'pink'}}>pink</button>
        <button onClick={()=> setcolor('grey')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'gray'}}>gray</button>
        <button onClick={()=> setcolor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}}>black</button>
        <button onClick={()=> setcolor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'purple'}}>purple</button>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
