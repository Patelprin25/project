import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredServices = [
  {
    id: 'esg',
    title: 'ESG Consulting',
    description: 'Comprehensive guidance to develop and implement effective ESG strategies aligned with your business goals.',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'ghg-reporting',
    title: 'GHG Emission Reporting',
    description: 'Accurate greenhouse gas emissions measurement, reporting, and verification to meet regulatory requirements.',
    icon: '🌡️',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'ecovadis',
    title: 'EcoVadis Certification',
    description: 'Expert support to achieve and maintain EcoVadis certification, improving your sustainability rating.',
    icon: '🏆',
    image: '/images/certifications/ecovadis-certification.png'
  }
];

const Services = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Our ESG Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            Tailored solutions to help your business navigate the complex world of sustainability,
            compliance, and certification.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/fallback-image.png'; // Add a fallback image
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
                <div className="absolute top-4 left-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-xl shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-accent-600 mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors group-hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;