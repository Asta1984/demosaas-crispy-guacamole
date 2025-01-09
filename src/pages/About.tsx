import { motion } from 'framer-motion';
import { Users, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black pt-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-400">
            Building the future of product development, one project at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-400">
              Our team of experts brings years of industry experience
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mission Driven</h3>
            <p className="text-gray-400">
              Committed to helping innovators bring their ideas to life
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-400">
              Always pushing the boundaries of what's possible
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto bg-white/5 rounded-xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400 mb-6">
            We envision a world where bringing innovative ideas to life is accessible to everyone. Our platform bridges the gap between concept and creation, empowering entrepreneurs and businesses to build the next generation of groundbreaking products.
          </p>
          <p className="text-gray-400">
            Through cutting-edge technology and unparalleled expertise, we're making the development process faster, more efficient, and more accessible than ever before.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}