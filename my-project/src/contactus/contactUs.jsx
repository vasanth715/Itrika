import React, { useState, useEffect } from "react";
import {
  X,
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    if (!value.trim() && name !== "company")
      return `${name} is required`;
    if (
      name === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    )
      return "Invalid email address";
    if (
      name === "phone" &&
      !/^[0-9]{10}$/.test(value.replace(/\s/g, ""))
    )
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
    "w-full px-3 sm:px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-indigo-600 outline-none text-sm";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-6">
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

      {/* Popup */}
      <div
        className="
          relative
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          bg-white
          rounded-lg
          shadow-2xl
          flex
          flex-col
          md:flex-row
        "
      >
        {/* LEFT INFO PANEL */}
        <div className="w-full md:w-[35%] bg-indigo-700 p-6 sm:p-8 text-white">
          <h2 className="text-2xl font-light mb-6">
            Connect <span className="font-bold">With Us</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-200" />
              <div>
                <p className="text-[10px] uppercase text-indigo-300 font-bold">
                  Email
                </p>
                <p className="text-sm">support@itrikainc.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-200" />
              <div>
                <p className="text-[10px] uppercase text-indigo-300 font-bold">
                  Call
                </p>
                <p className="text-sm">+1 (555) 012 3456</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-200" />
              <div>
                <p className="text-[10px] uppercase text-indigo-300 font-bold">
                  Location
                </p>
                <p className="text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[11px] text-indigo-200 italic">
            "Turning complex ideas into simple digital solutions."
          </p>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full md:w-[65%] p-6 sm:p-10">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center py-20 text-center">
              <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
              <h3 className="text-xl font-bold">Message Sent</h3>
              <p className="text-slate-500 mt-2">
                We will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelStyle}>First Name</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputStyle}
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-[10px] text-red-500 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelStyle}>Last Name</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    className={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Company</label>
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

              <div className="sticky bottom-0 bg-white pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    py-4
                    bg-indigo-600
                    hover:bg-slate-900
                    text-white
                    uppercase
                    tracking-widest
                    text-xs
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  {isSubmitting ? "Processing..." : "Send Inquiry"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
