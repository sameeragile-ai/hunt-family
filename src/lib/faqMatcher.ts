import { clinicData } from '../data/clinicData';

export interface ChatReply {
  text: string;
  suggestBooking?: boolean;
  suggestPhone?: boolean;
}

/**
 * Robust local rule-based matcher for Hunt Family Dentistry.
 * Guarantees instantaneous, 100% accurate answers even when offline or without Gemini API key.
 */
export function getLocalFaqResponse(userMessage: string): ChatReply {
  const query = userMessage.toLowerCase().trim();

  // Spanish detection
  const isSpanish =
    query.includes('hola') ||
    query.includes('espanol') ||
    query.includes('español') ||
    query.includes('cita') ||
    query.includes('seguro') ||
    query.includes('horario') ||
    query.includes('emergencia') ||
    query.includes('doctora') ||
    query.includes('precio');

  // Emergency / Pain / Trauma
  if (
    query.includes('emergency') ||
    query.includes('pain') ||
    query.includes('toothache') ||
    query.includes('broken') ||
    query.includes('chipped') ||
    query.includes('bleeding') ||
    query.includes('swelling') ||
    query.includes('emergencia') ||
    query.includes('dolor')
  ) {
    if (isSpanish) {
      return {
        text: '¡Ofrecemos atención dental de emergencia el mismo día con nuestro examen de emergencia por $59! Si tiene dolor severo, inflamación o sangrado, por favor llame inmediatamente a nuestra oficina al (469) 269-0997. Si es fuera de horario o una emergencia que pone en peligro su vida, acuda a la sala de urgencias más cercana o llame al 911.',
        suggestPhone: true,
        suggestBooking: true,
      };
    }
    return {
      text: 'We provide fast same-day emergency relief with our $59 Emergency Exam! If you are experiencing severe pain, acute swelling, bleeding, or dental trauma, please call our office immediately at (469) 269-0997. If it is after hours or life-threatening, please visit the nearest ER or dial 911.',
      suggestPhone: true,
      suggestBooking: true,
    };
  }

  // Booking / Schedule Appointment
  if (
    query.includes('book') ||
    query.includes('schedule') ||
    query.includes('appointment') ||
    query.includes('cita') ||
    query.includes('reservar')
  ) {
    if (isSpanish) {
      return {
        text: '¡Puede programar su cita fácilmente en línea las 24 horas del día a través de nuestro portal oficial! También puede llamarnos al (469) 269-0997 durante nuestro horario de atención.',
        suggestBooking: true,
      };
    }
    return {
      text: "You can easily schedule your appointment 24/7 using our live online booking portal! Click the button below to choose a time that fits your family's schedule, or call us at (469) 269-0997.",
      suggestBooking: true,
    };
  }

  // Specials / New Patient Special / Deals
  if (
    query.includes('special') ||
    query.includes('deal') ||
    query.includes('139') ||
    query.includes('discount') ||
    query.includes('offer') ||
    query.includes('oferta') ||
    query.includes('promocion')
  ) {
    if (isSpanish) {
      return {
        text: 'Contamos con tres ofertas especiales destacadas: 1) Examen de emergencia por $59 con radiografía; 2) Examen de nuevo paciente, radiografías y limpieza por $139; y 3) $1,000 de descuento en Invisalign por tiempo limitado. (Las ofertas especiales no se combinan con seguros).',
        suggestBooking: true,
      };
    }
    return {
      text: 'We have three great specials right now: 1) $59 Emergency Exam & X-ray; 2) $139 New Patient Comprehensive Exam, X-rays & Cleaning; and 3) $1,000 off Invisalign clear aligners (limited time). Specials cannot be combined with insurance.',
      suggestBooking: true,
    };
  }

  // Insurance & PPO
  if (
    query.includes('insurance') ||
    query.includes('ppo') ||
    query.includes('in-network') ||
    query.includes('seguro') ||
    query.includes('aseguranza')
  ) {
    if (isSpanish) {
      return {
        text: '¡Aceptamos todos los planes de seguro dental PPO! Nuestro equipo verificará sus beneficios antes de su visita y se encargará de tramitar sus reclamos directamente. Si no tiene seguro, nuestro Club de Membresía anual le brinda cobertura inmediata sin deducibles.',
        suggestBooking: true,
      };
    }
    return {
      text: 'Yes! We accept all major PPO dental insurance plans. Our front desk team will verify your benefits prior to your appointment and file all claims on your behalf. No insurance? Ask about our in-house Dental Savings Club starting at $100/yr!',
      suggestBooking: true,
    };
  }

  // Membership Club / Savings Plan / No insurance
  if (
    query.includes('membership') ||
    query.includes('savings plan') ||
    query.includes('no insurance') ||
    query.includes('club') ||
    query.includes('sin seguro') ||
    query.includes('membresia')
  ) {
    if (isSpanish) {
      return {
        text: 'Nuestro Club de Ahorro Dental ofrece cobertura preventiva completa por solo $150 al año para adultos (13+) y $100 al año para niños (0-12). Incluye exámenes, radiografías panorámicas, escaneos 3D, examen de emergencia, y entre un 10% y 50% de descuento en todos los demás servicios, sin deducibles ni períodos de espera.',
        suggestBooking: true,
      };
    }
    return {
      text: 'Our Hunt Family Dental Savings Club is $150/year for Adults (13+) and $100/year for Kids (0-12). It includes all preventive exams, panoramic X-rays, 3D wellness scans, an emergency exam, and 10% to 50% off all other services with no deductibles or waiting periods!',
      suggestBooking: true,
    };
  }

  // Financing / Cherry / Payment Plans
  if (
    query.includes('financing') ||
    query.includes('cherry') ||
    query.includes('carecredit') ||
    query.includes('payment plan') ||
    query.includes('financiamiento') ||
    query.includes('pagos')
  ) {
    if (isSpanish) {
      return {
        text: 'Ofrecemos financiamiento flexible a través de Cherry y CareCredit con opciones de 0% de interés. La solicitud toma menos de 60 segundos sin afectar su puntaje crediticio. ¡Visite https://pay.withcherry.com/hunt-family-dentistry para calificar!',
        suggestBooking: true,
      };
    }
    return {
      text: 'We partner with Cherry and CareCredit to offer flexible payment plans, often with 0% APR options. Applying takes under 60 seconds with no hard credit pull. You can check your approval online at https://pay.withcherry.com/hunt-family-dentistry!',
      suggestBooking: true,
    };
  }

  // Hours / Days Open
  if (
    query.includes('hour') ||
    query.includes('open') ||
    query.includes('when') ||
    query.includes('friday') ||
    query.includes('weekend') ||
    query.includes('horario') ||
    query.includes('abierto')
  ) {
    if (isSpanish) {
      return {
        text: 'Estamos abiertos de lunes a jueves de 8:00 AM a 5:00 PM, y los viernes de 8:00 AM a 2:00 PM. Sábados y domingos estamos cerrados, pero puede reservar su cita en línea las 24 horas del día.',
        suggestBooking: true,
      };
    }
    return {
      text: 'Our clinic hours are Monday through Thursday 8:00 AM to 5:00 PM, and Friday 8:00 AM to 2:00 PM. We are closed on Saturdays and Sundays, but our online booking scheduler is always open 24/7!',
      suggestBooking: true,
    };
  }

  // Location / Address / Directions
  if (
    query.includes('location') ||
    query.includes('address') ||
    query.includes('where') ||
    query.includes('frisco') ||
    query.includes('direccion') ||
    query.includes('ubicacion') ||
    query.includes('donde')
  ) {
    if (isSpanish) {
      return {
        text: `Estamos ubicados en ${clinicData.address.full}. Contamos con estacionamiento gratuito y accesible directamente frente a nuestra entrada.`,
        suggestBooking: true,
      };
    }
    return {
      text: `We are conveniently located at ${clinicData.address.full}. We have ample free parking right in front of Suite 100 for easy drop-off and entry.`,
      suggestBooking: true,
    };
  }

  // Dr. Hunt & Amenities
  if (
    query.includes('dr') ||
    query.includes('dominique') ||
    query.includes('needle') ||
    query.includes('kid') ||
    query.includes('comfort') ||
    query.includes('amenities')
  ) {
    if (isSpanish) {
      return {
        text: 'La Dra. Dominique Hunt se especializa en odontología familiar suave y sin dolor. Contamos con anestesia sin agujas, escaneo 3D iTero, televisores en el techo con Netflix, mantas cálidas y un equipo 100% bilingüe para que cada visita sea relajante.',
        suggestBooking: true,
      };
    }
    return {
      text: 'Dr. Dominique Hunt is known for her gentle, calming chairside manner and conservative approach. Our office features injection-free numbing, iTero 3D scanning, ceiling TVs with Netflix, cozy blankets, and a bilingual team so kids and adults feel completely comfortable!',
      suggestBooking: true,
    };
  }

  // General fallback
  if (isSpanish) {
    return {
      text: `¡Hola! Con gusto le ayudo con cualquier duda sobre Hunt Family Dentistry en Frisco, TX. Puede preguntarme sobre servicios, seguro PPO, nuestro especial de $139 o hacer clic en el botón para reservar su cita.`,
      suggestBooking: true,
    };
  }

  return {
    text: `Hello! I'm the digital assistant for Hunt Family Dentistry in Frisco, TX. I can help with appointments, PPO insurance questions, our $139 new patient special, or membership club details. How can I help you today?`,
    suggestBooking: true,
  };
}
