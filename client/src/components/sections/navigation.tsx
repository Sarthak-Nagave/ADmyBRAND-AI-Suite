import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Brain className="text-white text-sm" size={16} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ADmyBRAND AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              FAQ
            </button>
            <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-slate-600 hover:text-indigo-600 transition-colors py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left text-slate-600 hover:text-indigo-600 transition-colors py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-slate-600 hover:text-indigo-600 transition-colors py-2"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-slate-600 hover:text-indigo-600 transition-colors py-2"
              >
                FAQ
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
