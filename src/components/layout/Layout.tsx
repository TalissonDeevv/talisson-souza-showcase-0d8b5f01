
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  withPadding?: boolean;
}

const Layout = ({ children, withPadding = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex-grow ${withPadding ? 'pt-20' : ''}`}
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Layout;
