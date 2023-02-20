import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { storesGrid } from '../data/dummy';

const StoreList = () => {
  const editing = {  allowEditing: true };
  const [users, setUsers]= useState([]);
    useEffect(()=>{
        getUsers();
    },[]);
    const getUsers =async ()=>{
      let result =await fetch('http://sbfasto.com:5000/api/admin/store/list',{headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'
       
      }});
    result = await result.json();
    setUsers(result);
    }
  return (
    
      <div className='bg-white shadow-lg max-w-[1100px] my-5 mx-auto p-5'>
        <div className='flex justify-between my-3'>
          <h1 className='text-3xl font-bold m-4'>Store List</h1>
        </div>
        <GridComponent
          dataSource={users.data}
          enableHover={false}
          allowPaging
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          allowSorting
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {storesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Page, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    
  )
}

export default StoreList