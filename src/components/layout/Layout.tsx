import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DiscordPopup from "@/components/ui/DiscordPopup";

interface LayoutProps {
  children: ReactNode;
  withPadding?: boolean;
}

const Layout = ({ children, withPadding = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className={`flex-grow ${withPadding ? 'pt-20' : ''}`}>
        {children}
      </main>
      
      <Footer />
      
      {/* Discord Popup - appears once per user */}
      <DiscordPopup />
    </div>
  );
};

export default Layout;