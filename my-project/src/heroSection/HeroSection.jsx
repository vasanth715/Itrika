// import React, { useState, useEffect } from 'react';
// import { ArrowRight, CheckCircle, Users, Briefcase, TrendingUp, Sparkles } from 'lucide-react';

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const stats = [
//     { number: '10+', label: 'Years Experience', icon: Briefcase },
//     { number: '200+', label: 'Projects Delivered', icon: CheckCircle },
//     { number: '150+', label: 'Happy Clients', icon: Users },
//     { number: '98%', label: 'Success Rate', icon: TrendingUp }
//   ];

//   const features = [
//     'Bespoke Tech Solutions',
//     'Innovation-Driven Approach',
//     'End-to-End Support',
//     'Industry Expertise'
//   ];

//   return (
//     <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
//               <Sparkles className="w-4 h-4" />
//               <span>10+ Years of Excellence in IT</span>
//             </div>

//             {/* Main Heading */}
//             <div className="space-y-4">
//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="text-gray-900">IT Consulting &</span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//                   Services
//                 </span>
//               </h1>
              
//               <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
//             </div>

//             {/* Subheading */}
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Your partner in tech innovation, <span className="font-semibold text-gray-900">ITrika Inc.</span> commits to nurturing groundbreaking ideas. We craft bespoke tech solutions, embracing collaboration to empower organizations and redefine possibilities.
//             </p>

//             {/* Features List */}
//             <div className="grid grid-cols-2 gap-3">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index}
//                   className="flex items-center gap-2 text-gray-700"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
//                     <CheckCircle className="w-3 h-3 text-blue-600" />
//                   </div>
//                   <span className="text-sm font-medium">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
//                 Get Started
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <button className="px-8 py-4 bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
//                 View Our Work
//               </button>
//             </div>

//             {/* Trust Indicators */}
//             <div className="pt-6 flex items-center gap-6 text-sm text-gray-600">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
//                 ))}
//               </div>
//               <span>Trusted by <span className="font-semibold text-gray-900">150+ companies</span> worldwide</span>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
//             {/* Main Image Container */}
//             <div className="relative">
//               {/* Decorative Frame */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
              
//               {/* Image Placeholder - Replace with your actual image */}
//               <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
//                 <img 
//                   src="./Gemini_Generated_Image_kz2tyfkz2tyfkz2t.png" 
//                   alt="IT Consulting Services"
//                   className="w-full h-auto object-cover"
//                 />
                
//                 {/* Overlay Badge */}
//                 <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
//                       <CheckCircle className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-gray-900">98%</div>
//                       <div className="text-xs text-gray-600">Success Rate</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom Badge */}
//                 <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
//                       <Briefcase className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-gray-900">10+</div>
//                       <div className="text-xs text-gray-600">Years of Excellence</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-2xl opacity-20 blur-xl animate-pulse delay-500"></div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <div 
//                 key={index}
//                 className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
//               >
//                 <div className="flex flex-col items-center text-center space-y-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Icon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
//                   <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PremiumHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden font-sans">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="hero4.png"
          alt="IT Consulting Background"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent lg:from-[#0f172a]/90 lg:via-[#0f172a]/60 lg:to-transparent" />
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 items-center">
          
          {/* ✅ xl and above → move content 20px left ONLY */}
          <div
            className={`space-y-8 transition-all duration-1000 transform text-left
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
              xl:-ml-[20px]
            `}
          >
            {/* Badge – stable for md & lg */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400
              text-sm md:text-xs lg:text-xs
              font-bold md:font-semibold lg:font-semibold
              tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md
            ">
              <Sparkles className="w-4 h-4" />
              Empowering Innovation
            </div>

            {/* Heading – reduced on md & lg ONLY */}
            <h1
              className="
                text-5xl
                md:text-[42px]
                lg:text-[48px]
                xl:text-7xl
                font-[700]
                md:font-[600]
                lg:font-[600]
                text-white leading-tight tracking-tight
              "
            >
              Future-Ready <br />
              <span className="text-orange-500 drop-shadow-sm">
                IT Consulting
              </span>
            </h1>

            {/* Paragraph – reduced on md & lg */}
            <p
              className="
                text-lg
                md:text-[16px]
                lg:text-[17px]
                xl:text-xl
                text-slate-200 max-w-xl leading-relaxed
                font-[500] md:font-[400]
                drop-shadow-md
              "
            >
              ITrika Inc. helps organizations navigate the digital landscape with
              <span className="text-blue-400 font-bold">
                {" "}
                bespoke tech solutions{" "}
              </span>
              and cutting-edge industry expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-6">
              <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-[700] rounded-full shadow-lg shadow-orange-500/30 transition-all duration-400 flex items-center gap-3 group">
                Work With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-10 py-4 bg-white/5 border-2 border-white/20 hover:border-blue-500 text-white font-[700] rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Our Services
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="pt-12 border-t border-white/10 inline-block">
              <p className="text-xs font-[700] text-slate-400 uppercase tracking-[0.3em]">
                Trusted by industry leaders worldwide
              </p>
            </div>
          </div>

          {/* Right spacer */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-full lg:w-1/2 h-64 bg-gradient-to-tr from-blue-600/10 to-transparent z-0 pointer-events-none" />
    </div>
  );
}
