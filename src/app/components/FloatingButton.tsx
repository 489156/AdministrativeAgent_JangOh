import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToConsultation}
            className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white rounded-full w-16 h-16 shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
          
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#0D9488] animate-ping opacity-20"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
