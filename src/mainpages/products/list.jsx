import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { productGrid } from '../../data/dummy';

const Categorylist = () => {
    const editing = { allowEditing: true };
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        let result = await fetch('http://sbfasto.com:5000/api/admin/products/list', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWY3OWEwMmZhYWY0ZWJkMmZkNTU2NCIsIm5hbWUiOiJBZG1pbiBTbWl0aCIsImlhdCI6MTY3NjY0MTg4MywiZXhwIjoxNjc3MjQ2NjgzfQ.mclzq9slBevbgU0aRgNP3sAr0623MHz31GrTWOadad4'

            }
        });
        result = await result.json();
        setUsers(result);
    }
    return (

        <div className='bg-white shadow-lg max-w-[1100px] my-5 mx-auto p-5'>
            <div className='flex justify-between my-3'>
                <h1 className='text-3xl font-bold m-4'>Product List</h1>
                <NavLink to="/createproduct"> <button className='text-white px-5 py-2 font-semibold rounded-lg' style={{ backgroundColor: "#03c9d7" }}>+ New Product</button></NavLink>

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
                    {productGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Page, Edit, Sort, Filter]} />
            </GridComponent>
        </div>

    )
}

export default Categorylist