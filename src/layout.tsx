// components/Layout.tsx
import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

interface LayoutContextType {
    isProductsOpen: boolean;
    setIsProductsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  // Create the context
  export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);
  
const Layout: React.FC = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    // Add an effect to handle escape key press to close the menu
    useEffect(() => {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isProductsOpen) {
          setIsProductsOpen(false);
        }
      };
      
      document.addEventListener('keydown', handleEscapeKey);
      
      // Prevent scrolling when menu is open
      if (isProductsOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'auto';
      };
    }, [isProductsOpen]);
  
    // Auto-rotate slides
  
  
    return (
        <LayoutContext.Provider value={{ isProductsOpen, setIsProductsOpen }}>
      <div className="min-h-screen bg-white">
      <Header onProductsClick={() => setIsProductsOpen(true)} />
      <Outlet />
      <Footer />
      </div>
      </LayoutContext.Provider>
    );
};

export default Layout;
