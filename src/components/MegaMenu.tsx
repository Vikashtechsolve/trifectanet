import React, { useState, useEffect } from 'react';
import { ChevronRight, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface MenuFeature {
  name: string;
  link: string;
}

interface MenuItem {
  items: MenuFeature[];
  description: string;
  cta: string;
  features: string[];
}

interface MenuData {
  [key: string]: {
    [key: string]: MenuItem;
  };
}

interface MegaMenuProps {
  onClose: () => void;
  activeSection?: string;
}

const menuData: MenuData = {
  Products: {
    'Featured products': {
      items: [
        { name: 'About Accord Innovations', link: '/about-accord' },
        { name: 'Overview', link: '/overview' },
        { name: 'Vision & Mission', link: '/vision-mission' },
        { name: 'Our Story', link: '/our-story' },
        { name: 'Executive Leadership Team', link: '/executive-leadership' },
        { name: 'Our clientele', link: '/our-clientele' },
        { name: 'Code of Conduct', link: '/code-of-conduct' },
        { name: 'Value Proposition', link: '/value-proposition' },
        { name: 'Sustainability', link: '/sustainability' },
        { name: 'Anti Bribery & Anti-Corruption Policy', link: '/anti-bribery-policy' },
        { name: 'PDPA', link: '/pdpa' },
      ],
      description: 'Unite people, processes, and systems with AI-powered products for all your workflows.',
      cta: 'See All Products',
      features: [
        'Put AI to work with the Now Platform',
        'Connect and automate workflows',
        'Single AI platform for business transformation',
        'Drive productivity and ROI',
      ],
    },
    'AI at ServiceNow': {
      items: [
        { name: 'IoT', link: '/iot' },
        { name: 'Software Development', link: '/software-development' },
        { name: 'QA Testing', link: '/qa-testing' },
        { name: 'Mobile Solutions', link: '/mobile-solutions' },
        { name: 'Analytics & Reporting', link: '/analytics-reporting' },
      ],
      description: 'Take action with autonomous AI agents that work for you.',
      cta: 'Explore Platform',
      features: [
        'Productivity and efficiency',
        'Customer and employee experience',
        'Security and compliance',
        'Advanced automation capabilities',
      ],
    },
  },
  Industries: {
    'Featured Industries': {
      items: [
        { name: 'Banking & Financial Services', link: '/banking-financial-services' },
        { name: 'Insurance', link: '/insurance' },
        { name: 'Telecommunications', link: '/telecommunications' },
        { name: 'Software', link: '/software' },
        { name: 'Healthcare', link: '/healthcare' },
        { name: 'Aerospace & Aviation', link: '/aerospace-and-aviation' },
        { name: 'Manufacturing', link: '/manufacturing' },
        { name: 'Retail', link: '/retail' },
        { name: 'Consumer Electronics Sector', link: '/consumer-electronics-sector' },
        { name: 'Energy', link: '/energy' },
        { name: 'Travel & Logistics', link: '/travel-and-logistics' },
        { name: 'Life Sciences', link: '/life-science' },
        { name: 'Medical Devices', link: '/medical-devices' },
        { name: 'Pharmaceutical', link: '/pharmaceutical' },
        { name: 'Automotive', link: '/automotive' },
      ],
      description: 'Industry-specific solutions to transform your business operations.',
      cta: 'Explore Industries',
      features: [
        'Tailored workflows',
        'Industry best practices',
        'Compliance ready',
        'Rapid time to value',
      ],
    },
  },
  Learning: {
    Resources: {
      items: [
        { name: 'Now Learning', link: '/now-learning' },
        { name: 'Certification Programs', link: '/certification-programs' },
        { name: 'Developer Portal', link: '/developer-portal' },
        { name: 'Community', link: '/community' },
        { name: 'Documentation', link: '/documentation' },
        { name: 'Training Courses', link: '/training-courses' },
        { name: 'Best Practices', link: '/best-practices' },
        { name: 'Success Stories', link: '/success-stories' },
      ],
      description: 'Comprehensive learning resources to help you succeed.',
      cta: 'Start Learning',
      features: [
        'Self-paced courses',
        'Hands-on labs',
        'Expert-led training',
        'Certification paths',
      ],
    },
  },
  Support: {
    'Support Options': {
      items: [
        { name: 'IoT', link: '/iot' },
        { name: 'Software Development Services', link: '/software-development' },
        { name: 'QA Testing Services', link: '/qa-testing' },
        { name: 'Mobility Solutions', link: '/mobility-solutions' },
        { name: 'Data Analytics & Business Intelligence', link: '/data-analytics' },
        { name: 'Professional & Managed Services', link: '/managed-services' },
        { name: 'Cloud Services', link: '/cloud-services' },
        { name: 'Infrastructure Management Services', link: '/infrastructure-management' },
        { name: 'Artificial Intelligence', link: '/artificial-intelligence' },
      ],
      description: 'Get the help you need to succeed with our platform.',
      cta: 'Get Support',
      features: [
        '24/7 technical support',
        'Dedicated success managers',
        'Expert consultants',
        'Global support coverage',
      ],
    },
  },
  Solutions: {
    'Our Solutions': {
      items: [
        { name: 'Product Engineering', link: '/product-engineering' },
        { name: 'SaaS & Cloud', link: '/saas-cloud' },
        { name: 'Data Management', link: '/data-management' },
        { name: 'Web Technologies', link: '/web-technologies' },
        { name: 'ERP & CRM', link: '/erp-crm' },
        { name: 'AI – Chat Bot', link: '/ai-chat-bot' }
      ],
      description: 'Comprehensive solutions to transform your business operations.',
      cta: 'Explore Solutions',
      features: [
        'Cutting-edge technology',
        'Scalable solutions',
        'Industry expertise',
        'Proven track record'
      ]
    }
  },
  Services: {
    'Our Services': {
      items: [
        { name: 'ITSM', link: '/itsm' },

        { name: 'IoT', link: '/iot' },
        { name: 'ServiceNow Offerings by AI-GTS', link: '/service-now-offerings-by-ai-gts' },
        { name: 'BMC Suite', link: '/bmc-suite' },
        { name: 'Automation and Hyperautomation', link: '/automation-hyperautomation' },
        { name: 'Monitoring & Observability', link: '/monitoring-observability' },
        { name: 'Artificial Intelligence', link: '/artificial-intelligence' },
        { name: 'Gen-AI Solution Offerings by AI-GTS ', link: '/gen-ai-solution-offerings-by-ai-gts' },
        { name: 'Software Development Services', link: '/software-development' },
        { name: 'QA Testing Services', link: '/qa-testing-services' },
        { name: 'Mobility Solutions', link: '/mobility-solutions' },
        { name: 'Data Analytics & Business Intelligence', link: '/data-analytics-business-intelligence' },
        { name: 'Professional & Managed Services', link: '/professional-managed-services' },
        { name: 'Cloud Services', link: '/cloud-services' },
        { name: 'Infrastructure Management Services', link: '/infrastructure-management-services' },
        { name: 'DevOps', link: '/devops' },
        { name: 'Mission Critical Facilities', link: '/mission-critical-facilities' },
        
        

      ],
      description: 'Comprehensive technology services to drive your digital transformation journey.',
      cta: 'Explore Services',
      features: [
        'End-to-end solutions',
        'Expert consulting',
        'Industry best practices',
        'Innovative technologies'
      ]
    }
  },
  Partners: {
    'Partner Programs': {
      items: [
        { name: 'Partner Portal', link: '/partner-portal' },
        { name: 'Technology Partners', link: '/technology-partners' },
        { name: 'Service Partners', link: '/service-partners' },
        { name: 'Sales Partners', link: '/sales-partners' },
        { name: 'Partner Directory', link: '/partner-directory' },
        { name: 'Partner Training', link: '/partner-training' },
        { name: 'Partner Resources', link: '/partner-resources' },
        { name: 'Success Stories', link: '/partner-success-stories' }
      ],
      description: 'Join our partner ecosystem and grow your business.',
      cta: 'Become a Partner',
      features: [
        'Partner benefits',
        'Sales enablement',
        'Technical resources',
        'Marketing support'
      ]
    }
  },
  About: {
    'About Us': {
      items: [
        { name: 'About Accord Innovations', link: '/about-accord' },
        { name: 'Overview', link: '/overview' },
        { name: 'Vision & Mission', link: '/vision-mission' },
        { name: 'Our Story', link: '/our-story' },
        { name: 'Executive Leadership Team', link: '/executive-leadership' },
        { name: 'Our Clientele', link: '/our-clientele' },
        { name: 'Code of Conduct', link: '/code-of-conduct' },
        { name: 'Value Proposition', link: '/value-proposition' },
        { name: 'Sustainability', link: '/sustainability' },
        { name: 'Anti Bribery & Anti-Corruption Policy', link: '/anti-bribery-corruption' },
        { name: 'PDPA', link: '/pdpa' }
      ],
      description: 'Learn about our company, values, and commitment to excellence.',
      cta: 'Learn More',
      features: [
        'Global presence',
        'Industry leadership',
        'Innovation culture',
        'Social impact'
      ]
    }
  },
  Knowledge: {
    Resources: {
      items: [
        { name: 'Blog', link: '/blog' },
        { name: 'Case Studies', link: '/case-studies' },
        { name: 'Whitepapers', link: '/whitepapers' },
        { name: 'Webinars', link: '/webinars' },
        { name: 'eBooks', link: '/ebooks' },
        { name: 'Podcasts', link: '/podcasts' },
        { name: 'Research', link: '/research' },
        { name: 'ROI Calculator', link: '/roi-calculator' }
      ],
      description: 'Discover insights and resources to drive digital transformation.',
      cta: 'Explore Resources',
      features: [
        'Industry insights',
        'Success stories',
        'Best practices',
        'Thought leadership'
      ]
    }
  }
};

const MegaMenu: React.FC<MegaMenuProps> = ({ onClose, activeSection = 'Products' }) => {
  const navigate = useNavigate();
  const currentSection = menuData[activeSection] || menuData.Products;
  const categories = Object.keys(currentSection);

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || '');
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  // Update selected category when section changes
  useEffect(() => {
    const firstCategory = Object.keys(currentSection)[0] || '';
    setSelectedCategory(firstCategory);
    setExpandedMobileCategory(null);
  }, [activeSection, currentSection]);

  // Toggle mobile category expansion
  const toggleMobileCategory = (category: string) => {
    setExpandedMobileCategory(expandedMobileCategory === category ? null : category);
  };

  // Ensure we have a valid category and data
  const selectedCategoryData = currentSection[selectedCategory];
  if (!selectedCategoryData) {
    return null;
  }

  const handleLinkClick = (link: string) => {
    onClose();
    navigate(link);
  };

  return (
    <div className="w-full bg-[#0a3d62] shadow-2xl shadow-black/50 border-t border-gray-700 max-h-[85vh] md:max-h-[80vh] overflow-y-auto relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#f47847] transition-colors duration-200 z-50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Mobile View */}
        <div className="md:hidden">
          <h3 className="text-xl text-white font-semibold mb-4">{activeSection}</h3>
          <p className="text-gray-300 mb-4 text-sm">
            {currentSection[selectedCategory].description}
          </p>
          
          {/* Mobile Categories Accordion */}
          <div className="mt-4 border-t border-gray-700 pt-4">
            {categories.map((category) => (
              <div key={category} className="mb-2 border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleMobileCategory(category)}
                  className="w-full flex justify-between items-center p-2 text-left"
                >
                  <span className={`font-medium ${expandedMobileCategory === category ? 'text-[#f47847]' : 'text-white'}`}>
                    {category}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      expandedMobileCategory === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedMobileCategory === category && (
                  <div className="pl-2 pt-2 pb-1">
                    <div className="grid grid-cols-1 gap-y-2">
                      {currentSection[category].items.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.link);
                          }}
                          className="block text-gray-300 hover:text-[#f47847] py-1 px-2 text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    
                    <div className="mt-4 mb-2">
                      <a 
                        href="#"
                        className="text-[#f47847] font-medium inline-flex items-center text-sm"
                      >
                        {currentSection[category].cta}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Features */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <h4 className="text-white font-semibold mb-4 text-base">Key Features</h4>
            <div className="space-y-3">
              {selectedCategoryData.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-[#f47847] rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <p className="text-gray-300 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Products header and categories */}
            <div className="w-full md:w-1/3 xl:w-1/4 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0">
              <h3 className="text-xl text-white font-semibold mb-4">{activeSection}</h3>
              <p className="text-gray-300 mb-4">
                {currentSection[selectedCategory].description}
              </p>
              <a 
                href="#"
                className="text-[#f47847] font-medium hover:underline inline-flex items-center mb-6"
              >
                {currentSection[selectedCategory].cta}
                <ChevronRight className="h-5 w-5 ml-1" />
              </a>
              
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  FEATURED PRODUCTS
                </h4>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left py-2 transition-colors duration-200 text-base 
                          ${selectedCategory === category 
                            ? 'text-[#f47847] font-semibold' 
                            : 'text-white hover:text-[#f47847]'}`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Items Grid */}
            <div className="w-full md:w-2/3 xl:w-3/4 pl-0 md:pl-8 pt-6 md:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {selectedCategoryData.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.link);
                    }}
                    className="block group text-gray-200 hover:text-[#f47847] transition-colors duration-200"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300">
                      Transform service management
                    </div>
                  </a>
                ))}
              </div>

              {/* Bottom Features Section */}
              <div className="mt-12 border-t border-gray-700 pt-8">
                <h4 className="text-white font-semibold mb-6">
                  Put AI to work with the Now Platform
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedCategoryData.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 mt-1 bg-[#f47847] rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;