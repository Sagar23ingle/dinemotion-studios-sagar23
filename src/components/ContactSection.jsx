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

    // Directly open user's mail client targeted to hello.dinemotionstudio@gmail.com
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Dinemotion Studios,\n\n` +
      `I would like to inquire about a project:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company / Brand: ${formData.company || 'N/A'}\n` +
      `Service Requested: ${formData.service}\n\n` +
      `Project Details:\n${formData.details}\n\n` +
      `Looking forward to hearing from you.`
    );

    window.location.href = `mailto:hello.dinemotionstudio@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="section bg-transparent border-t border-white/[0.08] px-3 sm:px-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Heading & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-3 sm:mb-4 text-glow">
                LET'S BUILD SOMETHING.
              </h2>
              <p className="text-xs sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 font-light">
                Whether you need a flagship website, an interactive product application, or a commercial film, we would love to hear your vision.
              </p>

              {/* Studio Details with Direct WhatsApp & Gmail Links */}
              <div className="p-4 sm:p-5 rounded-2xl glass-card space-y-3.5 text-xs font-mono text-white/70 mb-6 shadow-xl">
                <a
                  href="mailto:hello.dinemotionstudio@gmail.com"
                  className="flex items-start sm:items-center gap-2.5 group hover:text-[#00D6FF] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00D6FF] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="break-all">GMAIL: <strong className="text-white group-hover:text-[#00D6FF] transition-colors font-mono underline decoration-white/20">hello.dinemotionstudio@gmail.com</strong></span>
                </a>

                <a
                  href="https://wa.me/919209469877?text=Hello%20Dinemotion%20Studios%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start sm:items-center gap-2.5 group hover:text-[#25D366] transition-colors"
                >
                  <span className="w-3.5 h-3.5 flex items-center justify-center text-[#25D366] flex-shrink-0 mt-0.5 sm:mt-0">
                    <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.507 14.307l-.009.075c-.286.99-1.206 1.776-2.222 1.896-.744.088-1.748-.093-3.238-.802-1.992-.95-3.522-2.735-4.385-3.957-.468-.662-.843-1.464-.843-2.235 0-.96.425-1.758.983-2.316.208-.208.455-.316.717-.316.143 0 .284.032.413.093.425.2.784.992.936 1.375.127.318.172.585.04.832-.08.152-.18.293-.284.417-.116.138-.22.25-.333.375-.125.138-.07.317.022.476.545.94 1.34 1.734 2.278 2.279.16.092.339.146.477.022.124-.112.237-.217.374-.333.125-.104.266-.204.418-.284.247-.132.514-.087.832.04.383.152 1.175.511 1.375.936.06.129.093.27.093.413 0 .262-.108.509-.316.717zM12 2C6.477 2 2 6.477 2 12c0 1.946.557 3.762 1.523 5.302L2.2 21.8l4.633-1.305C8.32 21.417 10.103 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.17-.468-4.48-1.28l-.32-.198-3.08.868.867-3.08-.198-.32C4.168 14.97 3.7 13.536 3.7 12c0-4.577 3.723-8.3 8.3-8.3s8.3 3.723 8.3 8.3-3.723 8.3-8.3 8.3z"/></svg>
                  </span>
                  <span>WHATSAPP: <strong className="text-white group-hover:text-[#25D366] transition-colors font-mono underline decoration-white/20">+91 9209469877</strong></span>
                </a>

                <div className="flex items-start sm:items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#00D6FF] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>RESPONSE TIME: <span className="text-white">Within 24 hours</span></span>
                </div>

                <div className="flex items-start sm:items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00D6FF] flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>STUDIO: <span className="text-white break-words">[Global Remote & On-Site]</span></span>
                </div>
              </div>
            </div>

            <div className="text-[10px] sm:text-[11px] font-mono text-[#6e6e73] mb-4 sm:mb-0">
              DINEMOTION STUDIOS • CONFIDENTIAL & NDA COMPLIANT
            </div>
          </div>

          {/* Right Column: Premium Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 md:p-10 rounded-3xl glass-card shadow-2xl relative overflow-hidden">
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
