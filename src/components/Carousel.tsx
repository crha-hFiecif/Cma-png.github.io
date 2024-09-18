import { useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[]; // Array of image URLs
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Image display */}
      <div className="w-full h-96 relative">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};