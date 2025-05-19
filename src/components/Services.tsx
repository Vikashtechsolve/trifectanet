import React, { useState, useEffect } from 'react';
import { Server, Code, CheckSquare, Smartphone, Cloud, Cpu, ChevronRight } from 'lucide-react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  title, 
  description, 
  icon, 
  index, 
  isActive, 
  onClick 
}) => {
  // Calculate dynamic positioning based on screen size and index
  const getPosition = () => {
    // For larger screens - 3 columns layout
    if (window.innerWidth >= 1280) {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const offset = row % 2 === 0 ? 0 : 16.66;
      return {
        left: `${(col * 33.33) + offset}%`,
        top: row * 150
      };
    } 
    // For medium screens - 2 columns layout
    else if (window.innerWidth >= 768) {
      const row = Math.floor(index / 2);
      const col = index % 2;
      const offset = row % 2 === 0 ? 0 : 25;
      return {
        left: `${(col * 50) + offset}%`,
        top: row * 150
      };
    } 
    // For mobile - single column
    else {
      return {
        left: '50%',
        top: index * 160,
        transform: 'translateX(-50%)'
      };
    }
  };
  
  const [position, setPosition] = useState(getPosition());
  
  // Update position on window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition(getPosition());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [index]);
  
  // Use dynamic transition delay for staggered animation
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className={`absolute transition-all duration-700 cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
      style={{
        left: position.left,
        top: position.top,
        transform: isActive ? `${position.transform || ''} scale(1.1)` : position.transform || '',
        opacity: isActive ? 1 : 0.8,
        transitionDelay: animationDelay
      }}
      onClick={onClick}
    >
      {/* Hexagon shape with gradient background */}
      <div className={`w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 flex items-center justify-center relative ${isActive ? 'animate-pulse-slow' : 'hover:scale-105'} transition-transform duration-300`}>
        {/* Hexagon mask */}
        <div className="absolute inset-0 clip-path-hexagon bg-gradient-to-br from-[#0a3d62] to-[#f47847] shadow-xl"></div>
        
        {/* Connector lines to other hexagons - only visible on larger screens */}
        <div className="hidden lg:block">
          {index < 5 && (
            <div className="absolute w-16 h-1 bg-gradient-to-r from-[#0a3d62]/50 to-[#f47847]/50 origin-left"
                style={{ 
                  top: '50%',
                  left: '100%', 
                  transform: (index % 3 === 2) ? 'rotate(60deg)' : 'rotate(30deg)'
                }}></div>
          )}
        </div>
        
        {/* Inner border effect */}
        <div className="absolute inset-2 clip-path-hexagon border border-white/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-3 md:p-4">
          <div className="text-white mb-2 mx-auto transform transition-transform duration-300 group-hover:scale-110">
            {React.cloneElement(icon as React.ReactElement, { 
              className: 'h-8 w-8 md:h-10 md:w-10 mx-auto',
              strokeWidth: 1.5 
            })}
          </div>
          <h3 className="text-base md:text-lg font-bold text-white mb-1 transition-colors duration-300">{title}</h3>
          
          {/* Only show description when active */}
          {isActive && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-gray-800 p-4 md:p-6 rounded-lg shadow-xl w-64 md:w-72 mt-4 z-20 animate-fadeIn">
              <p className="text-sm">{description}</p>
              <a href="#" className="text-[#f47847] flex items-center text-sm font-medium mt-2 hover:underline">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [containerHeight, setContainerHeight] = useState(500);
  const [isMobile, setIsMobile] = useState(false);
  
  const services = [
    {
      title: "IoT Solutions",
      description: "Comprehensive IoT solutions designed to connect, monitor, and optimize your physical assets and operations for maximum efficiency and insight.",
      icon: <Server className="h-10 w-10" />
    },
    {
      title: "Software Dev",
      description: "Custom software solutions built to address your specific business challenges, streamline operations, and create exceptional user experiences.",
      icon: <Code className="h-10 w-10" />
    },
    {
      title: "QA Testing",
      description: "Rigorous quality assurance processes ensuring flawless performance, security, and reliability of your applications in real-world scenarios.",
      icon: <CheckSquare className="h-10 w-10" />
    },
    {
      title: "Mobility",
      description: "Mobile application development services across platforms that engage users, extend your reach, and provide seamless experiences on any device.",
      icon: <Smartphone className="h-10 w-10" />
    },
    {
      title: "Cloud Services",
      description: "Comprehensive cloud solutions to help you migrate, manage, and optimize your infrastructure for scalability, security, and cost efficiency.",
      icon: <Cloud className="h-10 w-10" />
    },
    {
      title: "AI Integration",
      description: "Cutting-edge AI solutions that provide intelligent insights, automation, and predictive capabilities to transform your business processes.",
      icon: <Cpu className="h-10 w-10" />
    }
  ];
  
  // Update container height and check device type
  useEffect(() => {
    const updateDimensions = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Calculate height based on screen size
      if (window.innerWidth >= 1280) {
        // Desktop - 3 column layout
        const rows = Math.ceil(services.length / 3);
        setContainerHeight(rows * 150 + 200);
      } else if (window.innerWidth >= 768) {
        // Tablet - 2 column layout
        const rows = Math.ceil(services.length / 2);
        setContainerHeight(rows * 150 + 200);
      } else {
        // Mobile - single column
        setContainerHeight(services.length * 160 + 100);
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [services.length]);
  
  // Close active service when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeService !== null && !(e.target as Element).closest('.hex-container')) {
        setActiveService(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeService]);
  
  // CSS for hexagon shape and animations
  const customCSS = `
    .clip-path-hexagon {
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse-slow {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 2s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    .animate-float {
      animation: float 5s ease-in-out infinite;
    }
    
    @keyframes glow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    
    .animate-glow {
      animation: glow 3s ease-in-out infinite;
    }
    
    /* For Firefox - which doesn't support clip-path well */
    @supports (-moz-appearance:none) {
      .clip-path-hexagon {
        border-radius: 10px;
      }
    }
  `;
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-[#0a3d62] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#f47847]/10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#0a3d62]/20 blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white rounded-full animate-glow"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#f47847] rounded-full animate-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-blue-400 rounded-full animate-glow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Custom CSS */}
      <style>{customCSS}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#f47847]/20 to-[#f47847]/40 text-[#f47847] rounded-full text-sm font-semibold tracking-wider mb-4">OUR EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Delivering Excellence Through Our Services  
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          At Accord Innovations, we offer business solutions that are based on advanced machine learning tools with automated feature engineering capabilities. These allow smooth operations and smarter data-based decision-making.          </p>
        </div>
        
        {/* Hexagonal grid services */}
        <div className="hex-container relative mx-auto" style={{ height: containerHeight, maxWidth: '100%' }}>
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isActive={activeService === index}
              onClick={() => setActiveService(activeService === index ? null : index)}
            />
          ))}
        </div>
        
        {/* View all services button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-gradient-to-r from-[#f47847] to-[#f47847]/80 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:shadow-lg hover:from-[#f47847]/90 hover:to-[#f47847]/70 transition-all duration-300 inline-flex items-center group">
            View All Services
            <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 