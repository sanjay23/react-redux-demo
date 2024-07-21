import '../../main-style.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getToken } from '../../auth/common';

const Blogs = () => {
  const [tasks, setTask] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const token = getToken();

  var config = {
    headers: {
        'Authorization': "Bearer "+token,
        'Content-Type': 'application/json'
    }
  };
  useEffect(() => {
    axios.get('http://localhost/api/admin/v1/tasks?limit=15&page=1',config).then(response => response.data)
      .then(response => { 
        setTask(response.data);
      })
      .catch(error => {
      console.log(error);
      if (error.response.status === 401) setErrorMessages({ name: "pass", message: error.response.data.message});
      else setErrorMessages({ name: "pass", message: "Something went wrong.Please try again later."});
    });
  }, []);
  return <div className="v-list h-100">
          <div className='sticky top-0 bg-white z-10 text-gray-900 text-body border-b'>
            <div className='flex h-12 items-stretch bg-white'>
              <div className='px-3 flex items-center justify-center h-12 border-r'>
                <p className='font-bold leading-none text-3xl font-bold underline'>Tasks </p>
              </div>
              <div className="v-list-search border-r flex-grow relative">
                {/* <input placeholder="Search" type="text" className="w-full h-12 px-4 outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200"/> */}
              </div>
              <div className="divide-x flex text-xl">
              </div>
            </div>
          </div>
          <div>
            <table className="v-list-table table text-left w-full h-full table-admin p-2 lg:p-4 font-body bg-white text-gray-900 table--row-click row-click-on">
              <thead>
                <tr className="bg-white">
                  <th rowSpan="1" colSpan="1" className="v-list-table__created_at_Date"><div className="v-list-table__head"><span>Date</span></div></th>
                  <th rowSpan="1" colSpan="1" className="v-list-table__created_at_time"><div className="v-list-table__head"><span>Time</span></div></th>
                  <th rowSpan="1" colSpan="1" className="v-list-table__rwa"><div className="v-list-table__head"><span>Vendor</span></div></th>
                  <th rowSpan="1" colSpan="1" className="v-list-table__task_type"><div className="v-list-table__head"><span>Task Type</span></div></th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.length > 0 &&
                  tasks.map((task, id) => (
                  <tr className='id' key={id}>
                    <td>{task.created_at}</td>
                    <td>{task.created_at}</td>
                    <td>{task.rwa_user.first_name}</td>
                    <td>{task.type}</td>
                    
                  </tr>
                ))}

                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>;
};

export default Blogs;