import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem0tNCA0djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem0tNC00djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem0tNCA0djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl mb-3 text-white font-bold">
                지금 바로 상담 신청하세요
              </h3>
              <p className="text-white/90 text-lg">
                35년 경험의 전문가가 여러분의 문제를 해결해드립니다
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-white text-[#14B8A6] hover:bg-gray-100 text-lg px-10 py-7 shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              무료 상담 신청하기
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <h3 className="text-2xl mb-6 font-bold bg-gradient-to-r from-[#14B8A6] to-[#F59E0B] bg-clip-text text-transparent">
                김장오 행정사 사무소
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                대한민국 행정 35년 경력의<br />
                전문 행정사가 여러분을 돕습니다.
              </p>
              <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-300">
                  전 영광군 부군수 | 행정안전부 서기관 출신
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-6 text-white font-semibold">빠른 링크</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-[#14B8A6] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    홈
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-[#14B8A6] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    소개
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#14B8A6] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    업무안내
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="text-gray-400 hover:text-[#14B8A6] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    상담신청
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg mb-6 text-white font-semibold">연락처</h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">전화</p>
                    <a href="tel:010-0000-0000" className="text-gray-300 hover:text-[#14B8A6] transition-colors">
                      010-0000-0000
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">이메일</p>
                    <a href="mailto:info@kimjangoh.com" className="text-gray-300 hover:text-[#F59E0B] transition-colors">
                      info@kimjangoh.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">주소</p>
                    <p className="text-gray-300">
                      전라남도 영광군
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} 김장오 행정사 사무소. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#14B8A6] transition-colors">
                개인정보처리방침
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#14B8A6] transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
