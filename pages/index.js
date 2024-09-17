import dynamic from "next/dynamic";

// Dynamically import components to prevent hydration errors
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const Features = dynamic(() => import("../components/Features"), {
  ssr: false,
});
const Examples = dynamic(() => import("../components/Examples"), {
  ssr: false,
});
const Demonstration = dynamic(() => import("../components/Demonstration"), {
  ssr: false,
});
const LinkToUse = dynamic(() => import("../components/LinkToUse"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../components/FAQ"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Examples />
      <Demonstration />
      <LinkToUse />
      <FAQ />
      <Footer />
    </>
  );
}
