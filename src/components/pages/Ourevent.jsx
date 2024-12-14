import React, { useState } from "react";

const eventDetails = [
  {
    title: "AlgOlympics",
    description:
      "AlgOlympics is a regional-level coding competition to foster collaboration, competitiveness, and technical excellence. Following the ICPC structure, the event is open to participants from institutions throughout the region and provides an exciting two-round competition that fosters creativity and honors programming talent.",
    img: "./events/ss.png",
    ispastevent: false,
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
  {
    title: "GENESIS",
    description:
      "An exclusive event for first-year students, guided by accomplished alumni and technical experts. The session helps students understand industry trends, refine their skills, and set clear career goals. The event fosters learning, collaboration, and a strong foundation in coding and technology.",
    img: "./events/gen.png",
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
              className="max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gray-700 cursor-pointer border-[1px] border-gray-700"
            >
              <img
                className="rounded-t-lg w-full object-cover h-52"
                src={event.img}
                alt={event.title}
              />
              <div className="p-5">
                <h5 className="text-2xl font-bold mb-3">{event.title}</h5>
                <p className="text-gray-300 text-sm mb-5">
                  {event.description}
                </p>
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
                          "https://cdc-ruby.vercel.app/createTeam",
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
