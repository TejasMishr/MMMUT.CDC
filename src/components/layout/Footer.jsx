import React from "react";


export const Footer = () => {
  return (
    <footer className="footer-container bg-gradient-to-r from-black via-steel-700 to-gray-800 text-[#E5E7EB] p-6 sm:p-10 z-20 font-inter">
      <div className="flex flex-wrap justify-between items-start gap-8 sm:gap-12">
        <div className="w-full sm:w-1/4 footer-section flex flex-col items-start gap-3">
          <img
            src="/contactus/CDC.png"
            alt="Logo"
            className="h-16 w-auto animated-element hover:scale-105 transition-transform duration-300"
          />
          <span className="lg:text-2xl text-xl font-bold font-poppins tracking-wide">
            CODERS & DEVELOPERS CLUB
          </span>
          <p className="text-xs">MADAN MOHAN MALAVIYA</p>
          <p className="text-xs">UNIVERSITY OF TECHNOLOGY</p>
          <p className="text-xs">GORAKHPUR, UTTAR PRADESH 273010</p>
        </div>
        <div className="w-full sm:w-1/6 footer-section flex flex-col items-start gap-4">
          <h4 className="text-xl font-bold border-b-2 border-gray-400 pb-2 animated-element">
            Navigation
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", icon: "fa-house", link: "/" },
              { name: "Event", icon: "fa-calendar-days", link: "/events" },
              { name: "Members", icon: "fa-user-plus", link: "/cdcteam" },
              { name: "Contact Us", icon: "fa-address-book", link: "/contact" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center hover:text-[#A6ADF1] transition-transform transform hover:translate-x-2 animated-element"
              >
                <i
                  className={`fa-solid ${item.icon} mr-2 hover:scale-125 hover:text-[#A6ADF1] transition-transform duration-300`}
                ></i>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/6 footer-section flex flex-col items-start gap-4">
          <h4 className="text-xl font-bold border-b-2 border-gray-400 pb-2 animated-element">
            Reach Us
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "fa-instagram", link: "https://www.instagram.com/cdc.mmmut/" },
              { icon: "fa-youtube", link: "https://www.youtube.com/@cdcmmmut" },
              { icon: "fa-linkedin", link: "https://www.linkedin.com/company/codechef-mmmut-chapter" },
              { icon: "fa-telegram", link: "https://t.me/cdcmmmut" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#A6ADF1] transition-transform transform hover:scale-125 animated-element"
              >
                <i className={`fa-brands ${item.icon} text-3xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <hr />
        <br />
        <p className="text-sm hover:text-[#A6ADF1] transition-colors duration-300 animated-element">
          ©Copyright <b>Coders & Developers Club</b> | All rights reserved |
        </p>
        <p className="mt-2 animated-element">
          Designed with ❤️ by <b>Coders & Developers Club, MMMUT</b>
        </p>
      </div>
    </footer>
  );
};
