import React from 'react'

const CreateCategory = () => {
  const [category_name, setName] = React.useState('');
  const AddCategory = async () => {
    let result = await fetch('http://sbfasto.com:5000/api/admin/category/create', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'
      },
      method: "post",
      body: JSON.stringify({ category_name })
    });
    result = await result.json();
    console.warn(result);
  }
  return (
    <>
      <div className='bg-white shadow-lg max-w-[1100px] my-5 mx-auto p-5'>
        <div className='flex justify-between my-3'>
          <h1 className='text-3xl font-bold m-4'>Create Category</h1>
        </div>
        <div>

          <form className='p-3'>
            <div>
              <label>Category Name<span className='text-red-600 font-bold'>*</span></label>
              <input className='border border-gray-400 outline-none w-full p-2 my-3' value={category_name} placeholder='Title' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='flex justify-end my-3'>
              <button onClick={AddCategory} className='text-white bg-black px-4 py-2 font-semibold rounded-lg'>Create</button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default CreateCategory