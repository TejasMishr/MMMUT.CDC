import React from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGraduationCap, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const DashBoard = () => {
  // Array of card data
  const cardData = [
    { icon: faPhone, label: "Contact", value: "1234567890" },
    { icon: faEnvelope, label: "Email", value: "abc@mmmut.ac.in" },
    { icon: faBuildingColumns, label: "College", value: "MMMUT GKP" },
    { icon: faGraduationCap, label: "Graduation Year", value: "2027" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 space-y-16">
      <h1 className="text-center text-4xl font-bold mt-2 text-white mb-4">DASHBOARD</h1>

      {/* Updated motion div to ensure even height */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[90vw] flex flex-wrap justify-around items-center gap-8 sm:flex-row flex-col mt-4"
      >
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center p-4 justify-around bg-custom-blue-gray rounded-lg sm:w-[30%] w-full h-[250px] sm:h-[300px]"
        >
          <img src="contactus/image1.jpg" className="sm:h-36 sm:w-36 h-[100px] w-[100px] rounded-full" alt="Profile" />
          <h1 className="sm:text-2xl text-xl text-white">Anonymous</h1>
        </motion.div>

        {/* Contact Cards Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-around space-y-4 sm:w-[40%] w-full h-[250px] sm:h-[300px]"
        >
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-custom-gray text-white border border-gray-600 rounded-2xl w-full flex items-center p-3"
            >
              <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="text-white" />
              </div>
              <div className="ml-3 text-xl">{item.label}:</div>
              <div className="ml-2 text-xl">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Teams Section */}
      <div className="flex flex-col w-11/12 items-center mt-10 space-y-4">
        <h1 className="text-white text-2xl">Teams</h1>
        <div className="w-full h-[30vh] bg-gray-800 p-10 border border-[#5FA4EA] rounded-md"></div>
      </div>

      {/* Events Section */}
      <div className="flex flex-col w-11/12 items-center mt-10 space-y-4">
        <h1 className="text-white text-2xl">Events</h1>
        <div className="w-full h-[30vh] bg-gray-800 p-10 border border-[#5FA4EA] rounded-md"></div>
      </div>

      {/* Score Section */}
      <div className="flex flex-col w-11/12 items-center mt-10 space-y-4">
        <h1 className="text-white text-2xl">Your Score</h1>
        <div className="w-full h-[30vh] bg-gray-800 p-10 border border-[#5FA4EA] rounded-md"></div>
      </div>
    </div>
  );
};

export default DashBoard;
