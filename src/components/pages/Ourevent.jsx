import React, { useState } from "react";

const eventDetails = [
  {
    title: "AlgOlympics",
    description:
      "AlgOlympics is a regional-level coding competition to foster collaboration, competitiveness, and technical excellence. Following the ICPC structure, the event is open to participants from institutions throughout the region and provides an exciting two-round competition that fosters creativity and honors programming talent.",
    img: "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/Alogolympics%20logo.png?alt=media&token=805a4f98-3cd7-44e0-a2d3-c2046816ee6d",
    ispastevent: false,
  },
  {
    title: "SYNTAX SIEGE",
    description:
      "Syntax Siege is a week-long event featuring five days of offline coding classes designed to enhance programming skills. On the sixth day, participants compete in an online contest, followed by an exciting offline contest on the final day",
    img: "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/SyntaxSeize%20(1).jpg?alt=media&token=e0fcb88c-610c-411c-ac73-cd1c5910d9a8",
    ispastevent: true,
  },
  {
    title: "CODE CASCADE",
    description:
      "The three-day Code-Cascade event offers online coding classes for juniors, focusing on programming basics in a supportive environment. Participants engage in interactive sessions, exploring key concepts and hands-on activities. The event aims to build coding skills and inspire a passion for technology.",
    img: "./events/cas.png",
    ispastevent: true,
  },
  {
    title: "GAME OF CODES",
    description:
      "Game of Codes is an exclusive event for second-year students, organized by the Coders and Developers Club in collaboration with the Computer Engineering Society. It aims to foster programming skills and innovation among participants. The event promises engaging activities tailored for budding coders.",
    img: "./events/goc.png",
    ispastevent: true,
  },
];

const OurEvents = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 py-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Our Events
          </h2>
          <p className="text-lg text-gray-300">
            Explore a variety of events tailored to enhance your skills and
            foster your passion for technology.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {eventDetails.map((event, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto bg-gray-900 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gray-800 cursor-pointer border-[1px] border-gray-700"
            >
              <img
                className="rounded-t-lg w-full object-cover h-52"
                src={event.img}
                alt={event.title}
              />
              <div className=" p-5">
                <h5 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                  {event.title}
                </h5>
                <p
                  className="text-gray-300 text-sm mb-5"
                  dangerouslySetInnerHTML={{
                    __html: event.description
                      .replace(
                        /ICPC structure/g,
                        '<span class="text-orange-500 px-1 rounded-sm">ICPC structure</span>'
                      )
                      .replace(
                        /AlgOlympics/g,
                        '<span class="text-red-500 px-1 rounded-sm">AlgOlympics</span>'
                      )
                      .replace(
                        /Syntax Siege/g,
                        '<span class="text-red-500 px-1 rounded-sm">Syntax Siege</span>'
                      )
                      .replace(
                        /Code-Cascade/g,
                        '<span class="text-red-500 px-1 rounded-sm">Code Cascade</span>'
                      )
                      .replace(
                        /Game of Codes/g,
                        '<span class="text-red-500 px-1 rounded-sm">Game of Codes</span>'
                      ),
                  }}
                />
                <div className="flex justify-between items-center">
                  <button
                    className={`px-4 py-2 text-sm rounded-lg cursor-pointer ${
                      event.ispastevent
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    onClick={() => {
                      if (!event.ispastevent) {
                        window.open(
                          "https://cdc.mmmut.xyz/createTeam",
                          "_blank"
                        );
                      }
                    }}
                  >
                    {event.ispastevent ? "View Details" : "Register Now"}
                  </button>
                  <button
                    className={`px-4 py-2 text-sm rounded-lg cursor-pointer ${
                      event.title === "AlgOlympics"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : ""
                    }`}
                  >
                    {event.title === "AlgOlympics" && !event.ispastevent && (
                      <span
                        onClick={() =>
                          (window.location.href = "/events/algOlympics")
                        }
                      >
                        View Details
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
