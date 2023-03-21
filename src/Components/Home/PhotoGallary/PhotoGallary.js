import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const images = [
    {
      original: 'https://i.ibb.co/b2TQv8m/IMG-20190401-WA0000.jpg',
      thumbnail: 'https://i.ibb.co/b2TQv8m/IMG-20190401-WA0000.jpg',
    },
    {
      original: 'https://i.ibb.co/W6bb9tB/119240548-2715723875412736-6437301983375852326-n.jpg',
      thumbnail: 'https://i.ibb.co/W6bb9tB/119240548-2715723875412736-6437301983375852326-n.jpg',
    },
    {
      original: 'https://i.ibb.co/mX1PGhN/IMG-6324.jpg',
      thumbnail: 'https://i.ibb.co/mX1PGhN/IMG-6324.jpg',
    },
  ];
  
  
const PhotoGallary = () => {
    return (
      <div className='py-10 px-10' >
<h1 className='text-5xl font-bold text-center py-5'>Photo gallary</h1>
        <Swiper
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img  className='w-11/12 h-11/12 rounded-lg shadow-lg' src='https://i.ibb.co/ng21g04/185085295-288473029583776-6498197869554790270-n.jpg'></img></SwiperSlide>
      <SwiperSlide><img className='w-11/12 h-11/12 rounded-lg shadow-lg' src='https://i.ibb.co/W6bb9tB/119240548-2715723875412736-6437301983375852326-n.jpg  rounded-lg shadow-lg'></img></SwiperSlide>
      <SwiperSlide><img className='w-11/12 h-11/12  rounded-lg shadow-lg' src='https://i.ibb.co/mX1PGhN/IMG-6324.jpg  rounded-lg shadow-lg'></img></SwiperSlide>
      <SwiperSlide><img className='w-11/12 h-11/12  rounded-lg shadow-lg' src='https://i.ibb.co/NrN04wG/270012869-1060608444784353-6229605946244683525-n.jpg'></img></SwiperSlide>
      <SwiperSlide><img className='w-11/12 h-11/12  rounded-lg shadow-lg' src='https://i.ibb.co/4Md5YLb/270018458-453743856201781-7496809830656502501-n.jpg'></img></SwiperSlide>
    </Swiper>
    {/* <FaArrowAltCircleRight className='text-5xl mx-5'></FaArrowAltCircleRight> */}
         
      </div>
        
    );
};

export default PhotoGallary;