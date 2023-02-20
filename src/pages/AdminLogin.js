import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    // const navigate=useNavigate()

    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')


    const loginHandler=(e)=>{
        e.preventDefault();
        console.log(email ,password)

    }


  return (
 <>
      {/* contact section */}
<div className='px-3 pb-5 pt-20 h-screen' style={{backgroundColor:'#F2F3F8'}}>

<div className='md:flex justify-center gap-4'>

<div className='sm:mt-28 bg-white   px-4 pt-3 pb-5 rounded-lg shadow-lg  border-red-600 border-t-4 border-spacing-4'>
<div className='flex justify-center'>
  <img src='./image/logo.webp' alt='FortSmith' className='w-28 md:w-36'></img>
</div>

{/* form section */}
<form className=''>
<h1 className='text-center text-2xl md:text-3xl font-semibold mb-1 mt-2' style={{color:'#156eb2',fontWeight:'700' ,fontFamily:'revert-layer'}}>Welcome to FortSmith</h1>
<h3 className='text-center mb-5'>Login to Your account</h3>
<input className='px-3 py-2.5 focus:outline-blue-500  border rounded-sm w-full mb-3 bg-gray-50' placeholder='Email'   value={email}
    onChange={(e)=>setEmail(e.target.value)}></input>
  <input className='px-3 py-2.5 focus:outline-blue-500 rounded-sm w-full mb-3 bg-gray-50 border' placeholder='Password'   value={password}
    onChange={(e)=>setPassword(e.target.value)}></input>


<div className='text-center '>
<button className='mt-2 font-semibold   py-3 rounded-full px-[70px]' onClick={loginHandler} style={{  backgroundImage: "linear-gradient(#1EC5FA,#54c6be)",}}>LOGIN</button>
</div>
<p className='cursor-pointer text-center mt-1'>Forgot Password</p>
</form>
</div>


</div>
</div> 
 </>
  )
}

export default AdminLogin