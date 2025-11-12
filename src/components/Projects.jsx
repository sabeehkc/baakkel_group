import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark-blue mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our excellence in construction and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 cursor-pointer block"
            >
              {/* Decorative border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-cyan via-primary-teal to-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
              
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-cyan to-primary-teal text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                {project.category}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

