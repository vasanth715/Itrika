import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    startDate: '',
    resumeLink: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const positions = [
    '.Net Developer',
    'AI/ML Developer',
    'ServiceNow Developer',
    'Java Developer',
    'Programmer Analyst',
    'System Admin'
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should only contain letters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[0-9]{10}$/.test(value.replace(/\s/g, ''))) return 'Enter a valid 10-digit phone number';
        return '';
      case 'position':
        if (!value) return 'Please select a position';
        return '';
      case 'startDate':
        if (!value) return 'Available start date is required';
        return '';
      case 'resumeLink':
        if (!value.trim()) return 'Resume link is required';
        if (!/^https?:\/\/.+/.test(value)) return 'Enter a valid URL (e.g., https://...)';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const newTouched = {};
    Object.keys(formData).forEach(key => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          setFormData({
            firstName: '', lastName: '', email: '', phone: '',
            position: '', startDate: '', resumeLink: ''
          });
          setTouched({});
          setErrors({});
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  // Label style constant for consistency
  const labelStyle = "block text-[13px] font-semibold text-gray-500 uppercase tracking-wider mb-1";

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 font-['Montserrat']">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center border-2 border-green-500">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">Thank you for applying. We'll review your application and get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex flex-col justify-center text-white">
          <div className="absolute inset-0 bg-black/40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80')" }}
          ></div>
          <div className="relative z-10 max-w-lg">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase tracking-tighter">
              Job<br />Application
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              Please complete the form to apply<br />for a position with us.
            </p>
            <div className="mt-12 space-y-4">
              {['Professional opportunities', 'Innovative work environment', 'Career growth'].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300 font-medium text-sm uppercase tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className={labelStyle}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
                      ${touched.firstName && errors.firstName ? 'border-red-500' : touched.firstName && formData.firstName ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                  />
                  {touched.firstName && errors.firstName && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.firstName}</div>}
                </div>

                <div className="space-y-1">
                  <label className={labelStyle}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
                      ${touched.lastName && errors.lastName ? 'border-red-500' : touched.lastName && formData.lastName ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                  />
                  {touched.lastName && errors.lastName && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.lastName}</div>}
                </div>
              </div>

              <div className="space-y-1">
                <label className={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
                    ${touched.email && errors.email ? 'border-red-500' : touched.email && formData.email ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                />
                {touched.email && errors.email && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.email}</div>}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="000 000 0000"
                    className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
                      ${touched.phone && errors.phone ? 'border-red-500' : touched.phone && formData.phone ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                  />
                  {touched.phone && errors.phone && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.phone}</div>}
                </div>

                <div className="space-y-1">
                  <label className={labelStyle}>Job Position</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none cursor-pointer font-medium
                      ${touched.position && errors.position ? 'border-red-500' : touched.position && formData.position ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                  >
                    <option value="">Select position</option>
                    {positions.map((pos, index) => (
                      <option key={index} value={pos}>{pos}</option>
                    ))}
                  </select>
                  {touched.position && errors.position && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.position}</div>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className={labelStyle}>Availability Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
                      ${touched.startDate && errors.startDate ? 'border-red-500' : touched.startDate && formData.startDate ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                  />
                  {touched.startDate && errors.startDate && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.startDate}</div>}
                </div>

                <div className="space-y-1">
                  <label className={labelStyle}>Resume Portfolio Link</label>
                  <input
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="https://..."
                    className={`w-full px-0 py-2 bg-transparent border-0 border-b-2 transition-all duration-200 outline-none font-medium
                      ${touched.resumeLink && errors.resumeLink ? 'border-red-500' : touched.resumeLink && formData.resumeLink ? 'border-green-500' : 'border-gray-300 focus:border-black'}`}
                  />
                  {touched.resumeLink && errors.resumeLink && <div className="flex items-center gap-1 text-red-500 text-[11px] mt-1 font-semibold"><AlertCircle className="w-3 h-3" />{errors.resumeLink}</div>}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}