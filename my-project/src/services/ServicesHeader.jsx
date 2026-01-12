// // import { motion } from "framer-motion";
// // import hdimg from "../../assets/services/hdimage.jpg";


// // const ServicesHeader = () => {
// //   return (
// //     <div
// //       className="relative py-28 px-6 overflow-hidden"
// //       style={{
// //         backgroundImage: `url(${headingImg})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //       }}
// //     >
// //       <div className="relative max-w-6xl mx-auto">
        
// //         {/* Heading */}
// //         <motion.h2
// //           initial={{ opacity: 0, y: 40 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //           className="
// //             text-4xl md:text-5xl font-bold mb-4
// //             text-[#0b1c3d]
// //             drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)]
// //           "
// //         >
// //           Our Services
// //         </motion.h2>

// //         {/* Accent Line */}
// //         <motion.div
// //           initial={{ width: 0 }}
// //           animate={{ width: "96px" }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //           className="h-1.5 bg-orange-400 mb-6 rounded-full"
// //         />

// //         {/* Description */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.6 }}
// //           className="
// //             max-w-3xl
// //             text-[#0b1c3d]
// //             leading-relaxed
// //             text-lg
// //             drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]
// //           "
// //         >
// //           With a deep commitment to innovation, our expert team harnesses the
// //           latest technologies and proven best practices to craft software
// //           solutions that are not only highly functional but also visually
// //           stunning.
// //         </motion.p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesHeader;



// import { motion } from "framer-motion";
// import hdimg from "../../src/assets/services/hdimg.jpg";

// export default ServicesHeader = () => {
//   return (
//     <div
//       className="relative py-28 px-6 overflow-hidden"
//       style={{
//         backgroundImage: `url(${hdimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="relative max-w-6xl mx-auto">
        
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="
//             text-4xl md:text-5xl font-bold mb-4
//             text-white
//             drop-shadow-2xl
//           "
//         >
//           Our Services
//         </motion.h2>

//         {/* Accent Line */}
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "96px" }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="h-1.5 bg-orange-400 mb-6 rounded-full"
//         />

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//           className="
//             max-w-3xl
//             text-white
//             leading-relaxed
//             text-lg
//             drop-shadow-xl
//           "
//         >
//           With a deep commitment to innovation, our expert team harnesses the
//           latest technologies and proven best practices to craft software
//           solutions that are not only highly functional but also visually
//           stunning.
//         </motion.p>
//       </div>
//     </div>
//   );
// };

import { motion } from "framer-motion";
import hdimg from "../assets/services/hdimg.jpg";

const ServicesHeader = () => {
  return (
    <div
      className="relative py-28 px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${hdimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl"
        >
          Our Services
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "96px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="h-1.5 bg-orange-400 mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl text-white leading-relaxed text-lg drop-shadow-xl"
        >
          With a deep commitment to innovation, our expert team harnesses the
          latest technologies and proven best practices to craft software
          solutions that are both functional and visually stunning.
        </motion.p>
      </div>
    </div>
  );
};

export default ServicesHeader;

