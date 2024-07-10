import { useCallback, useState ,useEffect,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const[charAllowed , setcharAllowed] = useState(false);
  const[Password , setPassword] = useState("");
  //useref hook 
  const passwordref = useRef(null)

  const Password_Generator = useCallback(()=> {
    let pass = ""
    let str =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*(){}[]?/<>,.~"
    
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(Password)
  },[Password])
useEffect(()=>{

  Password_Generator()

},[length,numberAllowed,charAllowed,Password_Generator])

  return (
    <>
   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-8 text-orange-500 bg-gray-600'>
    <h1 className="text-white text-center my-3">
      Password_Generator!
    </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type= "text" value={Password} className='outline-none w-full py-1  px-3'
        placeholder='password'
        readOnly
        ref={passwordref}
         />
  <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input
     type='range' 
     min={6}
     max={100}
     value={length}
     className='cursor-pointer'
     onChange={(e) => {setlength(e.target.value)}}
    />
    <label>Length:{length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type='checkbox'
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={()=>{setnumberAllowed((prev) => !prev)

    }}
    /> 
    <label htmlFor='numberInput'>Numbers</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input 
    type='checkbox'
    defaultChecked={charAllowed}
    id='characterInput'
    onChange={()=>{setcharAllowed((prev) => !prev)

    }}
    /> 
    <label htmlFor='characterInput'>Character</label>
  </div>
</div>
    </div>
    </>
  )
}

export default App
