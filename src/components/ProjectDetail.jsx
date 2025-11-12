import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaRulerCombined, FaUsers, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { getProjectById } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const projectData = getProjectById(id);

  // If project not found, redirect to home
  useEffect(() => {
    if (!projectData) {
      navigate('/');
    }
  }, [projectData, navigate]);

  if (!projectData) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => {
            navigate('/');
            // Scroll to projects section after navigation
            setTimeout(() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="mb-8 flex items-center text-primary-dark-blue hover:text-primary-cyan transition-colors duration-300 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold">Back to Projects</span>
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Image Section */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={projectData.images?.[selectedImage] || projectData.mainImage}
              alt={projectData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block bg-gradient-to-r from-primary-cyan to-primary-teal text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {projectData.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{projectData.title}</h1>
            </div>
          </div>

          {/* Image Gallery */}
          {projectData.images && projectData.images.length > 1 && (
            <div className="p-6 bg-gray-50 border-b border-gray-200">
              <h3 className="text-xl font-bold text-primary-dark-blue mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg aspect-video border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-primary-cyan ring-2 ring-primary-cyan/50'
                        : 'border-gray-200 hover:border-primary-cyan/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${projectData.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-primary-cyan/20 flex items-center justify-center">
                        <FaCheckCircle className="text-primary-cyan text-2xl" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-primary-dark-blue mb-6">Project Overview</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {projectData.description}
                </p>
                {projectData.fullDescription && (
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {projectData.fullDescription}
                  </p>
                )}

                {/* Features */}
                {projectData.features && projectData.features.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-primary-dark-blue mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectData.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-cyan/50 transition-colors duration-300"
                        >
                          <FaCheckCircle className="text-primary-cyan text-xl mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Project Details */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-primary-dark-blue to-primary-darker-blue rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-primary-cyan">Project Details</h3>
                  <div className="space-y-6">
                    {projectData.location && (
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-primary-cyan text-xl mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300 mb-1">Location</p>
                          <p className="font-semibold">{projectData.location}</p>
                        </div>
                      </div>
                    )}

                    {projectData.area && (
                      <div className="flex items-start">
                        <FaRulerCombined className="text-primary-cyan text-xl mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300 mb-1">Total Area</p>
                          <p className="font-semibold">{projectData.area}</p>
                        </div>
                      </div>
                    )}

                    {projectData.completionDate && (
                      <div className="flex items-start">
                        <FaCalendarAlt className="text-primary-cyan text-xl mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300 mb-1">Completion Date</p>
                          <p className="font-semibold">{projectData.completionDate}</p>
                        </div>
                      </div>
                    )}

                    {projectData.client && (
                      <div className="flex items-start">
                        <FaUsers className="text-primary-cyan text-xl mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300 mb-1">Client</p>
                          <p className="font-semibold">{projectData.client}</p>
                        </div>
                      </div>
                    )}

                    {projectData.teamSize && (
                      <div className="flex items-start">
                        <FaUsers className="text-primary-cyan text-xl mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300 mb-1">Team Size</p>
                          <p className="font-semibold">{projectData.teamSize}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      navigate('/');
                      // Scroll to contact section after navigation
                      setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="w-full mt-8 bg-gradient-to-r from-primary-cyan to-primary-teal hover:from-primary-teal hover:to-primary-cyan text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us About This Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

