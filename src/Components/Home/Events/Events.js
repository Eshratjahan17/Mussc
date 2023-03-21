import React, { useEffect, useState } from "react";

import Event from "./Event";

const Events = () => {
  const [events,setEvents]=useState([]);
  useEffect(()=>{
fetch("https://mussc.onrender.com/events")
.then(res=>res.json())
.then(data=>{setEvents(data);
console.log(events)})

  },[]);
  return (
    <div className=" py-5 px-10">
      <h1 className="text-5xl font-bold text-center pb-6 ">
        Our Recent Events
      </h1>
     
        <div className="grid  lg:grid-cols-3 sm:grid-cols-1  justify-items-center">
          
         {
          events.map((event)=><Event event={event}></Event>)
        }
        </div>
     
    </div>
  );
};

export default Events;
