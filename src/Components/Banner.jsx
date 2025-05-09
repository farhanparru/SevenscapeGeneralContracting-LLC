import { useEffect, useState } from 'react';
import slide1 from '../assets/Images/My.jpg';
import slide2 from '../assets/Images/image.png';
import slide3 from '../assets/Images/360_F_449777053_UkgXoBYCWQexHZGuGM5f5VprWLGSnW7B.png';
import '../BannerAnimation.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const slides = [slide1, slide2, slide3];

  // Shorter text options
  const textOptions = [
    "Quality Construction Services",
    "Civil Infrastructure Experts",
    "Your Trusted Contractor"
  ];
  
  const typingSpeed = 50;
  const eraseSpeed = 30;
  const pauseDuration = 2000;
  // eslint-disable-next-line no-unused-vars
  const textChangeDelay = 3000; // Delay before switching to next text

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-typing effect with multiple text options
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    let isDeleting = false;
    let currentTextIndex = 0;
    let currentText = textOptions[currentTextIndex];

    const type = () => {
      if (isDeleting) {
        // Erasing text
        setDisplayText(currentText.substring(0, currentIndex - 1));
        currentIndex--;
        
        if (currentIndex === 0) {
          isDeleting = false;
          // Move to next text
          currentTextIndex = (currentTextIndex + 1) % textOptions.length;
          currentText = textOptions[currentTextIndex];
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(type, eraseSpeed);
        }
      } else {
        // Typing text
        setDisplayText(currentText.substring(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex === currentText.length) {
          isDeleting = true;
          timeout = setTimeout(type, pauseDuration);
        } else {
          timeout = setTimeout(type, typingSpeed);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Responsive height */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            
            {/* Text Overlay with earthy color theme */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="text-center px-4 max-w-4xl">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
                  {displayText}
                  <span className="typing-cursor">|</span>
                </h1>
              
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators - changed to amber color */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-500 w-6' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-all duration-300">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              d="M5 1L1 5l4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white transition-all duration-300">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              d="M1 9l4-4-4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Home;