import { motion } from 'framer-motion';

interface LoadingSplashProps {
  isVisible: boolean;
}

export default function LoadingSplash({ isVisible }: LoadingSplashProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Eric Weng
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-blue-600 dark:bg-orange-500 rounded-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
      </div>
    </motion.div>
  );
}