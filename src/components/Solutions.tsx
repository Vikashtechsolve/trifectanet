import React from 'react';
import { 
  Code, 
  CloudCog, 
  Database, 
  Globe, 
  Building2, 
  Bot 
} from 'lucide-react';

interface SolutionItemProps {
  icon: React.ReactNode;
  text: string;
  color: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ icon, text, color }) => (
  <div className="flex flex-col items-center group">
    <div className={`w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-5 
                    group-hover:scale-110 transition-all duration-300 shadow-md 
                    border border-gray-100 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-80"></div>
      <div className={`text-${color} relative z-10`}>
        {icon}
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
    <span className="text-center font-semibold text-gray-800 group-hover:text-[#0a3d62] transition-colors duration-300">{text}</span>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    { text: "Product Engineering", icon: <Code size={30} />, color: "blue-600" },
    { text: "SaaS & Cloud", icon: <CloudCog size={30} />, color: "cyan-500" },
    { text: "Data Management", icon: <Database size={30} />, color: "purple-600" },
    { text: "Web Technologies", icon: <Globe size={30} />, color: "green-500" },
    { text: "ERP & CRM", icon: <Building2 size={30} />, color: "orange-500" },
    { text: "AI – Chat Bot", icon: <Bot size={30} />, color: "red-500" }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-[#f47847] to-[#0a3d62]"></div>
      <div className="absolute top-40 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f47847] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 relative">
          Elevated Business Solutions
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#f47847]"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mt-4">
          At Accord Innovations, we offer business solutions that are based on advanced machine learning tools with automated feature engineering capabilities. These allow smooth operations and smarter data-based decision-making.          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
          {solutions.map((solution, index) => (
            <a 
              href="#" 
              key={index}
              className="hover:no-underline transform transition duration-300 hover:-translate-y-2"
            >
              <SolutionItem 
                icon={solution.icon} 
                text={solution.text}
                color={solution.color}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 