import React from 'react';
import img1 from '../../../images/New Project (1).png';
import img2 from '../../../images/New Project (2).png';
import img3 from '../../../images/New Project.png';



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
<div className="flex justify-center w-full py-2 gap-2  ">
  <a href="#item1" className="btn btn-xs btn-accent">1</a> 
  <a href="#item2" className="btn btn-xs btn-accent">2</a> 
  <a href="#item3" className="btn btn-xs btn-accent">3</a> 
  <a href="#item4" className="btn btn-xs btn-accent">4</a>
</div>

</div>       
    );
};

export default Banner;