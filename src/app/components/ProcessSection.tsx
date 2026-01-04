import { MessageSquare, Search, UserCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. 상담 신청",
    description: "온라인 또는 전화로 상담을 신청합니다",
    gradient: "from-[#14B8A6] to-[#0D9488]",
    shadowColor: "shadow-teal-500/20"
  },
  {
    icon: Search,
    title: "2. 전문가 검토",
    description: "35년 경험을 바탕으로 사안을 면밀히 검토합니다",
    gradient: "from-[#F59E0B] to-[#D97706]",
    shadowColor: "shadow-amber-500/20"
  },
  {
    icon: UserCheck,
    title: "3. 상세 상담",
    description: "최적의 해결 방안을 제시하고 상세히 안내합니다",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    shadowColor: "shadow-purple-500/20"
  },
  {
    icon: CheckCircle2,
    title: "4. 업무 수행",
    description: "신속하고 정확하게 업무를 처리합니다",
    gradient: "from-[#10B981] to-[#059669]",
    shadowColor: "shadow-emerald-500/20"
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#14B8A6]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F59E0B]/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#14B8A6]/10 to-[#F59E0B]/10 text-[#14B8A6] px-5 py-2 rounded-full text-sm font-semibold border border-[#14B8A6]/20 mb-6">
            진행 과정
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
              상담 프로세스
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            간단한 4단계로 문제를 해결합니다
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#14B8A6] via-[#F59E0B] to-[#10B981] -translate-y-1/2 opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className={`bg-gradient-to-br ${step.gradient} p-6 rounded-2xl shadow-xl ${step.shadowColor} group-hover:scale-110 transition-transform duration-500`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl mb-4 text-center font-bold text-[#0F172A]">
                      {step.title}
                    </h3>
                    <p className="text-center text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 items-center justify-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-lg ${step.shadowColor}`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className={`w-10 h-10 bg-gradient-to-b ${step.gradient} rounded-full flex items-center justify-center shadow-lg ${step.shadowColor}`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
