import React, { useEffect, useState } from "react";
import axios from 'axios';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { getToken } from '../../auth/common';
import { monthMap } from "../../contants/month";
Chart.register(CategoryScale);

const Dashboard = () => {

  
  const [statics, setStatics] = useState({});
  const [graphData, setGraph] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const token = getToken();

  useEffect(() => {
    var config = {
      headers: {
          'Authorization': "Bearer "+token,
          'Content-Type': 'application/json'
      }
    };
    axios.get('http://localhost/api/admin/v1/dashboard',config).then(response => response.data)
      .then(response => { 
        setStatics(response.data.statistics);
      })
      .catch(error => {
      console.log(error);
      if (error.response.status === 401) setErrorMessages({ name: "pass", message: error.response.data.message});
      else setErrorMessages({ name: "pass", message: "Something went wrong.Please try again later."});
    });
   
    
  }, []);
  
  
  return <div className="bg-gray-100 h-screen p-4 space-y-5">
            <div className="w-full bg-white rounded shadow">
                <h3 className="p-3 border-b font-semibold">Statistics</h3>
                <div className="p-4 flex items-center space-x-3 h-32">
                  <div className="flex space-x-3 bg-danger-100 p-5 rounded w-1/4">
                    <h2 key={statics.total_vendor}>{statics.total_vendor}</h2>
                    <p>Vendor</p>
                  </div>
                  <div className="flex space-x-3 bg-info-100 p-5 rounded w-1/4">
                    <h2 key={statics.total_task}>{statics.total_task}</h2>
                    <p>Task</p>
                  </div>
              </div>
            </div>
           
    </div>;
};

export default Dashboard;