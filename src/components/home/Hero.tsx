import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-24">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 sm:px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Sustainable Business Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
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

         
        </div>
      </div>
    </section>
  );
};

export default Hero;