import { useRef } from 'react';
import axios from 'axios';

export default ()=> {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const checkboxRef = useRef()

 const sendHandler = async(e)=>{
   e.preventDefault()

  if(!checkboxRef.current.checked )return

    const info = {
      userName : usernameRef.current.value,
      password: passwordRef.current.value,
    }
    const response =await axios.post('https://jsonplaceholder.typicode.com/posts' , info )

    console.log(response.status)

 }

  return (
    <div className='bg-gray-100 w-full h-full flex justify-center items-center'  >
      <form className='flex flex-col justify-center items-start gap-2 bg-oragnge-200 w-[auto] p-3'>
        <label htmlFor='username' > username</label>
        <input 
        ref={usernameRef}
        type='text'
         id='username'
         />
        <label htmlFor='password'> password</label>
        <input
        ref={passwordRef}
         type='password'
          id='password'
          />
        <div className='flex gap-5'>
        <label htmlFor='ready'>Are you ready?</label>
        <input
        ref={checkboxRef}
         type='checkbox'
          id='ready' 
          />
        </div>

       
        <button  
        onClick={(e)=>sendHandler(e)} 
        className='bg-green-500 text-white p-1 border radios-5 w-full'
        >login</button>
      </form>
    </div>
  );
}


