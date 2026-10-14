import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Trophy, Stethoscope, Users, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

const statIcons = [
  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" key="trophy" />,
  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500" key="stetho" />,
  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" key="users" />,
  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" key="shield" />,
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
    <section className="py-8 sm:py-12 bg-white/60 relative z-10 border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {clinicData.stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center mb-2 sm:mb-3">
                {statIcons[idx]}
              </div>

              <div className="font-heading font-extrabold text-xl min-[360px]:text-2xl sm:text-3xl lg:text-4xl text-[#0F1B2D] tracking-tight flex items-baseline justify-center sm:justify-start flex-wrap">
                {idx === 0 && <CountUp end={2} suffix="x" />}
                {idx === 1 && <CountUp end={10} suffix="+" />}
                {idx === 2 && <span className="whitespace-nowrap">All Ages</span>}
                {idx === 3 && (
                  <span className="flex items-baseline">
                    <CountUp end={0} prefix="$" />
                    <span className="text-sm min-[360px]:text-base sm:text-xl font-bold ml-1 text-teal-700">Plans</span>
                  </span>
                )}
              </div>

              <span className="font-semibold text-xs sm:text-sm text-[#0F1B2D] mt-1 text-center sm:text-left leading-tight">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-xs text-[#5A6B80] mt-0.5 text-center sm:text-left leading-tight">
                {item.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
