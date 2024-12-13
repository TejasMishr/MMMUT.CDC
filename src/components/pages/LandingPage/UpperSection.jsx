const UpperSection = () => {
  return (
    <div className="h-full flex flex-row items-center bg-gray-900  text-white relative">
    
    
      <div className="w-3/5 px-8 md:px-16 lg:px-24 mt-[10%] animate-fade-in">
     
      <span className="lg:text-6xl text-4xl  font-bold font-poppins tracking-wide">
            CODERS & DEVELOPERS CLUB

          </span>
          
          <br></br>
          <br></br>
        <p className="text-lg lg:text-xl mb-4 ">
          Welcome to CDC, a community of passionate developers and coders. Step
          into a space where your curiosity drives exploration and your code
          shapes the future.
        </p>
        <h2 className="md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r">
        <span className="gradi-event-text">  {"Bytes of Brilliance, Compiled ✨"}</span>
        </h2>
        {/* <p
  className="text-base gradi-event-text text-lg lg:text-xl inline font-semibold mb-6 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md shadow-lg"
>

</p> */}

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md text-lg transition-all duration-300 shadow-lg">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-blue-500 hover:border-blue-700 rounded-md text-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>


      <div className="w-2/5 flex justify-center items-center animate-slide-in-right">
        <div className="relative flex justify-center items-center">
         
          <div className="w-[150px] h-[150px] sm:w-[280px]  sm:h-[280px] rounded-full overflow-hidden border-4 border-blue-500 animate-bounce-slow shadow-lg">
            <img
              src="./events/img3.jpeg"
              alt="Coding Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    
      <div className="absolute inset-0 z-0 grid grid-cols-7 grid-rows-7 gap-0 opacity-5">
        {[...Array(49)].map((_, index) => (
          <div key={index} className="border border-gray-700"></div>
        ))}
      </div>
    </div>
  );
};

export default UpperSection;
