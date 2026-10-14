import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { TrustMarquee } from '../sections/TrustMarquee';
import { StatsSection } from '../sections/StatsSection';
import { ServicesBentoSection } from '../sections/ServicesBentoSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { AmenitiesSection } from '../sections/AmenitiesSection';
import { TechSection } from '../sections/TechSection';
import { SpecialsSection } from '../sections/SpecialsSection';
import { MembershipSection } from '../sections/MembershipSection';
import { MeetDoctorSection } from '../sections/MeetDoctorSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { PlanVisitSection } from '../sections/PlanVisitSection';
import { CtaBandSection } from '../sections/CtaBandSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero + Trust Marquee */}
      <HeroSection />
      <TrustMarquee />

      {/* 2. Animated Stats Row */}
      <StatsSection />

      {/* 3. Bento Services Grid */}
      <ServicesBentoSection />

      {/* 4. Why Families Choose Hunt (3 Pillars) */}
      <WhyChooseUsSection />

      {/* 5. Comfort Amenities Strip */}
      <AmenitiesSection />

      {/* 6. Technology Suite (iTero, Panoramic, Pearl AI) */}
      <TechSection />

      {/* 7. Promotional Specials ($59, $139, $1,000 off) */}
      <SpecialsSection />

      {/* 8. Dental Savings Club Membership Plans */}
      <MembershipSection />

      {/* 9. Meet Dr. Dominique Hunt */}
      <MeetDoctorSection />

      {/* 10. Testimonials Carousel */}
      <TestimonialsSection />

      {/* 11. Plan Your Visit & Google Map */}
      <PlanVisitSection />

      {/* 12. Final High-Converting CTA Band */}
      <CtaBandSection />
    </div>
  );
};
