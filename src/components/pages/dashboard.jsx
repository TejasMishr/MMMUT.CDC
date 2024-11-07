import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex   items-center  space-y-6 flex-col">
      <h1 className="text-center text-5xl font-bold mt-2 text-white">DASHBOARD</h1>
      <div className="w-[80vw] h-[35vh] relative left-[10vw] flex justify-around items-center sm:flex-row flex-col mt-[2%]">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-around bg-custom-blue-gray rounded-lg w-[30%] h-[80%]">
          <img src="contactus/image1.jpg" className="h-36 w-36 rounded-full" alt="Profile" />
          <h1 className="text-2xl text-white">Anonymous</h1>
        </div>

        {/* Contact Cards Section */}
        <div className="flex flex-col items-center justify-around space-y-4 h-[80%] w-[40%]">
          <div className="bg-custom-gray text-white border border-gray-600 rounded-2xl w-[90%] h-[20%] flex flex-row items-center p-3">
            <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
            </div>
            <div className="ml-3">Contact:</div>
            <div className="ml-2">1234567890</div>
          </div>
          <div className="bg-custom-gray text-white border border-gray-600 rounded-2xl w-[90%] h-[20%] flex flex-row items-center p-3">
            <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
            </div>
            <div className="ml-3">Contact:</div>
            <div className="ml-2">1234567890</div>
          </div>
          <div className="bg-blue-500 text-white border border-gray-600 rounded-2xl w-[90%] h-[20%] flex flex-row items-center p-3">
            <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
            </div>
            <div className="ml-3">Contact:</div>
            <div className="ml-2">1234567890</div>
          </div>
          <div className="bg-blue-500 text-white border border-gray-600 rounded-2xl w-[90%] h-[20%] flex flex-row items-center p-3">
            <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
            </div>
            <div className="ml-3">Contact:</div>
            <div className="ml-2">1234567890</div>
          </div>
        </div>
      </div>

{/*  */}


<div className="flex w-11/12 flex-col  space-y-2 items-center justify-center ">

<h1 className=" text-white   text-2xl"> Teams  </h1>
<div className="flex w-full  bg-gray-800 p-10 border border-[#5FA4EA] rounded-md"></div>




</div>
<div className="flex flex-col space-y-2 w-11/12 items-center justify-center ">

<h1 className=" text-white  text-2xl">Events  </h1>
<div className="flex w-full  bg-gray-800 p-10 border border-[#5FA4EA] rounded-md"></div>




</div>

<div className="flex flex-col space-y-2 w-11/12 items-center justify-center ">

<h1 className=" text-white  text-2xl"> Your Score  </h1>
<div className="flex w-full  bg-gray-800 p-10 border border-[#5FA4EA] rounded-md"></div>




</div>


    </div>
  );
};

export default Dashboard;

