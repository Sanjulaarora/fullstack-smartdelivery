import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PartnerRegister = () => {
    const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    number: "",
    status: "",
    currentLoad: "",
    areas: [""],
    shift: { startTime: "", endTime: "" },
    metrics: { rating:"", completedOrders: "", cancelledOrders: "" }
  });

  const addRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterData(() => {
      if (name === "startTime" || name === "endTime") {
        // Update shift times
        return {
          ...registerData,
          shift: {
            ...registerData.shift,
            [name]: value,
          },
        };
      } else if (name === "rating" || name === "completedOrders" || name === "cancelledOrders") {
        // Update metrics
        return {
          ...registerData,
          metrics: {
            ...registerData.metrics,
            [name]: value,
          },
        };
      } else {
        // Update other fields
        return {
          ...registerData,
          [name]: value,
        };
      }
    });
  };

  const navigate = useNavigate();

  const registerPartner = async(e) => {
    e.preventDefault();
    const { name, email, number, status, currentLoad, areas, shift, metrics } = registerData;

    const res = await fetch("/registerpartner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, number, status, currentLoad, areas, 
        startTime: shift.startTime, endTime: shift.endTime , 
        rating: metrics.rating, completedOrders: metrics.completedOrders, cancelledOrders: metrics.cancelledOrders
      })
    });

    const data = await res.json();
    console.log(data);
    if(res.status === 400 || !data) {
      alert("Something went wrong :(")
    } else {
      alert("Partner Registered Successfully!!!");
      navigate("/partners");
      setRegisterData({...registerData, name:"", email:"", number:"", status:"", currentLoad:"", areas:[""], startTime:"", endTime:"", rating:"", completedOrders:"", cancelledOrders:""});
    }
  }

  return (
    <div className="flex justify-center px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="w-[490px] p-2 mt-10 rounded-lg">
        <form method="POST" className="flex flex-col justify-center p-2">
          <h1 className="text-2xl">Register</h1>
          <div className="flex flex-col p-2">
            <label htmlFor="name">Name</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="text" 
              placeholder="Enter Name"
              value={registerData.name}
              onChange={addRegisterData}
              name="name" 
              id="name"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="email">Email</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="text" 
              placeholder="Enter Email"
              value={registerData.email}
              onChange={addRegisterData}
              name="email" 
              id="email"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="number">Phone Number</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="number" 
              placeholder="Enter Phone Number"
              value={registerData.number}
              onChange={addRegisterData}
              name="number" 
              id="number"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="status">Status <span className='text-blue-500'>(Active/Inactive)</span></label>
            <select
              className="rounded-lg p-1 text-black" 
              placeholder="Enter Status"
              value={registerData.status}
              onChange={addRegisterData}
              name="status" 
              id="status"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="currentLoad">Current Load</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="number" 
              placeholder="Enter Current Load"
              value={registerData.currentLoad}
              onChange={addRegisterData}
              name="currentLoad" 
              id="currentLoad"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="areas">Areas</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="text" 
              placeholder="Enter Areas"
              value={registerData.areas}
              onChange={addRegisterData}
              name="areas" 
              id="areas"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="startTime">Shift Start Time</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="text" 
              placeholder="Enter Start time"
              value={registerData.shift.startTime}
              onChange={(e) => addRegisterData({ target: { name: "startTime", value: e.target.value } })}
              name="startTime" 
              id="startTime"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="endTime"> Shift End Time</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="text" 
              placeholder="Enter End Time"
              value={registerData.shift.endTime}
              onChange={(e) => addRegisterData({ target: { name: "endTime", value: e.target.value } })}
              name="endTime"
              id="endTime"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="rating">Rating</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="number" 
              placeholder="Enter Rating"
              value={registerData.metrics.rating}
              onChange={(e) => addRegisterData({ target: { name: "rating", value: e.target.value } })}
              name="rating" 
              id="rating"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="completedOrders">Completed Orders</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="number" 
              placeholder="Enter Completed Orders"
              value={registerData.metrics.completedOrders}
              onChange={(e) => addRegisterData({ target: { name: "completedOrders", value: e.target.value } })}
              name="completedOrders" 
              id="completedOrders"
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="cancelledOrders">Cancelled Orders</label>
            <input 
              className="rounded-lg p-1 text-black" 
              type="number" 
              placeholder="Enter Cancelled Orders"
              value={registerData.metrics.cancelledOrders}
              onChange={(e) => addRegisterData({ target: { name: "cancelledOrders", value: e.target.value } })}
              name="cancelledOrders" 
              id="cancelledOrders"
            />
          </div>
          <button className="w-20 h-8 bg-blue-400 text-white rounded-lg font-semibold mx-auto" 
            onClick={registerPartner}
            disabled={!registerData.name || !registerData.email || !registerData.number || !registerData.status || !registerData.currentLoad || !registerData.areas || !registerData.shift.startTime || !registerData.shift.endTime || !registerData.metrics.rating || !registerData.metrics.completedOrders|| !registerData.metrics.cancelledOrders}
          >Register</button>
        </form>
      </div>
    </div>
  )
}

export default PartnerRegister;