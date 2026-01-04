import { Award, CheckCircle, Briefcase } from "lucide-react";
import profileImage from "src/assets/kjo.jpg";

export function ProfileSection() {
  const careers = [
    "전라남도 영광군 부군수 (2020-2023)",
    "전라남도 청렴지원관, 세정과장, 사회재난과장 역임",
    "행정안전부 서기관급 중앙부처 실무 경험",
    "35년간 행정 전 분야 전문성 보유",
    "대한민국 행정의 중추를 걸어온 실무 전문가"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#14B8A6]/20 to-transparent rounded-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F59E0B]/20 to-transparent rounded-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent z-10"></div>
              <img
                src={profileImage}
                alt="김장오 행정사"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Profile Card Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent mb-2">
                    김장오 행정사
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-1 w-8 bg-gradient-to-r from-[#14B8A6] to-[#F59E0B] rounded-full"></div>
                    <p className="text-[#14B8A6] font-semibold">전 영광군 부군수</p>
                  </div>
                  <p className="text-[#64748B] text-sm">행정안전부 서기관 출신</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-6 py-3 rounded-2xl shadow-2xl shadow-teal-500/30 z-30">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span className="font-bold text-lg">35년 경력</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-flex items-center bg-gradient-to-r from-[#14B8A6]/10 to-[#F59E0B]/10 text-[#14B8A6] px-5 py-2 rounded-full text-sm font-semibold border border-[#14B8A6]/20">
                대표 인사말
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-8 font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
                35년 공직 경험으로<br />
                여러분을 돕겠습니다
              </span>
            </h2>
            
            <div className="space-y-6 mb-10 text-lg text-[#475569] leading-relaxed">
              <p>
                안녕하십니까, <span className="font-semibold text-[#0F172A]">김장오 행정사</span>입니다.
              </p>
              
              <p>
                저는 35년간 대한민국 행정의 최일선에서 국민을 위해 봉사해온 공직자입니다. 
                전라남도 영광군 부군수를 역임하였으며, 행정안전부 서기관급으로 중앙부처에서 
                실무를 담당했습니다.
              </p>
              
              <p>
                이제 그동안 쌓아온 <span className="font-semibold text-[#14B8A6]">경험과 전문성</span>을 바탕으로 
                복잡한 행정 문제로 어려움을 겪고 계신 분들을 돕고자 행정사로 새로운 출발을 하게 되었습니다.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-[#14B8A6]" />
                <h3 className="text-2xl font-bold text-[#0F172A]">주요 경력</h3>
              </div>
              {careers.map((career, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#14B8A6]/5 hover:to-transparent transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#14B8A6] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="ml-4 text-[#475569] group-hover:text-[#0F172A] transition-colors duration-300">
                    {career}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
