import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Expert Consultants',
    description: 'Our team consists of certified ESG professionals with years of industry experience.'
  },
  {
    title: 'Comprehensive Approach',
    description: 'We offer end-to-end solutions, from initial assessment to certification and ongoing compliance.'
  },
  {
    title: 'Proven Results',
    description: `We've helped numerous businesses achieve their sustainability goals and certifications.`
  },
  {
    title: 'Custom Solutions',
    description: 'Every business is unique. We tailor our approach to your specific industry and needs.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner for Sustainable Business Transformation
            </h2>
            <p className="text-accent-600 mb-8">
              At Arya EarthTech, we combine technical expertise with practical solutions 
              to guide your business through the complexities of ESG compliance and certification.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex"
                >
                  <CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-accent-900">{reason.title}</h4>
                    <p className="text-accent-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white p-2 rounded-2xl shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Sustainable business meeting"
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div className="absolute -left-5 -bottom-5 bg-white rounded-xl shadow-soft p-5 max-w-xs">
              <div className="flex items-center mb-2">
                <span className="text-4xl text-primary-600 font-bold mr-2">95%</span>
                <span className="text-accent-600 text-sm">Client satisfaction rate</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 w-[95%] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;