import React from "react";
import me from "../assets/mee .png";
import unnamed from '../assets/unnamed.png'

function Aboutme() {
  return (
    <div className="">
      <div className="py-11 m px-7 bg-white flex-1  align-middle md:grid grid-cols-2 grid-flow-row overflow-hidden place-items-center">
        

        <div className="border-2  py-11 px-9 max-w-lg  bg-white shadow-lg rounded-lg my-2  ">
          <p className="text-left text-4xl font-mono  ">
            About me
          </p>
          <p className="text-left text-base font-mono mt-2  ">
            Welcome to my website :-)
          </p>
          <p className="text-left text-base font-mono mt-2  ">
            I am a Computer Information systems student, who likes to work with
            react and react native to create websites and mobile apps.I am
            currently learning about backend technologies- node.js, express,
            etc.
          </p>
        </div>
        <img className=" min-w-300  px-9 md:max-w-2xl " src={unnamed} alt="My pic" />
      </div>
   
    </div>
  );
}

export default Aboutme;
