import { BiArrowBack, BiArrowFromRight, BiArrowToRight } from "react-icons/bi";
import { Lottie } from "../../hooks/lottie/lottie";
import { NavLink } from "react-router-dom";
const UpperSection = () => {
  return (
    <div className="h-full flex flex-row items-center bg-gray-900  text-white relative">
      <div className=" px-8 md:px-16 lg:px-24 mt-[10%] animate-fade-in">
        <div className="lg:text-6xl text-4xl font-bold font-poppins tracking-wide flex gap-3 items-start flex-wrap ">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text  ">
            CODERS
          </div>
          <div className="bg-gradient-to-r from-green-500 to-purple-500 text-transparent bg-clip-text">
            &
          </div>
          <div className="bg-gradient-to-r from-green-600 to-purple-500 text-transparent bg-clip-text">
            DEVELOPERS
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-purple-500 text-transparent bg-clip-text">
            CLUB
          </div>
        </div>

        <br></br>
        <br></br>
        <p className="text-lg lg:text-xl mb-4 ">
          Welcome to CDC, a community of passionate developers and coders. Step
          into a space where your curiosity drives exploration and your code
          shapes the future.
        </p>
        <h2 className="md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r">
          <span className="gradi-event-text">
            {"Bytes of Brilliance, Compiled"}
          </span>
          <span className="text-3xl animate-pulse">✨</span>
        </h2>
        {/* <p
  className="text-base gradi-event-text text-lg lg:text-xl inline font-semibold mb-6 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md shadow-lg"
>

</p> */}
        <h2 className="md:text-3xl sm:text-xl xs:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r">
          <span className="gradi-event-text">
            {" "}
            {"Algorithms, Unleashed ✨"}
          </span>
        </h2>
        <NavLink
                  to="/events">
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="px-6 py-3 border-[1px] border-blue-500 hover:border-blue-700 rounded-full text-lg transition-all duration-300 flex gap-2 items-center justify-center hover:text-clip-to-r from-blue-500 to-purple-500 hover:cursor-pointer z-50">
            <span className="text-red-500 animate-blink text-lg">⦿ </span>
            <span className="text-red-500 animate-blink">Live</span>

            <span className="lg:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 pl-4">
              AlgOlympics
            </span>
            <span className="text-2xl animate-pulse pr-4">✨</span>
          </div>
        </div>
        </NavLink>
      </div>

      <div className="hidden sm:flex sm:w-2/5 justify-center items-center animate-slide-in-right z-0">
        <div className="relative flex justify-center items-center z-3">
          <div className="relative right-[10%] top-[20%] w-[150px] h-[150px] sm:w-[400px] z-2 sm:h-[400px] rounded-full overflow-hidden border-4 border-blue-500 animate-bounce-slow shadow-lg">
            <Lottie
              link="https://lottie.host/2fa4a83b-52bb-48ac-97c2-f20c40bcab8d/qUb4kbltH4.json"
              wid="100%"
              className="sm:w-[60%] w-[90%]"
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
