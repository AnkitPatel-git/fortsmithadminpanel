import React from 'react'

const FormTitle = () => {
  return (
  <>


      <div className='bg-white shadow-lg max-w-[1100px] my-5 mx-auto p-5'>

       <div className='my-3 flex justify-end'>
       <button className='text-white bg-blue-600 px-4 py-2 font-semibold rounded-lg'>Back</button>
       </div> 

       <div className='my-3'>
       <div>
            <label> Title<span className='text-red-600 font-bold'>*</span></label>
                <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder=' Eter Title'></input>
            </div>
            <button className='text-white bg-yellow-600 px-4 py-2 font-semibold rounded-lg my-3'>Save</button>
       </div>
</div>
  </>
  )
}

export default FormTitle