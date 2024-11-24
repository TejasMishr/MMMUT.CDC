import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage1.jpg?alt=media&token=2bf595f2-f6e0-480e-a024-d9b2655e2ee9",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage2.jpg?alt=media&token=6f492e3a-f77a-47fc-b12c-74f57d60969c",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage3.jpg?alt=media&token=f7c3e129-b0ed-4278-a886-af4d40f8bad2",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage4.jpg?alt=media&token=9f6ccf7e-7baa-4436-a96c-ca2927515879",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage5.jpg?alt=media&token=3e8a8299-5d01-4e75-a36a-e559e030a1d3",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage6.jpg?alt=media&token=b07acb61-62ba-499f-96b3-2035a4902b18",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage7.jpg?alt=media&token=ccab5e22-947a-4aa8-acf6-8aefc57f94e0",
    "https://firebasestorage.googleapis.com/v0/b/cdc-website2023.appspot.com/o/glimpses%20of%20cdc%2Fimage9.jpg?alt=media&token=eea124e7-483e-46c3-a88e-9f91aaea02a4",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Next and Previous Slide Handlers
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center p-4 h-auto mx-auto z-20 relative">
       <h3 className="text-center mx-auto text-white font-bold xl:text-[50px] lg:text-4xl text-3xl leading-[1.25] z-20 mb-8 lg:mb-10">
          Glimpses of CDC
        </h3>
      <div className="relative w-full max-w-6xl  overflow-hidden mx-auto">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500  mx-auto"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full h-52 xs:w-60 xxs:w-48 sm:h-80 lg:h-96 flex-shrink-0 flex items-center justify-center mx-auto"
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg border border-blue-500 mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          ›
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-500'} cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
