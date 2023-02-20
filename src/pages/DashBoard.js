import React from 'react'
// import FormTitle from './store/FormTitle'
import { AiFillAlert,AiFillTag } from 'react-icons/ai'
import { HiUserGroup } from "react-icons/hi";
import { BiDollar } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import CreateProduct from './store/CreateProduct';
// import FormTitle from './store/FormTitle';
const DashBoard = () => {
  return (
   <>
   {/* <FormTitle/> */}
   {/* <CreateProduct/> */}
   <div className='mt-5 p-2'>
<h1 className='text-2xl font-bold p-3 md:text-3xl'>Dashbord</h1>

 <div className='grid sm:grid-cols-2  lg:grid-cols-3 bg-slate-50 py-2 px-3 gap-3'>
{/* 1 th card */}
<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Active user</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><HiUserGroup className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>6</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>


{/* 2 th card */}
<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Store</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><FaStore className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>5</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>

{/* 3 th card */}
<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Campain</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><AiFillTag className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>3</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>

{/* 4 th card */}

<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Doner</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><BiDollar className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>6</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>

{/* 5th card */}

<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Payments</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><BiDollar className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>500</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>

{/* 6th card */}

<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Sub-Admin</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><AiFillTag className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>0</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>


{/* 7th card */}

<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>All Notification</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><BiDollar className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>4</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>


{/* 8th card */}

<div className='px-3 py-5 bg-white shadow-lg'>
  <div className='flex justify-between mb-5 flex-wrap'>
    <h1 className='text-xl text-gray-500 font-semibold'>Total Donations</h1>
    <h2 className='bg-blue-200 p-2 text-blue-500 rounded-full'><BiDollar className='' size={20}/></h2>
  </div>
  <div className='flex justify-between flex-wrap'>
    <h1 className='font-bold'>1</h1>
    <button className='px-3 py-1 font-semibold rounded-sm' style={{backgroundImage: "linear-gradient(#1EC5FA,#54c6be)"}}>View</button>
  </div>
</div>
</div>
</div>
   </>
  )
}

export default DashBoard