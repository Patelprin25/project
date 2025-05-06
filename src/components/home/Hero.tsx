import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Sustainable Business Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Your <span className="gradient-text">Sustainability</span> Journey
            </h1>
            <p className="text-accent-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Expert ESG consulting for businesses seeking to improve their environmental impact, 
              meet compliance requirements, and achieve sustainability certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn-secondary group">
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Sustainable business practices"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 bg-white rounded-lg shadow-soft p-4 max-w-xs">
              <div className="flex items-start">
                <div className="bg-primary-50 rounded-full p-2 mr-3">
                  <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-accent-800 font-medium">Reduce Your Environmental Impact</p>
                  <p className="text-sm text-accent-600 mt-1">Our experts help you implement sustainable practices that benefit both the planet and your bottom line.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;