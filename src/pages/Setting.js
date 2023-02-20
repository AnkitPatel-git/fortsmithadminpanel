import React, { useEffect, useState } from 'react'


const Setting = () => {
    const [Profile, setProfile ]= useState([]);
    useEffect(()=>{
        getUsers();
    },[]);
    const getUsers =async ()=>{
        let result =await fetch('http://sbfasto.com:5000/api/adminauth/getprofile',{headers: {
          'Content-Type': 'application/json',
          'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'
         
        }});
      result = await result.json();
      setProfile(result.data);
      }
  return (
  <>
    <div className='bg-white shadow-lg max-w-[900px] my-8 mx-auto p-5'>
    <h1 className='text-xl font-bold m-4 border max-w-[200px] py-3 text-center'>My Profile</h1>
  

    <div>
        <form className='p-3'>
            <div>
            <label>Name<span className='text-red-600 font-bold'>*</span></label>
                <input type='text' className='border border-gray-400 outline-none w-full p-2 my-3' value={ Profile.name} placeholder='SuperAdmin'></input>
            </div>

            <div className='my-3'>
            <label>Email<span className='text-red-600 font-bold'>*</span></label>
                <input type='email' className='border border-gray-400 outline-none w-full p-2 my-3' value={ Profile.email}  placeholder='Enter Email'></input>
            </div>


            <div>
            <label>Number<span className='text-red-600 font-bold'>*</span></label>
                <input type='number' className='border border-gray-400 outline-none w-full p-2 my-3' value={ Profile.phone}  placeholder=''></input>
            </div>

            <div>
            <label>New Password<span className='text-red-600 font-bold'>*</span></label>
                <input type='password' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=''></input>
            </div>



            <div>
            <label>Confirm Password<span className='text-red-600 font-bold'>*</span></label>
                <input type='password' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=''></input>
            </div>

            
            <div>
            <label>Change Photo<span className='text-red-600 font-bold'>*</span></label>
                <input type='file' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=''></input>
            </div>

<div className='flex justify-start my-3'>
    <button className='text-white  px-4 py-2 font-semibold rounded-lg' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>Update Profile</button>
</div>
        </form>

    </div>
  </div>
  </>
  )
}

export default Setting