import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';
import WhatsAppButton from '../common/WhatsAppButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;