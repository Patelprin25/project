import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ContactCTA from '../components/home/ContactCTA';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Arya EarthTech | ESG Consulting Services</title>
        <meta name="description" content="Expert ESG consulting for businesses seeking to improve their environmental impact, meet compliance requirements, and achieve sustainability certifications." />
      </Helmet>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
};

export default HomePage;