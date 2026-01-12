import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  // Provided content nundi 5 key points
  const points = [
    "Personalized IT consulting and staffing solutions tailored to your unique business needs.",
    "Deep expertise across multiple industry verticals, including healthcare, finance, and retail.",
    "Proven history of delivering tangible results by optimizing infrastructure and streamlining operations.",
    "Access to a vast network of skilled professionals for short-term and long-term staffing.",
    "Cutting-edge solutions leveraging AI, cloud computing, and advanced cybersecurity."
  ];

  return (
    <section id="about" className="py-12 md:py-20 lg:py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid: Mobile lo single column, LG screens nundi two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* --- IMAGE SECTION --- */}
          {/* order-2 lg:order-1: Mobile lo text tharvatha image vasthundi, Desktop lo left side untundi */}
          <div className="relative group order-2 lg:order-1 w-full max-w-2xl mx-auto lg:mx-0">
            {/* Background Decorative Glow */}
            <div className="absolute -inset-4 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all duration-700"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/about.png" 
                alt="Itrika Team Collaboration" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Experience Card - Hidden on very small mobiles */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-blue-600 p-4 md:p-6 rounded-xl shadow-2xl text-white">
              <p className="text-2xl md:text-3xl font-bold">10+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-semibold opacity-90">Years Experience</p>
            </div>
          </div>

          {/* --- CONTENT SECTION --- */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4 md:space-y-5">
              {/* Responsive Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 bg-blue-50 border-l-4 border-blue-600 text-blue-700 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
                Why Choose Us
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
                WE ARE <span className="text-blue-600">ITRIKA INC</span>
              </h2>
              
              <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
              
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal">
                At Itrika Inc., we are not just service providers; we are partners in your success, dedicated to driving innovation and growth through bespoke technology solutions.
              </p>
            </div>

            {/* Points List - Mobile friendly spacing */}
            <ul className="space-y-4 md:space-y-5">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4 group">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm md:text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Responsive CTA Button */}
            <div className="pt-4 md:pt-6">
              <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-blue-600 hover:bg-slate-900 text-white font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-blue-600/20 active:scale-95">
                About Our Partnership
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}