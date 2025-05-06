import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import services from '../data/services';

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = services.find(s => s.id === serviceId);

  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
  }, [service, navigate]);

  if (!service) {
    return (
      <div className="container text-center py-20">
        <p className="text-accent-700">Redirecting to services...</p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary-50 pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                {service.icon} {service.title}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-accent-600 text-lg md:text-xl">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-soft mb-8">
                  <img
                    src={service.image}
                    alt={`Image representing ${service.title}`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  {service.longDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-accent-700 mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-primary-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                        className="flex"
                      >
                        <div className="bg-primary-100 rounded-full p-1 mr-3 flex-shrink-0 mt-1">
                          <Check size={16} className="text-primary-700" />
                        </div>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-soft p-8 mt-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-accent-600 mb-6">
                    Contact our experts today to discuss how our <strong>{service.title}</strong> service can benefit your business.
                  </p>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Schedule a Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Other Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((relatedService, idx) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="card group"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{relatedService.title}</h3>
                    <p className="text-accent-600 mb-4">{relatedService.shortDescription}</p>
                    <Link
                      to={`/services/${relatedService.id}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors group-hover:underline"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
