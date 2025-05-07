import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch With Our Team
            </h1>
            <p className="text-accent-600 text-lg md:text-xl mb-0">
              Have questions about our ESG consulting services? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <MapPin className="text-primary-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Our Office</h3>
                    <p className="text-accent-600">
                      408, Rudra Arcade, Drive In Rd, Memnagar, Ahmedabad, Gujarat 380052
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Mail className="text-primary-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email Us</h3>
                    <a
                      href="mailto:info@aryaearthtech.com"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      info@aryaearthtech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Phone className="text-primary-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Call Us</h3>
                    <a
                      href="tel:+919727916390"
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                    >
                      +91 9727916390
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5960057077795!2d72.5295!3d23.0428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4e0979ed35%3A0x69fe9c0ca4e4f2ce!2sRudra%20Arcade%2C%20Drive%20In%20Rd%2C%20Memnagar%2C%20Ahmedabad%2C%20Gujarat%20380052!5e0!3m2!1sen!2sin!4v1635399770889!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Arya EarthTech Office Location"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

                <form
                  action="https://formsubmit.co/info@aryaearthtech.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Contact Page" />
                  <input type="hidden" name="_next" value="https://aryaearthtech.com/thank-you" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input"
                      placeholder="johndoe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-accent-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-accent-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="input resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
