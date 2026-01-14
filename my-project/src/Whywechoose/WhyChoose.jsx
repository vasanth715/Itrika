import React from "react";
import { Users, Target, UserPlus, Zap, Handshake } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Tailored IT Solutions",
    description:
      "We offer personalized IT consulting and staffing solutions tailored to your unique business goals across healthcare, finance, and retail.",
    icon: <Target className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
  },
  {
    id: "02",
    title: "Proven Results",
    description:
      "From optimizing infrastructure to developing innovative solutions, we deliver tangible results that drive real, measurable improvements.",
    icon: <Zap className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
  },
  {
    id: "03",
    title: "Top-Tier Talent",
    description:
      "Access a vast network of skilled professionals for short-term projects or long-term growth. We find the right fit for your needs.",
    icon: <UserPlus className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
  },
  {
    id: "04",
    title: "Cutting-Edge Tech",
    description:
      "We leverage AI, cloud computing, and cybersecurity advancements to keep your business competitive in an ever-changing landscape.",
    icon: <Users className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
  },
  {
    id: "05",
    title: "Strategic Partnership",
    description:
      "You gain a dedicated ally committed to your long-term success. Let's build a partnership that drives innovation and growth.",
    icon: <Handshake className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        bg-slate-50 
        px-6 
        pt-24 sm:pt-28 md:pt-32 lg:pt-36 
        pb-20
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-700 font-bold uppercase tracking-widest text-sm mb-3">
            Our Value Proposition
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-slate-900">
            Why Choose <span className="font-bold">Itrika Consulting?</span>
          </h3>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="
                group bg-white p-8 rounded-2xl shadow-sm 
                hover:shadow-xl transition-all duration-300 
                border border-slate-100 relative overflow-hidden
              "
            >
              <span className="absolute -top-2 -right-2 text-6xl font-bold text-slate-50 opacity-10 group-hover:text-indigo-100 transition-all">
                {item.id}
              </span>

              <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-700 transition-colors">
                {item.title}
              </h4>

              <p className="text-slate-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center">
          <p className="text-indigo-700 font-medium italic">
            "Turning complex ideas into simple digital solutions."
          </p>
        </div>
      </div>
    </section>
  );
}
