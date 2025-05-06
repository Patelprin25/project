import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import faqs from '../data/faqs';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Common Questions About Our Services
            </h1>
            <p className="text-accent-600 text-lg md:text-xl mb-0">
              Find answers to frequently asked questions about our ESG consulting services and certification support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full flex justify-between items-center p-6 text-left font-medium transition-colors ${
                      openIndex === index ? 'bg-primary-50 text-primary-800' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="flex-shrink-0 text-primary-600" size={20} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 text-accent-400" size={20} />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-200">
                          <p className="text-accent-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-accent-600 mb-8 max-w-2xl mx-auto">
              Our team of ESG experts is ready to help answer any specific questions about
              your business's sustainability journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@aryaearthtech.com" className="btn-primary">
                <Mail className="mr-2" size={18} />
                Email Us
              </a>
              <a href="tel:+919727916390" className="btn-secondary">
                <Phone className="mr-2" size={18} />
                Call Us
              </a>
              <Link to="/contact" className="btn-accent">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;