import { motion } from "framer-motion";
import { useState } from "react";
const events = [
  {
    title: "SYNTAX SIEGE", 
    description:
      "The seven-day Syntax Siege event features five days of offline coding classes, offering in-depth training in programming fundamentals. On the sixth day, participants compete in an online coding contest to test their skills. The event concludes with an exciting offline coding contest on the final day.",
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
      "The seven-day Syntax Siege event features five days of offline coding classes, offering in-depth training in programming fundamentals. On the sixth day, participants compete in an online coding contest to test their skills. The event concludes with an exciting offline coding contest on the final day.",
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
      "The seven-day Syntax Siege event features five days of offline coding classes, offering in-depth training in programming fundamentals. On the sixth day, participants compete in an online coding contest to test their skills. The event concludes with an exciting offline coding contest on the final day.",
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
    if (difference === 0 ) return "center"; // Card in the center
    if (difference ==1 || difference == events.length - 1) return "adjacent"; // Adjacent cards
    return "hidden"; // Cards outside focus
  };

  return (
    <section className="relative text-white h-auto px-4 pb-20 mx-auto">
      <h3 className="text-center font-bold text-3xl lg:text-4xl xl:text-5xl mb-16">
        Our Events
      </h3>
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
                <div className="p-4 rounded-xl bg-gradient-to-r from-steelblue to-gray-800">
                  <img
                    className="w-full h-36 rounded-t-xl object-cover"
                    src={event.img}
                    alt={event.title}
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold">{event.title}</h4>
                    <p className="mt-2 text-sm">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-6 rounded-full shadow-md text-2xl"
          >
            ◀
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-steelblue to-gray-800 text-white p-6 rounded-full shadow-md text-2xl"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
