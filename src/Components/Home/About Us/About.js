import React from 'react';
import img4 from '../../../images/dental camp.jpeg';
import arrowIcon from '../../../images/arrowIcon.png';

const About = () => {
    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
    <img className='lg:w-2/5  sm:w-full drop-shadow-xl rounded-lg ' src={img4} />
    <div className='lg:w-3/5 pr-5 sm:w-full'>
      <h1 className="text-5xl font-bold text-accent">About us!</h1>
      <p className="py-6">MU Social Services Club is an organization formed by a group of individuals who work together to provide volunteer services and make positive contributions to their community. Members of these clubs often engage in activities such as fundraising, community service projects, and events that promote social causes and help those in need.Objectves of MU Social Services Club:</p>
<ul>
  <li className='flex items-center '>
  <img className='w-5 h-5 mr-3 ' src={arrowIcon}></img>
<p >To take an active interest in the cultural, social and the moral welfare of the community.
</p>
  </li>
  <li className='flex items-center '> <img className='w-5 h-5 mr-3 ' src={arrowIcon}></img>
<p>To motivate students to join different kinds of social and helpful activities.
</p></li>
  <li className='flex items-center '> <img className='w-5 h-5 mr-3 ' src={arrowIcon}></img>
<p>To offer an opportunities for students to contribute to the society.
</p></li>
  <li className='flex items-center '> <img className='w-5 h-5 mr-3 ' src={arrowIcon}></img>
<p> To help people who need help.
</p></li>
  <li className='flex items-center '> <img className='w-5 h-5 mr-3 ' src={arrowIcon}></img>
<p> To Encourage service-minded people to serve their community without personal financial 
reward, & to change efficiency & promote high ethical standards in public works and private 
endeavors.
</p></li>
<li className='flex items-center '> <img className='w-5 h-5 mr-3 ' src={arrowIcon}></img>
<p> To learn to respect people & how to fulfill their responsibilities. 
</p></li>
</ul>


      <button className="btn btn-primary text-white mt-4">Learn More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;