import React from "react";

const FacultyAdvisor = () => {
  return (
    <div id="team" className="py-10 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center team-grp">
          <div className="w-full md:w-1/2 lg:w-1/4 p-5">
            <div className="team-1 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="pic">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/test1-80c19.appspot.com/o/Codechef_team%2Fassets%2FRktSir.jpeg?alt=media&token=080aaecd-b32c-4336-8f7b-6913bf515b74"
                  alt="Profile"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Information Section */}
              <div className="team-info text-center p-5">
                <h4 className="text-lg font-bold text-gray-100">
                  Dr. Rohit Tiwari
                </h4>
                <span className="block text-sm text-gray-500 mt-2">
                  Assistant Professor at Madan Mohan Malaviya University of
                  Technology
                </span>
                <div className="social flex justify-center space-x-4 mt-4">
                  <a
                    href="mailto:"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-pink-500 transition-colors"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dr-rohit-tiwari-372571a3/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyAdvisor;
