import React from 'react';

const OurEvents = () => {
  return (
    <div className="px-4 py-1 sm:px-8 bg-gradient-to-r from-blue-950 to-black text-white">

     

      {/* Upcoming Events Section */}
      <div className="flex flex-col items-center text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl">UPCOMING EVENTS</h1>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl my-5">Register here for our upcoming events</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <button className="bg-blue-700 px-4 rounded font-semibold">REGISTER</button>
          <button className="bg-blue-700 px-4 rounded font-semibold">KNOW MORE</button>
        </div>
      </div>

      {/* Ongoing Events Section */}
      <div className="flex justify-center items-center h-[30vh] sm:h-[50vh] mt-5">
        <h1 className="text-3xl sm:text-4xl">ONGOING EVENTS</h1>
      </div>

      {/* Our Events Section */}
      <div className="h-[80vh] mt-10 sm:mt-20">
        <h1 className="text-center text-3xl sm:text-4xl my-5">OUR EVENTS</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Events List */}
          <div className="w-full sm:w-auto bg-black rounded-xl">
            <ul className="flex flex-col gap-4 sm:gap-10 border-2 border-blue-600 px-4 py-4 sm:px-6 sm:py-6 rounded-xl">
              <li>GAME OF CODES</li>
              <li>WEBINAR</li>
              <li>GENESIS</li>
              <li>ORIENTATION</li>
              <li>CODE CASCADE</li>
              <li>SYNTAX SIEGE</li>
            </ul>
          </div>

          {/* Additional Content Placeholder */}
          <div className="sm:flex flex-col justify-center items-center border-2 border-blue-600 bg-black px-4 py-4 rounded-xl w-full">
            {/* Placeholder for additional content */}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default OurEvents;
