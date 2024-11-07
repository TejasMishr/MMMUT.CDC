import React from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGraduationCap, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  // Array of card data
  const cardData = [
    { icon: faPhone, label: "Contact", value: "1234567890" },
    { icon: faEnvelope, label: "Email", value: "abc@mmmut.ac.in" },
    { icon: faBuildingColumns, label: "College", value: "MMMUT GKP" },
    { icon: faGraduationCap, label: "Graduation Year", value: "2027" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold mt-2 text-white mb-4">DASHBOARD</h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[90vw] h-[35vh] relative flex justify-around items-center sm:flex-row flex-col mt-[2%]"
      >
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center p-2 justify-around bg-custom-blue-gray rounded-lg sm:w-[30%] h-[90%] w-[90%]"
        >
          <img src="contactus/image1.jpg" className="sm:h-36 sm:w-36 h-[100px] w-[100px] rounded-full" alt="Profile" />
          <h1 className="sm:text-2xl text-xl text-white">Anonymous</h1>
        </motion.div>

        {/* Contact Cards Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-around space-y-4 sm:h-[80%] sm:w-[40%] h-[90%] w-[100%] lg:text-1xl mt-4 text-o.5xl sm:mt-[0%]"
        >
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-custom-gray text-white border border-gray-600 rounded-2xl w-[90%] h-[20%] flex flex-row items-center p-3"
            >
              <div className="bg-black h-[30px] w-[30px] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="text-white" />
              </div>
              <div className="ml-3 ">{item.label}:</div>
              <div className="ml-2">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
