import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#00a0d2] to-[#0056b3] text-white py-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          Partner with Accord Innovations for innovative solutions that drive growth and efficiency.
        </p>
        <button className="bg-white text-[#0056b3] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default CallToAction; 