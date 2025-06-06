import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurStory: React.FC = () => {  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const timelineData = [    {
      year: '2011',
      title: 'TrifectanetInception',
      description: 'Incepted in Malaysia as a valued intermediary between companies and job seekers.',
      image: '/images/07-10-2023-1696648294.jpg',
      details: 'Founded with a vision to bridge the gap between talent and opportunity, Trifectanetbegan its journey in Malaysia. Our initial focus was on connecting skilled professionals with forward-thinking companies.'
    },
    {
      year: '2012',
      title: 'Inception of IT Services',
      description: 'Became One stop IT service provider through our services in both recruitment and IT Services.',
      image: '/images/07-10-2023-1696648403.jpg',
      details: 'Recognizing the growing demand for digital solutions, we expanded our services to include software development, digital transformation consulting, and technology implementation services.'
    },
    {
      year: '2014',
      title: 'Inception of R&D Team',
      description: 'Incepted R&D team to research about latest technologies to recommend and implement to clients.',
      image: '/images/07-10-2023-1696648446.jpg',
      details: 'With a strong foundation in Malaysia, we expanded our operations to Singapore, Indonesia, Thailand, and Vietnam, establishing a robust presence across the Asia-Pacific region.'
    },
    {
      year: '2015',
      title: 'Expanded Technologies',
      description: 'Extended to Business Intelligence (BI), ETL, industrial IOT, Robotic Process Automation (RPA) to provide IT services and consulting services, Big Data and Data Analytics',
      image: '/images/07-10-2023-1696648522.jpg',
      details: 'Our innovation hub was established to focus on emerging technologies like AI, blockchain, and IoT, positioning us at the forefront of technological advancement in the region.'
    },
    {
      year: '2020',
      title: 'Expanded Operations',
      description: 'Expanding operations to Indonesia, India and Thailand. ',
      image: '/images/07-10-2023-1696648591.jpg',
      details: 'Today, Trifectanetstands as a leading technology solutions provider with a team of over 1000 professionals, serving clients across diverse industries and geographies.'
    }
  ];

  const handleItemClick = (index: number) => {
    if (activeItem === index) {
      setActiveItem(null);
      setShowDetails(false);
    } else {
      setActiveItem(index);
      setShowDetails(true);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-[#0a3d62]">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 w-full md:w-3/5 h-full">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-[#0a3d62]/90"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#0a3d62]/20"
            ></motion.div>

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:justify-between mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year Marker */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#0a3d62] rounded-full border-4 border-white shadow-lg z-10">
                  <div className="w-full h-full rounded-full bg-[#f47847] animate-pulse"></div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                  }`}
                >
                  <div
                    onClick={() => handleItemClick(index)}
                    className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-[#f47847]">{item.year}</span>
                      <h3 className="text-xl font-semibold text-[#0a3d62] ml-4">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                                        <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-md shadow-md mb-4"
                    />
                    
                    <AnimatePresence>
                      {activeItem === index && showDetails && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-700 mt-4 pt-4 border-t"
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;