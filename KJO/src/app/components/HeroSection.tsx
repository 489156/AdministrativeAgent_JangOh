import { Button } from "./ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem0tNCA0djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem00LTR2Mmgydi0yaC0yem0tNC00djJoMnYtMmgtMnptLTQgNHYyaDJ2LTJoLTJ6bS00IDR2Mmgydi0yaC0yem0tNCA0djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center space-x-2">
            <span className="inline-flex items-center bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              전문 행정사
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl mb-8 text-white font-bold tracking-tight leading-tight">
            대한민국 행정 <span className="bg-gradient-to-r from-[#14B8A6] to-[#F59E0B] bg-clip-text text-transparent">35년</span>,<br />
            당신의 문제를<br />
            정확히 <span className="bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] bg-clip-text text-transparent">해결</span>합니다
          </h1>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#14B8A6] to-[#F59E0B] rounded-full"></div>
            <p className="text-xl md:text-2xl text-[#F59E0B] font-semibold">
              전 영광군 부군수 | 행정안전부 서기관 출신
            </p>
          </div>
          
          <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
            복잡한 행정 절차, 35년 경험과 전문성으로 신속하고 정확하게 처리해드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white text-lg px-10 py-7 shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              무료 상담 신청
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 text-lg px-10 py-7 transition-all duration-300"
              asChild
            >
              <a href="tel:010-0000-0000">
                <Phone className="mr-2 w-5 h-5" />
                전화 상담하기
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#14B8A6] rounded-full animate-pulse"></div>
              <span>24시간 내 응답</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></div>
              <span>전문 상담</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
              <span>신뢰성 보장</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
