// import React, { useState } from "react";
// import { Mail, Phone, Send, CheckCircle, MapPin } from "lucide-react";

// export default function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateField = (name, value) => {
//     if (!value.trim() && name !== "company") return `${name} is required`;
//     if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//       return "Invalid email address";
//     if (name === "phone" && !/^[0-9]{10}$/.test(value.replace(/\s/g, "")))
//       return "10 digits required";
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//     if (touched[name]) {
//       setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
//     }
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((p) => ({ ...p, [name]: true }));
//     setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const err = validateField(key, formData[key]);
//       if (err) newErrors[key] = err;
//     });
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitting(true);
//       await new Promise((r) => setTimeout(r, 2000));
//       setIsSubmitting(false);
//       setIsSuccess(true);
//     }
//   };

//   const labelStyle =
//     "block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1";
//   const inputStyle =
//     "w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 outline-none text-sm";

//   return (
//     <div className="w-full">
//       {/* ================= BANNER ================= */}
//       <section className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] overflow-hidden">
//         <img
//           src="./contactbanner.png"
//           alt="Contact Banner"
//           className="w-full h-full object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 via-blue-600/60 to-indigo-700/70" />

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
//             <span className="text-orange-400">Contact</span>{" "}
//             <span className="text-sky-300">Us</span>
//           </h1>

//           <p className="mt-3 max-w-xl text-sm sm:text-base text-white/90 font-medium">
//             Let’s connect and build something meaningful together
//           </p>

//           <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-orange-400 to-sky-400 rounded-full" />
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="max-w-7xl mx-auto px-4 py-20">
//         {/* 🔥 OUTER WRAPPER CONTAINER */}
//         <div className="bg-slate-50 rounded-2xl shadow-xl p-6 md:p-10">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* LEFT: CONTACT FORM */}
//             <div className="bg-white shadow-2xl rounded-xl p-10">
//               {isSuccess ? (
//                 <div className="text-center py-20">
//                   <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold">Message Sent</h3>
//                   <p className="text-slate-500 mt-2">
//                     We will contact you shortly.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label className={labelStyle}>Full Name</label>
//                     <input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={inputStyle}
//                     />
//                     {errors.name && touched.name && (
//                       <p className="text-[10px] text-red-500 mt-1">
//                         {errors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-5">
//                     <div>
//                       <label className={labelStyle}>Email</label>
//                       <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={inputStyle}
//                       />
//                     </div>

//                     <div>
//                       <label className={labelStyle}>Phone</label>
//                       <input
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={inputStyle}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className={labelStyle}>Company (Optional)</label>
//                     <input
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className={inputStyle}
//                     />
//                   </div>

//                   <div>
//                     <label className={labelStyle}>Message</label>
//                     <textarea
//                       rows="3"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`${inputStyle} resize-none`}
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full py-4 bg-indigo-600 hover:bg-orange-600 text-white uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 rounded-md"
//                   >
//                     {isSubmitting ? "Processing..." : "Send Inquiry"}
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* RIGHT: MAP */}
//             <div className="space-y-3">
//               <div className="rounded-xl overflow-hidden shadow-2xl">
//                 <iframe
//                   title="Itrika Location"
//                   className="w-full h-[410px]"
//                   loading="lazy"
//                   allowFullScreen
//                   src="https://www.google.com/maps?q=1821%20Walden%20Office%20Square%20Suite%20400%20Schaumburg%20Illinois%2060173&output=embed"
//                 />
//               </div>

//               <div className="bg-indigo-700 text-white rounded-xl p-8 space-y-5">
//                 <div className="flex items-start gap-3">
//                   <MapPin />
//                   <p>
//                     1821 Walden Office Square, Suite 400,
//                     <br />
//                     Schaumburg, Illinois, 60173
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Phone />
//                   <p>+1 (555) 012 3456</p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Mail />
//                   <p>support@itrikainc.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MapPin } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (name, value) => {
    if (!value.trim() && name !== "company") return `${name} is required`;
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email address";
    if (name === "phone" && !/^[0-9]{10}$/.test(value.replace(/\s/g, "")))
      return "10 digits required";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (touched[name]) {
      setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  /* ✅ MOBILE input height reduced */
  const inputStyle =
    "w-full px-4 py-3 max-[425px]:py-2.5 max-[375px]:py-2 bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 outline-none text-sm";

  const labelStyle =
    "block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1";

  return (
    <div className="w-full">
      {/* ================= BANNER ================= */}
      <section
        className="
          relative
          h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px]
          overflow-hidden

          /* ✅ MOBILE HEADER GAP */
          mt-[60px]
          max-[425px]:mt-[70px]
          max-[375px]:mt-[80px]

          sm:mt-0
        "
      >
        <img
          src="./contactbanner.png"
          alt="Contact Banner"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 via-blue-600/60 to-indigo-700/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            <span className="text-orange-400">Contact</span>{" "}
            <span className="text-sky-300">Us</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-white/90 font-medium">
            Let’s connect and build something meaningful together
          </p>

          <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-orange-400 to-sky-400 rounded-full" />
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section
        className="
          max-w-7xl mx-auto px-4 pb-20

          /* ✅ MOBILE GAP REDUCED */
          mt-16 max-[425px]:mt-14 max-[375px]:mt-12

          sm:mt-0
        "
      >
        <div className="bg-slate-50 rounded-2xl shadow-xl p-5 sm:p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT: CONTACT FORM */}
            <div
              className="
                bg-white shadow-2xl rounded-xl
                p-10 sm:p-10
                max-[425px]:p-5
                max-[375px]:p-4
                /* ✅ MOBILE padding reduced */
              "
            >
              {isSuccess ? (
                <div className="text-center py-20">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Message Sent</h3>
                  <p className="text-slate-500 mt-2">
                    We will contact you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="
                    space-y-5
                    max-[425px]:space-y-4
                    max-[375px]:space-y-3
                    /* ✅ MOBILE vertical gaps reduced */
                  "
                >
                  <div>
                    <label className={labelStyle}>Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputStyle}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 max-[425px]:gap-4">
                    <div>
                      <label className={labelStyle}>Email</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label className={labelStyle}>Phone</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>Company (Optional)</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Message</label>
                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputStyle} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full
                      py-4 max-[425px]:py-3 max-[375px]:py-2.5
                      bg-indigo-600 hover:bg-orange-600
                      text-white uppercase tracking-widest text-xs font-bold
                      flex items-center justify-center gap-2 rounded-md
                      /* ✅ MOBILE button height reduced */
                    "
                  >
                    {isSubmitting ? "Processing..." : "Send Inquiry"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: MAP */}
            <div className="space-y-3 max-[425px]:space-y-2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  title="Itrika Location"
                  className="w-full h-[280px] sm:h-[340px] md:h-[410px]"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=1821%20Walden%20Office%20Square%20Suite%20400%20Schaumburg%20Illinois%2060173&output=embed"
                />
              </div>

              <div className="bg-indigo-700 text-white rounded-xl p-8 space-y-5 max-[425px]:p-6">
                <div className="flex items-start gap-3">
                  <MapPin />
                  <p>
                    1821 Walden Office Square, Suite 400,
                    <br />
                    Schaumburg, Illinois, 60173
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone />
                  <p>+1 (555) 012 3456</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail />
                  <p>support@itrikainc.com</p>
                </div>
              </div>
            </div>
            {/* END MAP */}
          </div>
        </div>
      </section>
    </div>
  );
}
