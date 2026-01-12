import React, { useState, useEffect } from 'react';
import { X, Mail, User, MessageSquare, Send, CheckCircle, MapPin, Phone } from 'lucide-react';

export default function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', message: ''
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
    if (!value.trim() && name !== 'company') return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address';
    if (name === 'phone' && !/^[0-9]{10}$/.test(value.replace(/\s/g, ''))) return '10 digits required';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      await new Promise(r => setTimeout(r, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  if (!showPopup) return null;

  // Professional Styles
  const labelStyle = "block text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-2";
  const inputStyle = "w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 transition-all duration-300 focus:outline-none focus:border-indigo-600 text-slate-800 placeholder-slate-400 font-medium text-sm";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => !isSubmitting && setShowPopup(false)} />

      <div className="relative w-full max-w-5xl bg-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 z-20 text-slate-400 hover:text-indigo-600 transition-colors">
          <X className="w-6 h-6" />
        </button>

        {/* Info Panel (Left) */}
        <div className="w-full md:w-[35%] bg-indigo-700 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-2">Connect <span className="font-bold text-white">With Us</span></h2>
            <div className="w-12 h-1 bg-white/30 mb-8" />
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-indigo-200" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">Email</p>
                  <p className="text-sm">support@itrikainc.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-indigo-200" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">Call Us</p>
                  <p className="text-sm">+1 (555) 012 3456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-indigo-200" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">Visit</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-[11px] text-indigo-200 leading-relaxed font-medium italic">
            "Turning complex ideas into simple, digital solutions."
          </p>
        </div>

        {/* Form Panel (Right) */}
        <div className="w-full md:w-[65%] p-10 md:p-14 bg-white relative">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Message Received</h3>
              <p className="text-slate-500 mt-2">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className={labelStyle}>First Name</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} className={inputStyle} placeholder="Jane" />
                  {errors.firstName && touched.firstName && <p className="text-[10px] text-red-500 font-bold uppercase mt-1 tracking-wider">{errors.firstName}</p>}
                </div>
                <div className="space-y-1">
                  <label className={labelStyle}>Last Name</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} className={inputStyle} placeholder="Smith" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className={labelStyle}>Corporate Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={inputStyle} placeholder="jane@company.com" />
                  {errors.email && touched.email && <p className="text-[10px] text-red-500 font-bold uppercase mt-1 tracking-wider">{errors.email}</p>}
                </div>
                <div className="space-y-1">
                  <label className={labelStyle}>Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={inputStyle} placeholder="123 456 7890" />
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelStyle}>Company Name</label>
                <input name="company" value={formData.company} onChange={handleChange} className={inputStyle} placeholder="Organization Inc." />
              </div>

              <div className="space-y-1">
                <label className={labelStyle}>How can we help?</label>
                <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows="3" className={`${inputStyle} resize-none`} placeholder="Briefly describe your requirements..." />
                {errors.message && touched.message && <p className="text-[10px] text-red-500 font-bold uppercase mt-1 tracking-wider">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-indigo-600 hover:bg-slate-900 text-white font-bold text-[12px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-indigo-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : (
                  <>Send Inquiry <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}