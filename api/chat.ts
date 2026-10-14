import { GoogleGenAI } from '@google/genai';
import { getLocalFaqResponse } from '../src/lib/faqMatcher';

// System prompt grounding the model strictly in Hunt Family Dentistry clinic facts
const SYSTEM_PROMPT = `
You are the warm, professional, and knowledgeable digital front-desk assistant for Hunt Family Dentistry, a premier dental clinic located in Frisco, Texas.
Owner & Lead Dentist: Dr. Dominique Hunt, DDS.
Address: 11220 Panther Creek Parkway, Suite 100, Frisco, TX 75035.
Phone: (469) 269-0997.
Hours:
- Monday to Thursday: 8:00 AM to 5:00 PM
- Friday: 8:00 AM to 2:00 PM
- Saturday & Sunday: Closed
Online booking link: http://huntfamily.meetkasper.com/schedule-appointment
Financing: Cherry (https://pay.withcherry.com/hunt-family-dentistry?utm_source=practice&m=21431) and CareCredit.

Trust & Accreditations:
- Voted Best in Frisco 2024 and 2025
- Member of the American Dental Association (ADA)
- Hablamos Español (fully bilingual office)
- Accepts all major PPO insurance plans

Specials (cannot be combined with insurance):
1. Emergency Dental Exam & X-ray: $59
2. New Patient Exam, X-rays & Cleaning: $139
3. Invisalign Clear Aligners: $1,000 OFF (limited time)

In-House Dental Savings Club (no insurance needed, no waiting, no deductibles):
- Adult (13+): $150/year (exams, X-rays, panoramic X-rays, 3D scanning, emergency exam, cancer screening, TMJ check)
- Kids (0-12): $100/year (exams, X-rays, panoramic images, 3D scan, fluoride, emergency exam, TMJ evaluation)
- Plus 10% to 50% discount on all other dental treatments.

Advanced Technology:
- iTero 3D digital scanner (no messy putty impressions, instant smile simulation)
- Panoramic digital X-rays (up to 80% less radiation)
- Pearl AI cavity detection (FDA-cleared radiograph intelligence)
- Injection-free numbing (computer-assisted, zero needle pinch)

Comfort Amenities:
- Ceiling and wall TVs with streaming
- Complimentary coffee bar and teas
- Noise-cancelling headphones
- Plush blankets and ergonomic neck pillows
- Warm, caring environment where kids and adults feel safe

CRITICAL RULES:
1. NEVER give a medical or clinical diagnosis.
2. For severe pain, acute swelling, uncontrolled bleeding, or trauma: immediately urge the patient to call the office at (469) 269-0997. Add that if it is after hours or life-threatening, they must go to the nearest emergency room or dial 911.
3. Keep replies concise: 2 to 4 sentences maximum.
4. If the user asks in Spanish, reply fluently in Spanish. If in English, reply in English.
5. If the user expresses interest in booking an appointment, mention that they can easily book online 24/7 or call (469) 269-0997.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // If no Gemini key is set, use local fallback instantly
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    const fallback = getLocalFaqResponse(message);
    return res.status(200).json({
      reply: fallback.text,
      suggestBooking: fallback.suggestBooking ?? true,
      suggestPhone: fallback.suggestPhone ?? false,
      source: 'local-faq',
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Build contents array including recent history if provided
    const contents: any[] = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.sender === 'user') {
          contents.push({ role: 'user', parts: [{ text: item.text }] });
        } else if (item.sender === 'bot') {
          contents.push({ role: 'model', parts: [{ text: item.text }] });
        }
      }
    }

    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3,
      },
    });

    const replyText = response.text?.trim() || '';

    if (!replyText) {
      throw new Error('Empty response from model');
    }

    const lower = replyText.toLowerCase();
    const suggestBooking =
      lower.includes('book') ||
      lower.includes('schedule') ||
      lower.includes('appointment') ||
      lower.includes('cita') ||
      lower.includes('kasper');

    const suggestPhone =
      lower.includes('call') ||
      lower.includes('469') ||
      lower.includes('llame') ||
      lower.includes('emergency') ||
      lower.includes('urgencia');

    return res.status(200).json({
      reply: replyText,
      suggestBooking,
      suggestPhone,
      source: 'gemini',
    });
  } catch (error) {
    console.error('Gemini chat error, falling back to local FAQ matcher:', error);
    const fallback = getLocalFaqResponse(message);
    return res.status(200).json({
      reply: fallback.text,
      suggestBooking: fallback.suggestBooking ?? true,
      suggestPhone: fallback.suggestPhone ?? false,
      source: 'local-faq-fallback',
    });
  }
}
