import React from 'react';
import { Clock, Zap, DollarSign, Users, Cpu, Heart } from 'lucide-react';

interface LegacyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const LegacyCard: React.FC<LegacyCardProps> = ({ title, description, icon, index }) => {
  // Calculate animation delay based on index
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border-l-4 border-[#f47847] overflow-hidden relative group"
      style={{ 
        animationDelay, 
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      {/* Background pattern */}
      <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#f47847]/5 to-[#0a3d62]/5 transition-all duration-500 group-hover:scale-150"></div>
      
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#f47847]/10 to-[#0a3d62]/10 mb-5 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 relative z-10">{description}</p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0a3d62] group-hover:w-full transition-all duration-700 ease-out"></div>
    </div>
  );
};

const Legacy: React.FC = () => {
  const legacyItems = [
    {
      title: "15 years of experience",
      description: "Delivering exceptional IT solutions with expertise gained over a decade and a half.",
      icon: <Clock size={28} />
    },
    {
      title: "Fast and effective solutions",
      description: "Quick implementation of efficient solutions tailored to your business needs.",
      icon: <Zap size={28} />
    },
    {
      title: "Flexible pricing system",
      description: "Adaptable pricing options that work with your budget constraints.",
      icon: <DollarSign size={28} />
    },
    {
      title: "Best Industry experts",
      description: "Access to top-tier professionals with deep domain knowledge and technical expertise.",
      icon: <Users size={28} />
    },
    {
      title: "Advanced Technology work",
      description: "Cutting-edge technological implementations that keep you ahead of the competition.",
      icon: <Cpu size={28} />
    },
    {
      title: "Customized and Innovative Problem solving",
      description: "Solutions designed with your specific requirements and satisfaction as our priority.",
      icon: <Heart size={28} />
    },
    {
      title: "Customer-centric approach",
      description: "Solutions designed with your specific requirements and satisfaction as our priority.",
      icon: <Heart size={28} />
    },
    {
      title: "Continuous learning culture",
      description: "Solutions designed with your specific requirements and satisfaction as our priority.",
      icon: <Heart size={28} />
    },
    {
      title: "Global presence and reach",
      description: "Solutions designed with your specific requirements and satisfaction as our priority.",
      icon: <Heart size={28} />
    }
  ];

  // CSS animations
  const animations = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Add animations CSS */}
      <style dangerouslySetInnerHTML={{ __html: animations }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <div className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-50 text-[#0a3d62] text-sm font-medium border border-blue-100">
            Our Strengths
          </div> */}
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#0a3d62] relative inline-block ">
            Our Legacy
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a3d62] to-[#f47847]"></span> */}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Building on years of expertise and innovation to deliver exceptional value and transformative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legacyItems.map((item, index) => (
            <LegacyCard 
              key={index} 
              title={item.title} 
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy; 