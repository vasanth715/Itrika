// import { FaArrowRight } from "react-icons/fa";

// export default  ServiceCard = ({ title, description, icon: Icon, link, image }) => {
//   return (
//     <div
//       className="
//         group
//         relative
//         rounded-2xl
//         shadow-xl
//         border
//         border-gray-200
//         min-h-[320px]
//         overflow-hidden
//       "
//     >
//       {/* ================= BACKGROUND IMAGE ================= */}
//       <div className="absolute inset-0">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* ================= BASE CONTENT ================= */}
//       <div className="relative z-10 p-8 flex items-center gap-4 text-white">
//         <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
//           <Icon size={28} />
//         </div>

//         <h3 className="text-xl font-semibold">{title}</h3>
//       </div>

//       {/* ================= GLASS HOVER OVERLAY ================= */}
//       <div
//         className="
//           absolute
//           inset-0
//           z-20
//           px-8
//           py-8
//           transform
//           translate-y-full
//           group-hover:translate-y-0
//           transition-transform
//           duration-500
//           ease-out
//           flex
//           flex-col
//           bg-white/30
//           backdrop-blur-lg
//           border-t
//           border-white/30
//         "
//       >
//         {/* Icon + Heading */}
//         <div className="flex items-center gap-4 mb-6 text-white">
//           <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/30 backdrop-blur-md">
//             <Icon size={28} />
//           </div>
//           <h3 className="text-xl font-semibold">{title}</h3>
//         </div>

//         {/* Description */}
//         <p className="text-white/90 text-sm leading-relaxed mb-8">
//           {description}
//         </p>

//         {/* CTA – BOTTOM LINE ONLY */}
//         <a
//           href={link}
//           className="
//             mt-auto
//             inline-flex
//             items-center
//             gap-2
//             text-sm
//             font-semibold
//             text-orange-400
//             border-b
//             border-sky-400
//             pb-1
//             w-fit
//             hover:text-orange-500
//             hover:border-sky-300
//             transition-colors
//           "
//         >
//           Learn More
//           <span className="transition-transform duration-300 group-hover:translate-x-1">
//             <FaArrowRight size={14} />
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };


import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ title, description, icon: Icon, link, image }) => {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        shadow-xl
        border
        border-gray-200
        min-h-[320px]
        overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* BASE CONTENT */}
      <div className="relative z-10 p-8 flex items-center gap-4 text-white">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* HOVER OVERLAY */}
      <div
        className="
          absolute inset-0 z-20 px-8 py-8
          translate-y-full group-hover:translate-y-0
          transition-transform duration-500 ease-out
          flex flex-col bg-white/30 backdrop-blur-lg
          border-t border-white/30
        "
      >
        <div className="flex items-center gap-4 mb-6 text-white">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/30 backdrop-blur-md">
            <Icon size={28} />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <p className="text-white/90 text-sm leading-relaxed mb-8">
          {description}
        </p>

        <a
          href={link}
          className="
            mt-auto inline-flex items-center gap-2 text-sm font-semibold
            text-orange-400 border-b border-sky-400 pb-1 w-fit
            hover:text-orange-500 hover:border-sky-300 transition-colors
          "
        >
          Learn More
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            <FaArrowRight size={14} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
