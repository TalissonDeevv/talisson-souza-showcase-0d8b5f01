import type { DragEvent, MouseEvent, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DiscordPopup from "@/components/ui/DiscordPopup";

interface LayoutProps {
  children: ReactNode;
  withPadding?: boolean;
  showDiscordPopup?: boolean;
}

const Layout = ({ children, withPadding = true, showDiscordPopup = false }: LayoutProps) => {
  const preventImageSave = (event: MouseEvent<HTMLDivElement> | DragEvent<HTMLDivElement>) => {
    const target = event.target;

    if (target instanceof HTMLElement && target.closest("img")) {
      event.preventDefault();
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-background"
      onContextMenu={preventImageSave}
      onDragStart={preventImageSave}
    >
      <Navbar />
      
      <main className={`flex-grow ${withPadding ? 'pt-20' : ''}`}>
        {children}
      </main>
      
      <Footer />
      
      {showDiscordPopup && <DiscordPopup />}
    </div>
  );
};

export default Layout;
