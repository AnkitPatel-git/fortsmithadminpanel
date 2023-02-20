import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesGrid } from '../data/dummy';
import { Header } from '../components';

const AllUser = () => {
    const toolbarOptions = ['Search'];

    const editing = { allowDeleting: true, allowEditing: true };
    const [users, setUsers]= useState([]);
    useEffect(()=>{
        getUsers();
    },[]);
    const getUsers =async ()=>{
      let result =await fetch('http://sbfasto.com:5000/api/admin/user/list',{headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'
       
      }});
    result = await result.json();
    setUsers(result);
    }
    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="users" title="All Users" />
        <GridComponent
          dataSource={users.data}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
  
        </GridComponent>
      </div>
    );
}

export default AllUser