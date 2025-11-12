const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Construction Practices',
      date: 'November 15, 2024',
      excerpt:
        'Exploring eco-friendly building materials and sustainable construction methods for a greener future.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      id: 2,
      title: 'Modern Architecture Trends 2024',
      date: 'November 10, 2024',
      excerpt:
        'Discover the latest trends in modern architecture and how they shape the construction industry.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    },
    {
      id: 3,
      title: 'Safety First: Construction Site Protocols',
      date: 'November 5, 2024',
      excerpt:
        'Understanding the importance of safety protocols and best practices on construction sites.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark-blue mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest construction insights and company news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Decorative border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-cyan via-primary-teal to-primary-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>
              
              <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6">
                <span className="text-primary-cyan text-sm font-semibold uppercase tracking-wide">
                  {post.date}
                </span>
                <h3 className="text-2xl font-bold text-primary-dark-blue mt-2 mb-3 group-hover:text-primary-cyan transition-colors duration-500">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <button className="text-primary-cyan font-semibold hover:text-primary-teal transition-colors duration-300 flex items-center group/btn">
                  Read More 
                  <span className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

