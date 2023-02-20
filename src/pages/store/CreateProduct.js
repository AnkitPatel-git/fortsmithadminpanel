import React from 'react'
import { NavLink } from 'react-router-dom';

const CreateProduct = () => {
  return (
    <>
      <div className='bg-white shadow-lg max-w-[1100px] my-5 mx-auto p-5'>
        <div className='flex justify-between my-3'>
          <h1 className='text-3xl font-bold m-4'>Create Product</h1>

          <NavLink to="/Dashboard"> <button className='text-white px-5 py-2 font-semibold rounded-lg' style={{ backgroundColor: "#03c9d7" }}>+ New Category</button></NavLink>
        </div>
        <div>

          <form className='p-3'>
            <div>
              <label>Product Title<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Title'></input>
            </div>

            <div className='my-3'>
              <label htmlFor="cars" className=''>Product Category<span className='text-red-600 font-bold'>*</span></label>
              <select className='w-full border border-gray-400 outline-none  mb-3 p-2'>
                <option value="volvo">Select category</option>
                <option value="saab">Paypal</option>
                <option value="opel">Venmo</option>
                <option value="opel">Case App</option>
              </select>
            </div>



            <div className='my-3'>
              <label htmlFor="cars" className=''>Product Brand<span className='text-red-600 font-bold'>*</span></label>
              <select className='w-full border border-gray-400 outline-none  mb-3 p-2'>
                <option value="volvo">Select Brand</option>
                <option value="saab">Paypal</option>
                <option value="opel">Venmo</option>
                <option value="opel">Case App</option>
              </select>
            </div>


            <label>Product Tags<span className='text-red-600 font-bold'>*</span></label>
            <div className='border border-gray-300 pb-10 px-1 my-2'>
              <input className='border boeder-gray-500 mt-2 outline-none p-2' placeholder='Enter tags'></input>
            </div>

            <div className='my-3'>
              <label>Product Amount<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Amount'></input>
            </div>


            <div>
              <label>Product Units<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Unit(Ex.kg,pc,etc)'></input>
            </div>


            <div>
              <label>Product Description ( Limit 250 Character)<span className='text-red-600 font-bold'>*</span></label>
              <textarea type='' rows='4' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Description'></textarea>
            </div>


            <div className='flex justify-end my-3'>
              <button className='text-white bg-black px-4 py-2 font-semibold rounded-lg'>Next</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default CreateProduct