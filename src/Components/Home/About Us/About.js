import React from 'react';
import img4 from '../../../images/img4.png';

const About = () => {
    return (
        <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img4} />
    <div>
      <h1 className="text-5xl font-bold">About us!</h1>
      <p className="py-6">A social services club is an organization that is dedicated to providing assistance to people in need within their community. The primary objective of a social services club is to identify and address the social issues that affect individuals, families, and groups in their community.</p>

<p>Social services clubs can provide a range of services, including but not limited to:</p>
<ul>
    <li><p>Providing food, clothing, and shelter to those in need</p></li>
    <li>Offering educational and vocational training programs to help people develop new skills and find employment</li>
    <li>Offering counseling services to individuals and families in need of support</li>
    <li>Providing medical and healthcare services to those who cannot afford them
</li>
    <li>Organizing community outreach programs to address issues such as homelessness, poverty, and social inequality</li>
</ul>
<p>The mission of a social services club is to promote the welfare of the community and provide support to those who need it most. They strive to create a positive impact on the lives of people in need, and contribute to making the world a better place.</p>

      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;