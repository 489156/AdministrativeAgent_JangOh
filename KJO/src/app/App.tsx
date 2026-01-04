import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustIndicators } from "./components/TrustIndicators";
import { ServicesSection } from "./components/ServicesSection";
import { ProfileSection } from "./components/ProfileSection";
import { ProcessSection } from "./components/ProcessSection";
import { ConsultationForm } from "./components/ConsultationForm";
import { Footer } from "./components/Footer";
import { FloatingButton } from "./components/FloatingButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServicesSection />
        <ProfileSection />
        <ProcessSection />
        <ConsultationForm />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
