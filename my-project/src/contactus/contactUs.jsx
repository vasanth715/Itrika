import React, { useState, useEffect } from "react";
import { X, Mail, Send, CheckCircle, Phone } from "lucide-react";

export default function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

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
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  if (!showPopup) return null;

  const labelStyle =
    "block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1";
  const inputStyle =
    "w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 outline-none text-sm";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => !isSubmitting && setShowPopup(false)}
      />

      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="fixed top-4 right-4 z-[100] bg-white p-2 rounded-full shadow-lg"
      >
        <X className="w-5 h-5 text-slate-700" />
      </button>

      {/* ================= POPUP ================= */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* ================= BANNER ================= */}
        <div className="w-full h-[150px] sm:h-[180px] relative">
          <img
            src="/contact-banner.jpg"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Contact Us
            </h2>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* LEFT INFO */}
          <div className="w-full md:w-[35%] bg-indigo-700 p-6 text-white">
            <h3 className="text-xl font-light mb-6">
              Connect <span className="font-bold">With Us</span>
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-200" />
                <div>
                  <p className="text-[9px] uppercase text-indigo-300 font-bold">
                    Email
                  </p>
                  <p className="text-sm">support@itrikainc.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-200" />
                <div>
                  <p className="text-[9px] uppercase text-indigo-300 font-bold">
                    Call
                  </p>
                  <p className="text-sm">+1 (555) 012 3456</p>
                </div>
              </div>
            </div>

            <p className="hidden md:block mt-8 text-[11px] text-indigo-200 italic">
              "Turning complex ideas into simple digital solutions."
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full md:w-[65%] p-6 sm:p-10 overflow-y-auto">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-lg font-bold">Message Sent</h3>
                <p className="text-slate-500 text-sm mt-2">
                  We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={labelStyle}>Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputStyle}
                  />
                  {errors.name && touched.name && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputStyle}
                    />
                    {errors.email && touched.email && (
                      <p className="text-[10px] text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
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
                    {errors.phone && touched.phone && (
                      <p className="text-[10px] text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
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
                    rows="2"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputStyle} resize-none`}
                  />
                  {errors.message && touched.message && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-indigo-600 hover:bg-slate-900 text-white uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2 rounded-md"
                >
                  {isSubmitting ? "Processing..." : "Send Inquiry"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
