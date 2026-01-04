import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Award, Users, TrendingUp } from "lucide-react";

export function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('trust-indicators');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="trust-indicators" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-5 rounded-2xl shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent text-center">
                {isVisible && <CountUp end={35} duration={2.5} suffix="년" />}
              </div>
              <p className="text-xl text-[#64748B] text-center font-semibold">공직 경력</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-5 rounded-2xl shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent text-center">
                {isVisible && <CountUp end={1000} duration={2.5} suffix="+" />}
              </div>
              <p className="text-xl text-[#64748B] text-center font-semibold">상담 실적</p>
            </div>
          </div>

          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-5 rounded-2xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent text-center">
                {isVisible && <CountUp end={98} duration={2.5} suffix="%" />}
              </div>
              <p className="text-xl text-[#64748B] text-center font-semibold">고객 만족도</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
