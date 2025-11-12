import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark-blue/90 via-primary-darker-blue/80 to-black/90"></div>
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="Baakkel Group Logo"
            className="h-32 w-auto mx-auto mb-8"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Building Your Dreams
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-primary-cyan max-w-2xl mx-auto">
          Excellence in construction, innovation in design, commitment to quality
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-primary-cyan hover:bg-primary-teal text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Our Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-primary-cyan hover:bg-primary-cyan text-primary-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('services')}
          className="text-primary-cyan text-2xl"
        >
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Hero;

