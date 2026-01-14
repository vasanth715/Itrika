import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function PremiumHeader({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Why Choose Us", path: "/whychoose", type: "route"},
    { name: "Our Services", href: "#services" },
    { name: "Tools & Tips", href: "#tools" },
  { name: "Contact Us", path: "/contact-us", type: "route" },
    { name: "Careers", path:"/careers",type: "route"},
  ];

  // ✅ Smooth scroll handler
const handleNavClick = (item) => {
  if (item.type === "route") {
    navigate(item.path);
    setIsMobileMenuOpen(false);
    return;
  }

  const section = document.querySelector(item.href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  setIsMobileMenuOpen(false);
};


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b
        ${
          isScrolled
            ? "bg-[#0f172a]/85 backdrop-blur-md border-white/10 shadow-2xl"
            : "bg-white/95 backdrop-blur-sm border-transparent shadow-md"
        }
      `}
    >
      {/* Top Accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* ================= LOGO ================= */}
         {/* ================= LOGO ================= */}
          <div
            className="cursor-pointer group relative"
            onClick={() => navigate("/")}
          >
            <img
              src="/logofinal.png"
              alt="Logo"
              className={`w-52 transition-transform duration-300 group-hover:scale-110
      ${isScrolled
                  ? "brightness-125 contrast-125"
                  : "brightness-110"
                }
    `}
            />
            {isScrolled && (
              <div className="absolute -inset-3 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
            )}
          </div>


          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={`relative group text-[16px] font-semibold transition-colors duration-300
                  ${
                    isScrolled
                      ? "text-white hover:text-orange-400"
                      : "text-slate-800 hover:text-blue-600"
                  }
                `}
              >
                {item.name}

                {/* ✅ Hover underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300
                    ${
                      isScrolled
                        ? "bg-orange-500 group-hover:w-full"
                        : "bg-blue-500 group-hover:w-full"
                    }
                  `}
                />
              </button>
            ))}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-8 h-8 ${
                  isScrolled ? "text-white" : "text-slate-800"
                }`}
              />
            ) : (
              <Menu
                className={`w-8 h-8 ${
                  isScrolled ? "text-white" : "text-slate-800"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER (UNCHANGED STRUCTURE) ================= */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t backdrop-blur-xl ${
            isScrolled
              ? "bg-[#0f172a]/90 border-slate-700"
              : "bg-white/95 border-slate-100"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg text-lg font-bold transition-colors
                  ${
                    isScrolled
                      ? "text-gray-200 hover:bg-white/10"
                      : "text-slate-800 hover:bg-blue-50"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
