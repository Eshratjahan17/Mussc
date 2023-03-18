import React from 'react';
import img1 from '../../../images/New Project (1).png';
import img2 from '../../../images/New Project (2).png';
import img3 from '../../../images/New Project.png';
import circle from '../../../images/circle.png';



const Banner = () => {
    return (
<div className='   '>
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2 banner-button ">
  <a href="#item1" className=" "><img src={circle}></img></a> 
  <a href="#item2" className=" "><img src={circle}></img></a> 
  <a href="#item3" className=""><img src={circle}></img></a> 
  <a href="#item4" className=""><img src={circle}></img></a>
</div>

</div>       
    );
};

export default Banner;