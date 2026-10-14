/**
 * Clinic facts, offerings, business hours, and copy for Hunt Family Dentistry.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  imageKey: string;
  popular?: boolean;
  category: 'preventative' | 'restorative' | 'cosmetic' | 'specialized';
}

export interface SpecialOffer {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  badge: string;
  description: string;
  features: string[];
  ctaText: string;
  disclaimer: string;
}

export interface MembershipPlan {
  id: string;
  title: string;
  age: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  discount: string;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  tag: string;
  review: string;
}

export const clinicData = {
  name: 'Hunt Family Dentistry',
  owner: 'Dr. Dominique Hunt',
  ownerTitle: 'DDS, Lead Dentist & Clinic Founder',
  tagline: 'Gentle, Needle-Free Family & Cosmetic Dentistry in Frisco',
  address: {
    street: '11220 Panther Creek Parkway, Suite 100',
    city: 'Frisco',
    state: 'TX',
    zip: '75035',
    full: '11220 Panther Creek Parkway, Suite 100, Frisco, TX 75035',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.407949390234!2d-96.79462802359487!3d33.17849997349942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c39d8977d45%3A0xb3bc87e59b7df607!2s11220%20Panther%20Creek%20Pkwy%20%23100%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
    directionsUrl: 'https://maps.google.com/?q=11220+Panther+Creek+Parkway+Suite+100+Frisco+TX+75035',
  },
  contact: {
    phone: '(469) 269-0997',
    phoneRaw: '4692690997',
    email: 'care@huntfamilydentistry.com',
    bookingUrl: 'http://huntfamily.meetkasper.com/schedule-appointment',
    financingUrl: 'https://pay.withcherry.com/hunt-family-dentistry?utm_source=practice&m=21431',
  },
  schedule: [
    { day: 'Monday', short: 'Mon', open: '8:00 AM', close: '5:00 PM', openHour: 8, closeHour: 17, isOpen: true },
    { day: 'Tuesday', short: 'Tue', open: '8:00 AM', close: '5:00 PM', openHour: 8, closeHour: 17, isOpen: true },
    { day: 'Wednesday', short: 'Wed', open: '8:00 AM', close: '5:00 PM', openHour: 8, closeHour: 17, isOpen: true },
    { day: 'Thursday', short: 'Thu', open: '8:00 AM', close: '5:00 PM', openHour: 8, closeHour: 17, isOpen: true },
    { day: 'Friday', short: 'Fri', open: '8:00 AM', close: '2:00 PM', openHour: 8, closeHour: 14, isOpen: true },
    { day: 'Saturday', short: 'Sat', open: 'Closed', close: 'Closed', openHour: 0, closeHour: 0, isOpen: false },
    { day: 'Sunday', short: 'Sun', open: 'Closed', close: 'Closed', openHour: 0, closeHour: 0, isOpen: false },
  ],
  trustBadges: [
    { label: 'Voted Best in Frisco 2024 & 2025', icon: 'Trophy' },
    { label: 'American Dental Association Member', icon: 'ShieldCheck' },
    { label: 'Hablamos Español Fluently', icon: 'Globe' },
    { label: 'All Major PPO Insurances Accepted', icon: 'CreditCard' },
    { label: 'Cherry & CareCredit 0% Financing', icon: 'Sparkles' },
    { label: '4.9★ Average Family Rating', icon: 'Star' },
  ],
  stats: [
    { value: '2x', label: 'Voted Best in Frisco', subtext: '2024 & 2025 Winner' },
    { value: '10+', label: 'Specialized Dental Services', subtext: 'All under one roof' },
    { value: '0+', label: 'Ages Welcomed', subtext: 'From first tooth to golden years' },
    { value: '$0', label: 'Deductible In-House Plans', subtext: 'Instant coverage, no waiting' },
  ],
  amenities: [
    {
      title: 'Ceiling & Wall TVs',
      desc: 'Watch your favorite Netflix or Disney+ shows during treatment.',
      icon: 'Tv',
    },
    {
      title: 'Complimentary Coffee Bar',
      desc: 'Freshly brewed artisan coffee, herbal teas, and cold refreshments.',
      icon: 'Coffee',
    },
    {
      title: 'Noise-Cancelling Headphones',
      desc: 'Tune into calming music or podcast audio to block dental sounds.',
      icon: 'Headphones',
    },
    {
      title: 'Plush Blankets & Neck Pillows',
      desc: 'Stay warm, relaxed, and fully supported in our ergonomic dental chairs.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Fully Bilingual Office',
      desc: 'Our entire clinical and front-office team speaks fluent Spanish & English.',
      icon: 'Languages',
    },
  ],
  technologies: [
    {
      id: 'itero',
      name: 'iTero 3D Digital Scanner',
      subtitle: 'Zero Goop, 100% Precision',
      desc: 'Wave goodbye to gag-inducing impression paste. Our iTero intraoral wand maps your teeth in 60 seconds with microscopic accuracy and previews your future Invisalign smile instantly.',
      badge: 'Impression-Free',
      imageKey: 'itero',
    },
    {
      id: 'panoramic',
      name: 'Ultra-Low Dose Panoramic X-Rays',
      subtitle: 'Crystal Clear Jaw Diagnostics',
      desc: 'State-of-the-art 360-degree digital radiography captures your entire jaw, airway, and tooth roots with up to 80% less radiation than legacy dental equipment.',
      badge: 'Ultra-Low Radiation',
      imageKey: 'panoramic',
    },
    {
      id: 'pearl-ai',
      name: 'Pearl AI Cavity Detection',
      subtitle: 'Second-Opinion Computer Vision',
      desc: 'FDA-cleared artificial intelligence analyzes digital X-rays in real-time, detecting micro-cavities and bone loss months before they become painful or expensive to treat.',
      badge: 'FDA Cleared AI',
      imageKey: 'pearlAi',
    },
    {
      id: 'needle-free',
      name: 'Injection-Free Gentle Numbing',
      subtitle: 'No Needles, No Dental Fear',
      desc: 'Computer-regulated local anesthesia delivered smoothly without the sharp pinch of a traditional needle. Kids and adults with dental phobias praise the gentle experience.',
      badge: 'Gentle Comfort',
      imageKey: 'needleFree',
    },
  ],
  specials: [
    {
      id: 'emergency-special',
      title: 'Emergency Dental Exam',
      price: '$59',
      originalPrice: '$240',
      badge: 'Same-Day Fast Relief',
      description: 'Sudden toothache, chipped tooth, or broken crown? Get diagnosed and out of pain fast with Dr. Hunt.',
      features: [
        'Focused problem-area clinical exam',
        'Necessary diagnostic digital X-rays',
        'Same-day pain assessment & prescription',
        'Clear, pressure-free treatment plan',
      ],
      ctaText: 'Claim $59 Emergency Exam',
      disclaimer: 'New patients only. Cannot be combined with insurance or other discounts.',
    },
    {
      id: 'new-patient-special',
      title: 'New Patient Comprehensive Package',
      price: '$139',
      originalPrice: '$410',
      badge: 'Most Popular for Families',
      description: 'Everything your smile needs to start fresh: complete checkup, gentle cleaning, and 3D diagnostics.',
      features: [
        'Comprehensive clinical exam by Dr. Hunt',
        'Full series digital diagnostic X-rays',
        'Gentle preventative dental cleaning (prophy)',
        'Oral cancer screening & periodontal check',
        'Personalized home-care plan',
      ],
      ctaText: 'Claim $139 New Patient Special',
      disclaimer: 'In absence of periodontal disease. New patients only. Cannot be combined with dental insurance.',
    },
    {
      id: 'invisalign-special',
      title: 'Invisalign Clear Aligners',
      price: '$1,000 OFF',
      originalPrice: 'Full Case',
      badge: 'Limited-Time Smile Transformation',
      description: 'Straighten your smile discreetly without metal brackets or wires. See your simulated results before starting.',
      features: [
        'Complimentary iTero 3D smile scan ($250 value)',
        'Personalized digital treatment plan',
        'Complete set of custom clear aligners',
        'Refinement scans & follow-up visits',
        'Flexible 0% APR financing with Cherry',
      ],
      ctaText: 'Claim $1,000 Off Invisalign',
      disclaimer: 'Valid on comprehensive treatment cases only. Cannot be combined with insurance or other promotions.',
    },
  ],
  membership: {
    title: 'The Hunt Family Dental Savings Club',
    subtitle: 'No insurance? No problem. Affordable, transparent dental care for the entire family with zero red tape.',
    guarantee: 'No waiting periods • No deductibles • No annual maximum limits • Instant activation',
    otherSavings: '10% to 50% off all other dental treatments, including fillings, crowns, and cosmetic dentistry.',
    plans: [
      {
        id: 'kids-plan',
        title: 'Kids Membership',
        age: 'Ages 0 to 12',
        price: '$100',
        period: 'per year',
        popular: false,
        discount: '10% - 50% Off Additional Care',
        ctaText: 'Enroll Kids Plan',
        features: [
          '2 Comprehensive & periodic dental exams',
          'Full series diagnostic digital X-rays',
          'Panoramic digital X-ray images',
          'iTero 3D wellness digital scan',
          '1 Emergency exam with diagnostic X-ray',
          'Professional fluoride enamel treatment',
          'Pediatric bite & TMJ growth evaluation',
          'No deductibles, no claims, no maximums',
        ],
      },
      {
        id: 'adult-plan',
        title: 'Adult Membership',
        age: 'Ages 13 and older',
        price: '$150',
        period: 'per year',
        popular: true,
        discount: '10% - 50% Off Additional Care',
        ctaText: 'Enroll Adult Plan',
        features: [
          'Comprehensive & periodic clinical exams',
          'Full-mouth digital diagnostic X-rays',
          'Panoramic jaw X-ray images included',
          'iTero high-definition 3D wellness scan',
          '1 Emergency exam & problem X-ray ($240 value)',
          'Annual oral cancer screening',
          'Comprehensive TMJ & airway evaluation',
          '10% to 50% discount on all restorative procedures',
        ],
      },
    ],
  },
  services: [
    {
      id: 'general-dentistry',
      title: 'General Dentistry',
      shortDesc: 'Routine cleanings, thorough exams, and gentle preventive care for all ages.',
      fullDesc: 'The foundation of lifelong oral health. We focus on proactive, preventive dentistry that stops problems before they start, keeping your teeth clean, strong, and natural.',
      benefits: ['Gentle ultrasonic cleanings', 'Cavity prevention', 'Fresh breath therapies', 'Family block appointments'],
      imageKey: 'general',
      popular: true,
      category: 'preventative',
    },
    {
      id: 'emergency-dentistry',
      title: 'Emergency Dentistry',
      shortDesc: 'Same-day relief for severe toothaches, broken teeth, trauma, and lost crowns.',
      fullDesc: 'Dental emergencies happen when least expected. We keep dedicated daily slots open so you and your family can be seen promptly for fast, compassionate pain relief.',
      benefits: ['Same-day emergency appointments', 'Fast localized pain relief', 'Broken tooth repair', 'Clear upfront pricing'],
      imageKey: 'emergency',
      popular: true,
      category: 'specialized',
    },
    {
      id: 'dental-crowns',
      title: 'Dental Crowns',
      shortDesc: 'Custom-shaded, durable ceramic crowns that restore broken or heavily worn teeth.',
      fullDesc: 'When a tooth is severely decayed or cracked, a custom porcelain or zirconia crown protects the remaining tooth structure with natural strength and lifelike aesthetics.',
      benefits: ['Custom color-matched porcelain', 'Preserves natural tooth structure', 'Long-lasting durability', 'Precision digital fit'],
      imageKey: 'crowns',
      popular: false,
      category: 'restorative',
    },
    {
      id: 'root-canal-therapy',
      title: 'Root Canal Therapy (Endodontics)',
      shortDesc: 'Gentle, pain-free procedures designed to save your natural tooth from extraction.',
      fullDesc: 'Modern root canal therapy at Hunt Family Dentistry is virtually painless. Dr. Hunt removes deep infection inside the tooth, stops the throbbing pain, and saves your natural smile.',
      benefits: ['Relieves severe throbbing pain', 'Prevents tooth extraction', 'Computer-regulated anesthesia', 'Same-day comfort'],
      imageKey: 'rootCanal',
      popular: false,
      category: 'restorative',
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      shortDesc: 'Porcelain veneers, professional teeth whitening, and bespoke smile makeovers.',
      fullDesc: 'Boost your confidence with artistry and science. Whether brightening stained enamel or redesigning chipped teeth with porcelain veneers, Dr. Hunt crafts smiles that turn heads.',
      benefits: ['Stunning professional whitening', 'Custom hand-crafted veneers', 'Enamel micro-contouring', 'Digital smile previews'],
      imageKey: 'cosmetic',
      popular: true,
      category: 'cosmetic',
    },
    {
      id: 'invisalign',
      title: 'Invisalign Clear Aligners',
      shortDesc: 'Discreet, removable clear aligners to straighten teeth without metal brackets.',
      fullDesc: 'Straighten crooked teeth, close gaps, and fix bite alignment comfortably with virtually invisible trays. Eat whatever you like and brush normally throughout treatment.',
      benefits: ['Virtually invisible trays', 'Removable for meals & flossing', 'iTero 3D simulated outcome', 'Fewer clinic check-ins'],
      imageKey: 'invisalign',
      popular: true,
      category: 'cosmetic',
    },
    {
      id: 'oral-surgery',
      title: 'Oral Surgery',
      shortDesc: 'Gentle wisdom teeth removal, tooth extractions, and pre-prosthetic care.',
      fullDesc: 'When extractions or surgical care are required, Dr. Dominique Hunt uses minimally invasive techniques and calming sedation to ensure your comfort from start to finish.',
      benefits: ['Minimally invasive extractions', 'Comfortable sedation options', 'Comprehensive post-op care', 'Fast, smooth recovery'],
      imageKey: 'oralSurgery',
      popular: false,
      category: 'specialized',
    },
    {
      id: 'periodontics',
      title: 'Periodontics & Gum Therapy',
      shortDesc: 'Deep cleanings (scaling and root planing) to stop gum disease and protect bone.',
      fullDesc: 'Healthy gums anchor healthy smiles. Our targeted periodontal therapies gently remove stubborn tartar beneath the gumline, halting infection and preventing bone loss.',
      benefits: ['Halts bleeding & swollen gums', 'Protects underlying jaw bone', 'Deep ultrasonic cleaning', 'Fresh breath restoration'],
      imageKey: 'periodontics',
      popular: false,
      category: 'preventative',
    },
    {
      id: 'sedation-dentistry',
      title: 'Sedation Dentistry',
      shortDesc: 'Relaxation dentistry so you can experience completely anxiety-free appointments.',
      fullDesc: 'If dental anxiety has kept you from visiting the dentist, our gentle sedation options will put your mind at ease. Drift comfortably through your procedure without fear or stress.',
      benefits: ['Ideal for nervous patients', 'Accomplish multiple procedures at once', 'Comfortable amnesia effect', 'Gentle & completely safe'],
      imageKey: 'sedation',
      popular: false,
      category: 'specialized',
    },
    {
      id: 'restorative-dentistry',
      title: 'Restorative Dentistry',
      shortDesc: 'Natural tooth-colored fillings, bridges, and restorations that blend seamlessly.',
      fullDesc: 'We repair cavities and replace missing teeth with mercury-free, biocompatible composite resins and ceramics that look and chew just like natural enamel.',
      benefits: ['Mercury-free composite fillings', 'Custom durable dental bridges', 'Natural look & feel', 'Strengthens bite function'],
      imageKey: 'restorative',
      popular: false,
      category: 'restorative',
    },
  ],
  pillars: [
    {
      title: '100% Honest Transparency',
      subtitle: 'Zero Pressure Treatment Plans',
      desc: 'We show you high-definition intraoral photos of your teeth and explain every option openly. You are always in control of your dental decisions with upfront pricing before any work begins.',
      icon: 'Eye',
    },
    {
      title: 'True Generational Care',
      subtitle: 'From Toddlers to Grandparents',
      desc: 'Families love scheduling back-to-back or simultaneous appointments. Dr. Hunt creates a nurturing environment where children look forward to visits and adults feel valued and unhurried.',
      icon: 'Users',
    },
    {
      title: 'No Needles, Zero Fear',
      subtitle: 'Gentle, Advanced Technology',
      desc: 'With injection-free numbing technology, warm neck pillows, and ceiling entertainment, our patients frequently tell us they forgot they were even sitting in a dental chair.',
      icon: 'Feather',
    },
  ],
  testimonials: [
    {
      name: 'Timah A.',
      role: 'Frisco Resident',
      location: 'Frisco, TX',
      rating: 5,
      date: 'Recent Visit',
      tag: 'Emergency Relief',
      review: 'I woke up on a Tuesday with excruciating tooth pain. Hunt Family Dentistry got me in within two hours! Dr. Dominique Hunt was so calm, explained everything clearly, and had me completely out of pain without any needle sting. Truly the best dental experience I have had in Texas.',
    },
    {
      name: 'Elizabeth S.',
      role: 'Mother of Two',
      location: 'Frisco, TX',
      rating: 5,
      date: 'Family Care',
      tag: 'Kid-Friendly',
      review: 'Taking two young kids to the dentist used to be an ordeal. Dr. Hunt and her team made my 6-year-old and 9-year-old feel like absolute stars with Netflix on the ceiling and warm blankets. The office is spotless and modern. Both kids actually asked when they get to go back!',
    },
    {
      name: 'Robert H.',
      role: 'Long-term Patient',
      location: 'Frisco, TX',
      rating: 5,
      date: 'Restorative Care',
      tag: 'Zero Pressure',
      review: 'I appreciate the complete lack of sales pressure here. At other dental chains they always try to upsell deep cleanings and veneers. Dr. Hunt showed me the 3D scan, gave me honest recommendations, and let me decide at my own pace. Their in-house membership plan saved me hundreds.',
    },
    {
      name: 'Anant S.',
      role: 'Frisco Executive',
      location: 'Frisco, TX',
      rating: 5,
      date: 'Invisalign & Cleaning',
      tag: 'Modern Technology',
      review: 'The technology in this office is phenomenal. The iTero 3D scanner took seconds without any messy mold goo. Pearl AI showed exactly where I needed attention, and the team accommodated my busy work schedule with punctual, efficient appointments. Highly recommend!',
    },
  ],
  faqs: [
    {
      q: 'Do you accept dental insurance?',
      a: 'Yes! We accept all major PPO dental plans. Our front-desk coordinators will verify your benefits prior to your appointment and file all claims directly to maximize your insurance coverage.',
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'No problem! We created the Hunt Family Dental Savings Club. For just $150/year (Adults) or $100/year (Kids), all your preventative exams, X-rays, 3D scans, and emergency visits are included, plus 10% to 50% off all other treatments. No waiting periods, no deductibles, and no maximum limits.',
    },
    {
      q: 'Can I get financing for cosmetic work or Invisalign?',
      a: 'Yes, we partner with Cherry and CareCredit to offer quick, flexible monthly payment plans—often with 0% APR options. Applying takes under 60 seconds with no hard credit hit.',
    },
    {
      q: 'Do you see dental emergencies the same day?',
      a: 'Yes! Severe tooth pain, chipped or cracked teeth, and dental trauma are prioritized. Call us immediately at (469) 269-0997 or use our online scheduler for fast same-day attention.',
    },
    {
      q: 'Do you speak Spanish?',
      a: '¡Sí! Hablamos español con fluidez en nuestra oficina. Todos nuestros doctores y asistentes pueden comunicarse cómodamente en español con usted y su familia.',
    },
    {
      q: 'How does injection-free numbing work?',
      a: 'We utilize computer-assisted anesthetic delivery that dispenses local numbing solution drop-by-drop below pain thresholds. Patients rarely feel a sensation at all—making visits smooth and fear-free for both children and adults.',
    },
  ],
};

/**
 * Checks if the clinic is currently open based on America/Chicago (Frisco, TX) timezone.
 */
export function getClinicLiveStatus(): {
  isOpen: boolean;
  statusText: string;
  nextChangeText: string;
  badgeColor: string;
} {
  try {
    // Format current time into America/Chicago components
    const now = new Date();
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const parts = dtf.formatToParts(now);
    const weekday = parts.find((p) => p.type === 'weekday')?.value || '';
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
    const currentDecimalTime = hour + minute / 60;

    // Schedule logic
    // Mon-Thu: 8am - 5pm (8.0 to 17.0)
    // Fri: 8am - 2pm (8.0 to 14.0)
    // Sat-Sun: Closed
    if (['Mon', 'Tue', 'Wed', 'Thu'].includes(weekday)) {
      if (currentDecimalTime >= 8 && currentDecimalTime < 17) {
        return {
          isOpen: true,
          statusText: 'Open Today until 5:00 PM',
          nextChangeText: 'Call (469) 269-0997 or book online',
          badgeColor: 'bg-emerald-500',
        };
      }
    } else if (weekday === 'Fri') {
      if (currentDecimalTime >= 8 && currentDecimalTime < 14) {
        return {
          isOpen: true,
          statusText: 'Open Today until 2:00 PM',
          nextChangeText: 'Call (469) 269-0997 or book online',
          badgeColor: 'bg-emerald-500',
        };
      }
    }

    return {
      isOpen: false,
      statusText: 'Closed Now • Book 24/7 Online',
      nextChangeText: 'Next open: Mon at 8:00 AM',
      badgeColor: 'bg-amber-500',
    };
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Today • Mon-Fri',
      nextChangeText: 'Call (469) 269-0997 or book online',
      badgeColor: 'bg-emerald-500',
    };
  }
}
