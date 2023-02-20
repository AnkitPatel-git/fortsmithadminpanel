import React, { useEffect, useState } from 'react'

const CreateProduct = () => {
  const [product_name, setName] = React.useState('');
  const [categoryId, setCategory] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [productammount, setProductammount] = React.useState('');
  const [category, setCategoryname] = useState([]);
  useEffect(() => {
    getCategoryname();
  }, []);
  const getCategoryname = async () => {
    let result = await fetch('http://sbfasto.com:5000/api/admin/category/list', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'

      }
    });
    result = await result.json();
    setCategoryname(result.data);
  }
  const AddProduct = async () => {
    let result = await fetch('http://sbfasto.com:5000/api/admin/products/create', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'
      },
      method: "post",
      body: JSON.stringify({ product_name, categoryId, productammount, quantity })
    });
    result = await result.json();
    console.warn(result);
  }
  return (
    <>
      <div className='bg-white shadow-lg max-w-[1100px] my-5 mx-auto p-5'>
        <div className='flex justify-between my-3'>
          <h1 className='text-3xl font-bold m-4'>Create Product</h1>

        </div>
        <div>
          <form className='p-3'>
            <div>
              <label>Product Title<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Title' value={product_name} onChange={(e) => setName(e.target.value)} required></input>
            </div>
            <div className='my-3'>
              <label htmlFor="cars" className=''>Product Category<span className='text-red-600 font-bold'>*</span></label>
              <select className='w-full border border-gray-400 outline-none  mb-3 p-2' value={categoryId} placeholder='Title' onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select category</option>
                {category.map((user) => {
                  return (
                    <option value="{user._id}">{user.category_name}</option>
                  );
                })}
              </select>
            </div>

            <div className='my-3'>
              <label>Product Amount<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' pattern="[0-9]*" placeholder='Enter Amount' value={productammount} onChange={(e) => setProductammount(e.target.value)} required></input>
            </div>
            {/* 
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
            </div> */}

            <div className='my-3'>
              <label>Qantity<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Amount' value={quantity} onChange={(e) => setQuantity(e.target.value)} required></input>
            </div>


            {/* <div>
              <label>Product Units<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Unit(Ex.kg,pc,etc)'></input>
            </div> */}


            {/* <div>
              <label>Product Description ( Limit 250 Character)<span className='text-red-600 font-bold'>*</span></label>
              <textarea type='' rows='4' className='border border-gray-400 outline-none w-full p-2 my-3' placeholder='Enter Description'></textarea>
            </div> */}


            <div className='flex justify-end my-3'>
              <button onClick={AddProduct} className='text-white bg-black px-4 py-2 font-semibold rounded-lg'>Create</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default CreateProduct