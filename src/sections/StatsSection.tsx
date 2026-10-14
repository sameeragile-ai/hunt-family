import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Trophy, Stethoscope, Users, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const statIcons = [
  <Trophy className="w-5 h-5 text-amber-500" key="trophy" />,
  <Stethoscope className="w-5 h-5 text-teal-500" key="stetho" />,
  <Users className="w-5 h-5 text-sky-500" key="users" />,
  <ShieldCheck className="w-5 h-5 text-purple-500" key="shield" />,
];

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, prefix = '', suffix = '', duration = 1.6 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.round(start + (end - start) * easeProgress);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white/60 relative z-10 border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {clinicData.stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start p-5 rounded-3xl bg-white border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center mb-3">
                {statIcons[idx]}
              </div>

              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F1B2D] tracking-tight">
                {idx === 0 && <CountUp end={2} suffix="x" />}
                {idx === 1 && <CountUp end={10} suffix="+" />}
                {idx === 2 && <span>All Ages</span>}
                {idx === 3 && <CountUp end={0} prefix="$" suffix=" Deductible" />}
              </div>

              <span className="font-semibold text-sm text-[#0F1B2D] mt-1 text-center sm:text-left">
                {item.label}
              </span>
              <span className="text-xs text-[#5A6B80] mt-0.5 text-center sm:text-left">
                {item.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
