import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Security from "@/components/Security";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Project />
      <Features />
      <Steps />
      <Security />
      <Download />
      <Faq />
      <Footer />
    </main>
  );
}
