import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import CourseContent from '@/components/CourseContent';
import ForWhom from '@/components/ForWhom';
import MicroAuthority from '@/components/MicroAuthority';
import PracticalClarification from '@/components/PracticalClarification';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';

/**
 * WhatsApp que Vende - Landing Page
 * 
 * Design Philosophy: Energía Emprendedora Vibrante
 * - Colors: Green WhatsApp (#25D366) + Deep Blue (#0066CC) + Energetic Orange (#FF6B35)
 * - Typography: Montserrat (display) + Roboto (body)
 * - Layout: Asymmetric sections with generous spacing
 * - Animations: Subtle fade-in and hover effects for engagement
 * - Focus: High conversion with clear CTAs and trust signals
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <CourseContent />
        <ForWhom />
        <MicroAuthority />
        <PracticalClarification />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
