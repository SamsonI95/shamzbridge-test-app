import React, { useState, useEffect } from "react";

const HomeCarousel = () => {
  const images = [
    {
      url: "public/3.svg",
      text: "Welcome to Our Platform",
    },
    {
      url: "public/4.svg",
      text: "Discover Our Services",
    },
    {
      url: "public/1.svg",
      text: "Empowering Your Workforce",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showText, setShowText] = useState(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       );
  //       setImageLoaded(false);
  //       setShowText(false);
  //     }, 7000);

  //     return () => clearInterval(interval);
  //   }, [images.length]);

  //   const handleImageLoad = () => {
  //     setImageLoaded(true);

  //     setTimeout(() => {
  //       setShowText(true);
  //     }, 3000);
  //   };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    // Reset the image load and text visibility on slide change
    setImageLoaded(false);
    setShowText(false);

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 3000);

    // Change slide every 7 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimeout);
    };
  }, [currentIndex, images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute h-full flex items-center justify-center transition-all duration-1000 ease-in-out transform ${
              index === currentIndex
                ? "scale-100 opacity-100"
                : "scale-90 opacity-0"
            }`}
          >
            {/* SVG Image */}
            {index === currentIndex && (
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
              />
            )}

            {/* Text container */}
            {imageLoaded &&  (
              <div
                className={`absolute bottom-[4rem] left-[4rem] transform transition-all duration-1000 ease-in-out ${
                  showText
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } bg-gray-500 p-6 rounded-lg shadow-lg`}
              >
                <h2 className="text-white text-2xl font-bold text-center">
                  {image.text}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCarousel;
