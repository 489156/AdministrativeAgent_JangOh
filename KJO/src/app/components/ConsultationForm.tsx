import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
  privacy: boolean;
};

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<FormData>();
  const privacyChecked = watch("privacy");

  const onSubmit = async (data: FormData) => {
    if (!data.privacy) {
      toast.error("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("상담 신청이 완료되었습니다. 24시간 내에 연락드리겠습니다.");
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="consultation" className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14B8A6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-teal-500/30 mb-6">
            온라인 상담
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-white font-bold tracking-tight">
            무료 상담 신청
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            전문가와 상담하고 최적의 해결책을 찾으세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl mb-8 text-white font-bold">연락처 정보</h3>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#14B8A6] to-[#0D9488] p-3 rounded-xl mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">전화번호</p>
                      <a href="tel:010-0000-0000" className="text-lg text-white hover:text-[#14B8A6] transition-colors font-medium">
                        010-0000-0000
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-3 rounded-xl mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">이메일</p>
                      <a href="mailto:info@kimjangoh.com" className="text-lg text-white hover:text-[#F59E0B] transition-colors font-medium break-all">
                        info@kimjangoh.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-3 rounded-xl mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">사무소 주소</p>
                      <p className="text-lg text-white font-medium">
                        전라남도 영광군<br />
                        <span className="text-sm text-gray-400">(상세 주소는 상담 시 안내)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-br from-[#EC4899] to-[#DB2777] p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg text-white font-semibold">상담 가능 시간</h4>
                </div>
                <div className="space-y-2 text-gray-400">
                  <p className="flex justify-between">
                    <span>평일</span>
                    <span className="text-white font-medium">09:00 ~ 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>토요일</span>
                    <span className="text-white font-medium">09:00 ~ 13:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>일요일 및 공휴일</span>
                    <span className="text-gray-500">휴무</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-[#0F172A]">이름 *</Label>
                  <Input
                    id="name"
                    {...register("name", { required: "이름을 입력해주세요" })}
                    placeholder="홍길동"
                    className="mt-2 border-gray-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#0F172A]">연락처 *</Label>
                  <Input
                    id="phone"
                    {...register("phone", { 
                      required: "연락처를 입력해주세요",
                      pattern: {
                        value: /^[0-9-]+$/,
                        message: "올바른 전화번호를 입력해주세요"
                      }
                    })}
                    placeholder="010-1234-5678"
                    className="mt-2 border-gray-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="email" className="text-[#0F172A]">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="example@email.com"
                  className="mt-2 border-gray-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="category" className="text-[#0F172A]">상담 분야 *</Label>
                <Select onValueChange={(value) => setValue("category", value)}>
                  <SelectTrigger className="mt-2 border-gray-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]">
                    <SelectValue placeholder="상담 분야를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nationality">국적/귀화/체류</SelectItem>
                    <SelectItem value="permit">인허가 업무</SelectItem>
                    <SelectItem value="land">토지/건물 행정</SelectItem>
                    <SelectItem value="civil">민원 서류 작성</SelectItem>
                    <SelectItem value="corporate">법인/단체 설립</SelectItem>
                    <SelectItem value="other">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-[#0F172A]">상담 내용 *</Label>
                <Textarea
                  id="message"
                  {...register("message", { required: "상담 내용을 입력해주세요" })}
                  placeholder="상담 받고 싶은 내용을 자세히 적어주세요"
                  className="mt-2 min-h-[150px] border-gray-200 focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    {...register("privacy", { required: true })}
                    onCheckedChange={(checked) => setValue("privacy", checked as boolean)}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor="privacy" 
                    className="text-sm text-[#475569] cursor-pointer leading-relaxed"
                  >
                    개인정보 수집 및 이용에 동의합니다. (필수)<br />
                    <span className="text-xs text-gray-500 block mt-1">
                      수집항목: 이름, 연락처, 이메일 / 이용목적: 상담 서비스 제공 / 보유기간: 상담 완료 후 6개월
                    </span>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0D9488] hover:to-[#14B8A6] text-white text-lg py-7 shadow-xl shadow-teal-500/30 transition-all duration-300"
              >
                {isSubmitting ? "전송 중..." : "무료 상담 신청하기"}
              </Button>

              <p className="text-sm text-[#64748B] mt-4 text-center">
                * 상담 신청 후 24시간 내에 연락드립니다
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
