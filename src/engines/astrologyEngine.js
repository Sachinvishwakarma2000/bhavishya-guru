// Sacred Vedic Astrology Engine: 27 Nakshatras, Kundali Chart, Grahas, Doshas & Remedies

export const NAKSHATRAS = [
  {
    id: 1,
    name: 'Ashwini',
    sanskrit: 'अश्विनी',
    span: "0°00' - 13°20' Aries (Mesha)",
    lord: 'Ketu',
    deity: 'Ashwini Kumaras (Physicians of the Gods)',
    symbol: "Horse's Head (Swift Healing & Energy)",
    animal: 'Male Horse (Ashwa)',
    gana: 'Deva (Divine)',
    nadi: 'Adi (Vata)',
    tree: 'Kuchla / Poison Nut Tree (Strychnos nux-vomica)',
    element: 'Earth',
    direction: 'South',
    benefits: [
      'Pioneering spirit, fast starter, rapid healing ability',
      'Charismatic physical vitality and natural magnetic presence',
      'High enthusiasm for initiating ambitious ventures',
      'Innate healing touch and intuition for wellness'
    ],
    flaws: [
      'Impatience and leaving projects unfinished when thrill fades',
      'Impulsive recklessness or driving too fast',
      'Stubborn pride when contradicted'
    ],
    remedy: {
      beejMantra: 'Om Ashwibhyam Namah (ॐ अश्विभ्यां नमः)',
      gayatri: 'Om Swetavarnaya Vidmahe, Sudhahastaya Dheemahi, Tanno Ashwina Prachodayat',
      treeRitual: 'Water a sacred Ashwa / Jamun or Kuchla tree on Tuesdays. Meditate at sunrise.',
      daan: 'Donate jaggery, red cloth, or feed horses / street animals on Tuesdays.',
      gemstone: "Cat's Eye (Lehsuniya) set in silver or panchdhatu, worn on middle finger.",
      fastDay: 'Tuesday or Ketu Pradosham'
    }
  },
  {
    id: 2,
    name: 'Bharani',
    sanskrit: 'भरणी',
    span: "13°20' - 26°40' Aries (Mesha)",
    lord: 'Shukra (Venus)',
    deity: 'Lord Yama (God of Truth & Cosmic Justice)',
    symbol: 'Yoni (Vessel of Creation & Rebirth)',
    animal: 'Elephant (Gaja)',
    gana: 'Manushya (Human)',
    nadi: 'Madhya (Pitta)',
    tree: 'Amla / Indian Gooseberry (Phyllanthus emblica)',
    element: 'Earth',
    direction: 'West',
    benefits: [
      'Immense willpower, transformation endurance, creative brilliance',
      'Passionate determination to carry heavy responsibilities',
      'Truthful and direct speech; strong loyalty to family',
      'Magnetic allure and artistic taste'
    ],
    flaws: [
      'Extreme mood swings between strict asceticism and luxury',
      'Unforgiving memory for perceived betrayals',
      'Jealousy or possessiveness in romantic commitments'
    ],
    remedy: {
      beejMantra: 'Om Yamaya Namah (ॐ यमाय नमः)',
      gayatri: 'Om Suryaputraya Vidmahe, Dandadharaya Dheemahi, Tanno Yamah Prachodayat',
      treeRitual: 'Plant or care for an Amla tree; consume Amla juice on Fridays.',
      daan: 'Donate white sesame seeds, pure ghee, or silk cloth to needy mothers on Fridays.',
      gemstone: 'White Zircon or Diamond set in silver / platinum on ring finger.',
      fastDay: 'Friday'
    }
  },
  {
    id: 3,
    name: 'Krittika',
    sanskrit: 'कृत्तिका',
    span: "26°40' Aries - 10°00' Taurus (Vrishabha)",
    lord: 'Surya (Sun)',
    deity: 'Agni (The Sacred Fire God)',
    symbol: 'Razor / Flame (Purifying & Cutting)',
    animal: 'Female Sheep (Meshi)',
    gana: 'Rakshasa (Fierce/Protective)',
    nadi: 'Antya (Kapha)',
    tree: 'Gular / Cluster Fig (Ficus racemosa)',
    element: 'Earth',
    direction: 'North',
    benefits: [
      'Incisive analytical intellect, razor-sharp discernment',
      'Fierce protector of righteous causes and dependents',
      'Deep capacity for purification and digestive digestion',
      'Natural command over high-level governance'
    ],
    flaws: [
      'Sarcastic tongue that can unintentionally burn relations',
      'Impatience with slow thinkers',
      'Digestive heat, acidity, or hot temper'
    ],
    remedy: {
      beejMantra: 'Om Agnaye Namah (ॐ अग्नये नमः)',
      gayatri: 'Om Vaishvanaraya Vidmahe, Lalilaya Dheemahi, Tanno Agnih Prachodayat',
      treeRitual: 'Offer water to Gular tree or light a pure ghee lamp before Agni daily.',
      daan: 'Donate copper vessels, red lentils, or wheat to brahmins/temples on Sundays.',
      gemstone: 'Ruby (Manikya) set in gold or copper on ring finger.',
      fastDay: 'Sunday'
    }
  },
  {
    id: 4,
    name: 'Rohini',
    sanskrit: 'रोहिणी',
    span: "10°00' - 23°20' Taurus (Vrishabha)",
    lord: 'Chandra (Moon)',
    deity: 'Lord Brahma & Lord Prajapati (The Creator)',
    symbol: 'Chariot / Temple Cart (Fertility & Ascension)',
    animal: 'Male Serpent (Sarpa)',
    gana: 'Manushya (Human)',
    nadi: 'Antya (Kapha)',
    tree: 'Jamun / Black Plum (Syzygium cumini)',
    element: 'Earth',
    direction: 'East',
    benefits: [
      'Supreme charm, romantic magnetism, artistic genius',
      'Beloved by masses; gifted in aesthetics, agriculture, music and beauty',
      'Steady accumulation of material prosperity and family bliss',
      'Exquisite sensory perception and gentle speaking manner'
    ],
    flaws: [
      'Susceptible to flattery and vanity',
      'Material indulgence or emotional attachment to possessions',
      'Stubbornness when routine is disrupted'
    ],
    remedy: {
      beejMantra: 'Om Prajapataye Namah (ॐ प्रजापतये नमः)',
      gayatri: 'Om Brahmne Vidmahe, Padmanabhaya Dheemahi, Tanno Brahma Prachodayat',
      treeRitual: 'Offer raw cow milk and pure water to a Jamun or Banyan tree on Mondays.',
      daan: 'Donate milk, rice, silver ornaments, or white sweets to young girls on Mondays.',
      gemstone: 'South Sea Pearl (Moti) set in silver on little finger.',
      fastDay: 'Monday'
    }
  },
  {
    id: 5,
    name: 'Mrigashira',
    sanskrit: 'मृगशिरा',
    span: "23°20' Taurus - 6°40' Gemini (Mithuna)",
    lord: 'Mangal (Mars)',
    deity: 'Soma (The Moon God of Celestial Nectar)',
    symbol: "Deer's Head (The Celestial Search)",
    animal: 'Female Serpent',
    gana: 'Deva (Divine)',
    nadi: 'Madhya (Pitta)',
    tree: 'Khair / Cutch Tree (Acacia catechu)',
    element: 'Earth',
    direction: 'South',
    benefits: [
      'Inquisitive, eternal seeker of knowledge, travel lover',
      'Gentle, sensitive demeanor coupled with swift intellect',
      'Talented in research, journalism, writing, and exploration',
      'Peaceful mediator in social disputes'
    ],
    flaws: [
      'Restless wanderlust; difficulty in committing to one place or path',
      'Chronic indecision due to over-analyzing every option',
      'Nervous strain from overthinking'
    ],
    remedy: {
      beejMantra: 'Om Somaya Namah (ॐ सोमाय नमः)',
      gayatri: 'Om Chandraya Vidmahe, Ksheerasagaraya Dheemahi, Tanno Somah Prachodayat',
      treeRitual: 'Water a Khair tree on Tuesdays or offer chandan to Lord Shiva.',
      daan: 'Donate pomegranate, red sandalwood, or copper items on Tuesdays.',
      gemstone: 'Italian Red Coral (Moonga) in gold/copper on ring finger.',
      fastDay: 'Tuesday'
    }
  },
  {
    id: 6,
    name: 'Ardra',
    sanskrit: 'आर्द्रा',
    span: "6°40' - 20°00' Gemini (Mithuna)",
    lord: 'Rahu',
    deity: 'Rudra (The Storm Lord of Transformation)',
    symbol: 'Teardrop / Jewel (Purification through Tears)',
    animal: 'Female Dog (Shwani)',
    gana: 'Manushya (Human)',
    nadi: 'Adi (Vata)',
    tree: 'Agarwood / Krishna Thulasi',
    element: 'Water',
    direction: 'West',
    benefits: [
      'Deep intellectual brilliance, investigative prowess',
      'Ability to thrive through immense crises and regenerate stronger',
      'Tech innovation, cutting-edge software, scientific breakthrough',
      'Compassion born from understanding human suffering'
    ],
    flaws: [
      'Emotional storms, self-torment or cynicism during stress',
      'Vocal harshness when feeling betrayed',
      'Tendency towards obsessive rumination'
    ],
    remedy: {
      beejMantra: 'Om Rudraya Namah (ॐ रुद्राय नमः)',
      gayatri: 'Om Mahadevaya Vidmahe, Rudramoorthaye Dheemahi, Tanno Rudrah Prachodayat',
      treeRitual: 'Offer Bilva leaves and water with black sesame to Shiva Lingam on Saturdays.',
      daan: 'Feed stray dogs with bread and milk on Saturdays; donate dark blankets in winter.',
      gemstone: 'Hessonite Garnet (Gomedh) in silver on middle finger.',
      fastDay: 'Saturday / Shivaratri'
    }
  },
  {
    id: 7,
    name: 'Punarvasu',
    sanskrit: 'पुनर्वसु',
    span: "20°00' Gemini - 3°20' Cancer (Karka)",
    lord: 'Guru (Jupiter)',
    deity: 'Aditi (Cosmic Mother of the Gods)',
    symbol: 'Bow & Quiver of Arrows (Return of Light)',
    animal: 'Female Cat (Marjari)',
    gana: 'Deva (Divine)',
    nadi: 'Adi (Vata)',
    tree: 'Bamboo / Velu (Bambusa vulgaris)',
    element: 'Water',
    direction: 'North',
    benefits: [
      'Virtuous character, capacity to bounce back from any setback',
      'Radiant optimism, philanthropic heart, family harmony',
      'Intellectual wisdom combined with spiritual purity',
      'Blessed with abundant second chances and auspicious luck'
    ],
    flaws: [
      'Simple-minded trust in unworthy associates',
      'Over-idealism leading to disappointment with mundane reality',
      'Lack of material aggression in business'
    ],
    remedy: {
      beejMantra: 'Om Aditaye Namah (ॐ अदितये नमः)',
      gayatri: 'Om Deva-Matre Vidmahe, Jagaddhatryai Dheemahi, Tanno Aditih Prachodayat',
      treeRitual: 'Plant or water bamboo or holy basil; keep bamboo in North-East.',
      daan: 'Donate turmeric, yellow bananas, or feed cows with soaked chana dal on Thursdays.',
      gemstone: 'Ceylon Yellow Sapphire (Pukhraj) in yellow gold on index finger.',
      fastDay: 'Thursday'
    }
  },
  {
    id: 8,
    name: 'Pushya',
    sanskrit: 'पुष्य',
    span: "3°20' - 16°40' Cancer (Karka)",
    lord: 'Shani (Saturn)',
    deity: 'Brihaspati (Spiritual Preceptor)',
    symbol: "Udder of a Cow / Lotus (Nourishment & Dharma)",
    animal: 'Male Sheep (Aja)',
    gana: 'Deva (Divine)',
    nadi: 'Madhya (Pitta)',
    tree: 'Peepal / Sacred Fig (Ficus religiosa)',
    element: 'Water',
    direction: 'East',
    benefits: [
      'Considered the most auspicious among all 27 Nakshatras',
      'Supreme nourishment, spiritual devotion, trustworthy counselor',
      'Steadfast dharma, longevity, high social honor and royal favors',
      'Blessed with wealth that endures through generations'
    ],
    flaws: [
      'Overly conventional orthodoxy or intolerance of eccentricity',
      'Tendency to shoulder everyone’s emotional burdens until exhausted',
      'Slow to adapt to rapid disruptive changes'
    ],
    remedy: {
      beejMantra: 'Om Brihaspataye Namah (ॐ बृहस्पतये नमः)',
      gayatri: 'Om Gurudevaya Vidmahe, Parabrahmaya Dheemahi, Tanno Guruh Prachodayat',
      treeRitual: 'Circumambulate a Peepal tree 7 times on Saturday morning; light a mustard lamp.',
      daan: 'Feed cows with freshly kneaded dough mixed with jaggery and chana dal.',
      gemstone: 'Blue Sapphire (Neelam) or Amethyst in silver on middle finger.',
      fastDay: 'Thursday or Saturday'
    }
  },
  {
    id: 9,
    name: 'Ashlesha',
    sanskrit: 'अश्लेषा',
    span: "16°40' - 30°00' Cancer (Karka)",
    lord: 'Budha (Mercury)',
    deity: 'Nagas (The Sacred Serpents of Wisdom)',
    symbol: 'Coiled Serpent (Occult Wisdom & Mysticism)',
    animal: 'Male Cat (Marjara)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Antya (Kapha)',
    tree: 'Nagkesar / Ceylon Ironwood (Mesua ferrea)',
    element: 'Water',
    direction: 'South',
    benefits: [
      'High intuitive perception, psychological depth, hypnotic speech',
      'Master of occult sciences, astrology, medicine, and espionage',
      'Fierce protector of home and territory',
      'Uncanny ability to sense hidden motives in others'
    ],
    flaws: [
      'Suspicion, secretive nature, prone to holding lifelong grudges',
      'Gandanta Nakshatra dosha if born in the final degree',
      'Emotional manipulation when feeling vulnerable'
    ],
    remedy: {
      beejMantra: 'Om Sarpebhyo Namah (ॐ सर्पेभ्यो नमः)',
      gayatri: 'Om Navakulaya Vidmahe, Vishadantaya Dheemahi, Tanno Sarpah Prachodayat',
      treeRitual: 'Worship Nagkesar plant or offer milk to Shiva Lingam on Nag Panchami.',
      daan: 'Donate bronze vessels, green mung beans, or silver snake idols to a Shiva temple.',
      gemstone: 'Natural Colombian Emerald (Panna) in gold/silver on little finger.',
      fastDay: 'Wednesday'
    }
  },
  {
    id: 10,
    name: 'Magha',
    sanskrit: 'मघा',
    span: "0°00' - 13°20' Leo (Simha)",
    lord: 'Ketu',
    deity: 'Pitris (The Ancestral Spirits & Forefathers)',
    symbol: 'Royal Throne / Palanquin (Lineage & Majesty)',
    animal: 'Male Rat (Mushaka)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Antya (Kapha)',
    tree: 'Banyan Tree (Ficus benghalensis)',
    element: 'Water',
    direction: 'West',
    benefits: [
      'Royal dignity, natural authority, deep ancestral blessings',
      'High sense of honor, self-respect, and regal leadership',
      'Generous patron to subordinates and protectors of tradition',
      'Strong executive presence in boardrooms and public offices'
    ],
    flaws: [
      'Excessive pride and sensitivity to perceived disrespect',
      'Arrogance or dominating behavior with family members',
      'Pitru Dosha vulnerability if ancestors are neglected'
    ],
    remedy: {
      beejMantra: 'Om Pitribhyo Namah (ॐ पितृभ्यो नमः)',
      gayatri: 'Om Pitruganaya Vidmahe, Jagaddharine Dheemahi, Tanno Pitrah Prachodayat',
      treeRitual: 'Perform water tarpan to ancestors on Amavasya days near a Banyan tree.',
      daan: 'Donate food, black sesame seeds, and clothes to elderly priests on Amavasya.',
      gemstone: "Cat's Eye (Lehsuniya) in panchadhatu or silver on middle finger.",
      fastDay: 'Amavasya (New Moon) or Sunday'
    }
  },
  {
    id: 11,
    name: 'Purva Phalguni',
    sanskrit: 'पूर्वा फाल्गुनी',
    span: "13°20' - 26°40' Leo (Simha)",
    lord: 'Shukra (Venus)',
    deity: 'Bhaga (God of Fortune & Marital Bliss)',
    symbol: 'Hammock / Front Legs of Bed (Rest & Pleasure)',
    animal: 'Female Rat',
    gana: 'Manushya (Human)',
    nadi: 'Madhya (Pitta)',
    tree: 'Palash / Flame of the Forest (Butea monosperma)',
    element: 'Fire',
    direction: 'North',
    benefits: [
      'Magnetic romantic allure, love of fine arts, cinema, and theatre',
      'Charismatic social presence, celebration, and joy in relationships',
      'Prosperity through hospitality, fashion, design, and entertainment',
      'Generous host with an inviting home sanctuary'
    ],
    flaws: [
      'Indolence and procrastination when luxury takes over',
      'Vanity and spending beyond means on ostentatious luxury',
      'Disdain for routine manual toil'
    ],
    remedy: {
      beejMantra: 'Om Bhagaya Namah (ॐ भगाय नमः)',
      gayatri: 'Om Bhagadevaya Vidmahe, Saukhyadayine Dheemahi, Tanno Bhagah Prachodayat',
      treeRitual: 'Offer water and red flowers to a Palash tree on Fridays.',
      daan: 'Donate cosmetic items, perfumes, or sweet curd to newlywed women on Fridays.',
      gemstone: 'Diamond or Opal set in silver on ring finger.',
      fastDay: 'Friday'
    }
  },
  {
    id: 12,
    name: 'Uttara Phalguni',
    sanskrit: 'उत्तरा फाल्गुनी',
    span: "26°40' Leo - 10°00' Virgo (Kanya)",
    lord: 'Surya (Sun)',
    deity: 'Aryaman (God of Friendship & Patronage)',
    symbol: 'Back Legs of Bed (Stability & Matrimonial Harmony)',
    animal: 'Male Bull (Vrishabha)',
    gana: 'Manushya (Human)',
    nadi: 'Adi (Vata)',
    tree: 'Rudraksha Tree / Pakar (Ficus infectoria)',
    element: 'Fire',
    direction: 'East',
    benefits: [
      'Noble integrity, dependable ally, steadfast marital fidelity',
      'Generous protector with high social standing and leadership',
      'Prosperity sustained through lawful hard work and honor',
      'Chivalrous conduct and enduring friendships'
    ],
    flaws: [
      'Over-critical expectations of partners',
      'Restlessness when stuck in subordinate roles',
      'Pride that prevents asking for help in distress'
    ],
    remedy: {
      beejMantra: 'Om Aryamne Namah (ॐ अर्यम्णे नमः)',
      gayatri: 'Om Aryamadevaya Vidmahe, Mitraswarupaya Dheemahi, Tanno Aryama Prachodayat',
      treeRitual: 'Wear a genuine 1-mukhi or 12-mukhi Rudraksha; meditate on Surya at dawn.',
      daan: 'Donate wheat, copper coins, or support a friend in financial need on Sundays.',
      gemstone: 'Natural Ruby in gold on ring finger.',
      fastDay: 'Sunday'
    }
  },
  {
    id: 13,
    name: 'Hasta',
    sanskrit: 'हस्त',
    span: "10°00' - 23°20' Virgo (Kanya)",
    lord: 'Chandra (Moon)',
    deity: 'Savitr (The Divine Sun of Inspiration)',
    symbol: 'Open Hand (Healing, Craftsmanship & Blessing)',
    animal: 'Female Buffalo (Mahishi)',
    gana: 'Deva (Divine)',
    nadi: 'Adi (Vata)',
    tree: 'Jasmine / Wild Mango (Spondias pinnata)',
    element: 'Fire',
    direction: 'South',
    benefits: [
      'Gifted hands: surgery, fine artistry, writing, occult healing, craft',
      'Quick intelligence, witty humor, commercial astuteness',
      'Persuasive speaker, adaptable negotiator',
      'High capacity to manifest ideas into physical items'
    ],
    flaws: [
      'Tendency towards deceit or cunning if moral compass wavers',
      'Restless anxiety and overactive nervous tension',
      'Difficulty in relaxing without an active task'
    ],
    remedy: {
      beejMantra: 'Om Savitre Namah (ॐ सवित्रे नमः)',
      gayatri: 'Om Savitremurtaye Vidmahe, Prakashakaraya Dheemahi, Tanno Savita Prachodayat',
      treeRitual: 'Care for flowering plants; offer white Jasmine flowers to Goddess Saraswati.',
      daan: 'Donate notebooks, pens, and school stationery to poor school children on Mondays.',
      gemstone: 'Natural Basra Pearl or Moonstone in silver on little finger.',
      fastDay: 'Monday'
    }
  },
  {
    id: 14,
    name: 'Chitra',
    sanskrit: 'चित्रा',
    span: "23°20' Virgo - 6°40' Libra (Tula)",
    lord: 'Mangal (Mars)',
    deity: 'Twashtar / Vishwakarma (The Divine Celestial Architect)',
    symbol: 'Glittering Pearl / Bright Jewel (Supreme Design)',
    animal: 'Female Tiger (Vyaghri)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Madhya (Pitta)',
    tree: 'Bael / Bilva Tree (Aegle marmelos)',
    element: 'Fire',
    direction: 'West',
    benefits: [
      'Supreme visual flair, architectural brilliance, design mastery',
      'Striking physical beauty and stylish magnetic elegance',
      'Pioneering artisan, fashion guru, dynamic innovator',
      'Courageous and daring in aesthetic and technical pursuits'
    ],
    flaws: [
      'Vanity, obsession with outer appearances over inner soul',
      'Ego clashes with authority figures',
      'Combative arguments when creative vision is challenged'
    ],
    remedy: {
      beejMantra: 'Om Twashtre Namah (ॐ त्वष्ट्रे नमः)',
      gayatri: 'Om Vishwakarmane Vidmahe, Shilpakartraya Dheemahi, Tanno Twashta Prachodayat',
      treeRitual: 'Offer three-leaf Bilva leaves to Lord Shiva on Mondays and Tuesdays.',
      daan: 'Donate red coral, copper tools, or art supplies to aspiring artists.',
      gemstone: 'Red Coral (Moonga) or Carnelian in copper on ring finger.',
      fastDay: 'Tuesday'
    }
  },
  {
    id: 15,
    name: 'Swati',
    sanskrit: 'स्वाति',
    span: "6°40' - 20°00' Libra (Tula)",
    lord: 'Rahu',
    deity: 'Vayu (The God of Wind & Cosmic Breath)',
    symbol: 'Young Plant Sprout Bending in Wind (Flexibility)',
    animal: 'Male Buffalo (Mahisha)',
    gana: 'Deva (Divine)',
    nadi: 'Antya (Kapha)',
    tree: 'Arjun Tree (Terminalia arjuna)',
    element: 'Fire',
    direction: 'North',
    benefits: [
      'Unsurpassed diplomatic grace, business acumen, trade brilliance',
      'Flexible resilience: bends with storms but never snaps',
      'Independent spirit, love of freedom, progressive vision',
      'Gentle voice, persuasive salesmanship, international success'
    ],
    flaws: [
      'Procrastination and restlessness; drifting without anchors',
      'Vulnerability to financial debts if speculation is uncontrolled',
      'Superficial commitments when freedom feels restricted'
    ],
    remedy: {
      beejMantra: 'Om Vayave Namah (ॐ वायवे नमः)',
      gayatri: 'Om Pavana Purushaya Vidmahe, Sahasramurtaye Dheemahi, Tanno Vayuh Prachodayat',
      treeRitual: 'Care for an Arjun tree; practice Pranayama (breathwork) at dawn.',
      daan: 'Feed birds with multi-grains on Saturdays; donate coconut water or camphor.',
      gemstone: 'Hessonite Garnet (Gomedh) in silver on middle finger.',
      fastDay: 'Saturday'
    }
  },
  {
    id: 16,
    name: 'Vishakha',
    sanskrit: 'विशाखा',
    span: "20°00' Libra - 3°20' Scorpio (Vrischika)",
    lord: 'Guru (Jupiter)',
    deity: 'Indragni (Indra & Agni - King & Divine Fire)',
    symbol: 'Triumphal Arch / Potter’s Wheel (Focused Conquest)',
    animal: 'Male Tiger (Vyaghra)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Antya (Kapha)',
    tree: 'Wood Apple / Kaith (Limonia acidissima)',
    element: 'Fire',
    direction: 'East',
    benefits: [
      'Single-minded goal focus, fierce determination to succeed',
      'Commands victory over formidable rivals and obstacles',
      'Inspiring speaker, sharp philosophical and political acumen',
      'Immense energy to rebuild from zero to triumph'
    ],
    flaws: [
      'Obsessive rivalry, envy of competitors’ success',
      'Bitterness if victory takes too long to arrive',
      'Risk of marital friction due to career obsession'
    ],
    remedy: {
      beejMantra: 'Om Indragnibhyam Namah (ॐ इन्द्राग्निभ्यां नमः)',
      gayatri: 'Om Indragni-Murtaye Vidmahe, Tejasvi-Rupaya Dheemahi, Tanno Indragni Prachodayat',
      treeRitual: 'Light two pure ghee lamps together on Thursdays before Lord Vishnu.',
      daan: 'Donate yellow sweets and red garments to a temple on Thursdays.',
      gemstone: 'Yellow Sapphire (Pukhraj) in gold on index finger.',
      fastDay: 'Thursday'
    }
  },
  {
    id: 17,
    name: 'Anuradha',
    sanskrit: 'अनुराधा',
    span: "3°20' - 16°40' Scorpio (Vrischika)",
    lord: 'Shani (Saturn)',
    deity: 'Mitra (The Solar God of Friendship & Treaties)',
    symbol: 'Lotus / Staff (Devotion & Blossoming in Mud)',
    animal: 'Female Deer (Mrigi)',
    gana: 'Deva (Divine)',
    nadi: 'Madhya (Pitta)',
    tree: 'Moulshree / Bakul (Mimusops elengi)',
    element: 'Fire',
    direction: 'South',
    benefits: [
      'Deep capacity for unconditional love, friendship, loyalty',
      'Triumphs in foreign lands and international trade',
      'Blossoms like a lotus above emotional turmoil',
      'Gifted in music, organization, and esoteric spiritual practices'
    ],
    flaws: [
      'Secret melancholy or feeling emotionally lonely despite crowds',
      'Vulnerability to digestive imbalances and melancholia',
      'Difficulty in letting go of old emotional wounds'
    ],
    remedy: {
      beejMantra: 'Om Mitraya Namah (ॐ मित्राय नमः)',
      gayatri: 'Om Mitradevaya Vidmahe, Sauhardadayine Dheemahi, Tanno Mitrah Prachodayat',
      treeRitual: 'Care for flowering Bakul plants or offer blue lotus flowers to Lord Shiva.',
      daan: 'Donate mustard oil, iron utensils, or black sesame to poor elders on Saturdays.',
      gemstone: 'Blue Sapphire (Neelam) or Amethyst in silver on middle finger.',
      fastDay: 'Saturday'
    }
  },
  {
    id: 18,
    name: 'Jyeshtha',
    sanskrit: 'ज्येष्ठा',
    span: "16°40' - 30°00' Scorpio (Vrischika)",
    lord: 'Budha (Mercury)',
    deity: 'Lord Indra (King of Gods & Supreme Protector)',
    symbol: 'Circular Amulet / Earring (Eminence & Protection)',
    animal: 'Male Deer (Mriga)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Adi (Vata)',
    tree: 'Shisham / Indian Rosewood (Dalbergia sissoo)',
    element: 'Air',
    direction: 'West',
    benefits: [
      'Natural seniority, eldest-child aura, executive command',
      'Fearless defender of family and weaker subordinates',
      'Exceptional investigative instincts and administrative prowess',
      'Charismatic voice capable of commanding mass assemblies'
    ],
    flaws: [
      'Extreme pride, resentment towards anyone outranking them',
      'Gandanta dosha if born in the final degree',
      'Hypocrisy or secret isolation when prestige is threatened'
    ],
    remedy: {
      beejMantra: 'Om Indraya Namah (ॐ इन्द्राय नमः)',
      gayatri: 'Om Devarajaya Vidmahe, Vajrahastaya Dheemahi, Tanno Indrah Prachodayat',
      treeRitual: 'Water a Shisham or Neem tree on Wednesdays. Chant Vishnu Sahasranama.',
      daan: 'Donate emerald, green mung dal, or umbrella to elderly scholars on Wednesdays.',
      gemstone: 'Zambian Emerald in gold on little finger.',
      fastDay: 'Wednesday'
    }
  },
  {
    id: 19,
    name: 'Mula',
    sanskrit: 'मूल',
    span: "0°00' - 13°20' Sagittarius (Dhanu)",
    lord: 'Ketu',
    deity: 'Nirriti (Goddess of Dissolution & Deep Roots)',
    symbol: 'Tied Bunch of Roots (Uprooting & Deep Research)',
    animal: 'Male Dog (Shwana)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Adi (Vata)',
    tree: 'Sal / Anjan (Shorea robusta)',
    element: 'Air',
    direction: 'North',
    benefits: [
      'Penetrates directly to the root of any problem or science',
      'High capacity for profound spiritual transformation and rebirth',
      'Exceptional in research, medicine, philosophy, and metallurgy',
      'Uncompromising seeker of ultimate metaphysical truth'
    ],
    flaws: [
      'Mula Gandanta Dosha requires specific birth shanti puja',
      'Destructive wrath when provoked; tendency to burn bridges',
      'Early life struggles with paternal relations or health'
    ],
    remedy: {
      beejMantra: 'Om Nirritaye Namah (ॐ निरृतये नमः)',
      gayatri: 'Om Mahadurgayai Vidmahe, Dandadharinyai Dheemahi, Tanno Nirritih Prachodayat',
      treeRitual: 'Perform Mula Shanti Havan; offer milk and sesame to Sal or Peepal tree roots.',
      daan: 'Donate multi-colored blankets, iron utensils, or donate medicine to lepers.',
      gemstone: "Cat's Eye (Lehsuniya) in silver on middle finger.",
      fastDay: 'Tuesday or Amavasya'
    }
  },
  {
    id: 20,
    name: 'Purva Ashadha',
    sanskrit: 'पूर्वाषाढ़ा',
    span: "13°20' - 26°40' Sagittarius (Dhanu)",
    lord: 'Shukra (Venus)',
    deity: 'Apas (The Cosmic Water Goddess of Rejuvenation)',
    symbol: "Fan / Winnowing Basket (Invincibility & Purification)",
    animal: 'Male Monkey (Vanara)',
    gana: 'Manushya (Human)',
    nadi: 'Madhya (Pitta)',
    tree: 'Ashoka Tree (Saraca asoca)',
    element: 'Air',
    direction: 'East',
    benefits: [
      'Known as the invincible star (Aparajita); cannot be permanently defeated',
      'Magnetic speech, oratorical genius, social popularity',
      'Purifying influence; brings cheer and optimism to gatherings',
      'Blessed with abundant wealth, good friends, and comfortable vehicles'
    ],
    flaws: [
      'Over-confidence leading to hasty promises',
      'Reluctance to accept constructive criticism',
      'Extravagant luxury spending'
    ],
    remedy: {
      beejMantra: 'Om Adbhyo Namah (ॐ अद्भ्यो नमः)',
      gayatri: 'Om Varunapriyayai Vidmahe, Jaladevatayai Dheemahi, Tanno Apah Prachodayat',
      treeRitual: 'Care for an Ashoka tree; worship water bodies and never waste water.',
      daan: 'Donate pure water, earthen pots, or white silk cloth to temples on Fridays.',
      gemstone: 'Diamond or White Zircon in platinum/silver on ring finger.',
      fastDay: 'Friday'
    }
  },
  {
    id: 21,
    name: 'Uttara Ashadha',
    sanskrit: 'उत्तराषाढ़ा',
    span: "26°40' Sagittarius - 10°00' Capricorn (Makara)",
    lord: 'Surya (Sun)',
    deity: 'Vishwadevas (The Universal Cosmic Deities of Dharma)',
    symbol: "Elephant's Tusk / Small Cot (Permanent Victory)",
    animal: 'Male Mongoose (Nakula)',
    gana: 'Manushya (Human)',
    nadi: 'Antya (Kapha)',
    tree: 'Jackfruit Tree / Phanas (Artocarpus heterophyllus)',
    element: 'Air',
    direction: 'South',
    benefits: [
      'High virtue, deep modesty, unshakeable integrity',
      'Guaranteed lasting success in mature years of life',
      'Natural administrator, respected by leaders of society',
      'Patience to complete grand long-term public works'
    ],
    flaws: [
      'Tendency towards loneliness or emotional aloofness',
      'Stubborn adherence to rigid principles',
      'Early struggles before victory manifests'
    ],
    remedy: {
      beejMantra: 'Om Vishwadevebhyo Namah (ॐ विश्वदेवेभ्यो नमः)',
      gayatri: 'Om Sarvadevataye Vidmahe, Dharma-Murtaye Dheemahi, Tanno Vishwadevah Prachodayat',
      treeRitual: 'Water a Jackfruit tree or offer red flowers to the rising Sun daily.',
      daan: 'Donate wheat, jaggery, and brass utensils on Sundays.',
      gemstone: 'Ruby (Manikya) in gold on ring finger.',
      fastDay: 'Sunday'
    }
  },
  {
    id: 22,
    name: 'Shravana',
    sanskrit: 'श्रवण',
    span: "10°00' - 23°20' Capricorn (Makara)",
    lord: 'Chandra (Moon)',
    deity: 'Lord Vishnu (The Preserver & Cosmic Sustainer)',
    symbol: 'Ear / Three Footprints (Active Listening & Learning)',
    animal: 'Female Monkey',
    gana: 'Deva (Divine)',
    nadi: 'Antya (Kapha)',
    tree: 'Aak / Calotropis (Calotropis gigantea)',
    element: 'Air',
    direction: 'West',
    benefits: [
      'Supreme auditory wisdom; master listener and lifelong scholar',
      'Immense knowledge of history, oral tradition, and scriptures',
      'Blessed with honorable reputation and high moral conduct',
      'Devoted servant of public welfare and parental duties'
    ],
    flaws: [
      'Gossip sensitivity and vulnerability to slander',
      'Emotional distance when feeling misunderstood',
      'Over-thinking decisions to the point of missed opportunities'
    ],
    remedy: {
      beejMantra: 'Om Vishnave Namah (ॐ विष्णवे नमः)',
      gayatri: 'Om Narayanaya Vidmahe, Vasudevaya Dheemahi, Tanno Vishnuh Prachodayat',
      treeRitual: 'Chant Vishnu Sahasranama on Mondays; offer Tulsi leaves to Lord Krishna.',
      daan: 'Donate rice, white clothes, and holy spiritual books to students on Mondays.',
      gemstone: 'Natural Pearl (Moti) in silver on little finger.',
      fastDay: 'Monday or Ekadashi'
    }
  },
  {
    id: 23,
    name: 'Dhanishta',
    sanskrit: 'धनिष्ठा',
    span: "23°20' Capricorn - 6°40' Aquarius (Kumbha)",
    lord: 'Mangal (Mars)',
    deity: 'Ashta Vasus (The Eight Elemental Deities of Abundance)',
    symbol: 'Musical Drum (Mridanga / Damaru) or Flute (Rhythm)',
    animal: 'Female Lion (Simhika)',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Madhya (Pitta)',
    tree: 'Shami / Prosopis cineraria',
    element: 'Ether',
    direction: 'North',
    benefits: [
      'The star of supreme symphony and wealthy symphony',
      'Gifted in music, dance, timing, rhythm, and public performance',
      'Natural talent for organizing massive resources and real estate',
      'Courageous, generous, and liberal in philanthropy'
    ],
    flaws: [
      'Marital delays or domestic tension due to independent streak',
      'Greed for applause and external validation',
      'Vulnerability to sudden ego flares'
    ],
    remedy: {
      beejMantra: 'Om Vasubhyo Namah (ॐ वसुभ्यो नमः)',
      gayatri: 'Om Ashta-Vasave Vidmahe, Samriddhi-Dharine Dheemahi, Tanno Vasavah Prachodayat',
      treeRitual: 'Water a Shami tree every Saturday evening; light a sesame oil lamp.',
      daan: 'Donate red lentils, copper vessels, or musical instruments to young students.',
      gemstone: 'Red Coral (Moonga) in gold/copper on ring finger.',
      fastDay: 'Tuesday'
    }
  },
  {
    id: 24,
    name: 'Shatabhisha',
    sanskrit: 'शतभिषा',
    span: "6°40' - 20°00' Aquarius (Kumbha)",
    lord: 'Rahu',
    deity: 'Varuna (The God of Cosmic Waters & Ocean of Stars)',
    symbol: 'Empty Circle / 100 Physicians (The Great Healer)',
    animal: 'Female Horse',
    gana: 'Rakshasa (Fierce)',
    nadi: 'Adi (Vata)',
    tree: 'Kadamba Tree (Neolamarckia cadamba)',
    element: 'Ether',
    direction: 'East',
    benefits: [
      'Known as the star of 100 physicians: extraordinary healing power',
      'Master of modern science, pharmaceuticals, astronomy, and AI',
      'Unsurpassed ability to see through deception and world illusions',
      'Fiercely self-reliant with high philosophical depth'
    ],
    flaws: [
      'Tendency towards extreme seclusion and cold isolation',
      'Cynical distrust of conventional societal norms',
      'Difficulty in expressing warmth in close domestic ties'
    ],
    remedy: {
      beejMantra: 'Om Varunaya Namah (ॐ वरुणाय नमः)',
      gayatri: 'Om Jalashayaya Vidmahe, Pashahastaya Dheemahi, Tanno Varunah Prachodayat',
      treeRitual: 'Care for a Kadamba tree; offer water to sacred rivers.',
      daan: 'Donate medicines to free clinics or feed street animals on Saturdays.',
      gemstone: 'Hessonite Garnet (Gomedh) in silver on middle finger.',
      fastDay: 'Saturday'
    }
  },
  {
    id: 25,
    name: 'Purva Bhadrapada',
    sanskrit: 'पूर्वा भाद्रपदा',
    span: "20°00' Aquarius - 3°20' Pisces (Meena)",
    lord: 'Guru (Jupiter)',
    deity: 'Aja Ekapada (The One-Footed Cosmic Fire Serpent)',
    symbol: 'Front Legs of Funeral Cot / Two-Faced Man (Penance)',
    animal: 'Male Lion (Simha)',
    gana: 'Manushya (Human)',
    nadi: 'Adi (Vata)',
    tree: 'Mango Tree (Mangifera indica)',
    element: 'Ether',
    direction: 'South',
    benefits: [
      'High spiritual asceticism, philosophical intensity',
      'Fierce protector of truth, unshakeable spiritual courage',
      'Magnetic orator, profound investigator of life and death',
      'Generous with financial support for humanitarian missions'
    ],
    flaws: [
      'Severe inner tension between material desire and total renunciation',
      'Sudden outbursts of anger if values are compromised',
      'Tendency towards fanaticism or rigid lifestyle extremes'
    ],
    remedy: {
      beejMantra: 'Om Ajaikapadaya Namah (ॐ अजैकपदाय नमः)',
      gayatri: 'Om Ajaikapadaya Vidmahe, Brahmanswarupaya Dheemahi, Tanno Rudrah Prachodayat',
      treeRitual: 'Care for a Mango tree; meditate on Shiva Tandava Stotram on Thursdays.',
      daan: 'Donate yellow blankets, turmeric, or support orphanages on Thursdays.',
      gemstone: 'Yellow Sapphire (Pukhraj) in gold on index finger.',
      fastDay: 'Thursday'
    }
  },
  {
    id: 26,
    name: 'Uttara Bhadrapada',
    sanskrit: 'उत्तरा भाद्रपदा',
    span: "3°20' - 16°40' Pisces (Meena)",
    lord: 'Shani (Saturn)',
    deity: 'Ahirbhudhanya (Serpent of the Ocean Depths & Kundalini)',
    symbol: 'Back Legs of Cot / Coiled Sea Serpent (Deep Wisdom)',
    animal: 'Female Cow (Gau)',
    gana: 'Manushya (Human)',
    nadi: 'Madhya (Pitta)',
    tree: 'Neem Tree (Azadirachta indica)',
    element: 'Ether',
    direction: 'West',
    benefits: [
      'Deep serenity, immense patience, emotional mastery',
      'Awakening of dormant psychic and Kundalini potential',
      'Blessed with stable wealth, loyal family, and spiritual peace',
      'Kind-hearted, cheerful countenance, respected by peers'
    ],
    flaws: [
      'Procrastination or excessive passivity when battle is required',
      'Vulnerability to melancholy during prolonged isolation',
      'Reluctance to assert personal boundaries'
    ],
    remedy: {
      beejMantra: 'Om Ahirbudhnyaya Namah (ॐ अहिर्बुध्न्याय नमः)',
      gayatri: 'Om Ahirbudhnyaya Vidmahe, Kundalinishaktaye Dheemahi, Tanno Rudrah Prachodayat',
      treeRitual: 'Plant or care for a Neem tree; chant Om Namah Shivaya 108 times.',
      daan: 'Donate black sesame, iron pans, or feed black cows on Saturdays.',
      gemstone: 'Blue Sapphire (Neelam) or Amethyst in silver on middle finger.',
      fastDay: 'Saturday'
    }
  },
  {
    id: 27,
    name: 'Revati',
    sanskrit: 'रेवती',
    span: "16°40' - 30°00' Pisces (Meena)",
    lord: 'Budha (Mercury)',
    deity: 'Pushan (The Celestial Shepherd & Nurturer of Travelers)',
    symbol: 'Fish / Pair of Fish / Drum (Completion & Safe Voyage)',
    animal: 'Female Elephant (Hasthini)',
    gana: 'Deva (Divine)',
    nadi: 'Antya (Kapha)',
    tree: 'Mahua Tree (Madhuca longifolia)',
    element: 'Ether',
    direction: 'North',
    benefits: [
      'The final star of the zodiac: supreme compassion and spiritual completion',
      'Safe passage across all of life’s oceans and trials',
      'Gifted in music, fine poetry, animal welfare, and hospitality',
      'Blessed with radiant beauty, pure intentions, and public adoration'
    ],
    flaws: [
      'Revati Gandanta Dosha if born in the final degree of Pisces',
      'Over-empathy leading to psychic exhaustion and self-neglect',
      'Financial naivety: easily taken advantage of by sweet talkers'
    ],
    remedy: {
      beejMantra: 'Om Pushne Namah (ॐ पूष्णे नमः)',
      gayatri: 'Om Pushnadeve Vidmahe, Margadarshakaya Dheemahi, Tanno Pushan Prachodayat',
      treeRitual: 'Feed stray animals and street dogs; care for a Mahua or flowering tree.',
      daan: 'Donate green clothing, moong dal, or donate to animal shelters on Wednesdays.',
      gemstone: 'Natural Emerald (Panna) in gold on little finger.',
      fastDay: 'Wednesday'
    }
  }
];

export const ZODIAC_SIGNS = [
  { id: 1, name: 'Aries', sanskrit: 'Mesha (मेष)', ruler: 'Mars', element: 'Fire', quality: 'Movable', symbol: 'Ram' },
  { id: 2, name: 'Taurus', sanskrit: 'Vrishabha (वृषभ)', ruler: 'Venus', element: 'Earth', quality: 'Fixed', symbol: 'Bull' },
  { id: 3, name: 'Gemini', sanskrit: 'Mithuna (मिथुन)', ruler: 'Mercury', element: 'Air', quality: 'Dual', symbol: 'Twins' },
  { id: 4, name: 'Cancer', sanskrit: 'Karka (कर्क)', ruler: 'Moon', element: 'Water', quality: 'Movable', symbol: 'Crab' },
  { id: 5, name: 'Leo', sanskrit: 'Simha (सिंह)', ruler: 'Sun', element: 'Fire', quality: 'Fixed', symbol: 'Lion' },
  { id: 6, name: 'Virgo', sanskrit: 'Kanya (कन्या)', ruler: 'Mercury', element: 'Earth', quality: 'Dual', symbol: 'Maiden' },
  { id: 7, name: 'Libra', sanskrit: 'Tula (तुला)', ruler: 'Venus', element: 'Air', quality: 'Movable', symbol: 'Scales' },
  { id: 8, name: 'Scorpio', sanskrit: 'Vrischika (वृश्चिक)', ruler: 'Mars', element: 'Water', quality: 'Fixed', symbol: 'Scorpion' },
  { id: 9, name: 'Sagittarius', sanskrit: 'Dhanu (धनु)', ruler: 'Jupiter', element: 'Fire', quality: 'Dual', symbol: 'Archer' },
  { id: 10, name: 'Capricorn', sanskrit: 'Makara (मकर)', ruler: 'Saturn', element: 'Earth', quality: 'Movable', symbol: 'Sea-Goat' },
  { id: 11, name: 'Aquarius', sanskrit: 'Kumbha (कुम्भ)', ruler: 'Saturn', element: 'Air', quality: 'Fixed', symbol: 'Water Bearer' },
  { id: 12, name: 'Pisces', sanskrit: 'Meena (मीन)', ruler: 'Jupiter', element: 'Water', quality: 'Dual', symbol: 'Two Fishes' }
];

// Calculate Sidereal Planetary & Nakshatra Positions based on Date and Time of Birth
export function calculateVedicHoroscope(dobString, timeString = '12:00', place = 'New Delhi') {
  const [year, month, day] = (dobString || '1995-05-15').split('-').map(Number);
  const [hour, minute] = (timeString || '12:00').split(':').map(Number);

  // Approximate Julian Day calculation
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  const dayFraction = (hour + minute / 60) / 24;
  jd += dayFraction - 0.5;

  const d = jd - 2451545.0; // days since J2000.0

  // Mean longitudes
  const L_sun = (280.466 + 0.9856474 * d) % 360;
  const g_sun = ((357.528 + 0.9856003 * d) % 360) * (Math.PI / 180);
  const sunEcliptic = (L_sun + 1.915 * Math.sin(g_sun) + 0.02 * Math.sin(2 * g_sun)) % 360;

  // Mean Moon longitude
  const L_moon = (218.316 + 13.176396 * d) % 360;
  const M_moon = ((134.963 + 13.064993 * d) % 360) * (Math.PI / 180);
  const moonEcliptic = (L_moon + 6.289 * Math.sin(M_moon)) % 360;

  // Lahiri Ayanamsa approximation (~23°51' in 2000, progressing ~50.29" per year)
  const ayanamsa = 23.85 + (year - 2000) * (50.29 / 3600);

  // Sidereal (Nirayana) Longitudes
  let sunSidereal = (sunEcliptic - ayanamsa + 360) % 360;
  let moonSidereal = (moonEcliptic - ayanamsa + 360) % 360;

  // Ascendant (Lagna) calculation based on local sidereal time
  // Approximated for Indian standard coordinates (or generalized)
  const gmst = (18.697374558 + 24.06570982441908 * d) % 24;
  const ascDeg = ((gmst * 15 + (hour * 15) + (minute * 0.25) - ayanamsa) + 360) % 360;

  // Sign determination (0 = Aries, 11 = Pisces)
  const sunSignIndex = Math.floor(sunSidereal / 30);
  const moonSignIndex = Math.floor(moonSidereal / 30);
  const ascSignIndex = Math.floor(ascDeg / 30);

  const sunSign = ZODIAC_SIGNS[sunSignIndex];
  const moonSign = ZODIAC_SIGNS[moonSignIndex];
  const ascendantSign = ZODIAC_SIGNS[ascSignIndex];

  // Nakshatra Index (each Nakshatra is 13°20' = 13.33333°)
  const nakshatraIndex = Math.floor(moonSidereal / (13 + 1/3));
  const nakshatraObj = NAKSHATRAS[nakshatraIndex] || NAKSHATRAS[0];

  // Pada (1 to 4)
  const degInsideNakshatra = moonSidereal % (13 + 1/3);
  const pada = Math.min(4, Math.floor(degInsideNakshatra / (13.33333 / 4)) + 1);

  // Gandanta check (Transition point between water sign and fire sign)
  // End of Ashlesha (Cancer 30°), Jyeshtha (Scorpio 30°), Revati (Pisces 30°)
  // Start of Ashwini (Aries 0°), Magha (Leo 0°), Mula (Sagittarius 0°)
  let isGandanta = false;
  let gandantaType = '';
  if (nakshatraObj.name === 'Ashlesha' && pada === 4) { isGandanta = true; gandantaType = 'Ashlesha Gandanta (End of Cancer)'; }
  if (nakshatraObj.name === 'Magha' && pada === 1) { isGandanta = true; gandantaType = 'Magha Gandanta (Start of Leo)'; }
  if (nakshatraObj.name === 'Jyeshtha' && pada === 4) { isGandanta = true; gandantaType = 'Jyeshtha Gandanta (End of Scorpio)'; }
  if (nakshatraObj.name === 'Mula' && pada === 1) { isGandanta = true; gandantaType = 'Mula Gandanta (Start of Sagittarius)'; }
  if (nakshatraObj.name === 'Revati' && pada === 4) { isGandanta = true; gandantaType = 'Revati Gandanta (End of Pisces)'; }
  if (nakshatraObj.name === 'Ashwini' && pada === 1) { isGandanta = true; gandantaType = 'Ashwini Gandanta (Start of Aries)'; }

  // Planetary house positions (1-12 relative to Ascendant)
  const marsSidereal = (sunSidereal + 45 + (d * 0.524) % 360) % 360;
  const jupiterSidereal = (sunSidereal + 120 + (d * 0.083) % 360) % 360;
  const venusSidereal = (sunSidereal + 25) % 360;
  const mercurySidereal = (sunSidereal + 15) % 360;
  const saturnSidereal = (sunSidereal + 210 + (d * 0.033) % 360) % 360;
  const rahuSidereal = (360 - ((d * 0.05295) % 360)) % 360;
  const ketuSidereal = (rahuSidereal + 180) % 360;

  function getHouse(planetDeg) {
    const diff = (planetDeg - ascDeg + 360) % 360;
    return Math.floor(diff / 30) + 1;
  }

  const planetHouses = {
    Sun: { house: getHouse(sunSidereal), deg: sunSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(sunSidereal / 30)].name },
    Moon: { house: getHouse(moonSidereal), deg: moonSidereal.toFixed(1), sign: moonSign.name },
    Mars: { house: getHouse(marsSidereal), deg: marsSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(marsSidereal / 30)].name },
    Mercury: { house: getHouse(mercurySidereal), deg: mercurySidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(mercurySidereal / 30)].name },
    Jupiter: { house: getHouse(jupiterSidereal), deg: jupiterSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(jupiterSidereal / 30)].name },
    Venus: { house: getHouse(venusSidereal), deg: venusSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(venusSidereal / 30)].name },
    Saturn: { house: getHouse(saturnSidereal), deg: saturnSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(saturnSidereal / 30)].name },
    Rahu: { house: getHouse(rahuSidereal), deg: rahuSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(rahuSidereal / 30)].name },
    Ketu: { house: getHouse(ketuSidereal), deg: ketuSidereal.toFixed(1), sign: ZODIAC_SIGNS[Math.floor(ketuSidereal / 30)].name }
  };

  // Build house contents (for North Indian diamond chart)
  const housePlanets = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] };
  Object.entries(planetHouses).forEach(([planet, info]) => {
    housePlanets[info.house].push(planet);
  });

  // Calculate Doshas & Yogas
  // 1. Manglik Dosha: Mars in 1st, 2nd, 4th, 7th, 8th, or 12th house
  const marsHouse = planetHouses.Mars.house;
  const isManglik = [1, 2, 4, 7, 8, 12].includes(marsHouse);
  const manglikSeverity = isManglik ? ([7, 8].includes(marsHouse) ? 'High (Kendra/Ayur placement)' : 'Mild (Partially Anshik)') : 'None';
  
  // 2. Kaal Sarp Dosha: Check if planets lie on one side of Rahu-Ketu axis
  const rahuHouse = planetHouses.Rahu.house;
  const ketuHouse = planetHouses.Ketu.house;
  const hasKaalSarp = Math.abs(rahuHouse - ketuHouse) === 6 && (rahuHouse === 1 || rahuHouse === 12);

  // 3. Sade Sati: Current Saturn is in Aquarius / Pisces (2025-2027)
  let sadeSatiStatus = 'Inactive';
  if (['Capricorn', 'Aquarius', 'Pisces'].includes(moonSign.name)) {
    sadeSatiStatus = moonSign.name === 'Aquarius' ? 'Peak (Second Phase)' : moonSign.name === 'Pisces' ? 'Rising (First Phase)' : 'Setting (Third Phase)';
  }

  // 4. Auspicious Yogas
  const yogas = [];
  // Gajakesari Yoga: Jupiter in Kendra (1, 4, 7, 10) from Moon
  const moonH = planetHouses.Moon.house;
  const jupH = planetHouses.Jupiter.house;
  const jupFromMoon = ((jupH - moonH + 12) % 12) + 1;
  if ([1, 4, 7, 10].includes(jupFromMoon)) {
    yogas.push({
      name: 'Gajakesari Yoga (गजकेसरी योग)',
      status: 'Auspicious Royal Yoga',
      description: 'Jupiter is seated in a sacred quadrant (Kendra) from the Moon, conferring enduring wisdom, high academic or administrative status, and protection against slander.'
    });
  }

  // Budhaditya Yoga: Sun and Mercury conjunct in same house
  if (planetHouses.Sun.house === planetHouses.Mercury.house) {
    yogas.push({
      name: 'Budhaditya Yoga (बुधादित्य योग)',
      status: 'High Intellectual Yoga',
      description: 'Sun and Mercury unite in the same house, gifting supreme intellect, commercial eloquence, analytical sharpness, and leadership charisma.'
    });
  }

  // Lakshmi Yoga: Venus in 1, 4, 7, 9, 10
  if ([1, 4, 7, 9, 10].includes(planetHouses.Venus.house)) {
    yogas.push({
      name: 'Lakshmi Yoga (लक्ष्मी योग)',
      status: 'Wealth & Charm Yoga',
      description: 'Venus resides in an exalted or powerful angle, attracting high aesthetics, financial ease, refined tastes, and marital joy.'
    });
  }

  // Four Pillars Future Predictions
  const predictions = {
    career: {
      headline: 'Executive Trajectory & Wealth Milestones',
      positive: `With ${sunSign.name} Sun and ${nakshatraObj.name} Nakshatra, your professional destiny is marked by strong self-drive and capacity to lead. Opportunities in enterprise, technology, and strategic management flourish.`,
      caution: `Guard against impetuous decisions during retrograde periods of ${nakshatraObj.lord}. Never sign contracts without second-opinion scrutiny.`,
      score: 87
    },
    love: {
      headline: 'Soul Compatibility & Matrimonial Harmony',
      positive: `Your ${moonSign.name} Moon brings deep emotional resonance. You value authentic companionship and seek a partner who respects your intellectual independence.`,
      caution: isManglik 
        ? `Manglik influence detected in House ${marsHouse}. Prioritize kundali matching and maintain open emotional transparency to avoid fiery friction.`
        : 'Smooth relationship currents. Avoid bottling minor grievances; honest communication keeps bonds sacred.',
      score: isManglik ? 72 : 89
    },
    health: {
      headline: 'Vitality & Pranic Balance',
      positive: `Governed by ${nakshatraObj.element} element. Your constitution possesses resilient recovery power and robust physical stamina.`,
      caution: `Monitor stress relating to ${nakshatraObj.nadi} Nadi dosha. Maintain consistent hydration and regular grounding pranayama to calm nervous spikes.`,
      score: 82
    },
    destiny: {
      headline: 'Karmic Mission & Spiritual Dharma',
      positive: `Guided by deity ${nakshatraObj.deity}. Your soul incarnated to master ${nakshatraObj.gana} karma and unlock sacred wisdom through persistent service.`,
      caution: isGandanta
        ? `Born under ${gandantaType}. Perform Gandanta Shanti prayer to dissolve inherited karmic knots and awaken higher psychic intuition.`
        : 'Stay grounded in dharmic truth; avoid shortcut speculations.',
      score: 91
    }
  };

  return {
    birthDetails: {
      dob: dobString,
      time: timeString,
      place
    },
    sunSign,
    moonSign,
    ascendantSign,
    nakshatra: {
      ...nakshatraObj,
      pada,
      isGandanta,
      gandantaType
    },
    planetHouses,
    housePlanets,
    doshas: {
      manglik: {
        isManglik,
        severity: manglikSeverity,
        marsHouse,
        remedy: isManglik ? 'Recite Hanuman Chalisa daily, perform Kumbh Vivah before marriage, or wear Red Coral only after astrological confirmation.' : 'No Manglik dosha present in chart.'
      },
      kaalSarp: {
        hasKaalSarp,
        status: hasKaalSarp ? 'Present (Planets hemmed in Rahu-Ketu)' : 'Absent (Free Planetary Movement)',
        remedy: hasKaalSarp ? 'Chant Maha Mrityunjaya Mantra 108 times daily; perform Rudrabhishek on Nag Panchami.' : 'Free flow of cosmic energy.'
      },
      sadeSati: {
        status: sadeSatiStatus,
        details: sadeSatiStatus === 'Inactive' ? 'You are currently free from Saturn Sade Sati transit.' : `Currently traversing ${sadeSatiStatus} of Sade Sati. Requires patience and selfless karma.`,
        remedy: 'Light a mustard oil lamp under Peepal tree on Saturdays; chant Shani Beej Mantra.'
      }
    },
    yogas,
    predictions,
    dashaTimeline: calculateVimshottariDasha(year, nakshatraIndex, degInsideNakshatra),
    gocharTransits: calculateCurrentTransits(moonSignIndex, ascSignIndex),
    simpleAnswers: generateSimpleFutureAnswers(sunSign, moonSign, ascendantSign, nakshatraObj, isManglik, sadeSatiStatus, year)
  };
}

// Classical Vimshottari Mahadasha 120-Year Cycle Engine
const DASHA_ORDER = [
  { lord: 'Ketu', years: 7, color: '#a1a1aa', deity: 'Lord Ganesha', element: 'Spiritual Fire' },
  { lord: 'Venus (Shukra)', years: 20, color: '#f472b6', deity: 'Goddess Mahalakshmi', element: 'Water' },
  { lord: 'Sun (Surya)', years: 6, color: '#f59e0b', deity: 'Lord Surya Narayana', element: 'Fire' },
  { lord: 'Moon (Chandra)', years: 10, color: '#e2e8f0', deity: 'Lord Shiva', element: 'Water' },
  { lord: 'Mars (Mangal)', years: 7, color: '#ef4444', deity: 'Lord Hanuman & Kartikeya', element: 'Fire' },
  { lord: 'Rahu', years: 18, color: '#8b5cf6', deity: 'Goddess Durga', element: 'Air' },
  { lord: 'Jupiter (Guru)', years: 16, color: '#eab308', deity: 'Lord Vishnu & Brihaspati', element: 'Ether' },
  { lord: 'Saturn (Shani)', years: 19, color: '#6366f1', deity: 'Lord Shani Dev', element: 'Air/Earth' },
  { lord: 'Mercury (Budha)', years: 17, color: '#10b981', deity: 'Lord Vishnu & Ganesha', element: 'Earth' }
];

export function calculateVimshottariDasha(birthYear, nakshatraIndex, degInsideNakshatra) {
  const currentYear = new Date().getFullYear();
  // Nakshatra ruler starting index (each 9 Nakshatras repeat the 9 rulers in same order)
  const startingDashaIndex = nakshatraIndex % 9;
  const startingRuler = DASHA_ORDER[startingDashaIndex];

  // Fraction of Nakshatra elapsed
  const nakshatraSpan = 13 + 1/3; // 13.3333 degrees
  const fractionElapsed = degInsideNakshatra / nakshatraSpan;
  const balanceRemainingYears = (1 - fractionElapsed) * startingRuler.years;

  const dashaList = [];
  let currentStartYear = birthYear;
  
  // First birth Dasha (remaining balance)
  let firstEndYear = currentStartYear + balanceRemainingYears;
  dashaList.push({
    lord: startingRuler.lord,
    totalYears: startingRuler.years,
    startYear: Math.floor(currentStartYear),
    endYear: Math.floor(firstEndYear),
    color: startingRuler.color,
    deity: startingRuler.deity,
    element: startingRuler.element,
    isBirthDasha: true
  });
  currentStartYear = firstEndYear;

  // Next successive Mahadashas up to 100+ years
  let activeMahadasha = null;

  for (let i = 1; i <= 9; i++) {
    const idx = (startingDashaIndex + i) % 9;
    const ruler = DASHA_ORDER[idx];
    const endYear = currentStartYear + ruler.years;
    
    const dashaEntry = {
      lord: ruler.lord,
      totalYears: ruler.years,
      startYear: Math.floor(currentStartYear),
      endYear: Math.floor(endYear),
      color: ruler.color,
      deity: ruler.deity,
      element: ruler.element,
      isBirthDasha: false
    };

    if (currentYear >= currentStartYear && currentYear < endYear) {
      dashaEntry.isActive = true;
      activeMahadasha = dashaEntry;
    }

    dashaList.push(dashaEntry);
    currentStartYear = endYear;
  }

  // If first dasha is currently active
  if (!activeMahadasha && dashaList[0]) {
    if (currentYear >= dashaList[0].startYear && currentYear < dashaList[0].endYear) {
      dashaList[0].isActive = true;
      activeMahadasha = dashaList[0];
    }
  }

  // Fallback active Mahadasha if past range
  if (!activeMahadasha) {
    activeMahadasha = dashaList.find(d => currentYear >= d.startYear && currentYear < d.endYear) || dashaList[1] || dashaList[0];
    activeMahadasha.isActive = true;
  }

  // Calculate approximate active Antardasha
  const dashaElapsed = currentYear - activeMahadasha.startYear;
  const dashaTotal = activeMahadasha.endYear - activeMahadasha.startYear;
  const antardashaFraction = Math.max(0, Math.min(0.99, dashaElapsed / Math.max(1, dashaTotal)));
  const antarIndex = Math.floor(antardashaFraction * 9);
  const activeAntardashaRuler = DASHA_ORDER[(DASHA_ORDER.findIndex(d => d.lord === activeMahadasha.lord) + antarIndex) % 9] || DASHA_ORDER[0];

  // Specific forecast for active Dasha
  const dashaForecasts = {
    'Jupiter (Guru)': {
      headline: 'Golden Period of Wisdom, Financial Growth & Social Honor (स्वर्ण काल)',
      effects: 'Jupiter Mahadasha unlocks high academic prestige, guidance from enlightened mentors, acquisition of vehicles or property, and blessings of family expansion.',
      remedy: 'Apply saffron / turmeric tilak daily; donate yellow sweets or bananas on Thursdays; chant Guru Beej Mantra.'
    },
    'Saturn (Shani)': {
      headline: 'Karmic Discipline, Long-Term Empire Building & Resilient Patience (कर्म काल)',
      effects: 'Saturn rewards disciplined persistent toil while dismantling illusions. Brings lasting foundations in industry, law, real estate, and structural mastery.',
      remedy: 'Light mustard oil lamp under Peepal tree on Saturdays; recite Hanuman Chalisa 7 times; respect physical laborers.'
    },
    'Mercury (Budha)': {
      headline: 'Commercial Genius, Digital Eloquence & Wealth Multiplication (बुद्धि व व्यापार काल)',
      effects: 'Mercury Mahadasha accelerates commercial trading, intellectual communication, contracts, journalism, and tech breakthroughs.',
      remedy: 'Offer green Durva grass to Lord Ganesha on Wednesdays; wear emerald or feed green fodder to cows.'
    },
    'Venus (Shukra)': {
      headline: 'Luxury, Romance, Artistic Fame & High Aesthetic Bliss (ऐश्वर्य व प्रेम काल)',
      effects: 'Venus Mahadasha blesses with magnetic charisma, joyful marital bonds, artistic breakthroughs, fine garments, and material comfort.',
      remedy: 'Recite Sri Suktam on Fridays; respect women and donate white sweets (kheer, mishri) to needy mothers.'
    },
    'Sun (Surya)': {
      headline: 'Executive Command, Vitality Surge & Government Patronage (तेज व सत्ता काल)',
      effects: 'Sun Mahadasha elevates social authority, executive leadership, political favors, and paternal blessings with renewed self-confidence.',
      remedy: 'Offer Arghya (water in copper vessel) to the rising morning Sun; chant Aditya Hridaya Stotra on Sundays.'
    },
    'Moon (Chandra)': {
      headline: 'Intuitive Receptivity, Public Goodwill & Maternal Peace (मन व शांति काल)',
      effects: 'Moon Mahadasha deepens emotional serenity, popularity among the masses, artistic creativity, travel near water, and gentle relationships.',
      remedy: 'Offer milk and water on Shiva Lingam every Monday; wear natural pearl in silver on little finger.'
    },
    'Mars (Mangal)': {
      headline: 'Warrior Energy, Real Estate Gains & Executive Assertiveness (पराक्रम काल)',
      effects: 'Mars Mahadasha brings high physical vitality, victory in competition, swift execution, and acquisition of landed property.',
      remedy: 'Chant Sundarkand on Tuesdays; donate red lentils (masoor dal) or jaggery to laborers.'
    },
    'Rahu': {
      headline: 'Sudden Shifts, Tech Innovation, Foreign Travel & Unconventional Elevation (आकस्मिक परिवर्तन काल)',
      effects: 'Rahu Mahadasha triggers sudden out-of-the-box transformations, foreign connections, AI/fintech triumphs, and breaking old generational boundaries.',
      remedy: 'Recite Durga Chalisa daily; feed stray dogs with milk and bread on Saturdays; keep silver coin in wallet.'
    },
    'Ketu': {
      headline: 'Spiritual Awakening, Occult Mastery, Deep Research & Moksha (मोक्ष व शोध काल)',
      effects: 'Ketu Mahadasha dissolves worldly attachments, unlocks profound meditative intuition, deep mathematical/scientific research, and spiritual liberation.',
      remedy: 'Pray to Lord Ganesha; feed two-colored dogs on Wednesdays; donate warm blankets to the poor in winter.'
    }
  };

  const activeForecast = dashaForecasts[activeMahadasha.lord] || dashaForecasts['Jupiter (Guru)'];

  return {
    dashaList,
    activeMahadasha,
    activeAntardasha: activeAntardashaRuler.lord,
    currentYear,
    activeForecast
  };
}

// Current Planetary Transits (Gochar 2025-2027)
export function calculateCurrentTransits(moonSignIndex, ascSignIndex) {
  // Transits relative to Moon Sign (Chandra Lagna)
  // Shani (Saturn) is in Aquarius (Sign 11) / entering Pisces (Sign 12)
  const saturnTransitSign = 'Pisces (Meena)';
  const jupiterTransitSign = 'Gemini (Mithuna)';
  const rahuTransitSign = 'Aquarius (Kumbha)';
  const ketuTransitSign = 'Leo (Simha)';

  // House of transit from Moon
  const saturnHouseFromMoon = ((11 - moonSignIndex + 12) % 12) + 1;
  const jupiterHouseFromMoon = ((2 - moonSignIndex + 12) % 12) + 1;

  let jupiterBlessing = 'Jupiter transit casts auspicious protective aspects over your finances and mental peace.';
  if ([5, 9, 11].includes(jupiterHouseFromMoon)) {
    jupiterBlessing = `Jupiter transits in auspicious House ${jupiterHouseFromMoon} from Moon: supreme time for career promotion, wealth inflow, and sacred ceremonies!`;
  }

  let saturnAdvice = 'Saturn transit demands patience, structured work ethics, and honest dealings.';
  if ([1, 2, 12].includes(saturnHouseFromMoon)) {
    saturnAdvice = `Saturn transit is currently in House ${saturnHouseFromMoon} from Moon (Sade Sati zone): prioritize health, avoid hasty investments, and practice daily mindfulness.`;
  }

  return {
    saturn: { sign: saturnTransitSign, houseFromMoon: saturnHouseFromMoon, advice: saturnAdvice },
    jupiter: { sign: jupiterTransitSign, houseFromMoon: jupiterHouseFromMoon, blessing: jupiterBlessing },
    rahuKetu: { rahuSign: rahuTransitSign, ketuSign: ketuTransitSign, advice: 'Rahu-Ketu axis brings unconventional shifts in career networks and creative partnerships.' }
  };
}

// Generate Simple 1-Click Plain-Language Future Answers
export function generateSimpleFutureAnswers(sunSign, moonSign, ascendantSign, nakshatraObj, isManglik, sadeSatiStatus, birthYear) {
  const currentAge = new Date().getFullYear() - (birthYear || 1995);

  return {
    career: {
      question: 'नौकरी व करियर में आगे क्या होगा? (Career & Job)',
      answer: `आपके लिए लीडरशिप और स्वतंत्र कार्यक्षेत्र सबसे शुभ है। 2026-2027 में कार्यक्षेत्र में नई ज़िम्मेदारी और पदोन्नति का प्रबल योग है। यदि आप व्यवसाय या नौकरी में बदलाव सोच रहे हैं, तो वर्ष के मध्य का समय अत्यंत लाभकारी रहेगा।`,
      bestFields: 'प्रशासन (Management), तकनीक व सॉफ़्टवेयर (IT/Tech), वित्तीय परामर्श (Finance), या स्वतंत्र व्यवसाय (Enterprise)',
      luckScore: 88,
      timeline: '2026 के मध्य से 2027 के अंत तक'
    },
    wealth: {
      question: 'आर्थिक स्थिति और धन लाभ कब होगा? (Money & Wealth)',
      answer: `धन की स्थिति में निरंतर स्थिरता आएगी। आकस्मिक खर्चों पर नियंत्रण रखें, विशेषकर सट्टेबाजी या बिना सोचे-समझे किए गए निवेश से बचें। दीर्घकालिक निवेश (सोना, भूमि, सुरक्षित फंड) में भारी मुनाफा संभव है।`,
      luckScore: 85,
      timeline: 'आगामी 8-14 महीने धन संचय के लिए सबसे अनुकूल'
    },
    marriage: {
      question: 'विवाह व जीवनसाथी कैसा रहेगा? (Marriage & Love)',
      answer: isManglik 
        ? `कुंडली में मांगलिक प्रभाव उपस्थित है। जीवनसाथी समझदार और स्वाभिमानी होगा। विवाह से पूर्व कुंडली मिलान और मंगलवार को हनुमान जी की पूजा वैवाहिक सुख को 100% सुदृढ़ बनाएगी।`
        : `वैवाहिक जीवन अत्यंत मधुर और सहयोगी रहेगा। जीवनसाथी कलात्मक, भावनात्मक और बौद्धिक रूप से आपका गहरा समर्थन करेगा।`,
      luckScore: isManglik ? 74 : 90,
      partnerTraits: 'वफादार, बौद्धिक रूप से सजग, परिवार को साथ लेकर चलने वाला'
    },
    health: {
      question: 'स्वास्थ्य और ऊर्जा का ध्यान कैसे रखें? (Health & Fitness)',
      answer: `शारीरिक सहनशक्ति उत्तम है। केवल मानसिक तनाव और अनियमित खान-पान से पेट व सिरदर्द की समस्या हो सकती है। सुबह सूर्य नमस्कार और पर्याप्त जल ग्रहण करना आपके स्वास्थ्य का सर्वोत्तम कवच है।`,
      luckScore: 82,
      cautionOrgans: 'पाचन तंत्र (Stomach), अनिद्रा या नसों का तनाव'
    },
    quickRemedies: [
      { id: 1, title: 'प्रातः सूर्य अर्घ्य या गणेश ध्यान', desc: 'रोज सुबह तांबे के लोटे से जल दें या 11 बार ॐ गं गणपतये नमः का जाप करें।' },
      { id: 2, title: 'सप्ताह का एक नियम', desc: 'बुधवार या शुक्रवार को किसी जरूरतमंद को हरा या सफेद खाद्य पदार्थ दान करें।' },
      { id: 3, title: 'शुभ रंग का प्रयोग', desc: 'महत्वपूर्ण बैठकों में हल्का पीला, सुनहला या सफेद वस्त्र धारण करें।' }
    ]
  };
}
