import React, { useState,useEffect, useContext } from 'react'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import Legacy from '../components/Legacy'
import TechStack from '../components/TechStack'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import MegaMenu from '../components/MegaMenu'
import { ChevronRight } from 'lucide-react'
import { LayoutContext } from '../layout'

const Home: React.FC = () => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('Home must be used within a Layout');
      }
    
    const { isProductsOpen, setIsProductsOpen } = context;

    const heroSlides = [
    {
      title: "INNOVATIVE SOLUTIONS",
      subtitle: "TRANSFORM YOUR BUSINESS",
      description: "Join Accord Innovations to discover how our cutting-edge solutions drive business transformation and growth.",
    },
    {
      title: "DIGITAL INNOVATORS",
      subtitle: "LEADING THE CHANGE",
      description: "Our team of digital pioneers creates technology that shapes the future of industries worldwide.",
    },
    {
      title: "DEDICATED EXPERT TEAM",
      subtitle: "DELIVER EXCELLENCE",
      description: "Experience the power of our expert consultants dedicated to your success through every step of your journey.",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        
        return () => clearInterval(interval);
      }, [heroSlides.length]);

  return (
    <div>
             {/* Mega Menu with proper positioning */}
       {isProductsOpen && (
        <div className="fixed inset-0 z-50 pt-16">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsProductsOpen(false)}></div>
          <div className="relative z-10">
            <MegaMenu 
              activeSection="Products" 
              onClose={() => setIsProductsOpen(false)} 
            />
          </div>
        </div>
      )}
      
       {/* Hero Section - ServiceNow style */}
       <section className="pt-16 bg-[#0a3d62] text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
           <div className="flex flex-col md:flex-row">
             {/* Left Column - Titles */}
             <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
               <h2 className="text-[#f47847] text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                 {heroSlides[activeSlide].title}
               </h2>
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
                 {heroSlides[activeSlide].subtitle}
               </h1>
              
               {/* Slide Navigation Dots */}
               <div className="flex space-x-3 mb-8">
                 {heroSlides.map((_, index) => (
                   <button 
                     key={index}
                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
                       activeSlide === index ? 'bg-[#f47847] w-8' : 'bg-gray-400'
                     }`}
                     onClick={() => setActiveSlide(index)}
                     aria-label={`Go to slide ${index + 1}`}
                   />
                 ))}
               </div>
             </div>
            
             {/* Right Column - Description and CTAs */}
             <div className="w-full md:w-1/2">
               <p className="text-xl md:text-2xl mb-8 font-light">
                 {heroSlides[activeSlide].description}
               </p>
               <div className="flex flex-wrap gap-4">
                 <button className="bg-[#f47847] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-flex items-center">
                   Get Started
                   <ChevronRight className="ml-2 h-5 w-5" />
                 </button>
                 <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#0a3d62] transition-colors">
                   View Solutions
                 </button>
               </div>
             </div>
           </div>
         </div>
        
         {/* Image carousel at the bottom */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-[#072c4b] rounded-lg overflow-hidden h-64 relative group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#072c4b] to-transparent z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                 alt="Innovation showcase" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                 <h3 className="text-xl font-bold">Innovative Solutions</h3>
                 <p className="text-gray-300">Transform your business with our enterprise platform</p>
               </div>
             </div>
             <div className="bg-[#072c4b] rounded-lg overflow-hidden h-64 relative group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#072c4b] to-transparent z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                 alt="Digital innovation" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                 <h3 className="text-xl font-bold">Digital Innovators</h3>
                 <p className="text-gray-300">Pioneers of technological advancements</p>
               </div>
             </div>
             <div className="bg-[#072c4b] rounded-lg overflow-hidden h-64 relative group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#072c4b] to-transparent z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                 alt="Expert team" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute bottom-0 left-0 p-6 z-20">
                 <h3 className="text-xl font-bold">Expert Team</h3>
                 <p className="text-gray-300">Dedicated professionals delivering excellence</p>
               </div>
             </div>
           </div>
         </div>
        
         {/* Stats banner */}
        
       </section>
      
       {/* Additional sections */}
       <Stats />
       <Services />
       <Solutions />
       <Legacy />
       <TechStack />
       <Testimonials />
       <CallToAction />

    </div>
  )
}

export default Home



     
  