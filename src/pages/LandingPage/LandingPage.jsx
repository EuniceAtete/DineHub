import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import AboutUs from "./AboutUs";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <AboutUs />
        <Pricing />
        <ContactUs />
      </main>
    </>
  );
}

export default LandingPage;
