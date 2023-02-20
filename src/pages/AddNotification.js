import React from 'react'

const AddNotification = () => {
  return (
  <>
     <div className='bg-white shadow-lg max-w-[900px] my-8 mx-auto p-5'>
    <h1 className='text-4xl font-bold m-4'>Create Notification</h1>
   
  

    <div>
        <form className='p-3'>

        <div className='my-3'>
<label htmlFor="cars" className=''>Send Type<span className='text-red-600 font-bold'>*</span></label>
<select className='w-full border border-gray-400 outline-none  mb-3 p-2'>
  <option value="volvo">Select category</option>
  <option value="saab">Paypal</option>
  <option value="opel">Venmo</option>
  <option value="opel">Case App</option>
</select>
</div>

            <div>
            <label>Title<span className='text-red-600 font-bold'>*</span></label>
                <input type='text' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Title'></input>
            </div>

          

            <div>
            <label> Description ( Limit 250 Character)<span className='text-red-600 font-bold'>*</span></label>
                <textarea type='' rows='4' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Description'></textarea>
            </div>


            
            <div>
            <label>Banner(200*200)<span className='text-red-600 font-bold'>*</span></label>
                <input type='file' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=''></input>
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

export default AddNotification