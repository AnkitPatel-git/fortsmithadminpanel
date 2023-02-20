import React from 'react'

const AddSubAdmin = () => {
  return (
  <>
      <div className='bg-white shadow-lg max-w-[900px] my-8 mx-auto p-5'>
    <h1 className='text-4xl font-bold m-4'>Create Sub-Admin</h1>
   
  

    <div>
        <form className='p-3'>
            <div>
            <label>Name<span className='text-red-600 font-bold'>*</span></label>
                <input type='text' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='SuperAdmin'></input>
            </div>

            <div className='my-3'>
            <label>Email<span className='text-red-600 font-bold'>*</span></label>
                <input type='email' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Email'></input>
            </div>


            <div>
            <label>Mobile<span className='text-red-600 font-bold'>*</span></label>
                <input type='number' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=''></input>
            </div>

            <div>
            <label>New Password<span className='text-red-600 font-bold'>*</span></label>
                <input type='password' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=''></input>
            </div>


            <div className='my-3'>
<label htmlFor="cars" className=''>assign Roles<span className='text-red-600 font-bold'>*</span></label>
<select className='w-full border border-gray-400 outline-none  mb-3 p-2'>
  <option value="volvo">Select category</option>
  <option value="saab">Paypal</option>
  <option value="opel">Venmo</option>
  <option value="opel">Case App</option>
</select>
</div>

          

<div className='flex justify-start my-3'>
    <button className='text-white  px-4 py-2 font-semibold rounded-lg' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>Save</button>
</div>
        </form>

    </div>
  </div>
  </>
  )
}

export default AddSubAdmin