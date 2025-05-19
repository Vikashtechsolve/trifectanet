import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Globe, User, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onProductsClick?: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (label: string) => {
    if (label === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/home');
      return;
    }
    if (label === 'Career' || label === 'Contact Us') {
      // For Career and Contact Us, prevent dropdown behavior
      setMobileMenuOpen(false);
      return;
    }
    if (activeMenu === label) {
      setActiveMenu(null);
    } else {
      setActiveMenu(label);
    }
    // Close mobile menu when a menu item is clicked
    setMobileMenuOpen(false);
  };

  const handleNavigation = (label: string) => {
    if (label === 'Career') {
      navigate('/career');
    } else if (label === 'Contact Us') {
      navigate( '/contact');
    } else if (label === 'Overview') {
      navigate( '/overview');
    }
  };

  const navItems = [
    { label: 'Home', hasDropdown: false },
    { label: 'About', hasDropdown: true },
    { label: 'Services', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'Career', hasDropdown: false },
    { label: 'Contact Us', hasDropdown: false },
  ];

  return (
    <div className="relative">
      <header className={`bg-[#0a3d62] border-b border-gray-700 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center">
                {/* SVG representation of the logo */}
                <div className="mr-2 hidden xs:block">
                  <svg width="32" height="28" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0C13.6 8 7.2 16 0.8 24C0.4 24.7 0 25.3 0 26C0 26.7 0.3 27.3 0.8 28C7.2 20 13.6 12 20 4C26.4 12 32.8 20 39.2 28C39.7 27.3 40 26.7 40 26C40 25.3 39.6 24.6 39.2 24C32.8 16 26.4 8 20 0Z" fill="#D60C00"/>
                    <path d="M20 8C15.2 14 10.4 20 5.6 26C5.3 26.3 5 26.7 5 27C5 27.3 5.2 27.7 5.6 28C10.4 22 15.2 16 20 10C24.8 16 29.6 22 34.4 28C34.8 27.7 35 27.3 35 27C35 26.7 34.7 26.3 34.4 26C29.6 20 24.8 14 20 8Z" fill="#FFA500"/>
                  </svg>
                </div>
                {/* Text logo */}
                <img src="/images/accordlogo.png" alt="Accord Innovations" className="w-16 h-12 md:w-20 md:h-16 mr-2" />
                <span className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
                  <span className="text-[#f47847]"> </span>
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-200 hover:text-[#f47847] focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                >
                  <button
                    onClick={() => {
                      handleMenuClick(item.label);
                      if (item.label === 'Career' || item.label === 'Contact Us') {
                        handleNavigation(item.label);
                      }
                    }}
                    className={`inline-flex items-center px-1 py-2 text-sm font-medium transition-colors ${
                      activeMenu === item.label
                        ? 'text-[#f47847]'
                        : 'text-gray-200 hover:text-[#f47847]'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeMenu === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                </div>
              ))}
            </nav>

            {/* Right side buttons - desktop */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <button className="bg-[#f47847] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[calc(100vh-3.5rem)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-3 pt-2 pb-3 space-y-1 bg-[#0a3d62] border-t border-gray-700 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
            {navItems.map((item) => (
              <div key={item.label} className="py-1">
                <button
                  onClick={() => {
                    handleMenuClick(item.label);
                    if (item.label === 'Career' || item.label === 'Contact Us') {
                      handleNavigation(item.label);
                    }
                  }}
                  className={`w-full flex justify-between items-center py-2 pl-3 pr-4 text-base font-medium rounded-md ${
                    activeMenu === item.label
                      ? 'text-[#f47847] bg-[#072c4b]'
                      : 'text-gray-200 hover:bg-[#072c4b] hover:text-[#f47847]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeMenu === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
              </div>
            ))}
            
            <div className="pt-3 pb-2 border-t border-gray-700">
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <User className="h-7 w-7 rounded-full text-gray-200" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-white">Guest User</div>
                  <div className="text-xs font-medium text-gray-400">Sign in to your account</div>
                </div>
              </div>
              <div className="mt-2 px-2 space-y-1">
                <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-200 hover:bg-[#072c4b] hover:text-[#f47847]">
                  <Search className="mr-3 h-4 w-4" />
                  Search
                </button>
                <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-200 hover:bg-[#072c4b] hover:text-[#f47847]">
                  <Globe className="mr-3 h-4 w-4" />
                  Change Region
                </button>
              </div>
              <div className="mt-3 px-3">
                <button className="w-full bg-[#f47847] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {activeMenu && (
        <div className="fixed top-14 md:top-16 left-0 right-0 z-40">
          <MegaMenu onClose={() => setActiveMenu(null)} activeSection={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;