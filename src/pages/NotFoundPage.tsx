import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center"
      >
        <h1 className="text-[100px] font-extrabold text-blue-600 drop-shadow-sm mb-4 leading-none">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Oops! Page not found.
        </h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for might be missing or moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
