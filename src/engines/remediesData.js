// Encyclopedic Vedic Remedies: Gemstones, Rudraksha, Mantras, and Panchang

export const VEDIC_GEMSTONES = [
  {
    id: 'ruby',
    name: 'Ruby (Manikya / माणिक्य)',
    graha: 'Surya (Sun)',
    rulerColor: '#f43f5e',
    metal: 'Yellow Gold or Pure Copper',
    finger: 'Ring Finger (Anamika) of Right Hand',
    dayTime: 'Sunday morning during Shukla Paksha at Sunrise',
    mantra: 'Om Hram Hreem Hroum Sah Suryaya Namah (108 times)',
    benefits: 'Commands leadership, elevates government favors, boosts vitality, builds unshakeable confidence and dissolves father-related karma.',
    caution: 'Avoid wearing with Blue Sapphire (Saturn), Hessonite (Rahu), or Diamond (Venus).'
  },
  {
    id: 'pearl',
    name: 'Natural Pearl (Moti / मोती)',
    graha: 'Chandra (Moon)',
    rulerColor: '#e2e8f0',
    metal: 'Pure Silver',
    finger: 'Little Finger (Kanishtha) of Right Hand',
    dayTime: 'Monday evening or morning during Shukla Paksha',
    mantra: 'Om Shram Shreem Shroum Sah Chandraya Namah (108 times)',
    benefits: 'Calms emotional storms, cures insomnia and anxiety, blesses maternal relationships, and grants peaceful intuitive wisdom.',
    caution: 'Avoid combining with Hessonite (Rahu) or Cat’s Eye (Ketu).'
  },
  {
    id: 'coral',
    name: 'Red Coral (Moonga / मूंगा)',
    graha: 'Mangal (Mars)',
    rulerColor: '#ef4444',
    metal: 'Copper, Brass, or Gold',
    finger: 'Ring Finger (Anamika) of Right Hand',
    dayTime: 'Tuesday morning within 1 hour of Sunrise',
    mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah (108 times)',
    benefits: 'Dispels fear and laziness, dissolves Manglik friction, cures blood disorders, and grants victory in land and litigation.',
    caution: 'Avoid combining with Emerald, Diamond, or Blue Sapphire.'
  },
  {
    id: 'emerald',
    name: 'Emerald (Panna / पन्ना)',
    graha: 'Budha (Mercury)',
    rulerColor: '#10b981',
    metal: 'Gold or Silver',
    finger: 'Little Finger (Kanishtha) of Right Hand',
    dayTime: 'Wednesday morning during sunrise',
    mantra: 'Om Bram Breem Broum Sah Budhaya Namah (108 times)',
    benefits: 'Unlocks photographic memory, commercial genius, mathematical brilliance, fluent speech, and diplomatic sales triumphs.',
    caution: 'Avoid wearing alongside Red Coral (Mars).'
  },
  {
    id: 'yellow-sapphire',
    name: 'Yellow Sapphire (Pukhraj / पुखराज)',
    graha: 'Guru (Jupiter)',
    rulerColor: '#f59e0b',
    metal: '22K Yellow Gold or Brass',
    finger: 'Index Finger (Tarjani) of Right Hand',
    dayTime: 'Thursday morning during Shukla Paksha at Sunrise',
    mantra: 'Om Gram Greem Groum Sah Gurave Namah (108 times)',
    benefits: 'Attracts royal wisdom, judicial honors, marriage blessings, divine progeny, and perpetual financial stability.',
    caution: 'Avoid combining with Diamond, Emerald, or Blue Sapphire.'
  },
  {
    id: 'diamond',
    name: 'Diamond / White Zircon (Heera / हीरा)',
    graha: 'Shukra (Venus)',
    rulerColor: '#38bdf8',
    metal: 'Platinum, White Gold, or Silver',
    finger: 'Middle Finger or Little Finger of Right Hand',
    dayTime: 'Friday sunrise or evening',
    mantra: 'Om Shum Shukraya Namah (108 times)',
    benefits: 'Draws magnetic romance, luxury cars and mansions, artistic fame, graceful beauty, and marital bliss.',
    caution: 'Avoid pairing with Ruby or Red Coral.'
  },
  {
    id: 'blue-sapphire',
    name: 'Blue Sapphire (Neelam / नीलम)',
    graha: 'Shani (Saturn)',
    rulerColor: '#6366f1',
    metal: 'White Gold, Silver, or Iron / Panchdhatu',
    finger: 'Middle Finger (Madhyama) of Right Hand',
    dayTime: 'Saturday evening after sunset',
    mantra: 'Om Pram Preem Proum Sah Shanaischaraya Namah (108 times)',
    benefits: 'Fastest-acting gemstone: unlocks sudden wealth, clears massive karmic debt, provides impenetrable psychic armor.',
    caution: 'Always test under pillow for 3 nights before wearing permanently. Avoid with Ruby and Coral.'
  },
  {
    id: 'hessonite',
    name: 'Hessonite Garnet (Gomedh / गोमेद)',
    graha: 'Rahu',
    rulerColor: '#8b5cf6',
    metal: 'Silver or Ashtadhatu',
    finger: 'Middle Finger (Madhyama) of Right Hand',
    dayTime: 'Saturday night 2 hours after sunset',
    mantra: 'Om Bhram Bhreem Bhroum Sah Rahave Namah (108 times)',
    benefits: 'Neutralizes Rahu illusions, sudden lawsuits, addictions, grants breakthrough fortunes in speculative tech and politics.',
    caution: 'Avoid wearing with Ruby, Pearl, or Coral.'
  },
  {
    id: 'cats-eye',
    name: "Cat's Eye (Lehsuniya / लहसुनिया)",
    graha: 'Ketu',
    rulerColor: '#a1a1aa',
    metal: 'Silver or Panchdhatu',
    finger: 'Middle Finger or Little Finger',
    dayTime: 'Tuesday or Thursday night after sunset',
    mantra: 'Om Stram Streem Stroum Sah Ketave Namah (108 times)',
    benefits: 'Awakens occult intuition, protects from hidden conspiracies, cures chronic mysterious illnesses, brings Moksha alignment.',
    caution: 'Avoid wearing with Ruby or Diamond.'
  }
];

export const RUDRAKSHA_BEADS = [
  { mukhi: '1 Mukhi', deity: 'Lord Shiva', planet: 'Sun', benefit: 'Supreme enlightenment, detachment from sin, unshakeable self-command.' },
  { mukhi: '2 Mukhi', deity: 'Ardhanarishwara (Shiva-Shakti)', planet: 'Moon', benefit: 'Harmony between husband and wife, dissolves emotional mood turbulence.' },
  { mukhi: '3 Mukhi', deity: 'Agni Dev (Fire)', planet: 'Mars', benefit: 'Burns past life sins, removes inferiority complex, boosts physical vigor.' },
  { mukhi: '4 Mukhi', deity: 'Lord Brahma', planet: 'Mercury', benefit: 'Empowers vocal eloquence, memory retention, and creative genius.' },
  { mukhi: '5 Mukhi', deity: 'Kalagni Rudra', planet: 'Jupiter', benefit: 'Most universal bead: confers peaceful mind, healthy blood pressure, and spiritual wisdom.' },
  { mukhi: '6 Mukhi', deity: 'Lord Kartikeya', planet: 'Venus', benefit: 'Grants warrior courage, charismatic charm, and victory over competitive examinations.' },
  { mukhi: '7 Mukhi', deity: 'Goddess Mahalakshmi', planet: 'Saturn', benefit: 'Opens floodgates of financial prosperity and neutralizes Shani Sade Sati woes.' },
  { mukhi: '8 Mukhi', deity: 'Lord Ganesha', planet: 'Rahu', benefit: 'Remover of all obstacles (Vighnaharta), shields against black magic and sudden failures.' },
  { mukhi: '9 Mukhi', deity: 'Goddess Durga (Navadurga)', planet: 'Ketu', benefit: 'Infuses fearless shakti, fearless courage, and protection from untimely accidents.' },
  { mukhi: '10 Mukhi', deity: 'Lord Mahavishnu', planet: 'All 9 Planets', benefit: 'Pacifies all 9 planetary malefic energies, shields entire family.' },
  { mukhi: '11 Mukhi', deity: 'Lord Hanuman (Ekadasha Rudra)', planet: 'Mars/Saturn', benefit: 'Immense physical strength, yogic discipline, and fearless eloquence.' },
  { mukhi: '12 Mukhi', deity: 'Surya Narayana (12 Adityas)', planet: 'Sun', benefit: 'Radiates solar majesty, high political command, and freedom from fear.' },
  { mukhi: '13 Mukhi', deity: 'Kamadeva & Indra', planet: 'Venus', benefit: 'Hypnotic attraction, fulfillment of noble desires, romantic bliss.' },
  { mukhi: '14 Mukhi', deity: 'Lord Shiva (Devamani)', planet: 'Saturn', benefit: 'The Third Eye bead: awakens sixth sense, prophetic intuition, and divine grace.' }
];

export const SACRED_MANTRAS = [
  {
    id: 'gayatri',
    name: 'Maha Gayatri Mantra',
    deity: 'Goddess Gayatri & Savitr',
    sanskrit: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥',
    romanized: 'Om Bhur Bhuvah Swaha, Tat Savitur Varenyam, Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat',
    purpose: 'Universal illumination, mental clarity, dissolving ignorance, and awakening cosmic intellect.',
    recommendedChants: 108
  },
  {
    id: 'mahamrityunjaya',
    name: 'Maha Mrityunjaya Mantra',
    deity: 'Lord Shiva (Tryambaka)',
    sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
    romanized: 'Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Mamritat',
    purpose: 'Shield of immortality, heals severe illnesses, eliminates Kaal Sarp and accidental fears.',
    recommendedChants: 108
  },
  {
    id: 'hanuman',
    name: 'Hanuman Beej Mantra',
    deity: 'Lord Hanuman',
    sanskrit: 'ॐ हं हनुमते रुद्रात्मकाय हुं फट् स्वाहा॥',
    romanized: 'Om Ham Hanumate Rudratmakaya Hum Phat Swaha',
    purpose: 'Crushes Manglik Dosha, vanquishes evil spirits, removes anxiety, grants fearless courage.',
    recommendedChants: 108
  },
  {
    id: 'lakshmi',
    name: 'Mahalakshmi Beej Mantra',
    deity: 'Goddess Mahalakshmi',
    sanskrit: 'ॐ श्रीं ह्रीं क्लीं श्रीं सिद्ध लक्ष्म्यै नमः॥',
    romanized: 'Om Shreem Hreem Kleem Shreem Siddha Lakshmyai Namah',
    purpose: 'Attracts perpetual abundance, royal luxury, debt clearance, and commercial expansions.',
    recommendedChants: 108
  },
  {
    id: 'ganesha',
    name: 'Ganesha Vighnaharta Mantra',
    deity: 'Lord Ganesha',
    sanskrit: 'ॐ गं गणपतये नमः। वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ॥',
    romanized: 'Om Gam Ganapataye Namah. Vakratunda Mahakaya Suryakoti Samaprabha',
    purpose: 'Removes insurmountable obstacles before starting any auspicious venture, business or journey.',
    recommendedChants: 108
  }
];

// Today's Cosmic Panchang & Muhurat calculation
export function getTodaysPanchang() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon ...
  const days = ['Sunday (Ravivar)', 'Monday (Somvar)', 'Tuesday (Mangalvar)', 'Wednesday (Budhvar)', 'Thursday (Guruvar)', 'Friday (Shukravar)', 'Saturday (Shanivar)'];
  
  // Rahu Kaal standard windows (assuming 6:00 AM - 6:00 PM sunrise/sunset)
  const rahuKaals = [
    '04:30 PM - 06:00 PM', // Sun
    '07:30 AM - 09:00 AM', // Mon
    '03:00 PM - 04:30 PM', // Tue
    '12:00 PM - 01:30 PM', // Wed
    '01:30 PM - 03:00 PM', // Thu
    '10:30 AM - 12:00 PM', // Fri
    '09:00 AM - 10:30 AM'  // Sat
  ];

  // Abhijit Muhurat is universally around 11:45 AM - 12:35 PM (midday)
  const abhijit = '11:48 AM - 12:36 PM';
  const amritKaal = '02:15 PM - 03:45 PM';

  const tithiList = ['Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 'Shasthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima / Amavasya'];
  const dayOfMonth = now.getDate();
  const tithi = tithiList[(dayOfMonth + 3) % tithiList.length];

  return {
    dateFormatted: now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    dayName: days[dayOfWeek],
    tithi,
    paksha: dayOfMonth <= 15 ? 'Shukla Paksha (Waxing Bright Moon)' : 'Krishna Paksha (Waning Dark Moon)',
    rahuKaal: rahuKaals[dayOfWeek],
    abhijitMuhurat: abhijit,
    amritKaal,
    todayAuspiciousColor: ['Gold / Red', 'Silver / White', 'Crimson Red', 'Emerald Green', 'Yellow / Saffron', 'Silk White / Pink', 'Navy Blue / Black'][dayOfWeek],
    cosmicTip: 'Maintain mental calm and chant your personal Ishta Devata mantra during sunrise for maximum karmic alignment.'
  };
}
