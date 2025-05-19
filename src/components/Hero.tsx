import React from 'react'

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  backgroundColor?: string;
  gradientColor?: string;
  textColor?: string;
  accentColor?: string;
}

function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = '#0a3d62',
  gradientColor = '#0a3d62',
  textColor = 'white',
  accentColor = '#f47847'
}: HeroProps) {
  return (
    <section className={`relative min-h-[60vh] bg-[${backgroundColor}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto min-h-[60vh] flex flex-col lg:flex-row items-center py-12 lg:py-0">
        {/* Text Content - Full width on mobile, half width on desktop */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:pl-8 relative z-20 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {subtitle ? (
              <>
                <span className={`text-[${textColor}]`}>{title}</span>{" "}
                <span className={`text-[${accentColor}]`}>{subtitle}</span>
              </>
            ) : (
              <span className={`text-[${textColor}]`}>{title}</span>
            )}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-300">
            {description}
          </p>
        </div>
        
        {/* Image - Full width on mobile, half width on desktop */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[60vh] relative z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-[${gradientColor}] via-[${gradientColor}]/80 to-transparent lg:from-[${gradientColor}] lg:via-[${gradientColor}]/80 lg:to-transparent`} />
        </div>
      </div>
    </section>
  )
}

export default Hero