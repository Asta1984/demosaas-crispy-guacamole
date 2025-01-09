import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of projects do you support?",
    answer: "We support a wide range of projects including web applications, mobile apps, IoT devices, and hardware prototypes. Our expertise spans across MVP development, PCB design, and full-stack development."
  },
  {
    question: "How long does the MVP development process take?",
    answer: "The timeline varies depending on project complexity, but typically ranges from 4-12 weeks. We follow an agile methodology to ensure rapid development and continuous feedback."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, and scaling assistance. Our team remains available to ensure your product's continued success."
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern tech stacks including React, Node.js, Python, and various cloud platforms. For hardware projects, we utilize industry-standard PCB design tools and manufacturing processes."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer flexible pricing models based on project scope and requirements. Each project receives a detailed proposal outlining costs, timelines, and deliverables."
  }
];

export default function FAQ() {
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
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 transition flex items-center justify-between"
      >
        <span className="font-semibold">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-400">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}