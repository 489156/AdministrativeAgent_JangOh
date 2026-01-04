import { FileText, Building2, LandPlot, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const services = [
  {
    icon: Users,
    title: "국적/귀화/체류",
    description: "국적 취득, 외국인 등록, 체류자격 변경, 영주권 및 귀화 허가 신청 대행",
    gradient: "from-[#14B8A6] to-[#0D9488]",
    shadowColor: "shadow-teal-500/20",
    items: [
      "국적 취득 및 이탈 신청 대행",
      "외국인 등록 및 체류자격 변경",
      "영주권 및 귀화 허가 신청",
      "출입국 관련 민원 대행"
    ]
  },
  {
    icon: FileText,
    title: "인허가 업무",
    description: "건축, 영업, 환경 등 각종 인허가 업무 대행",
    gradient: "from-[#F59E0B] to-[#D97706]",
    shadowColor: "shadow-amber-500/20",
    items: [
      "건축 및 건설 인허가",
      "영업 인허가 (음식점, 숙박업 등)",
      "환경 인허가 (배출시설 설치 등)",
      "기타 인허가 (주차장, 공유재산 등)"
    ]
  },
  {
    icon: LandPlot,
    title: "토지/건물 행정",
    description: "토지 분할, 합병, 지목변경, 농지전용 등 토지 관련 업무",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    shadowColor: "shadow-purple-500/20",
    items: [
      "토지 분할 및 합병",
      "지목변경 신청",
      "농지전용 허가",
      "개발행위허가"
    ]
  },
  {
    icon: Building2,
    title: "민원 서류 작성",
    description: "각종 민원 서류 작성 및 대행 서비스",
    gradient: "from-[#EC4899] to-[#DB2777]",
    shadowColor: "shadow-pink-500/20",
    items: [
      "진정서, 탄원서 작성",
      "이의신청서 작성",
      "정보공개청구",
      "행정심판 청구 지원"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#14B8A6]/10 to-[#F59E0B]/10 text-[#14B8A6] px-5 py-2 rounded-full text-sm font-semibold border border-[#14B8A6]/20 mb-6">
            전문 서비스
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
              전문 업무 분야
            </span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            35년 경험으로 검증된 전문 행정 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
              <div className="absolute inset-[2px] bg-white rounded-lg"></div>
              
              <div className="relative">
                <CardHeader className="pb-4">
                  <div className="mb-6 flex justify-center">
                    <div className={`bg-gradient-to-br ${service.gradient} p-5 rounded-2xl shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-[#0F172A] text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center text-[#64748B]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mr-2 font-bold`}>✓</span>
                        <span className="text-sm text-[#475569]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-lg ${service.shadowColor} transition-all duration-300`}
                    onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    이 업무 상담하기
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
