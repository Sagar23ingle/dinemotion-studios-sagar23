import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Design & Development',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'Website Design & Development',
    'Web & App Development',
    'Commercial Video Production',
    'Promotional Content',
    'Motion Graphics',
    'Full Scope'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="section bg-transparent border-t border-white/[0.08]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4 text-glow">
                LET'S BUILD SOMETHING.
              </h2>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8 font-light">
                Whether you need a flagship website, an interactive product application, or a commercial film, we would love to hear your vision.
              </p>

              {/* Studio Details */}
              <div className="p-5 rounded-2xl bg-[#0A0A0C] border border-white/10 space-y-3.5 text-xs font-mono text-white/60 mb-6 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#00D6FF]" />
                  <span>INQUIRIES: <strong className="text-white font-mono">[hello@dinemotion.com]</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#00D6FF]" />
                  <span>RESPONSE TIME: <span className="text-white">Within 24 hours</span></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00D6FF]" />
                  <span>STUDIO: <span className="text-white">[Global Remote & On-Site]</span></span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#6e6e73]">
              DINEMOTION STUDIOS • CONFIDENTIAL & NDA COMPLIANT
            </div>
          </div>

          {/* Right Column: Premium Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0A0A0C] border border-white/[0.08] shadow-2xl relative overflow-hidden">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0050FF]/20 border border-[#00D6FF]/40 text-[#00D6FF] flex items-center justify-center mb-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Inquiry Received.
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 max-w-sm font-light">
                    Thank you for reaching out to Dinemotion Studios. We will review your brief and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', service: 'Website Design & Development', details: '' });
                    }}
                    className="mt-4 text-xs font-mono text-[#00D6FF] hover:underline"
                  >
                    SEND ANOTHER INQUIRY →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono tracking-wider text-[#6e6e73] uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00D6FF] transition-all text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono tracking-wider text-[#6e6e73] uppercase">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00D6FF] transition-all text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-[#6e6e73] uppercase">
                      COMPANY / BRAND (OPTIONAL)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Studio"
                      className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00D6FF] transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono tracking-wider text-[#6e6e73] uppercase">
                      PRIMARY SERVICE *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.service === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setFormData({ ...formData, service: opt })}
                            className={`px-3 py-2 rounded-lg text-xs font-mono text-left transition-all duration-200 border ${
                              isSelected
                                ? 'bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white font-medium border-transparent shadow-lg'
                                : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-[#6e6e73] uppercase">
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about the project goals, timeline, and deliverables..."
                      className="w-full px-3.5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#00D6FF] transition-all text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full py-3.5 justify-center text-xs font-semibold tracking-wide"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'START A PROJECT'}</span>
                    <ArrowRight className="w-3.5 h-3.5 btn-arrow text-[#00D6FF]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
