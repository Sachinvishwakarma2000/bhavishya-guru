// Sacred Vedic Numerology Engine: Mulank, Bhagyank, Lo Shu Grid, Phone & Name Numerology

export const PLANETARY_RULERS = {
  1: {
    name: 'Surya (The Sun)',
    title: 'The Divine King & Source of Light',
    element: 'Fire (Agni)',
    deity: 'Lord Surya Narayana & Gayatri',
    color: 'Royal Gold, Deep Orange, Copper',
    gemstone: 'Ruby (Manikya)',
    metal: 'Gold / Copper',
    direction: 'East',
    luckyDays: ['Sunday', 'Monday'],
    favorableNumbers: [1, 2, 3, 5, 9],
    unfavorableNumbers: [6, 8],
    neutralNumbers: [4, 7],
    mantra: 'Om Hram Hreem Hroum Sah Suryaya Namah (ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः)',
    gayatriMantra: 'Om Bhur Bhuvah Swaha, Tat Savitur Varenyam, Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat',
    traits: ['Natural Leader', 'Commanding Aura', 'High Integrity', 'Ambitious', 'Generous Patron'],
    flaws: ['Ego clashes', 'Impatience with slower minds', 'Dominating temperament', 'Heart or blood pressure stress'],
    career: ['Government Administration', 'CEOs & Entrepreneurs', 'Politics', 'Surgeons', 'Jewelers', 'Executive Leaders'],
    remedy: 'Offer Arghya (water in a copper vessel) to the rising morning Sun daily. Chant Aditya Hridaya Stotra on Sundays.'
  },
  2: {
    name: 'Chandra (The Moon)',
    title: 'The Queen of Intuition & Emotions',
    element: 'Water (Jal)',
    deity: 'Lord Shiva & Goddess Parvati',
    color: 'Luminous White, Pearl, Silver, Cream',
    gemstone: 'Natural Pearl (Moti) or Moonstone',
    metal: 'Silver',
    direction: 'North-West',
    luckyDays: ['Monday', 'Sunday'],
    favorableNumbers: [1, 2, 5],
    unfavorableNumbers: [8, 9],
    neutralNumbers: [3, 4, 6, 7],
    mantra: 'Om Shram Shreem Shroum Sah Chandraya Namah (ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः)',
    gayatriMantra: 'Om Ksheeraputraya Vidmahe, Amritatvaya Dheemahi, Tanno Chandrah Prachodayat',
    traits: ['Deeply Intuitive', 'Empathetic & Nurturing', 'Artistic Sensibility', 'Peace-Loving', 'Diplomatic'],
    flaws: ['Mood swings', 'Over-sensitivity', 'Anxiety & self-doubt', 'Easily hurt by harsh words'],
    career: ['Psychology & Counseling', 'Poetry & Creative Writing', 'Hospitality & Culinary Arts', 'Maritime & Liquids', 'Interior Design'],
    remedy: 'Offer milk and water on Shiva Lingam every Monday. Avoid taking major financial decisions during Amavasya (New Moon).'
  },
  3: {
    name: 'Brihaspati (Jupiter)',
    title: 'Guru of the Gods & Fountain of Wisdom',
    element: 'Ether / Space (Akasha)',
    deity: 'Lord Vishnu, Brihaspati & Dakshinamurthy',
    color: 'Bright Yellow, Saffron, Golden Amber',
    gemstone: 'Yellow Sapphire (Pukhraj) or Topaz',
    metal: 'Yellow Gold / Brass',
    direction: 'North-East (Ishanya)',
    luckyDays: ['Thursday', 'Tuesday'],
    favorableNumbers: [1, 2, 3, 9],
    unfavorableNumbers: [6],
    neutralNumbers: [5, 7, 8],
    mantra: 'Om Gram Greem Groum Sah Gurave Namah (ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः)',
    gayatriMantra: 'Om Vrishabhadhwajaya Vidmahe, Krunihastaya Dheemahi, Tanno Guruh Prachodayat',
    traits: ['Profound Wisdom', 'Philosophical Mind', 'Honorable & Just', 'Spiritual Teacher', 'Optimistic'],
    flaws: ['Tendency to preach', 'Over-optimism leading to miscalculation', 'Liver or metabolic vulnerability', 'Excessive generosity'],
    career: ['Higher Education & Academics', 'Judiciary & Law', 'Spiritual Gurus', 'Finance & Wealth Advisory', 'Publishing & Authors'],
    remedy: 'Apply yellow sandalwood or saffron tilak on the forehead on Thursdays. Donate yellow grams (chana dal) or bananas to students or priests.'
  },
  4: {
    name: 'Rahu (North Lunar Node)',
    title: 'The Master of Innovation & Shadow Architect',
    element: 'Air (Vayu)',
    deity: 'Goddess Durga & Lord Bhairava',
    color: 'Electric Blue, Smoky Charcoal, Grey',
    gemstone: 'Hessonite Garnet (Gomedh)',
    metal: 'Alloy (Ashtadhatu / Lead)',
    direction: 'South-West (Nairritya)',
    luckyDays: ['Saturday', 'Sunday'],
    favorableNumbers: [1, 5, 6, 7],
    unfavorableNumbers: [2, 8, 9],
    neutralNumbers: [3, 4],
    mantra: 'Om Bhram Bhreem Bhroum Sah Rahave Namah (ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः)',
    gayatriMantra: 'Om Nagadhwajaya Vidmahe, Padmahastaya Dheemahi, Tanno Rahuh Prachodayat',
    traits: ['Unconventional Thinker', 'Technological Pioneer', 'Revolutionary', 'Sharp Analytical Intellect', 'Out-of-box strategist'],
    flaws: ['Sudden mood turbulence', 'Restlessness', 'Suspicious nature', 'Vulnerability to illusions and sudden downfalls'],
    career: ['Software Engineering & AI', 'Cryptocurrency & FinTech', 'Aviation & Space Science', 'Investigative Journalism', 'Astrology & Occult'],
    remedy: 'Recite Durga Chalisa daily or feed black dogs and stray birds on Saturdays. Keep a silver square coin in your wallet for mental peace.'
  },
  5: {
    name: 'Budha (Mercury)',
    title: 'The Prince of Intellect & Prince of Commerce',
    element: 'Earth (Prithvi)',
    deity: 'Lord Ganesha & Lord Vishnu',
    color: 'Emerald Green, Mint, Jade',
    gemstone: 'Emerald (Panna) or Green Tourmaline',
    metal: 'Bronze / Silver',
    direction: 'North',
    luckyDays: ['Wednesday', 'Friday'],
    favorableNumbers: [1, 4, 5, 6],
    unfavorableNumbers: [2],
    neutralNumbers: [3, 7, 8, 9],
    mantra: 'Om Bram Breem Broum Sah Budhaya Namah (ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः)',
    gayatriMantra: 'Om Gajadhwajaya Vidmahe, Shukrahastaya Dheemahi, Tanno Budhah Prachodayat',
    traits: ['Quick-Witted & Fluent', 'Commercial Acumen', 'High Adaptability', 'Youthful Energy', 'Networking Genius'],
    flaws: ['Nervous restlessness', 'Superficial focus if bored', 'Inconsistent follow-through', 'Digestive/nervous vulnerability'],
    career: ['Digital Marketing & Media', 'Stock Trading & Brokerage', 'Software Development', 'Public Relations & Sales', 'Journalism & Humor'],
    remedy: 'Chant Atharvashirsha or offer 21 blades of fresh Durva grass to Lord Ganesha on Wednesdays. Feed green fodder to cows.'
  },
  6: {
    name: 'Shukra (Venus)',
    title: 'The Architect of Beauty, Wealth & Cosmic Love',
    element: 'Water (Jal)',
    deity: 'Goddess Mahalakshmi & Shukracharya',
    color: 'Sparkling White, Silver, Pale Pink, Silk Cream',
    gemstone: 'Diamond (Heera) or White Zircon / Opal',
    metal: 'Platinum / Silver',
    direction: 'South-East (Agneya)',
    luckyDays: ['Friday', 'Wednesday'],
    favorableNumbers: [1, 4, 5, 6, 7],
    unfavorableNumbers: [3],
    neutralNumbers: [8, 9, 2],
    mantra: 'Om Shram Shreem Shroum Sah Shukraya Namah (ॐ शुं शुक्राय नमः / ॐ द्रां द्रीं द्रौं सः शुक्राय नमः)',
    gayatriMantra: 'Om Bhrigujaya Vidmahe, Divyadehaya Dheemahi, Tanno Shukrah Prachodayat',
    traits: ['Magnetic Charisma', 'Aesthetic Perfectionist', 'Loving & Harmonious', 'Magnet for Luxury & Comfort', 'Artistic Flair'],
    flaws: ['Extravagance', 'Indulgence in sensory pleasures', 'Reluctance to face harsh conflicts', 'Jealousy in romance'],
    career: ['Fashion & Haute Couture', 'Cinema & Performing Arts', 'Luxury Real Estate', 'Cosmetics & Fragrance', 'Diplomacy & Event Hosting'],
    remedy: 'Recite Sri Suktam every Friday. Respect women and donate white sweets (kheer, mishri) or white cloth to needy women on Fridays.'
  },
  7: {
    name: 'Ketu (South Lunar Node)',
    title: 'The Mystic Seer & Master of Liberation (Moksha)',
    element: 'Fire / Spiritual Ether',
    deity: 'Lord Ganesha & Lord Matsya Avatar',
    color: 'Smoky Grey, Saffron, Earthy Multi-Tone',
    gemstone: "Cat's Eye (Vaidurya / Lehsuniya)",
    metal: 'Panchadhatu (Five Metals)',
    direction: 'North-East',
    luckyDays: ['Monday', 'Wednesday'],
    favorableNumbers: [1, 4, 5, 6],
    unfavorableNumbers: [2, 9],
    neutralNumbers: [3, 7, 8],
    mantra: 'Om Stram Streem Stroum Sah Ketave Namah (ॐ स्रां स्रीं स्रौं सः केतवे नमः)',
    gayatriMantra: 'Om Ashwadhwajaya Vidmahe, Shoolahastaya Dheemahi, Tanno Ketuh Prachodayat',
    traits: ['Mystic Insight', 'Philosophical Genius', 'Unattached Spirit', 'Occult & Psychic Sensitivity', 'Deep Research Ability'],
    flaws: ['Feeling alienated or misunderstood', 'Sudden detachment/abandonment', 'Indecisiveness', 'Vague anxieties'],
    career: ['Data Science & Deep Research', 'Spiritual Healing & Reiki', 'Philosophy & Mysticism', 'Cybersecurity & Cryptography', 'Archeology'],
    remedy: 'Offer multi-colored blankets or warm clothes to the poor. Feed two-colored dogs (black and white) on Wednesdays and Sundays.'
  },
  8: {
    name: 'Shani (Saturn)',
    title: 'The Lord of Karma & Eternal Builder',
    element: 'Air / Earth',
    deity: 'Lord Shani Dev, Lord Hanuman & Lord Shiva',
    color: 'Deep Midnight Blue, Dark Navy, Steel Grey, Black',
    gemstone: 'Blue Sapphire (Neelam) or Amethyst (Katela)',
    metal: 'Iron / Steel',
    direction: 'West',
    luckyDays: ['Saturday', 'Friday'],
    favorableNumbers: [3, 5, 6],
    unfavorableNumbers: [1, 2, 4, 9],
    neutralNumbers: [7, 8],
    mantra: 'Om Pram Preem Proum Sah Shanaischaraya Namah (ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः)',
    gayatriMantra: 'Om Kakadhwajaya Vidmahe, Khadgahastaya Dheemahi, Tanno Mandah Prachodayat',
    traits: ['Iron Discipline', 'Unshakable Perseverance', 'Deep Sense of Justice', 'Mastery Over Hardships', 'Empire Builder'],
    flaws: ['Melancholy & Isolation', 'Delayed outcomes inducing pessimism', 'Rigidity and cold emotional exterior', 'Chronic joint strain'],
    career: ['Heavy Industry & Mining', 'Judiciary & Corporate Law', 'Civil Infrastructure & Construction', 'Oil & Gas', 'Long-term Investment'],
    remedy: 'Light a mustard oil lamp under a Peepal tree every Saturday evening. Recite Hanuman Chalisa 7 times on Tuesdays and Saturdays.'
  },
  9: {
    name: 'Mangal (Mars)',
    title: 'The Commander of Cosmic Forces & Warrior of Dharma',
    element: 'Fire (Agni)',
    deity: 'Lord Kartikeya (Murugan) & Lord Hanuman',
    color: 'Crimson Red, Scarlet, Blood Orange, Coral',
    gemstone: 'Red Coral (Moonga)',
    metal: 'Copper / Brass',
    direction: 'South',
    luckyDays: ['Tuesday', 'Thursday'],
    favorableNumbers: [1, 2, 3, 5],
    unfavorableNumbers: [4, 8],
    neutralNumbers: [6, 7, 9],
    mantra: 'Om Kram Kreem Kroum Sah Bhaumaya Namah (ॐ क्रां क्रीं क्रौं सः भौमाय नमः)',
    gayatriMantra: 'Om Angarakaya Vidmahe, Shaktihastaya Dheemahi, Tanno Bhaumah Prachodayat',
    traits: ['Fearless Courage', 'Boundless Physical Energy', 'Protector Instinct', 'Executive Decision Making', 'Fiercely Loyal'],
    flaws: ['Short temper & Explosive wrath', 'Rash haste leading to accidents', 'Argumentative dominance', 'Blood pressure or inflammation'],
    career: ['Armed Forces & Defense', 'Sports & Martial Arts', 'High-Risk Engineering', 'Real Estate & Land Development', 'Emergency Medicine'],
    remedy: 'Chant Sundarkand on Tuesdays. Donate red lentils (masoor dal) or jaggery to laborers or temples on Tuesdays. Never accept free gifts from enemies.'
  }
};

// Calculate Mulank (Root Number from Day 1-31)
export function calculateMulank(dayInput) {
  let day = parseInt(dayInput, 10);
  if (isNaN(day) || day < 1 || day > 31) day = 1;
  
  // Sum digits of the birth day until single digit 1-9
  let sum = day;
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  
  const rulerInfo = PLANETARY_RULERS[sum] || PLANETARY_RULERS[1];
  return {
    mulank: sum,
    birthDay: day,
    ruler: rulerInfo,
    ...rulerInfo
  };
}

// Calculate Bhagyank (Destiny / Life Path Number from Full Date YYYY-MM-DD)
export function calculateBhagyank(dobString) {
  if (!dobString) {
    const fallbackRuler = PLANETARY_RULERS[1];
    return { bhagyank: 1, ruler: fallbackRuler, ...fallbackRuler };
  }
  const digits = dobString.replace(/[^0-9]/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  if (sum === 0) sum = 1;
  const rulerInfo = PLANETARY_RULERS[sum] || PLANETARY_RULERS[1];
  return {
    bhagyank: sum,
    calculationMethod: 'Sum of all DOB digits (Day + Month + Year)',
    ruler: rulerInfo,
    ...rulerInfo
  };
}

// Lo Shu Grid analysis (3x3 grid)
export function calculateLoShuGrid(dobString, mulankNum, bhagyankNum) {
  const digits = (dobString || '').replace(/[^0-9]/g, '').split('').map(Number);
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  
  // Exclude century '19' or '20' if desired, but classical Lo Shu counts all DOB digits plus Mulank & Bhagyank
  digits.forEach(d => {
    if (d >= 1 && d <= 9) counts[d] = (counts[d] || 0) + 1;
  });
  if (mulankNum >= 1 && mulankNum <= 9) counts[mulankNum] = (counts[mulankNum] || 0) + 1;
  if (bhagyankNum >= 1 && bhagyankNum <= 9) counts[bhagyankNum] = (counts[bhagyankNum] || 0) + 1;

  // Planes assessment
  const planes = [
    {
      name: 'Mental Plane (4-9-2)',
      code: 'mental',
      digits: [4, 9, 2],
      active: counts[4] > 0 && counts[9] > 0 && counts[2] > 0,
      partial: (counts[4] > 0 ? 1 : 0) + (counts[9] > 0 ? 1 : 0) + (counts[2] > 0 ? 1 : 0),
      description: 'Superb memory, cerebral clarity, intellectual depth and ability to grasp complex philosophies.'
    },
    {
      name: 'Emotional / Soul Plane (3-5-7)',
      code: 'emotional',
      digits: [3, 5, 7],
      active: counts[3] > 0 && counts[5] > 0 && counts[7] > 0,
      partial: (counts[3] > 0 ? 1 : 0) + (counts[5] > 0 ? 1 : 0) + (counts[7] > 0 ? 1 : 0),
      description: 'High emotional intelligence, intuition, spiritual heart, magnetic compassion and empathy.'
    },
    {
      name: 'Practical / Material Plane (8-1-6)',
      code: 'practical',
      digits: [8, 1, 6],
      active: counts[8] > 0 && counts[1] > 0 && counts[6] > 0,
      partial: (counts[8] > 0 ? 1 : 0) + (counts[1] > 0 ? 1 : 0) + (counts[6] > 0 ? 1 : 0),
      description: 'Real-world execution, commercial aptitude, business savvy and capacity to manifest tangible wealth.'
    },
    {
      name: 'Thought / Planning Plane (4-3-8)',
      code: 'thought',
      digits: [4, 3, 8],
      active: counts[4] > 0 && counts[3] > 0 && counts[8] > 0,
      partial: (counts[4] > 0 ? 1 : 0) + (counts[3] > 0 ? 1 : 0) + (counts[8] > 0 ? 1 : 0),
      description: 'Architectural planning, visionary organizing and foresight before entering any action.'
    },
    {
      name: 'Will Power Plane (9-5-1)',
      code: 'will',
      digits: [9, 5, 1],
      active: counts[9] > 0 && counts[5] > 0 && counts[1] > 0,
      partial: (counts[9] > 0 ? 1 : 0) + (counts[5] > 0 ? 1 : 0) + (counts[1] > 0 ? 1 : 0),
      description: 'Unshakeable willpower, persistence against adversity, ability to turn failure into conquest.'
    },
    {
      name: 'Action Plane (2-7-6)',
      code: 'action',
      digits: [2, 7, 6],
      active: counts[2] > 0 && counts[7] > 0 && counts[6] > 0,
      partial: (counts[2] > 0 ? 1 : 0) + (counts[7] > 0 ? 1 : 0) + (counts[6] > 0 ? 1 : 0),
      description: 'Swift physical and creative execution; converts thoughts directly into reality without hesitation.'
    },
    {
      name: 'Golden Raja Yoga (4-5-6)',
      code: 'golden',
      digits: [4, 5, 6],
      active: counts[4] > 0 && counts[5] > 0 && counts[6] > 0,
      partial: (counts[4] > 0 ? 1 : 0) + (counts[5] > 0 ? 1 : 0) + (counts[6] > 0 ? 1 : 0),
      description: 'The supreme royal yoga of numerology: brings high wealth, fame, prosperity, authority and all-around success.'
    },
    {
      name: 'Silver Property Plane (2-5-8)',
      code: 'silver',
      digits: [2, 5, 8],
      active: counts[2] > 0 && counts[5] > 0 && counts[8] > 0,
      partial: (counts[2] > 0 ? 1 : 0) + (counts[5] > 0 ? 1 : 0) + (counts[8] > 0 ? 1 : 0),
      description: 'Blessing of extensive land, real estate, agricultural property, assets and deep material stability.'
    }
  ];

  // Missing numbers remedies
  const missingNumbers = [];
  const missingRemedies = {
    1: 'Wear copper or brass bracelet; drink water from a copper vessel at sunrise to balance low Solar confidence.',
    2: 'Wear a natural silver ring or carry a silver square coin; respect your mother to balance Lunar water energy.',
    3: 'Wear a yellow thread on right wrist on Thursdays; place brass idols of Guru or Saraswati in the North-East.',
    4: 'Keep your home clutter-free, especially South-West corner; feed black birds or stray dogs on Saturday to appease Rahu.',
    5: 'Wear green clothing on Wednesdays; hang a 5-rod bamboo wind chime in the central core (Brahmasthan) of your home.',
    6: 'Wear pleasant floral fragrances (attar) daily; maintain cleanliness and wear white or pastel silk garments on Fridays.',
    7: 'Wear a multi-colored thread (Kalava) or pray to Lord Ganesha; donate sesame seeds or blankets in winter.',
    8: 'Keep a blue crystal or amethyst on your work desk; respect manual laborers, domestic help and do charity on Saturdays.',
    9: 'Keep red flowers or a copper pyramid in the South corner of your living space; recite Hanuman Chalisa every Tuesday.'
  };

  for (let i = 1; i <= 9; i++) {
    if (!counts[i]) {
      missingNumbers.push({
        digit: i,
        remedy: missingRemedies[i]
      });
    }
  }

  return {
    counts,
    planes,
    missingNumbers
  };
}

// Phone Number Numerology Analyzer
export function calculatePhoneNumerology(phoneRaw, userMulank) {
  const digits = (phoneRaw || '').replace(/[^0-9]/g, '');
  if (digits.length < 5) {
    return null;
  }

  const digitArray = digits.split('').map(Number);
  const totalSum = digitArray.reduce((a, b) => a + b, 0);
  
  let root = totalSum;
  while (root > 9) {
    root = root.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  if (root === 0) root = 5;

  const ruler = PLANETARY_RULERS[root];

  // Check ending digits
  const lastFour = digits.slice(-4);
  const lastDigit = digits.slice(-1);

  // Frequency count
  const freq = {};
  digitArray.forEach(d => {
    freq[d] = (freq[d] || 0) + 1;
  });

  // Calculate resonance score (0 - 100)
  let score = 70;
  let goodPoints = [];
  let badPoints = [];

  // Evaluation of Root
  if ([1, 5, 6].includes(root)) {
    score += 15;
    goodPoints.push(`Total root number ${root} (${ruler.name}) is universally prosperous for growth, luck, and communication.`);
  } else if ([3, 9].includes(root)) {
    score += 10;
    goodPoints.push(`Total root number ${root} provides energetic assertiveness and wisdom in decision making.`);
  } else if ([2, 7].includes(root)) {
    score += 5;
    goodPoints.push(`Total root number ${root} enhances intuition, creative diplomacy, and calm consultations.`);
  } else if (root === 4) {
    score -= 10;
    badPoints.push(`Root number 4 can invite sudden unexpected spikes, technical volatility, or restless arguments.`);
  } else if (root === 8) {
    score -= 10;
    badPoints.push(`Root number 8 brings heavy karmic pressure, slow responses from callers, and intense work burdens.`);
  }

  // Compatibility with Mulank
  if (userMulank) {
    if (ruler.favorableNumbers.includes(userMulank)) {
      score += 15;
      goodPoints.push(`Harmonious alignment: Root ${root} is a friendly vibration to your birth Mulank ${userMulank}!`);
    } else if (ruler.unfavorableNumbers.includes(userMulank)) {
      score -= 15;
      badPoints.push(`Vibrational friction: Root ${root} challenges your personal Mulank ${userMulank}.`);
    } else {
      goodPoints.push(`Neutral resonance: Operates smoothly with your personal Mulank.`);
    }
  }

  // Check repeating digits & problematic sequences
  if (digits.includes('48') || digits.includes('84')) {
    score -= 12;
    badPoints.push('Contains 4-8 or 8-4 combination: can bring legal disputes, delays, and unexpected obstacles.');
  }
  if (digits.includes('28') || digits.includes('82')) {
    score -= 10;
    badPoints.push('Contains 2-8 or 8-2 combination (Vish Yoga vibration): induces mental overthinking and emotional strain.');
  }
  if (digits.includes('24') || digits.includes('42')) {
    score += 8;
    goodPoints.push('Contains 2-4 / 4-2 combination: highly favorable for magnetic popularity and public goodwill.');
  }
  if (digits.includes('15') || digits.includes('51')) {
    score += 8;
    goodPoints.push('Contains 1-5 / 5-1 combination: excellent for business negotiation, trade profits and sharp speech.');
  }
  if (digits.includes('56') || digits.includes('65')) {
    score += 10;
    goodPoints.push('Contains 5-6 / 6-5 combination (Lakshmi-Kuber vibration): attracts luxury, clients, and commercial abundance.');
  }
  if ((freq[0] || 0) >= 3) {
    score -= 8;
    badPoints.push('Excessive zeros (3 or more): zeros drain the vibrational frequency of surrounding numbers.');
  }
  if ((freq[8] || 0) >= 3) {
    badPoints.push('Triple 8s: while powerful for high resilience, often causes extreme delays and severe workload.');
  }

  // Clamp score
  score = Math.max(30, Math.min(98, score));

  // Determine category suitability
  const suitability = {
    business: [1, 5, 6].includes(root) ? 'Highly Auspicious (95%)' : [3, 9].includes(root) ? 'Moderate (75%)' : 'Neutral (50%)',
    career: [1, 3, 5, 8].includes(root) ? 'Very Strong (90%)' : 'Good (70%)',
    loveAndFamily: [2, 6].includes(root) ? 'Deeply Harmonious (95%)' : [1, 5].includes(root) ? 'Favorable (80%)' : 'Caution Advised (55%)',
    wealthAttraction: [5, 6, 1].includes(root) ? 'Magnetic Wealth (92%)' : [3, 9].includes(root) ? 'Steady Inflow (78%)' : 'Variable (60%)'
  };

  // Remedies for phone
  const remedies = [
    `Set a glowing sacred wallpaper: ${root === 5 || root === 6 ? 'Shree Yantra or Green Aventurine Tree' : root === 1 ? 'Rising Sun / Surya Mandir' : 'Lord Shiva or Panchamukhi Hanuman'}.`,
    `Mobile Cover recommendation: Use ${ruler.color} colored phone case to harmonize ${ruler.name}'s frequency.`,
    'Avoid placing your mobile under your pillow while sleeping; keep it on a wooden side-stand to deflect psychic static.',
    `When buying your next SIM, aim for a total compound sum reducing to 1 (Surya), 5 (Budha), or 6 (Shukra).`
  ];

  return {
    rawNumber: phoneRaw,
    totalSum,
    root,
    ruler,
    score,
    lastFour,
    suitability,
    goodPoints,
    badPoints,
    remedies
  };
}

// Chaldean Numerology Chart
const CHALDEAN_CHART = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

// Pythagorean Numerology Chart
const PYTHAGOREAN_CHART = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

// Classical Chaldean Compound Number Meanings
export const CHALDEAN_COMPOUND_MEANINGS = {
  10: 'The Wheel of Fortune: Symbolizes honor, faith, and success in plans. Can rise high through virtuous deeds.',
  11: 'The Clenched Clench / Warning: Spiritual intuition accompanied by tests of faith and double trials.',
  12: 'The Sacrifice: High intellectual capability, but must guard against being taken advantage of by others.',
  13: 'The Regeneration: Sudden changes, power shifts, and breaking of old structures to birth new empires.',
  14: 'Movement & Combination: Favorable for commerce, international travel, and financial mergers. Beware of gambling.',
  15: 'The Magician of Venus: Magnetic charm, eloquence, artistic gifts, and drawing favors from the powerful.',
  16: 'The Shattered Citadel: Warning against arrogant investments and false friends. Urges humility and spiritual safeguards.',
  17: 'The Star of the Magi: Highly spiritual number symbolizing immortality of name, celestial guidance, and peace.',
  18: 'Spiritual Conflict: Warning of internal family friction or hidden enemies. Overcome through spiritual discipline.',
  19: 'The Prince of Heaven: Supreme fortune, victory over all obstacles, fulfillment, wealth, and supreme happiness.',
  20: 'The Awakening: Call to a higher purpose, awakening of new visions, success in public affairs.',
  21: 'The Crown of the Magi: Highest triumph, elevation in career, lasting honor, and global recognition.',
  22: 'The Master Builder: Magnificent vision and capacity to build grand institutions for humanity.',
  23: 'The Royal Star of the Lion: Promises success, protection from superiors, and victorious negotiations.',
  24: 'The Lucky Union: Fortune in love, powerful alliances, and steady financial prosperity.',
  25: 'Wisdom Through Experience: Victory attained through overcoming early struggles and intellectual mastery.',
  26: 'Partnership Tests: Warning of financial partnerships. Needs strict legal clarity and careful investments.',
  27: 'The Sceptre of Command: High intelligence, executive command, and military or corporate leadership.',
  28: 'The Trusting Heart: Great promise, but warning against trusting unverified associates with money.',
  29: 'Grace Under Trial: Emotional depth and creative genius, but needs caution against self-deception.',
  30: 'The Thoughtful Philosopher: Mental superiority and contemplation; excels in academics and leadership.',
  31: 'The Independent Sage: Intellectual isolation and brilliance; seeks self-reliance and unique creative expression.',
  32: 'The Royal Alliance: Success through mass connection and diplomatic partnerships with influential nations or circles.',
  33: 'The Master Healer: Radiant compassion, high social service, and magnetic devotion to uplifting others.',
  34: 'Strength of Labor: Wealth attained through disciplined hard work and practical wisdom.',
  35: 'The Generous Trader: High commercial aptitude, philanthropy, and steady fortune in enterprise.',
  36: 'The Courageous Pioneer: Overcomes formidable opposition through sheer courage and persistence.',
  37: 'The Blessed Harmony: Excellent fortune in friendships, family, business, and lasting partnerships.',
  38: 'The Subtle Diplomat: Requires careful discernment in friendships; high intuitive gifts.',
  39: 'The Worldly Sage: Combines business ambition with philosophical wisdom and spiritual philanthropy.',
  40: 'The Practical Realist: Focused on tangible foundations, physical sciences, and real estate.',
  41: 'The Radiant Victor: Dynamic luck in commerce, executive management, and leadership.',
  42: 'The Harmonious Guardian: Blessed family life, magnetic social presence, and aesthetic success.',
  45: 'The Creative Surge: Brilliance in inventions, marketing, and sudden breakthrough fortunes.',
  46: 'The Royal Crown of Wealth: Massive prosperity, social dignity, and lifelong material security.',
  50: 'The Free Spirit: Adaptability, speed of thought, and mastery over dynamic situations.'
};

// Calculate Name Numerology
export function calculateNameNumerology(fullNameRaw, dobMulank) {
  const cleanName = (fullNameRaw || '').trim().toUpperCase();
  if (!cleanName) return null;

  const words = cleanName.split(/\s+/).filter(Boolean);
  
  // Chaldean Letter Calculation
  let chaldeanCompound = 0;
  const chaldeanLetterDetails = [];

  for (let char of cleanName) {
    if (CHALDEAN_CHART[char]) {
      chaldeanCompound += CHALDEAN_CHART[char];
      chaldeanLetterDetails.push({ char, val: CHALDEAN_CHART[char] });
    } else if (char === ' ') {
      chaldeanLetterDetails.push({ char: ' ', val: null });
    }
  }

  // Reduce Chaldean
  let chaldeanRoot = chaldeanCompound;
  while (chaldeanRoot > 9) {
    chaldeanRoot = chaldeanRoot.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  if (chaldeanRoot === 0) chaldeanRoot = 1;

  // Pythagorean Letter Calculation
  let pythagoreanCompound = 0;
  for (let char of cleanName) {
    if (PYTHAGOREAN_CHART[char]) {
      pythagoreanCompound += PYTHAGOREAN_CHART[char];
    }
  }
  let pythagoreanRoot = pythagoreanCompound;
  while (pythagoreanRoot > 9) {
    pythagoreanRoot = pythagoreanRoot.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  if (pythagoreanRoot === 0) pythagoreanRoot = 1;

  // Vowels (Soul Urge) & Consonants (Personality)
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let soulUrgeSum = 0;
  let personalitySum = 0;

  for (let char of cleanName) {
    if (CHALDEAN_CHART[char]) {
      if (vowels.includes(char)) {
        soulUrgeSum += CHALDEAN_CHART[char];
      } else {
        personalitySum += CHALDEAN_CHART[char];
      }
    }
  }
  let soulUrge = soulUrgeSum;
  while (soulUrge > 9) soulUrge = soulUrge.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  
  let personality = personalitySum;
  while (personality > 9) personality = personality.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);

  const chaldeanRuler = PLANETARY_RULERS[chaldeanRoot];
  const compoundDesc = CHALDEAN_COMPOUND_MEANINGS[chaldeanCompound] || 
    `Compound number ${chaldeanCompound} vibrating to root ${chaldeanRoot} (${chaldeanRuler.name}).`;

  // Harmony with DOB Mulank
  let compatibilityStatus = 'Harmonious';
  let compatibilityScore = 88;
  let compatibilityReason = `Your Name vibration (${chaldeanRoot}) beautifully complements your Mulank (${dobMulank}).`;

  if (dobMulank) {
    if (chaldeanRuler.favorableNumbers.includes(dobMulank)) {
      compatibilityStatus = 'Super Blessed (Exalted)';
      compatibilityScore = 95;
      compatibilityReason = `Supreme cosmic sync! Name root ${chaldeanRoot} is a best friend to birth Mulank ${dobMulank}.`;
    } else if (chaldeanRuler.unfavorableNumbers.includes(dobMulank)) {
      compatibilityStatus = 'Challenging (Vibrational Friction)';
      compatibilityScore = 52;
      compatibilityReason = `Name root ${chaldeanRoot} and birth Mulank ${dobMulank} possess conflicting elemental energies. A gentle spelling adjustment is recommended.`;
    } else {
      compatibilityStatus = 'Balanced & Steady';
      compatibilityScore = 80;
      compatibilityReason = `Name root ${chaldeanRoot} and birth Mulank ${dobMulank} work in neutral harmony.`;
    }
  }

  // AI Name Correction Suggester
  // Generate top 2 auspicious spelling modifications if needed
  const suggestions = [];
  const candidateLetters = ['A', 'E', 'I', 'H', 'R', 'S'];

  // Test adding or doubling a letter in first name to reach royal compound 19, 23, 24, 37, 41, 46
  const targetCompounds = [19, 21, 23, 24, 27, 32, 37, 41, 46];
  const firstName = words[0] || cleanName;
  const restName = words.slice(1).join(' ');

  for (let letter of candidateLetters) {
    const testCandidate = firstName + letter + (restName ? ' ' + restName : '');
    let testComp = 0;
    for (let char of testCandidate.toUpperCase()) {
      if (CHALDEAN_CHART[char]) testComp += CHALDEAN_CHART[char];
    }
    let testRoot = testComp;
    while (testRoot > 9) testRoot = testRoot.toString().split('').reduce((acc, d) => acc + parseInt(d, 10), 0);

    if (targetCompounds.includes(testComp) || [1, 5, 6].includes(testRoot)) {
      const targetRuler = PLANETARY_RULERS[testRoot];
      suggestions.push({
        name: testCandidate,
        modifiedPart: `Added '${letter}' to first name`,
        compoundNumber: testComp,
        rootNumber: testRoot,
        rulerName: targetRuler.name,
        benefit: CHALDEAN_COMPOUND_MEANINGS[testComp] || `Elevates vibration to royal root ${testRoot} (${targetRuler.title}).`
      });
      if (suggestions.length >= 3) break;
    }
  }

  return {
    originalName: fullNameRaw,
    cleanName,
    words,
    chaldean: {
      compound: chaldeanCompound,
      root: chaldeanRoot,
      ruler: chaldeanRuler,
      meaning: compoundDesc,
      letterDetails: chaldeanLetterDetails
    },
    pythagorean: {
      compound: pythagoreanCompound,
      root: pythagoreanRoot
    },
    soulUrge,
    personality,
    compatibility: {
      status: compatibilityStatus,
      score: compatibilityScore,
      reason: compatibilityReason
    },
    suggestions
  };
}
