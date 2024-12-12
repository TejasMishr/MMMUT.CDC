import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API_BASE_URL from "../../config/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faGraduationCap, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const DashBoard = () => {
  const [adminProfile, setAdminProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const localdata = localStorage.getItem("user");
  const user = JSON.parse(localdata);
  const token = user?.token;

  useEffect(() => {
    const fetchAdminDetails = async () => {
      if (!token) {
        console.error("Token not found");
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/api/superadmin/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
       
        setAdminProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching admin profile", error);
        setLoading(false);
      }
    };

    fetchAdminDetails();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Dynamically create card data from API response
  const cardData = [
    { icon: faPhone, label: "Contact", value: adminProfile?.phone || "N/A" },
    { icon: faEnvelope, label: "Email", value: adminProfile?.email || "N/A" },
    { icon: faBuildingColumns, label: "College", value: adminProfile?.college || "N/A" },
    { icon: faGraduationCap, label: "Graduation Year", value: adminProfile?.universityRollNo || "N/A" },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 space-y-16 relative z-18">
      <div
        className="absolute inset-0 blur-lg z-[0]"
        style={{
          background:
            "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
        }}
      />
      <h1 className="text-center text-4xl font-bold mt-2 text-white mb-4 z-[8]">DASHBOARD</h1>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[90vw] flex flex-wrap justify-around items-center gap-8 sm:flex-row flex-col mt-4 z-[8]"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center p-4 justify-around bg-custom-blue-gray rounded-lg sm:w-[30%] w-full h-[250px] sm:h-[300px] z-[8]"
        >
          <img
            src="contactus/image1.jpg"
            className="sm:h-36 sm:w-36 h-[100px] w-[100px] rounded-full"
            alt="Profile"
          />
          <h1 className="sm:text-2xl text-xl text-white">{adminProfile?.name || "Anonymous"}</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-around space-y-4 sm:w-[35%] w-full h-[250px] sm:h-[300px] z-[8]"
        >
          {cardData.map((item, index) => (
           <div
           key={index}
           className="text-white bg-custom-gray  border-2 border-black w-full flex items-center p-3 z-[8]"
           style={{
             borderRadius: '48px',
             background: '#1d4c9a',
             boxShadow: 'inset -5px 5px 11px #1d4c9a, inset 11px -11px 22px #1d4c9a'
           }}
         >
           <div className="bg-black  h-[30px] w-[30px] rounded-full flex items-center justify-center z-[8]">
                <FontAwesomeIcon icon={item.icon} className="text-white" />
              </div>
              <div className="ml-3 text-xl">{item.label}:</div>
              <div className="ml-2 text-xl">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashBoard;
