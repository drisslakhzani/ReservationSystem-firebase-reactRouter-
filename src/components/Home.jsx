import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isHover,setIsHover]=useState(false);
  const MouseIn=()=>{
    setIsHover(true)
  }
  const MouseOut=()=>{
    setIsHover(false)
  }
  return (
    <section className="page">
      <div className=" h-screen flex w-screen justify-center items-center bg">
        <div className={`${isHover&&"backdrop-blur-sm "} duration-200 flex flex-col items-center justify-center h-screen w-screen $ p-4 rounded-lg relative `}>
          <h1 onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="text-4xl  text-white font-bold p-3  ">Bienvenue à la Clinique du Diabète</h1>
          <p  onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="w-4/5 text-gray-200 text-center p-4 font-medium">Nous sommes heureux de vous présenter la Clinique du Diabète, votre référence en matière de soins ambulatoires spécialisés de qualité. Notre équipe dédiée est à vos côtés à chaque étape de votre parcours, que vous souffriez de diabète de type 1, de type 2 ou de diabète gestationnel. Votre santé et votre bien-être sont au cœur de nos préoccupations.</p>
          <Link onMouseEnter={MouseIn} onMouseLeave={MouseOut} className="bg-blue-500 p-3 hover:bg-blue-600 font-medium duration-100 rounded-sm text-lg text-white " to="/Contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="h-screen w-screen bg-white z-10"></div>
    </section>
  );
}

export default Home;
