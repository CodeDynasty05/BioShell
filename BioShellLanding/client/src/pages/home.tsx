import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ProblemSection from '@/components/problem-section';
import SolutionSection from '@/components/solution-section';
import HowItWorksSection from '@/components/how-it-works-section';
import ImpactSection from '@/components/impact-section';
import TeamSection from '@/components/team-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
