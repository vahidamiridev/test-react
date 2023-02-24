import { useState } from "react"
import Wrapper from "../../HOC/Wrapper"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default ()=>{
  const [name , setName] = useState('')
  const [password , setPassword] = useState('')
  const [isReady , setIsReady] = useState(false)

  const navigate = useNavigate()






        const sendHandler = async (e)=>{
          e.preventDefault()
          if(
            !isReady|| 
             (!name || name.length<=3)||
             (!password || password.length<=3)
             ){
              console.log(1)
              return}
              console.log(2)
          const info = {
            name,
            password
          }

         try {
          const res = await axios.post('https://jsonplaceholder.typicode.com/posts' , info )
              console.log(res.status)
          
         } catch (error) {

          navigate('/')
          console.log('erere')
          
         }
        }


    return (
        <Wrapper>
            <div className='bg-gray-100 w-full h-full flex justify-center items-center'  >
      <form className='flex flex-col justify-center items-start gap-2 bg-oragnge-200 w-[auto] p-3'>
        <label htmlFor='username' > username</label>
        <input 
        
        onChange={(e)=>setName(e.target.value)}
        type='text'
         id='username'
         />
        <label htmlFor='password'> password</label>
        <input
   
        onChange={(e)=>setPassword(e.target.value)}
         type='password'
          id='password'
          />
        <div className='flex gap-5'>
        <label htmlFor='ready'>Are you ready?</label>
        <input

        onChange={(e)=>setIsReady(e.target.checked)}
         type='checkbox'
          id='ready' 
          />
        </div>

       
        <button  
        onClick={(e)=>sendHandler(e)} 
        className='bg-green-500 text-white p-1 border radios-5 w-full'
        >Register</button>
      </form>
    </div>

        </Wrapper>
    )
}