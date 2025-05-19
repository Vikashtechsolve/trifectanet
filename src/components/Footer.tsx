import React from 'react';
import { Link } from 'react-router-dom';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
    <h3 className="text-white text-lg font-medium mb-4">{title}</h3>
    {children}
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 mb-8">
            <img src="/images/accordlogo.png" alt="Accord Innovations Logo" className="h-12 mb-4" />
            <p className="mb-2">People-Powered Performance</p>
            <p className="mb-2">GL: +6.03 8322 7700</p>
            <p className="mb-2">contact@accordinnovations.com</p>
          </div>
          
          <FooterColumn title="Main Links">
            <ul>
              <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="mb-2"><Link to="/about-accord" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li className="mb-2"><Link to="/banking-financial-services" className="text-gray-400 hover:text-white">Industry</Link></li>
              <li className="mb-2"><Link to="/code-of-conduct" className="text-gray-400 hover:text-white">Code of Conduct</Link></li>
              <li className="mb-2"><Link to="/value-proposition" className="text-gray-400 hover:text-white">Value Proposition</Link></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn title="Services">
            <ul>
              <li className="mb-2"><Link to="/iot" className="text-gray-400 hover:text-white">IoT</Link></li>
              <li className="mb-2"><Link to="/software-development" className="text-gray-400 hover:text-white">Software Development</Link></li>
              <li className="mb-2"><Link to="/qa-testing-services" className="text-gray-400 hover:text-white">QA Testing Services</Link></li>
              <li className="mb-2"><Link to="/mobility-solutions" className="text-gray-400 hover:text-white">Mobility Solutions</Link></li>
              <li className="mb-2"><Link to="/cloud-services" className="text-gray-400 hover:text-white">Cloud Services</Link></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn title="IT Solutions">
            <ul>
              <li className="mb-2"><Link to="/product-engineering" className="text-gray-400 hover:text-white">Product Engineering</Link></li>
              <li className="mb-2"><Link to="/saas-cloud" className="text-gray-400 hover:text-white">SaaS & Cloud</Link></li>
              <li className="mb-2"><Link to="/data-analytics-business-intelligence" className="text-gray-400 hover:text-white">Data Management</Link></li>
              <li className="mb-2"><Link to="/web-technologies" className="text-gray-400 hover:text-white">Web Technologies</Link></li>
              <li className="mb-2"><Link to="/erp-crm" className="text-gray-400 hover:text-white">ERP & CRM</Link></li>
            </ul>
          </FooterColumn>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2023 Accord Innovations | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 