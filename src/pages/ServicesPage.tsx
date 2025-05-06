import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import services from '../data/services';

const ServicesPage = () => {
  return (
    <>
      <section className="bg-primary-50 pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive ESG Services
            </h1>
            <p className="text-accent-600 text-lg md:text-xl mb-0">
              Expert guidance to help your business navigate sustainability compliance, 
              reporting, and certification requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full h-10 w-10 flex items-center justify-center text-xl shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-accent-600 mb-4 flex-grow">{service.shortDescription}</p>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors mt-2 group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Need a custom ESG solution?
                </h2>
                <p className="text-accent-600 mb-6">
                  We understand that every business is unique with specific sustainability challenges and goals. 
                  Our team can develop a tailored approach to meet your exact requirements.
                </p>
                <Link to="/contact" className="btn-primary">
                  Schedule a Consultation
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sustainability consultation"
                  className="rounded-xl shadow-sm" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;