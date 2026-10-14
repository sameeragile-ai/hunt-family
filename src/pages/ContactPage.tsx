import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { InnerPageHero } from '../components/InnerPageHero';
import { clinicData, getClinicLiveStatus } from '../data/clinicData';
import { PlanVisitSection } from '../sections/PlanVisitSection';

export const ContactPage: React.FC = () => {
  const liveStatus = getClinicLiveStatus();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Dentistry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full">
      <InnerPageHero
        badge="Get in Touch"
        title="Contact Hunt Family Dentistry in Frisco, TX"
        subtitle="Have questions about our services, insurance coverage, or need a same-day emergency visit? We are always happy to help."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Info & Hours (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Live Status Card */}
              <div className="p-6 rounded-[28px] bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${liveStatus.badgeColor}`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${liveStatus.badgeColor}`} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#0F1B2D]">
                      {liveStatus.statusText}
                    </h4>
                    <span className="text-xs text-[#5A6B80]">
                      {liveStatus.nextChangeText}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200/70 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#22B8E6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0F1B2D] block">Clinic Location:</span>
                      <span className="text-[#5A6B80]">{clinicData.address.full}</span>
                      <a
                        href={clinicData.address.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 hover:underline block text-xs font-semibold mt-1"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0F1B2D] block">Phone:</span>
                      <a
                        href={`tel:${clinicData.contact.phoneRaw}`}
                        className="text-[#0F1B2D] font-bold hover:text-teal-700"
                      >
                        {clinicData.contact.phone}
                      </a>
                      <span className="text-[#5A6B80] block text-xs">Call or text for questions</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0F1B2D] block">Online Booking:</span>
                      <a
                        href={clinicData.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-700 hover:underline text-xs font-semibold"
                      >
                        Book 24/7 via Kasper Scheduler →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-xs">
                <h4 className="font-heading font-bold text-base text-[#0F1B2D] mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  Office Hours
                </h4>

                <div className="space-y-2 text-xs">
                  {clinicData.schedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-1.5 border-b last:border-b-0 border-slate-100 text-[#5A6B80]"
                    >
                      <span className="font-medium text-[#0F1B2D]">{item.day}</span>
                      <span>{item.isOpen ? `${item.open} – ${item.close}` : 'Closed'}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="p-5 rounded-[24px] bg-rose-50 border border-rose-200/70 text-xs text-rose-950">
                <div className="flex items-center gap-2 font-bold mb-1 text-rose-800">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Dental Emergency Notice</span>
                </div>
                <p className="leading-relaxed">
                  Experiencing severe dental pain or acute trauma? We offer same-day emergency visits. Call{' '}
                  <a href={`tel:${clinicData.contact.phoneRaw}`} className="underline font-bold">
                    (469) 269-0997
                  </a>{' '}
                  immediately. If after hours and life-threatening, please dial 911.
                </p>
              </div>

            </div>

            {/* Right Column: Inquiry Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-slate-200/90 shadow-xl">
                
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                    Send a Message
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0F1B2D]">
                    Have a Question for Our Team?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6B80] mt-1">
                    Fill out the form below and our front desk will respond during clinic hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-3xl bg-teal-50 border border-teal-200 text-center">
                    <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-teal-950 mb-2">
                      Thank You, {formData.name || 'Friend'}!
                    </h4>
                    <p className="text-sm text-teal-800 max-w-md mx-auto mb-6">
                      Your inquiry has been received. A member of Dr. Hunt's team will contact you shortly via phone or email.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: 'General Dentistry', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#0F1B2D] block mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-[#0F1B2D] focus:outline-none focus:ring-2 focus:ring-[#22B8E6] transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#0F1B2D] block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(469) 000-0000"
                          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-[#0F1B2D] focus:outline-none focus:ring-2 focus:ring-[#22B8E6] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#0F1B2D] block mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@example.com"
                          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-[#0F1B2D] focus:outline-none focus:ring-2 focus:ring-[#22B8E6] transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#0F1B2D] block mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-[#0F1B2D] focus:outline-none focus:ring-2 focus:ring-[#22B8E6] transition-all cursor-pointer"
                        >
                          <option>General Dentistry / Cleaning</option>
                          <option>Emergency Exam ($59 Special)</option>
                          <option>New Patient Special ($139)</option>
                          <option>Invisalign ($1,000 Off Special)</option>
                          <option>Dental Savings Club ($100-$150)</option>
                          <option>Cosmetic Whitening & Veneers</option>
                          <option>Root Canal / Crowns</option>
                          <option>Other Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0F1B2D] block mb-1">
                        How Can We Help You?
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your dental needs, preferred days, or insurance provider..."
                        className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-[#0F1B2D] focus:outline-none focus:ring-2 focus:ring-[#22B8E6] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full text-sm font-semibold bg-gradient-to-r from-[#34D3B4] via-[#22B8E6] to-[#8B7CF6] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98 animate-shimmer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
                    </button>

                    <p className="text-[11px] text-slate-400 text-center">
                      Prefer instant scheduling? You can{' '}
                      <a
                        href={clinicData.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 underline font-semibold"
                      >
                        book online 24/7 right now
                      </a>.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plan Visit Map Component */}
      <PlanVisitSection />
    </div>
  );
};
