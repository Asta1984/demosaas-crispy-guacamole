import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

export default function Product() {
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Product</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive development platform built for modern teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Development Platform</h2>
            <p className="text-gray-400 mb-6">
              Our platform streamlines the entire development process, from ideation to deployment. Built with modern teams in mind, it provides all the tools you need to bring your product to life.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-gray-300">Enterprise-grade security</span>
              </li>
              <li className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-purple-500" />
                <span className="text-gray-300">Lightning-fast deployment</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">Global infrastructure</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <pre className="text-sm text-gray-300 font-mono">
              <code>{`// Example workflow
import { TechForge } from '@techforge/sdk';

const project = new TechForge({
  name: 'my-awesome-project',
  type: 'web-application',
});

// Configure your project
await project.setup({
  framework: 'react',
  database: 'postgresql',
  hosting: 'cloud',
});

// Start development
const dev = await project.develop();

// Deploy to production
await project.deploy({
  environment: 'production',
  region: 'us-east-1',
});`}</code>
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <PricingTier
            title="Starter"
            price="$49"
            features={[
              "Up to 3 projects",
              "Basic support",
              "Community access",
              "Basic analytics"
            ]}
          />
          <PricingTier
            title="Pro"
            price="$99"
            features={[
              "Unlimited projects",
              "Priority support",
              "Advanced analytics",
              "Custom domains"
            ]}
            highlighted={true}
          />
          <PricingTier
            title="Enterprise"
            price="Custom"
            features={[
              "Dedicated support",
              "Custom integration",
              "SLA guarantee",
              "On-premise option"
            ]}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function PricingTier({ title, price, features, highlighted = false }) {
  return (
    <div className={`p-6 rounded-xl ${
      highlighted 
        ? 'bg-blue-600 border-2 border-blue-400' 
        : 'bg-white/5 border border-white/10'
    }`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-6">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span className={highlighted ? 'text-white' : 'text-gray-400'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-lg transition ${
        highlighted
          ? 'bg-white text-blue-600 hover:bg-gray-100'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}