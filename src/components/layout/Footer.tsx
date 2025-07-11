import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/assets/logo.png";
const Footer = () => {
  const services = [
    "HCM Implementation",
    "HR Project Management",
    "Workforce Development",
    "Strategic HR Leadership",
    "Employee Handbooks",
    "Engagement Surveys",
    "Compensation Planning",
    "Performance Management",
    "Talent Acquisition",
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="petrolinx_logo" className="h-36 w-36" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Streamlining HR operations, driving employee engagement, and
              building high-performing teams through strategic consulting and
              innovative solutions
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-orange-500/20 text-gray-400 hover:text-orange-400"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-orange-500/20 text-gray-400 hover:text-orange-400"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-orange-500/20 text-gray-400 hover:text-orange-400"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400">info@petrolinx.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400">
                    123 Business District, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 PetrolinX. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
