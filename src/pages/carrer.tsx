import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Upload, Briefcase, Mail, Phone, User, Calendar, FileText, Send, Globe, Linkedin, Info } from 'lucide-react';

const Career: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    whyJoinUs: false,
    testimonials: false,
    applicationProcess: false,
    benefits: false
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    linkedin: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const timer2 = setTimeout(() => setIsVisible(prev => ({ ...prev, whyJoinUs: true })), 300);
    const timer3 = setTimeout(() => setIsVisible(prev => ({ ...prev, testimonials: true })), 500);
    const timer4 = setTimeout(() => setIsVisible(prev => ({ ...prev, applicationProcess: true })), 700);
    const timer5 = setTimeout(() => setIsVisible(prev => ({ ...prev, benefits: true })), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`relative min-h-[70vh] bg-gradient-to-br from-[#0C4A6E] to-[#0a3d62] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 h-[70vh] flex items-center relative z-10">
          <div className="w-full lg:w-1/2 pl-4 lg:pl-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="text-white">Join Our</span>{" "}
              <span className="text-[#f47847]">Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl text-gray-200"
            >
              Build Your Career with Accord Innovations
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl max-w-3xl text-gray-200 mt-3"
            >
              Join a dynamic team of innovators and shape the future of technology
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <a href="#application-form" className="px-8 py-3 bg-[#f47847] text-white text-lg font-semibold rounded-lg hover:bg-[#e66a3a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center">
                Apply Now
                <Send className="w-5 h-5 ml-2" />
              </a>
              <button className="px-8 py-3 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center">
                Learn More
                <ChevronDown className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </div>
          
          <div className="hidden lg:block w-1/2 relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#f47847]/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#0C4A6E]/30 rounded-full blur-2xl"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-xl"
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          const element = document.getElementById('application-form');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={30} />
        <span className="text-sm mt-2">Scroll Down</span>
      </motion.div>

      {/* Why Join Us Section */}
      <div className={`bg-[#0C4A6E] rounded-2xl p-12 text-white transition-all duration-1000 ${isVisible.whyJoinUs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join Accord Innovations?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-gray-300">Flexible working hours and remote work options</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-300">Continuous learning and advancement opportunities</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
            <p className="text-gray-300">Work with talented professionals in a supportive environment</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p className="text-gray-300">Health insurance, retirement plans, and performance bonuses</p>
          </div>
        </div>
      </div>

      {/* Employee Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-[#0C4A6E]">Life at</span>{" "}
                <span className="text-[#f47847]">Accord</span>
              </h2>
              <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Hear from our team members about their experiences and what makes Accord Innovations a great place to work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                    <p className="text-[#f47847]">Senior Software Engineer</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#f47847] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "Working at Accord has been transformative for my career. The collaborative environment and focus on innovation have allowed me to grow both personally and professionally. The work-life balance is excellent, and I've never felt more valued as an employee."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">5 years at Accord</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                      alt="Michael Chen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                    <p className="text-[#f47847]">Data Scientist</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#f47847] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "The projects I work on at Accord are challenging and meaningful. I've had the opportunity to apply cutting-edge machine learning techniques to solve real-world problems. The company invests in our professional development, and I've attended several conferences and training programs."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">3 years at Accord</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                      alt="Priya Patel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Priya Patel</h3>
                    <p className="text-[#f47847]">UI/UX Designer</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#f47847] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "The design team at Accord is incredibly collaborative. We work closely with developers and clients to create beautiful, functional interfaces. I appreciate the company's commitment to work-life balance and the flexible remote work options."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">2 years at Accord</span>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="px-8 py-4 bg-[#0C4A6E] text-white text-lg font-semibold rounded-lg hover:bg-[#0a3d62] transition-colors duration-300 transform hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 text-center transition-all duration-1000 ${isVisible.applicationProcess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our Application Process
            </h2>
            <p className={`text-xl text-gray-600 mb-12 text-center transition-all duration-1000 delay-200 ${isVisible.applicationProcess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Simple steps to join our team
            </p>

            <div className="space-y-8">
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">Fill out our online application form and upload your resume and cover letter.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Screening</h3>
                  <p className="text-gray-600">Our HR team will review your application and contact you if your profile matches our requirements.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Assessment</h3>
                  <p className="text-gray-600">You may be asked to complete a technical assessment or coding challenge relevant to the position.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interviews</h3>
                  <p className="text-gray-600">Meet with our team members through video or in-person interviews to discuss your experience and skills.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '700ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer & Onboarding</h3>
                  <p className="text-gray-600">Receive an offer letter and begin your journey with Accord Innovations after completing the onboarding process.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="px-8 py-4 bg-[#0C4A6E] text-white text-lg font-semibold rounded-lg hover:bg-[#0a3d62] transition-colors duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-xl text-gray-600">Take the first step towards your next great opportunity</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <User className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                    Full Name <span className="text-[#f47847] ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Mail className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                    Email <span className="text-[#f47847] ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Phone className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                    Phone Number <span className="text-[#f47847] ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Briefcase className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                    Position Applied For <span className="text-[#f47847] ml-1">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                  >
                    <option value="">Select a position</option>
                    <option value="software-developer">Software Developer</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="project-manager">Project Managers</option>
                    <option value="ui-ux-designer">UI/UX Designer</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="business-analyst">Business Analyst</option>
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                  Years of Experience <span className="text-[#f47847] ml-1">*</span>
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                  placeholder="Enter years of experience"
                />
              </div>

              {/* Portfolio & LinkedIn */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Globe className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Linkedin className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                  Resume/CV <span className="text-[#f47847] ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0C4A6E]/10 file:text-[#0C4A6E] hover:file:bg-[#0C4A6E]/20"
                  />
                  <Upload className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <p className="text-sm text-gray-500 flex items-center mt-2">
                  <Info className="w-4 h-4 mr-1" />
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4 mr-2 text-[#0C4A6E]" />
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0C4A6E]/20 focus:border-[#0C4A6E] transition-all duration-200 bg-gray-50/50 resize-none"
                  placeholder="Tell us about yourself and why you're interested in this position"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-[#0C4A6E] text-white rounded-xl hover:bg-[#0a3d62] transition-all duration-200 font-medium shadow-lg shadow-[#0C4A6E]/20 hover:shadow-xl hover:shadow-[#0C4A6E]/30 flex items-center justify-center space-x-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <div className={`bg-[#0C4A6E] rounded-2xl p-12 text-white transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Working at Accord Innovations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-gray-300">Flexible working hours and remote work options</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-300">Continuous learning and advancement opportunities</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
            <p className="text-gray-300">Work with talented professionals in a supportive environment</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
            <p className="text-gray-300">Health insurance, retirement plans, and performance bonuses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
