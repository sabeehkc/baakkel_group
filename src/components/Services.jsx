import {
  FaBuilding,
  FaHome,
  FaHardHat,
  FaPaintRoller,
  FaTree,
  FaMoneyBillWave,
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBuilding className="text-4xl" />,
      title: 'Construction',
      description:
        'Expert construction services for all types of building projects, from foundation to completion.',
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Real Estate',
      description:
        'Comprehensive real estate solutions including property development, sales, and management.',
    },
    {
      icon: <FaHardHat className="text-4xl" />,
      title: 'Contractors',
      description:
        'Professional contracting services with skilled teams for all your construction needs.',
    },
    {
      icon: <FaPaintRoller className="text-4xl" />,
      title: 'Interior',
      description:
        'Complete interior design and renovation services to transform your spaces beautifully.',
    },
    {
      icon: <FaTree className="text-4xl" />,
      title: 'Landscaping',
      description:
        'Expert landscaping and outdoor design services to enhance your property\'s appeal.',
    },
    {
      icon: <FaMoneyBillWave className="text-4xl" />,
      title: 'Loan Facility',
      description:
        'Financial solutions and loan facilities to help make your construction dreams a reality.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions for all your building needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-primary-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-cyan via-primary-teal to-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/20 to-primary-teal/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-primary-cyan/10 to-primary-teal/10 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <div className="text-primary-cyan group-hover:text-primary-teal transition-colors duration-500">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary-dark-blue mb-4 text-center group-hover:text-primary-cyan transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

