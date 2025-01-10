import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from '../pages/Home';
import Features from '../pages/Features';
import FAQ from '../pages/Faq';
import  About from '../pages/About';
import Products from '../pages/Products';

// Page transition variants
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: "100%",
    scale: 0.95
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1
  },
  out: { 
    opacity: 0, 
    y: "-100%",
    scale: 1.05
  }
};

const pageTransition = {
  ease:"easeOut",
  type:"spring",
  duration: 0.9
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-wrapper"
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          right: 0
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        } />
        <Route path="/features" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Features />
          </Suspense>
        } />
        <Route path="/faq" element={
          <Suspense fallback={<div>Loading...</div>}>
            <FAQ />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        } />
        <Route path="/products" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        } />
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

// 404 Not Found Component
const NotFound: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

export default AppRoutes;
