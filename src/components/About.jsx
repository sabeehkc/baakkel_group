import { FaAward, FaUsers, FaCalendarAlt, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaCalendarAlt />, number: '15+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '200+', label: 'Team Members' },
    { icon: <FaAward />, number: '500+', label: 'Projects Completed' },
    { icon: <FaHandshake />, number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-dark-blue to-primary-darker-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-primary-cyan max-w-2xl mx-auto">
            Building excellence since day one
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="group">
            <h3 className="text-3xl font-bold mb-6 text-primary-cyan">
              Who We Are
            </h3>
            <p className="text-lg mb-4 text-gray-300 leading-relaxed">
              Baakkel Group is a leading construction company dedicated to
              delivering exceptional building solutions. With over 15 years of
              experience, we have established ourselves as a trusted partner in
              the construction industry.
            </p>
            <p className="text-lg mb-4 text-gray-300 leading-relaxed">
              Our team of skilled professionals combines expertise, innovation,
              and commitment to quality in every project we undertake. From
              residential developments to large-scale commercial projects, we
              bring your vision to life.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We pride ourselves on our attention to detail, timely project
              completion, and unwavering dedication to client satisfaction.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold mb-6 text-primary-cyan">
              Our Values
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group/item">
                <span className="text-primary-cyan mr-3 text-xl flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">
                  <strong className="text-white">Quality:</strong> Uncompromising standards in every
                  project
                </span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-primary-cyan mr-3 text-xl flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">
                  <strong className="text-white">Integrity:</strong> Honest and transparent business
                  practices
                </span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-primary-cyan mr-3 text-xl flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">
                  <strong className="text-white">Innovation:</strong> Embracing new technologies and
                  methods
                </span>
              </li>
              <li className="flex items-start group/item">
                <span className="text-primary-cyan mr-3 text-xl flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">
                  <strong className="text-white">Safety:</strong> Prioritizing the well-being of our
                  team and community
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="text-primary-cyan text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-primary-cyan transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

