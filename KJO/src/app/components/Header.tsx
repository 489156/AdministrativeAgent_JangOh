import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
                김장오 행정사 사무소
              </h1>
              <p className="text-sm text-[#64748B] font-medium">35년 공직경력의 전문가</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium">
              홈
            </a>
            <a href="#about" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium">
              소개
            </a>
            <a href="#services" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium">
              업무안내
            </a>
            <a href="#consultation" className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium">
              상담신청
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:010-0000-0000" className="flex items-center text-[#0F172A] hover:text-[#14B8A6] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">010-0000-0000</span>
            </a>
            <Button 
              className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white shadow-lg shadow-teal-500/20"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              무료 상담 신청
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0F172A] p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                홈
              </a>
              <a 
                href="#about" 
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                소개
              </a>
              <a 
                href="#services" 
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                업무안내
              </a>
              <a 
                href="#consultation" 
                className="text-[#0F172A] hover:text-[#14B8A6] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                상담신청
              </a>
              <a href="tel:010-0000-0000" className="flex items-center text-[#0F172A] font-medium">
                <Phone className="w-4 h-4 mr-2" />
                <span>010-0000-0000</span>
              </a>
              <Button 
                className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white w-full shadow-lg shadow-teal-500/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                무료 상담 신청
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
