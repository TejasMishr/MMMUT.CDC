import React, { useState } from 'react';
import Event from './algoolympics';
import { NavLink } from 'react-router-dom';
import PaymentPage from './payment';
const eventDetails = [
  {
    EventName: "Game of Codes",
    Description:
      "The Game of Codes, hosted by the Coders & Developers Club and Computer Engineering Society, is an exciting coding arena for second-year students. It’s a battlefield for sharp minds and quick fingers, offering a chance to test skills and learn from peers. This event is about more than winning—it’s about growth, challenge, and innovation. Whether you’re an experienced coder or just starting, it provides a platform to showcase your talent. Solve problems, craft algorithms, and push your boundaries. Each step forward brings you closer to victory.",
  },
  {
    EventName: "Syntax Siege",
    Description:
      "A seven-day coding adventure! Dive into five days of offline coding classes designed to strengthen your fundamentals. Learn, practice, and build skills in a collaborative and engaging environment. On day six, test your knowledge in an exciting online coding contest. Compete with peers, solve challenges, and showcase your problem-solving skills. The journey concludes on day seven with an intense offline coding contest. Battle it out on the ultimate stage and strive for coding excellence.",
  },
  {
    EventName: "Code Cascade",
    Description:
      "Code Cascade is an exclusive event by the Coders and Developers Club for first-year students! This three-day program is designed to introduce you to the exciting world of coding. Learn fundamental programming concepts in an interactive and supportive environment. Each day, participate in hands-on coding sessions tailored for beginners. Guided by experienced mentors, students gain valuable skills, build confidence, and explore the possibilities of technology.",
  },
  {
    EventName: "Orientation",
    Description:
      "The first year of college often brings a blend of confusion and curiosity, particularly in coding. As students navigate this new and exciting world, addressing their doubts early becomes essential to ensure they build a strong foundation. The Coders and Developers Club plays a vital role in this journey, offering mentorship, workshops, and a supportive environment. By resolving doubts and encouraging exploration, the club empowers students to overcome challenges, fostering confidence and enthusiasm as they embark on their coding journey.",
  },
  {
    EventName: "Webinar",
    Description:
      "An exclusive event designed for first-year students! This session focuses on addressing their doubts and building clarity in coding and academics. It’s a unique opportunity for them to learn and get their questions answered directly by experienced mentors. They’ll gain tips, tricks, and techniques from their seniors to excel in their coding and academic journey.",
  },
  {
    EventName: "Genesis",
    Description:
      "A session designed to provide students with invaluable knowledge and career guidance from accomplished alumni and technical experts offers a unique learning opportunity. These experts, who have achieved excellence in their fields and hold prestigious positions, share their insights, experiences, and practical advice. The session helps students understand industry trends, refine their skills, and set clear career goals. By interacting with such inspiring mentors, students gain the confidence and direction needed to navigate their academic journey and professional aspirations effectively.",
  },
];

const OurEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = (eventName) => {
    setSelectedEvent(eventName);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectedEventDetails = eventDetails.find(
    (event) => event.EventName === selectedEvent
  );

  return (
    <>
      <div className="px-4 py-1 min-h-screen relative sm:px-8 bg-gray-900 text-white">
        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 top-0 right-0 blur-3xl z-[0]"
          style={{
            background:
              "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
          }}
        />

        {/* Upcoming Events Section */}
        <div className="flex flex-col items-center text-center z-[19] mb-4">
          <h1 className="text-4xl z-[8] font-bold mt-5">UPCOMING EVENTS</h1>
          <div className="mt-8 relative z-[19] w-25 h-60 mx-auto mb-12">
  <img
    src="./events/ss.png" // Replace with your actual image path
    alt="Upcoming Event"
    className="w-full h-full rounded shadow-lg object-cover"
  />
  <h1 className='text-4xl mt-2 mb-3'>AlgOlympics</h1>
</div>

     
          <h2 className="text-xl sm:text-2xl my-5 z-[8] mt-4">
            Register here for our upcoming events
          </h2>
          <div className="flex flex-col sm:flex-row gap-5 z-[8]">
            <button className="bg-blue-700 text-2xl hover:bg-blue-800 h-10 w-40 rounded font-semibold">
              REGISTER
            </button>
            <NavLink to="eve">
            <button className="bg-blue-700 text-2xl hover:bg-blue-800 h-10 w-40 rounded font-semibold">
              KNOW MORE
            </button>
            </NavLink>
            

          </div>
        </div>


        <div className="h-[80vh] mt-10 sm:mt-20 z-[20]">
          <h1 className="relative text-center text-3xl mb-[3%] sm:text-4xl my-5 z-[20]">
            OUR EVENTS
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-[15]">
            <div className="w-full sm:w-auto lg:bg-black rounded-xl">
              <div className="block lg:hidden justify-center flex relative">
                <button
                  onClick={toggleDropdown}
                  className="bg-blue-600 text-white text-2xl text-center px-4 py-2 rounded-lg mx-auto"
                >
                  Select Event
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full  mt-2 border-2 border-blue-600 rounded-xl w-full z-10 bg-gray-900">
                    {eventDetails.map((event) => (
                      <li
                        key={event.EventName}
                        className="cursor-pointer px-4 text-2xl py-2 hover:bg-blue-700 rounded-lg"
                        onClick={() => handleClick(event.EventName)}
                      >
                        {event.EventName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="hidden lg:block">
                <ul className="flex flex-col gap-4 sm:gap-10 border-2 border-blue-600 px-4 py-4 sm:px-6 sm:py-6 rounded-xl">
                  {eventDetails.map((event) => (
                    <li
                      key={event.EventName}
                      className="cursor-pointer hover:text-blue-400"
                      onClick={() => handleClick(event.EventName)}
                    >
                      {event.EventName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" border-2 border-blue-600 lg:bg-black px-4 py-4 rounded-xl w-full">
              <h2 className="text-xl text-center">
                {selectedEventDetails
                  ? <div className='text-4xl text-bold '>{selectedEventDetails.EventName}</div>
                  : "Select an event to see details"}
              </h2>
              {selectedEventDetails && (
                <p className="mt-4 text-center lg:text-2xl md:text-xs sm:text-xs">{selectedEventDetails.Description}</p>
              )}
            </div>ygyug
          </div>
        </div>
      </div>
      <PaymentPage/>
    </>
  );
};

export default OurEvents;
