// import { motion } from "framer-motion";
// import { useState } from "react";

// const events = [
//   {
//     title: "SYNTAX SIEGE",
//     description:
//       "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
//     img: "./events/ss.png",
//   },
//   {
//     title: "CODE CASCADE",
//     description:
//       "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
//     img: "./events/cas.png",
//   },
//   {
//     title: "GAME OF CODES",
//     description:
//       "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
//     img: "./events/goc.png",
//   },
//   {
//     title: "GENESIS",
//     description:
//       "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
//     img: "./events/gen.png",
//   },
//   {
//     title: "SYNTAX SIEGE",
//     description:
//       "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
//     img: "./events/ss.png",
//   },
//   {
//     title: "CODE CASCADE",
//     description:
//       "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
//     img: "./events/cas.png",
//   },
//   {
//     title: "GAME OF CODES",
//     description:
//       "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
//     img: "./events/goc.png",
//   },
//   {
//     title: "GENESIS",
//     description:
//       "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
//     img: "./events/gen.png",
//   },
//   {
//     title: "SYNTAX SIEGE",
//     description:
//       "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
//     img: "./events/ss.png",
//   },
//   {
//     title: "CODE CASCADE",
//     description:
//       "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
//     img: "./events/cas.png",
//   },
//   {
//     title: "GAME OF CODES",
//     description:
//       "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
//     img: "./events/goc.png",
//   },
//   {
//     title: "GENESIS",
//     description:
//       "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
//     img: "./events/gen.png",
//   },
//   {
//     title: "SYNTAX SIEGE",
//     description:
//       "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
//     img: "./events/ss.png",
//   },
//   {
//     title: "CODE CASCADE",
//     description:
//       "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
//     img: "./events/cas.png",
//   },
//   {
//     title: "GAME OF CODES",
//     description:
//       "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
//     img: "./events/goc.png",
//   },
//   {
//     title: "GENESIS",
//     description:
//       "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
//     img: "./events/gen.png",
//   },
//   {
//     title: "SYNTAX SIEGE",
//     description:
//       "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
//     img: "./events/ss.png",
//   },
//   {
//     title: "CODE CASCADE",
//     description:
//       "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
//     img: "./events/cas.png",
//   },
//   {
//     title: "GAME OF CODES",
//     description:
//       "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
//     img: "./events/goc.png",
//   },
//   {
//     title: "GENESIS",
//     description:
//       "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
//     img: "./events/gen.png",
//   },
//   {
//     title: "SYNTAX SIEGE",
//     description:
//       "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
//     img: "./events/ss.png",
//   },
//   {
//     title: "CODE CASCADE",
//     description:
//       "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
//     img: "./events/cas.png",
//   },
//   {
//     title: "GAME OF CODES",
//     description:
//       "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
//     img: "./events/goc.png",
//   },
//   {
//     title: "GENESIS",
//     description:
//       "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
//     img: "./events/gen.png",
//   },
// ];

// const OurEvents = () => {
//   const [currentIndex, setCurrentIndex] = useState(5);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % events.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
//   };

//   const getClassNames = (index) => {
//     const difference = (index - currentIndex + events.length) % events.length;
//     if (difference === 0) return "center";
//     if (difference === 1 || difference === events.length - 1) return "adjacent";
//     return "hidden";
//   };

//   return (
//     <section className="relative text-white min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4 pb-20">
//       <h3 className="text-center font-bold text-3xl lg:text-4xl xl:text-5xl mb-16">
//         Our Events
//       </h3>

//       {/* Carousel Section */}
//       <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//         <div className="flex items-center justify-center space-x-6">
//           {events.map((event, index) => {
//             const position = getClassNames(index);
//             const isCenter = position === "center";
//             const isAdjacent = position === "adjacent";

//             return (
//               <motion.div
//                 key={index}
//                 className={`w-1/3 flex-shrink-0 transition-all duration-500 ${
//                   isCenter ? "z-20" : isAdjacent ? "z-10" : "z-0 hidden"
//                 }`}
//                 animate={{
//                   scale: isCenter ? 1.05 : isAdjacent ? 0.95 : 0.75,
//                   opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
//                   filter: isCenter ? "blur(0px)" : "blur(4px)",
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <div className="p-5 rounded-2xl bg-gradient-to-r from-steelblue to-gray-800 overflow-hidden">
//                   <img
//                     className="w-full h-36 rounded-t-2xl object-cover"
//                     src={event.img}
//                     alt={event.title}
//                   />
//                   <div className="p-4">
//                     <h4 className="text-lg font-bold">{event.title}</h4>
//                     <p className="mt-2 text-sm ">{event.description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//         <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
//           <button
//             onClick={handlePrev}
//             className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-3.5 rounded-full shadow-md text-xl"
//           >
//             ◀
//           </button>
//         </div>
//         <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
//           <button
//             onClick={handleNext}
//             className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-3.5 rounded-full shadow-md text-2xl"
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurEvents;

import { motion } from "framer-motion";
import { useState } from "react";

const events = [
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
    img: "./events/ss.png",
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
  },
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
  },
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
    img: "./events/ss.png",
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
  },
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
  },
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
    img: "./events/ss.png",
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
  },
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
  },
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
    img: "./events/ss.png",
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
  },
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
  },
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
    img: "./events/ss.png",
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
  },
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
  },
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes to build programming skills. On day six, participants compete in an online contest, culminating in an engaging offline contest on the final day.",
    img: "./events/ss.png",
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
  },
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
  },
];

const OurEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(5);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const getClassNames = (index) => {
    const difference = (index - currentIndex + events.length) % events.length;
    if (difference === 0) return "center";
    if (difference === 1 || difference === events.length - 1) return "adjacent";
    return "hidden";
  };

  return (
    <section className="h-auto bg-gray-900 text-white py-10 px-4 mx-auto relative overflow-hidden z-50">
      <div className="absolute inset-0 z-0 grid grid-cols-7 grid-rows-7 gap-0 opacity-5">
        {[...Array(49)].map((_, index) => (
          <div key={index} className="border border-gray-700"></div>
        ))}
      </div>
      <h3 className="text-center font-bold text-3xl lg:text-4xl xl:text-5xl mb-16">
        Our Events
      </h3>

      {/* Mobile View Carousel */}
      <div className="block sm:hidden">
        <div className="relative w-full overflow-hidden">
          {/* Events Loop */}
          <div className="flex items-center justify-center">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`w-full flex-shrink-0 transition-all duration-500 ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <div className="p-5 rounded-2xl bg-gradient-to-r from-steelblue to-gray-800">
                  <img
                    className="w-full h-52 rounded-t-2xl object-cover"
                    src={event.img}
                    alt={event.title}
                  />
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold">{event.title}</h4>
                    <p className="mt-2 text-sm">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-1.5 rounded-full shadow-md text-xl"
            >
              ◀
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-1.5 rounded-full shadow-md text-xl"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* Tablet and Desktop View Carousel */}
      <div className="hidden sm:block">
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div className="flex items-center justify-center space-x-6">
            {events.map((event, index) => {
              const position = getClassNames(index);
              const isCenter = position === "center";
              const isAdjacent = position === "adjacent";

              return (
                <motion.div
                  key={index}
                  className={`w-1/3 flex-shrink-0 transition-all duration-500 ${
                    isCenter ? "z-20" : isAdjacent ? "z-10" : "z-0 hidden"
                  }`}
                  animate={{
                    scale: isCenter ? 1.05 : isAdjacent ? 0.95 : 0.75,
                    opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                    filter: isCenter ? "blur(0px)" : "blur(4px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-steelblue to-gray-800 overflow-hidden">
                    <img
                      className="w-full h-36 rounded-t-2xl object-cover border-[1px] border-[#2d51d4]"
                      src={event.img}
                      alt={event.title}
                    />
                    <div className="p-4 border-[1px] border-t-0 border-steelblue rounded-b-xl">
                      <h4 className="text-lg font-bold">{event.title}</h4>
                      <p className="mt-2 text-sm ">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
            <button
              onClick={handlePrev}
              className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-3.5 rounded-full shadow-md text-xl"
            >
              ◀
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-3.5 rounded-full shadow-md text-xl"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
