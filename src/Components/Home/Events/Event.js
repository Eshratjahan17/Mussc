import React from "react";
import './Event.css';

const Event = ({ event }) => {
  const { title, picture, about } = event;
  console.log(title,picture);
  return (
   
    <div className="card w-96  bg-base-100 shadow-xl mt-7">
      
        <img
        className="h-60 card-img"
          src={picture}
          alt="Shoes"
        />
      
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        {/* <p>{about}</p> */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
    
  );
};

export default Event;
