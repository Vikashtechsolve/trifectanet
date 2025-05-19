import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    mailingList: false
  });

  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.parentElement?.classList.add('transform', 'scale-[1.02]');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.parentElement?.classList.remove('transform', 'scale-[1.02]');
  };

  const locationData = [
    {
      country: 'Malaysia (HQ)',
      company: 'ACCORD INNOVATIONS SDN BHD (1157399-V)',
      address: [
        'Suite 2.02, Level 2, Prima 9 Avenue 2,',
        'Block 3547, Persiaran Apec 63000,',
        'Cyberjaya Selangor,'
      ],
      email: 'contact.asia@accordinnovations.com',
      phone: '+603 8322 7700',
      fax: '+603 8322 7711'
    },
    {
      country: 'Singapore',
      company: 'ACCORD INNOVATIONS PTE. LTD.',
      address: [
        '320 serangoon road',
        '#10-09 Centrium Square',
        'Singapore 218108'
      ],
      email: 'contact.asia@accordinnovations.com'
    },
    {
      country: 'Indonesia',
      company: 'PT. ACCORD INNOVATIONS INDONESIA',
      address: [
        'Menara Anugrah Lantai 19-A Kantor Taman E.3.3 Jl. DR. Ide Anak Agung'
      ],
      email: 'contact.asia@accordinnovations.com',
      phone: '+62 21 5785 3819',
      fax: '+62 21 5087 1291'
    },
    {
      country: 'Thailand',
      company: 'ACCORD INNOVATIONS CO. LTD.',
      address: [
        '163, Rajapark Building, Floor 6, Sukhumvit 21 (Asoke)',
        'Khlong Toei Nuea, Bangkok 10110.'
      ],
      email: 'contact.asia@accordinnovations.com',
      phone: '+6621233601'
    },
    {
      country: 'India',
      company: 'ACCORDIA TECHNOLOGIES PRIVATE LIMITED',
      address: [
        '3rd Floor, Sita Nilayam, Above Fresh Choice Bakery, Waltair Main Rd,',
        'Opposite Hsbc, Beside Raymond\'s Showroom, Waltair Uplands, Siripuram,',
        'Visakhapatnam, Andhra Pradesh 530003, India'
      ],
      email: 'contact.asia@accordinnovations.com',
      phone: '(+91) -8913102303'
    },
    {
      country: 'USA',
      company: 'ACCORD INNOVATIONS INC',
      address: [
        'Lakeline Tower 13809 Research Blvd, Suite 500',
        'Austin, Texas 78750'
      ],
      email: 'contact.usa@accordinnovations.com',
      phone: '(512)-399-3049',
      fax: '(512)-399-3034'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] bg-[#0a3d62] overflow-hidden"
      >
        {/* Background Image - Right Side */}
        <div className="absolute right-0 w-3/5 h-full">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a3d62] via-[#0a3d62]/80 to-transparent"></div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-20 w-32 h-32 bg-[#f47847]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-20 -right-20 w-32 h-32 bg-[#f47847]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full max-w-2xl"
          >
            <div className="space-y-3">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                <span className="inline-block px-4 py-1.5 bg-[#f47847]/10 text-[#f47847] rounded-full text-sm font-medium backdrop-blur-sm">
                  Get in Touch
                </span>
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Contact Us
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed"
              >
                Have questions or need assistance? Our team is here to help you with any inquiries or support you may need.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center space-x-4 pt-2"
              >
                <div className="flex items-center space-x-2 hover:text-[#f47847] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-sm md:text-base hover:text-[#f47847] transition-colors duration-300">+6.03 8322 7700</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-[#f47847] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-sm md:text-base hover:text-[#f47847] transition-colors duration-300">contact@accordinnovations.com</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Location Cards */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Global Offices</h2>
              
              <div className="space-y-4">
                {locationData.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className={`bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      activeLocation === index ? 'ring-2 ring-[#f47847]' : ''
                    }`}
                    onClick={() => setActiveLocation(activeLocation === index ? null : index)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-[#0a3d62]">{location.country}</h3>
                      <motion.div
                        animate={{ rotate: activeLocation === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-[#f47847]" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <p className="text-sm font-medium text-gray-700 mt-1">{location.company}</p>
                    
                    <AnimatePresence>
                      {activeLocation === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 space-y-2 text-sm text-gray-600"
                        >
                          {location.address.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                          
                          <div className="pt-2 space-y-1">
                            <p className="flex items-center">
                              <svg className="w-4 h-4 mr-2 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <a href={`mailto:${location.email}`} className="hover:text-[#f47847] transition-colors duration-300">
                                {location.email}
                              </a>
                            </p>
                            
                            {location.phone && (
                              <p className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href={`tel:${location.phone}`} className="hover:text-[#f47847] transition-colors duration-300">
                                  {location.phone}
                                </a>
                              </p>
                            )}
                            
                            {location.fax && (
                              <p className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                <span>{location.fax}</span>
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Ask us anything</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  ></textarea>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id="mailing-list"
                    className="rounded border-gray-300 text-[#f47847] focus:ring-[#f47847] transition-colors duration-300"
                  />
                  <label htmlFor="mailing-list" className="ml-2 text-gray-700">
                    Add me to your mailing list
                  </label>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 text-center text-white font-medium bg-[#0a3d62] rounded-lg hover:bg-[#0a3d62]/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
