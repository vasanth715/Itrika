import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { jobs } from "./jobData";

export default function JobDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Job not found
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Application Submitted</h2>
          <p className="text-slate-500 mt-2">
            Our team will contact you shortly.
          </p>
          <button
            onClick={() => navigate("/careers")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative h-[260px] md:h-[340px]">
        <img
          src="/careers-banner.jpg"
          alt="Career Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-sky-900/70 to-orange-600/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl font-bold">{job.title}</h1>
          <p className="text-white/90 mt-2">
            {job.location} · {job.workspace}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate("/careers")}
          className="flex items-center gap-2 text-blue-600 font-semibold mb-8"
        >
          <ArrowLeft /> Back to Careers
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            <Section title="Summary">{job.summary}</Section>
            <ListSection title="Responsibilities" items={job.responsibilities} />
            <ListSection title="Qualifications" items={job.qualifications} />
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white shadow-2xl rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Apply for this position
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input placeholder="Full Name" className="w-full border rounded-lg px-4 py-3" />
                <input placeholder="Email" className="w-full border rounded-lg px-4 py-3" />
                <input placeholder="Phone" className="w-full border rounded-lg px-4 py-3" />
                <textarea rows="4" placeholder="Cover Letter" className="w-full border rounded-lg px-4 py-3" />
                <input type="file" />

                <button
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================= HELPERS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-600">{children}</p>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="list-disc ml-6 text-slate-600 space-y-2">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
