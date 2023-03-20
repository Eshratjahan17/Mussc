import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Event from "./Event";

const Events = () => {
  const [events,setEvents]=useState([]);
  useEffect(()=>{
fetch("http://localhost:5000/events")
.then(res=>res.json())
.then(data=>{setEvents(data);
console.log(events)})

  },[]);
  return (
    <div className=" py-5 px-10">
      <h1 className="text-5xl font-bold text-center pb-6 ">
        Our Events
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
         
         {
          events.map((event)=><Event event={event}></Event>)
        }
         
       
        
       
        ...
      </Swiper>
    </div>
  );
};

export default Events;
