import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Palette, Cloud, Terminal, Database, BarChart2, TestTube, Layers, Server, MessageSquare, Shield, Cpu } from 'lucide-react';

interface TechCategoryProps {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TechCategory: React.FC<TechCategoryProps> = ({ name, icon, isActive, onClick }) => (
  <button 
    className={`flex items-center justify-center px-5 py-3 rounded-full transition-all duration-300 ${
      isActive 
        ? 'bg-white text-[#f47847] border-2 border-[#f47847] shadow-md' 
        : 'bg-white text-gray-700 border border-[#f47847] hover:text-[#f47847] hover:shadow-sm'
    }`}
    onClick={onClick}
  >
    <span className="text-lg font-medium">{name}</span>
  </button>
);

interface TechContentProps {
  category: string;
  isActive: boolean;
}

const TechContent: React.FC<TechContentProps> = ({ category, isActive }) => {
  if (!isActive) return null;
  
  // Use technologies relevant to each category
  const technologies = {
    "Development Languages": [".NET", "Java", "Python", "Node.js", "C++", "Ruby", "TypeScript", "R"],
    "Mobile": ["Android", "iOS", "React Native", "Flutter", "Xamarin", "Ionic", "Swift", "Kotlin"],
    "UI / UX": ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin", "Wireframing", "Prototyping", "User Testing"],
    "Cloud Computing": ["AWS", "Azure", "GCP", "IBM Cloud", "Oracle Cloud", "Alibaba Cloud", "Digital Ocean", "Heroku"],
    "DevOps": ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CircleCI", "Terraform", "Ansible", "Chef"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle", "Redis", "Cassandra", "DynamoDB"],
    "Reporting & Analytics": ["Power BI", "Tableau", "Looker", "QuickSight", "Grafana", "Kibana", "Splunk", "Metabase"],
    "QA & Testing": ["Selenium", "Cypress", "Jest", "JUnit", "TestNG", "Postman", "LoadRunner", "Katalon"],
    "Low Code No Code": ["OutSystems", "Mendix", "Power Apps", "Appian", "Bubble", "Zapier", "Airtable", "Retool"],
    "ERP": ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite", "Sage", "Infor", "Epicor", "IFS"],
    "Chat GPT": ["GPT-3", "GPT-4", "Claude", "Llama", "Bard", "Chatbot", "NLP", "Conversational AI"],
    "Big data and cyber intelligence": ["Hadoop", "Spark", "Elasticsearch", "Snowflake", "Palantir", "Splunk", "Cloudera", "DataBricks"],
    "RPA and AI": ["UiPath", "Automation Anywhere", "Blue Prism", "TensorFlow", "PyTorch", "OpenAI", "Keras", "scikit-learn"]
  };
  
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies[category as keyof typeof technologies]?.map((tech, i) => (
          <div 
            key={i} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-[#f47847] hover:shadow-md transition-all duration-300 group"
            style={{animation: `fadeInUp 0.5s ease-out ${i * 50}ms forwards`}}
          >
            <h3 className="text-lg font-medium text-[#0a3d62] mb-2 group-hover:text-[#f47847] transition-colors">
              {tech}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
              {category} solution
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStack: React.FC = () => {
  const categories = [
    { name: "Development Languages", icon: <Code size={20} /> },
    { name: "Mobile", icon: <Smartphone size={20} /> },
    { name: "UI / UX", icon: <Palette size={20} /> },
    { name: "Cloud Computing", icon: <Cloud size={20} /> },
    { name: "DevOps", icon: <Terminal size={20} /> },
    { name: "Databases", icon: <Database size={20} /> },
    { name: "Reporting & Analytics", icon: <BarChart2 size={20} /> },
    { name: "QA & Testing", icon: <TestTube size={20} /> },
    { name: "Low Code No Code", icon: <Layers size={20} /> },
    { name: "ERP", icon: <Server size={20} /> },
    { name: "Chat GPT", icon: <MessageSquare size={20} /> },
    { name: "Big data and cyber intelligence", icon: <Shield size={20} /> },
    { name: "RPA and AI", icon: <Cpu size={20} /> }
  ];
  
  const [activeCategory, setActiveCategory] = useState(0);
  
  // CSS animations
  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
    <section className="py-16 bg-white">
      {/* Add animations CSS */}
      <style dangerouslySetInnerHTML={{ __html: animations }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            <span className="text-black">Tailored</span> <span className="text-[#f47847]">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl">
          We closely work with our clients to understand their business, needs, and goals. Harnessing the power of our unique tech stack, we ensure the delivery of best-suited and optimal software solutions. Our exclusive tech stack is capable of efficiently catering to frontend and backend development, RPA, AI solutions, encompassing the entire SDLC cycle.

Our commitment to delivering precisely tailored solutions begins with a deep partnership with our clients which ensures we completely comprehend your business intricacies, needs, and aspirations. Our unique tech stack is the foundation of our ability to provide you with optimal software solutions. It spans the entire spectrum of development, from frontend to backend, and extends into cutting-edge domains like Robotic Process Automation (RPA) and Artificial Intelligence (AI).
          </p>
        </div>
        
        {/* Tech Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <TechCategory 
              key={index} 
              name={category.name} 
              icon={category.icon}
              isActive={index === activeCategory} 
              onClick={() => setActiveCategory(index)} 
            />
          ))}
        </div>
        
        {/* Content for selected category */}
        {categories.map((category, index) => (
          <TechContent 
            key={index}
            category={category.name}
            isActive={index === activeCategory}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack; 