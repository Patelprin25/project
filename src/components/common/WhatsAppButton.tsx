import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '+919727916390';

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative perspective-[1000px]">
        {/* Glowing pulse */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] blur-xl opacity-60 animate-ping z-[-1]"></span>

        {/* Main 3D button */}
        <motion.div
          whileHover={{
            rotateX: -10,
            rotateY: 10,
            scale: 1.1,
            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
          }}
          whileTap={{
            rotateX: 0,
            rotateY: 0,
            scale: 0.95,
            boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-md"
        >
          <MessageCircle size={28} className="text-white" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
