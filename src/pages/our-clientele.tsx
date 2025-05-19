import React, { useState } from 'react';

const OurClientele: React.FC = () => {
  // Define actual client data with real logos
  const clients = [
    {
      id: 1,
      name: 'Client 1',
      logo: '/images/images/07-10-2023-1696649158.jpg',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Client 2',
      logo: '/images/images/07-10-2023-1696649152.jpg',
      industry: 'Finance'
    },
    {
      id: 3,
      name: 'Client 3',
      logo: '/images/images/07-10-2023-1696649146.jpg',
      industry: 'Healthcare'
    },
    {
      id: 4,
      name: 'Client 4',
      logo: '/images/images/07-10-2023-1696649138.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 5,
      name: 'Client 5',
      logo: '/images/images/07-10-2023-1696649130.jpg',
      industry: 'Retail'
    },
    {
      id: 6,
      name: 'Client 6',
      logo: '/images/images/07-10-2023-1696649116.jpg',
      industry: 'Technology'
    },
    {
      id: 7,
      name: 'Client 7',
      logo: '/images/images/07-10-2023-1696649105.jpg',
      industry: 'Finance'
    },
    {
      id: 8,
      name: 'Client 8',
      logo: '/images/images/07-10-2023-1696649098.jpg',
      industry: 'Healthcare'
    },
    {
      id: 9,
      name: 'Client 9',
      logo: '/images/images/07-10-2023-1696649088.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 10,
      name: 'Client 10',
      logo: '/images/images/07-10-2023-1696649076.jpg',
      industry: 'Retail'
    },
    {
      id: 11,
      name: 'Client 11',
      logo: '/images/images/07-10-2023-1696649066.jpg',
      industry: 'Technology'
    },
    {
      id: 12,
      name: 'Client 12',
      logo: '/images/images/07-10-2023-1696649050.jpg',
      industry: 'Finance'
    },
    {
      id: 13,
      name: 'Client 13',
      logo: '/images/images/07-10-2023-1696649028.jpg',
      industry: 'Healthcare'
    },
    {
      id: 14,
      name: 'Client 14',
      logo: '/images/images/07-10-2023-1696649016.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 15,
      name: 'Client 15',
      logo: '/images/images/07-10-2023-1696649003.jpg',
      industry: 'Retail'
    },
    {
      id: 16,
      name: 'Client 16',
      logo: '/images/images/07-10-2023-1696648990.jpg',
      industry: 'Technology'
    },
    {
      id: 17,
      name: 'Client 17',
      logo: '/images/images/07-10-2023-1696648983.jpg',
      industry: 'Finance'
    },
    {
      id: 18,
      name: 'Client 18',
      logo: '/images/images/07-10-2023-1696648964.jpg',
      industry: 'Healthcare'
    },
    {
      id: 19,
      name: 'Client 19',
      logo: '/images/images/07-10-2023-1696648955.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 20,
      name: 'Client 20',
      logo: '/images/images/07-10-2023-1696648946.jpg',
      industry: 'Retail'
    },
    {
      id: 21,
      name: 'Client 21',
      logo: '/images/images/07-10-2023-1696648927.jpg',
      industry: 'Technology'
    },
    {
      id: 22,
      name: 'Client 22',
      logo: '/images/images/07-10-2023-1696648916.jpg',
      industry: 'Finance'
    },
    {
      id: 23,
      name: 'Client 23',
      logo: '/images/images/07-10-2023-1696648898.jpg',
      industry: 'Healthcare'
    },
    {
      id: 24,
      name: 'Client 24',
      logo: '/images/images/07-10-2023-1696648877.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 25,
      name: 'Client 25',
      logo: '/images/images/07-10-2023-1696648868.jpg',
      industry: 'Retail'
    },
    {
      id: 26,
      name: 'Client 26',
      logo: '/images/images/07-10-2023-1696648857.jpg',
      industry: 'Technology'
    },
    {
      id: 27,
      name: 'Client 27',
      logo: '/images/images/07-10-2023-1696648846.jpg',
      industry: 'Finance'
    },
    {
      id: 28,
      name: 'Client 28',
      logo: '/images/images/07-10-2023-1696648833.jpg',
      industry: 'Healthcare'
    },
    {
      id: 29,
      name: 'Client 29',
      logo: '/images/images/07-10-2023-1696648806.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 30,
      name: 'Client 30',
      logo: '/images/images/07-10-2023-1696648781.jpg',
      industry: 'Retail'
    },
    {
      id: 31,
      name: 'Client 31',
      logo: '/images/images/07-10-2023-1696648758.jpg',
      industry: 'Technology'
    },
    {
      id: 32,
      name: 'Client 32',
      logo: '/images/images/07-10-2023-1696648751.jpg',
      industry: 'Finance'
    },
    {
      id: 33,
      name: 'Client 33',
      logo: '/images/images/07-10-2023-1696648741.jpg',
      industry: 'Healthcare'
    },
    {
      id: 34,
      name: 'Client 34',
      logo: '/images/images/07-10-2023-1696648732.jpg',
      industry: 'Manufacturing'
    },
    {
      id: 35,
      name: 'Client 35',
      logo: '/images/images/07-10-2023-1696648722.jpg',
      industry: 'Retail'
    },
    {
      id: 36,
      name: 'Client 36',
      logo: '/images/images/07-10-2023-1696648709.jpg',
      industry: 'Technology'
    }
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [displayedClients, setDisplayedClients] = useState(12);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b]">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 h-auto md:h-[60vh] flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 pl-4 md:pl-20 relative z-10 py-8 md:py-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#f47847]">Clients</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-300">
              Discover the organizations that trust Accord Innovations to deliver exceptional solutions and drive their digital transformation.
            </p>
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[30vh] md:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0a3d62] mb-8 md:mb-16">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          
          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {clients.slice(0, displayedClients).map((client) => (
              <div 
                key={client.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ${
                  hoveredCard === client.id 
                    ? 'scale-105 shadow-xl border-2 border-[#f47847]' 
                    : 'hover:shadow-lg border border-gray-100'
                }`}
                onMouseEnter={() => setHoveredCard(client.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-3 md:p-4 flex flex-col items-center justify-center h-full">
                  <div className="w-full h-24 md:h-32 flex items-center justify-center mb-2 md:mb-3 bg-gradient-to-b from-gray-50 to-white p-2 rounded-lg">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-full max-w-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-[#0a3d62] text-center">{client.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1 ${
                      client.industry === 'Technology' ? 'bg-blue-500' :
                      client.industry === 'Finance' ? 'bg-green-500' :
                      client.industry === 'Healthcare' ? 'bg-red-500' :
                      client.industry === 'Manufacturing' ? 'bg-yellow-500' :
                      'bg-purple-500'
                    }`}></span>
                    <p className="text-[10px] md:text-xs text-gray-500">{client.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 md:mt-16 text-center">
            {displayedClients < clients.length && (
              <button 
                onClick={() => setDisplayedClients(prev => prev + 12)}
                className="bg-[#0a3d62] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-[#f47847] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base font-semibold"
              >
                View More Clients
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientele; 