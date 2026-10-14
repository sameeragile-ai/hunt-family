/**
 * Curated high-resolution Unsplash image assets for Hunt Family Dentistry.
 * Centralized here so they can easily be replaced with real clinic photography.
 */

import dentistHeroImage from '../assets/images/dentist_family_hero_1792008733086.jpg';

export interface ImageAsset {
  url: string;
  alt: string;
  aspectRatio: string; // e.g. "aspect-4/3", "aspect-16/9", "aspect-square"
}

export const clinicImages = {
  // Hero section
  heroFamily: {
    url: dentistHeroImage,
    alt: 'Dr. Dominique Hunt gently showing dental tools to a happy child and smiling mother in a bright, modern Frisco dental clinic',
    aspectRatio: 'aspect-4/3',
  },
  
  // Doctor & Team
  drHuntPortrait: {
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dr. Dominique Hunt, compassionate lead dentist at Hunt Family Dentistry in Frisco, TX',
    aspectRatio: 'aspect-4/5',
  },
  doctorWithChild: {
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gentle dentist explaining dental tools to a relaxed, smiling child patient',
    aspectRatio: 'aspect-16/10',
  },
  clinicInterior: {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunlit modern treatment suite at Hunt Family Dentistry with comfortable dental chair and ceiling TV',
    aspectRatio: 'aspect-16/9',
  },
  waitingLounge: {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean welcoming dental lounge with complimentary coffee bar and cozy seating',
    aspectRatio: 'aspect-16/9',
  },

  // Services Bento Grid Images
  services: {
    general: {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      alt: 'Comprehensive dental exam and gentle teeth cleaning',
    },
    emergency: {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      alt: 'Immediate relief dental care and emergency treatment',
    },
    crowns: {
      url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      alt: 'Precision ceramic dental crowns and tooth restorations',
    },
    rootCanal: {
      url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      alt: 'Gentle pain-free root canal endodontic therapy',
    },
    cosmetic: {
      url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
      alt: 'Vibrant smile makeover with cosmetic veneers and professional whitening',
    },
    invisalign: {
      url: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
      alt: 'Clear Invisalign aligners for discrete orthodontic tooth straightening',
    },
    oralSurgery: {
      url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      alt: 'Safe wisdom teeth removal and minimally invasive oral surgery',
    },
    periodontics: {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      alt: 'Specialized periodontal gum therapy and deep cleaning',
    },
    sedation: {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      alt: 'Calming sedation dentistry for zero-anxiety dental visits',
    },
    restorative: {
      url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      alt: 'Tooth-colored composite fillings and natural restorative bridges',
    },
  },

  // Technology Section
  tech: {
    itero: {
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      alt: 'iTero 3D digital intraoral dental scanner replacing messy impressions',
    },
    panoramic: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      alt: 'Ultra-low radiation panoramic digital X-ray system',
    },
    pearlAi: {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      alt: 'Pearl AI automated dental radiograph assistance and cavity detection',
    },
    needleFree: {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      alt: 'Modern injection-free computer-assisted numbing delivery',
    },
  },

  // Amenities
  amenities: {
    coffee: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
    comfort: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    kids: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80',
  },
};
