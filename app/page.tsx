import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIsGrandline from "./components/WhatIsGrandline";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import LearningVideos from "./components/LearningVideos";
import Podcasts from "./components/Podcasts";
import CollegePartners from "./components/CollegePartners";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E3FDFD] text-slate-800 selection:bg-[#71C9CE] selection:text-white">
      <Header />
      <main>
        <Hero />
        <WhatIsGrandline />
        <Problem />
        <Solution />
        <HowItWorks />
        <Services />
        <WhyChoose />
        <LearningVideos />
        <Podcasts />
        <CollegePartners />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
