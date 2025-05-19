import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Define CSS animations
const animationStyles = `
  @keyframes progress {
    0% { width: 0; }
    100% { width: 100%; }
  }
  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @keyframes slideInRight {
    0% { transform: translateX(-20px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInUp {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-in-out forwards;
  }
  
  .animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .animate-slideInUp {
    animation: slideInUp 0.8s ease-out forwards;
  }
  
  .animate-pulse {
    animation: pulse 1.5s infinite;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-progress {
    animation: progress 10s linear forwards;
  }
`;

interface TestimonialProps {
  logo: string;
  stat: string;
  description: string;
  image: string;
  statLabel?: string;
  isActive: boolean;
  isNext: boolean;
  isPrevious: boolean;
  direction: 'left' | 'right' | 'initial';
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  logo, 
  stat, 
  description, 
  image, 
  statLabel,
  isActive,
  isNext,
  isPrevious,
  direction
}) => {
  // Determine the appropriate animation classes based on state and direction
  let animationClasses = '';
  
  if (isActive) {
    animationClasses = 'translate-x-0 opacity-100 z-10';
  } else if (isNext && direction === 'left') {
    // Next slide entering when moving forward (coming from right)
    animationClasses = 'translate-x-full opacity-0';
  } else if (isPrevious && direction === 'right') {
    // Previous slide entering when moving backward (coming from left)
    animationClasses = '-translate-x-full opacity-0';
  } else if (!isActive && direction === 'left' && !isPrevious) {
    // Current slide exiting when moving forward (exiting to left)
    animationClasses = '-translate-x-full opacity-0';
  } else if (!isActive && direction === 'right' && !isNext) {
    // Current slide exiting when moving backward (exiting to right)
    animationClasses = 'translate-x-full opacity-0';
  } else {
    // Hidden slides
    animationClasses = 'translate-x-0 opacity-0';
  }

  return (
    <div 
      className={`absolute inset-0 rounded-lg overflow-hidden shadow-lg h-full bg-[#082a45] text-white transition-all duration-700 transform ${animationClasses} ${isActive ? '' : 'pointer-events-none'}`}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="Customer background" 
          className="w-full h-full object-cover opacity-60 transition-transform duration-10000 ease-in-out transform scale-100 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082a45] to-[#082a45]/70"></div>
      </div>
      
      <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col">
        {/* Logo */}
        <div className="mb-4 sm:mb-8 md:mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <img src={logo} alt="Company logo" className="h-10 sm:h-12 md:h-16 animate-fadeIn" />
        </div>
        
        {/* Stat */}
        <div className="flex-1">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 animate-numberCountUp">{stat}</div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-5 md:mb-8 animate-slideInRight">{statLabel || ''}</div>
          <p className="text-sm sm:text-base md:text-lg animate-fadeIn transition-opacity duration-1000 delay-300 line-clamp-4 sm:line-clamp-none">{description}</p>
        </div>
        
        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 animate-slideInUp">
          <button className="flex items-center text-white hover:text-[#f47847] transition-all duration-300 group text-sm sm:text-base">
            <span className="flex items-center justify-center bg-[#f47847] rounded-full w-6 h-6 sm:w-8 sm:h-8 mr-2 group-hover:animate-pulse">
              <Play className="h-3 w-3 sm:h-4 sm:w-4 ml-0.5" />
            </span>
            <span className="relative overflow-hidden inline-block">
              Watch Video
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f47847] group-hover:w-full transition-all duration-300"></span>
            </span>
          </button>
          
          <button className="flex items-center text-white hover:text-[#f47847] transition-colors group text-sm sm:text-base">
            <span className="relative overflow-hidden inline-block">
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f47847] group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'initial'>('initial');
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const testimonials = [
    {
      logo: "https://accordinnovations.com/admin/uploads/07-10-2023-1696648868.jpg",
      stat: "55",
      statLabel: "days to deploy IT Service Management",
      description: "Transforming fan experiences with faster service delivery",
      image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      logo: "https://accordinnovations.com/admin/uploads/07-10-2023-1696648569.jpg",
      stat: "1",
      statLabel: "company-wide dashboard, maximizing investments and maintaining regulatory compliance",
      description: "Optimizing performance with real-time analytics and seamless operations",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      logo: "https://accordinnovations.com/admin/uploads/07-10-2023-1696649028.jpg",
      stat: "30%",
      statLabel: "increase in customer satisfaction",
      description: "Delivering exceptional healthcare solutions through digital transformation",
      image: "https://images.unsplash.com/photo-1504684693093-db039a692b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      logo: "https://accordinnovations.com/admin/uploads/07-10-2023-1696649098.jpg",
      stat: "43%",
      statLabel: "reduction in operational costs",
      description: "Streamlining payment processes and enhancing security protocols",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      logo: "https://accordinnovations.com/admin/uploads/07-10-2023-1696648556.jpg",
      stat: "97%",
      statLabel: "customer retention rate after implementing our solution",
      description: "Revolutionizing telecommunications with AI-powered customer service",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];
  
  // Calculate next and previous indices
  const nextIndex = (activeIndex + 1) % testimonials.length;
  const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  
  // Reset auto rotation timer
  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (!isPaused) {
      timerRef.current = window.setTimeout(() => {
        nextTestimonial();
      }, 10000);
      
      // Reset and restart progress animation
      if (progressRef.current) {
        progressRef.current.style.animation = 'none';
        // Force reflow
        void progressRef.current.offsetWidth;
        progressRef.current.style.animation = 'progress 10s linear forwards';
      }
    }
  };
  
  // Navigate to next testimonial
  const nextTestimonial = () => {
    setSlideDirection('left');
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setSlideDirection('right');
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Handle logo click
  const handleLogoClick = (index: number) => {
    if (index > activeIndex) {
      setSlideDirection('left');
    } else if (index < activeIndex) {
      setSlideDirection('right');
    }
    setActiveIndex(index);
    resetTimer();
  };
  
  // Auto rotate testimonials every 10 seconds
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white">
      {/* CSS for animations */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#052e49] leading-tight mb-6 md:mb-0 md:max-w-xl animate-float">
            When our customers work, the world works
          </h2>
          <a 
            href="#" 
            className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            See All Customer Stories
          </a>
        </div>
        
        {/* Active Testimonial Card Container */}
        <div 
          className="mb-8 sm:mb-12 md:mb-16 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            resetTimer();
          }}
        >
          {/* Animate slide transitions */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              logo={testimonial.logo}
              stat={testimonial.stat}
              statLabel={testimonial.statLabel}
              description={testimonial.description}
              image={testimonial.image}
              isActive={index === activeIndex}
              isNext={index === nextIndex}
              isPrevious={index === prevIndex}
              direction={slideDirection}
            />
          ))}
          
          {/* Navigation buttons overlaid on testimonial */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Mobile CTA */}
        <div className="md:hidden mb-8 sm:mb-12">
          <a 
            href="#" 
            className="block text-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
          >
            See All Customer Stories
          </a>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 mb-6 sm:mb-8 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-[#f47847] animate-progress"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          ></div>
        </div>
        
        {/* Company Logos */}
        <div className="flex items-center justify-center">
          <button 
            onClick={prevTestimonial}
            className="p-2 sm:p-3 rounded-full border border-gray-300 hover:border-[#0a3d62] hover:bg-gray-50 mr-3 sm:mr-6 transition-all duration-300 hover:shadow-md transform hover:-translate-x-1"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </button>
          
          <div className="flex items-center justify-center space-x-4 sm:space-x-8 md:space-x-12 overflow-x-auto no-scrollbar px-2">
            {testimonials.map((testimonial, index) => {
              // Calculate position relative to active index
              const position = (index - activeIndex + testimonials.length) % testimonials.length;
              
              // Only show logos in range [-1, 1] on mobile and [-2, 2] on desktop
              const isVisible = isMobile 
                ? position <= 1 && position >= -1 
                : position <= 2 && position >= -2;
              
              return (
                <button 
                  key={index}
                  onClick={() => handleLogoClick(index)}
                  className={`transition-all duration-500 focus:outline-none flex-shrink-0 ${
                    !isVisible ? 'hidden' : ''
                  } ${
                    position === 0 
                      ? 'opacity-100 scale-110 sm:scale-125 transform-gpu' 
                      : 'opacity-50 hover:opacity-75 transform-gpu hover:scale-110'
                  }`}
                >
                  <img 
                    src={testimonial.logo} 
                    alt={`Company logo ${index + 1}`} 
                    className={`h-8 sm:h-10 max-w-[80px] sm:max-w-[120px] object-contain ${
                      position === 0 ? 'animate-float' : ''
                    }`}
                  />
                </button>
              );
            })}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-2 sm:p-3 rounded-full border border-gray-300 hover:border-[#0a3d62] hover:bg-gray-50 ml-3 sm:ml-6 transition-all duration-300 hover:shadow-md transform hover:translate-x-1"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Mobile Dots Indicator */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleLogoClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#f47847] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 