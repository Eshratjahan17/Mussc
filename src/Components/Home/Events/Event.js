import React from "react";
import { SwiperSlide } from "swiper/react";

const Event = ({ event }) => {
  const { title, picture, about } = event;
  console.log(title,picture);
  return (
    <SwiperSlide>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </SwiperSlide>
  );
};

export default Event;
