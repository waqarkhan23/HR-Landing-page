import { useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Testimonials from "./components/sections/Testimonials";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  useEffect(() => {
    // Update document title for SEO
    document.title =
      "PetrolinX - Expert HR Consulting Services | Transform Your Workplace";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transform your workplace with PetrolinX expert HR consulting services. Specializing in HCM implementation, workforce development, and strategic HR leadership. Schedule your free consultation today."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Transform your workplace with PetrolinX expert HR consulting services. Specializing in HCM implementation, workforce development, and strategic HR leadership. Schedule your free consultation today.";
      document.head.appendChild(meta);
    }

    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "HR consulting, human resources, workforce development, HCM implementation, employee engagement, talent acquisition, performance management, HR strategy, workplace transformation";
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "PetrolinX - Expert HR Consulting Services";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content =
        "Transform your workplace with expert HR solutions. Streamlining operations, driving engagement, and building high-performing teams.";
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = "website";
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "PetrolinX",
      description:
        "Expert HR consulting services specializing in workforce transformation and strategic human resource solutions",
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "Customer Service",
        email: "info@petrolinx.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Business District",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10001",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/petrolinx",
        "https://twitter.com/petrolinx",
        "https://facebook.com/petrolinx",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Blog />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
