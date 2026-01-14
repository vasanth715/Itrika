import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

export default function PremiumFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Why Choose Us", "Careers", "Contact Us"],
    },
    {
      title: "Services",
      links: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML"],
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Documentation", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-400" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-5">
            <img
              src="/teledhu.png"
              alt="Itrika Logo"
              className="w-40 brightness-125"
            />

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Empowering businesses with innovative digital solutions. Leading
              the way in technology and professional growth.
            </p>

            <div className="space-y-3 pt-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  1821 Walden Office Square, Suite 400,
                  <br />
                  Schaumburg, Illinois, 60173
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-300 text-sm">
                  Tel: 847.701.5578
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a
                  href="mailto:info@itrika-inc.com"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  info@itrika-inc.com
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="text-base font-bold tracking-wide border-b border-white/10 pb-2 inline-block">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-all duration-300 relative group inline-block"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm order-2 md:order-1">
            © Copyright 2025 Itrika Inc - All Rights Reserved
          </div>

         <div className="flex gap-3 order-1 md:order-2">
  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
    <a
      key={i}
      href="#"
      className="
        group
        relative
        w-10 h-10
        flex items-center justify-center
        rounded-sm
        border border-white/10
        transition-all duration-300 ease-out
        hover:border-orange-500
        hover:bg-orange-500/10
      "
    >
      {/* ICON */}
      <Icon
        className="
          w-5 h-5
          text-gray-400
          transition-all duration-300
          group-hover:text-orange-500
          group-hover:scale-110
        "
      />

      {/* ORANGE BORDER REVEAL EFFECT */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-sm
          border border-orange-500
          opacity-0
          scale-90
          transition-all duration-300
          group-hover:opacity-100
          group-hover:scale-100
        "
      />
    </a>
  ))}
</div>


          <button
            onClick={scrollToTop}
            className="order-3 p-2.5 bg-white/5 hover:bg-orange-500 transition-all duration-300 rounded-full"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Subtle Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
    </footer>
  );
}
