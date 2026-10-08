import React, { useState } from 'react';
import { Sparkles, Eye, Award, CheckCircle, Info, Hand, Compass, Flame } from 'lucide-react';

const PALM_LINES = [
  {
    id: 'life',
    name: 'Jeevan Rekha (जीवन रेखा - Life Line)',
    sanskrit: 'आयुष्या रेखा',
    significance: 'Physical vitality, life span, resilience, major life transformations and immune vitality.',
    goodSigns: 'Long, deep, unbroken, curving gracefully around the Venus mount (thumb base).',
    flaws: 'Islands (mental/physical fatigue), cross breaks (temporary health pauses).',
    remedy: 'Chant Maha Mrityunjaya Mantra; drink water in copper vessel at sunrise; do daily pranayama.',
    strokeColor: '#10b981'
  },
  {
    id: 'head',
    name: 'Mastishk Rekha (मस्तिष्क रेखा - Head Line)',
    sanskrit: 'मातृ/मेधा रेखा',
    significance: 'Intellect, psychological poise, memory retention, focus, and philosophical mindset.',
    goodSigns: 'Clear, gently curving towards the Moon mount; sharp fork at the end (writer/diplomat fork).',
    flaws: 'Drooping steeply or fragmented (overthinking, anxiety, mood turbulence).',
    remedy: 'Practice Trataka (candle gazing meditation); consume soaked almonds and brahmi; pray to Goddess Saraswati.',
    strokeColor: '#38bdf8'
  },
  {
    id: 'heart',
    name: 'Hridaya Rekha (हृदय रेखा - Heart Line)',
    sanskrit: 'आयु/हृदय रेखा',
    significance: 'Emotional maturity, love relationships, compassion, generosity, and cardiovascular wellness.',
    goodSigns: 'Terminates under the Jupiter mount with a trident (Shiva Trishul) — promises lifelong marital loyalty.',
    flaws: 'Chained links, descending branches (heartbreak sensitivity, over-trusting unworthy partners).',
    remedy: 'Wear silver ring; offer water on Shiva Lingam on Mondays; practice heart chakra (Anahata) meditation.',
    strokeColor: '#f43f5e'
  },
  {
    id: 'fate',
    name: 'Bhagya Rekha (भाग्य रेखा - Fate / Saturn Line)',
    sanskrit: 'शनि रेखा / उर्ध्व रेखा',
    significance: 'Career trajectory, sudden wealth, self-made entrepreneurship versus inherited assets.',
    goodSigns: 'Rising straight from wrist/Moon mount to Saturn mount below middle finger without breaks.',
    flaws: 'Starting late (success after age 28-32), stops at head line (career pause due to wrong decision).',
    remedy: 'Light mustard oil lamp under Peepal tree on Saturdays; respect laborers; avoid intoxicants.',
    strokeColor: '#fbbf24'
  },
  {
    id: 'sun',
    name: 'Surya Rekha (सूर्य रेखा - Sun / Fame Line)',
    sanskrit: 'विद्या व कीर्ति रेखा',
    significance: 'Government favors, fame, artistic genius, social reputation, and executive prestige.',
    goodSigns: 'Present alongside fate line ascending towards ring finger; brings sudden public acclaim.',
    flaws: 'Absent or faint (hard work with delayed public applause).',
    remedy: 'Offer Arghya to the rising Sun daily; chant Gayatri Mantra 108 times.',
    strokeColor: '#f59e0b'
  },
  {
    id: 'money_triangle',
    name: 'Dhan Kuber Trikon (धन त्रिकोण - Money Triangle)',
    sanskrit: 'कुबेर कोष त्रिकोण',
    significance: 'Formed by the union of Head Line, Fate Line, and Mercury Line. Symbolizes wealth retention.',
    goodSigns: 'Completely closed, leak-free triangle in the palm center; guarantees accumulating millions in assets.',
    flaws: 'Gaps at the bottom (money comes easily but leaks out in sudden uncalculated expenses).',
    remedy: 'Keep a silver square token in wallet; place Kuber Yantra in North direction; avoid impulsive online shopping.',
    strokeColor: '#a855f7'
  }
];

const FOREHEAD_LINES = [
  { line: '1. शनि रेखा (Saturn Line - Top)', meaning: 'Longevity, serious philosophical depth, disciplined asceticism.' },
  { line: '2. गुरु रेखा (Jupiter Line)', meaning: 'Knowledge, academic leadership, religious righteousness, mentoring.' },
  { line: '3. मंगल रेखा (Mars Line)', meaning: 'Courage, defense, sports, physical valor, leadership in crisis.' },
  { line: '4. सूर्य रेखा (Sun Line - Middle)', meaning: 'Regal status, self-confidence, wealth, fame, royal favors.' },
  { line: '5. शुक्र रेखा (Venus Line)', meaning: 'Love of luxury, magnetic charm, artistic flair, romantic bliss.' },
  { line: '6. बुध रेखा (Mercury Line)', meaning: 'Sharp communication, business transactions, wit, intelligence.' },
  { line: '7. चंद्र रेखा (Moon Line - Above Brow)', meaning: 'Intuition, travel, artistic imagination, emotional sensitivity.' }
];

export default function PalmistryPanel() {
  const [selectedLine, setSelectedLine] = useState(PALM_LINES[0]);
  const [activeSubTab, setActiveSubTab] = useState('palm'); // palm, forehead

  return (
    <div className="palmistry-panel animate-fade-in">
      {/* Panel Hero Header */}
      <div className="panel-hero-header">
        <div className="panel-title-group">
          <div className="panel-icon-circle bg-gold-translucent">
            <Hand size={28} className="text-gold" />
          </div>
          <div>
            <h1 className="panel-main-title">हस्तरेखा व सामुद्रिक शास्त्र (Palmistry & Face Lines)</h1>
            <p className="panel-main-subtitle">
              हाथ की लकीरें और माथे की रेखाएं — जानें कैसे शरीर पर अंकित रेखाएं आपकी जन्म कुंडली का प्रत्यक्ष प्रमाण देती हैं
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="panel-tabs-bar">
        <button 
          className={`tab-btn ${activeSubTab === 'palm' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveSubTab('palm')}
        >
          ✋ हस्तरेखा शास्त्र (Interactive Palm Lines)
        </button>
        <button 
          className={`tab-btn ${activeSubTab === 'forehead' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveSubTab('forehead')}
        >
          🧠 माथे की लकीरें (Forehead Lines / सामुद्रिक शास्त्र)
        </button>
      </div>

      {activeSubTab === 'palm' && (
        <div className="palm-interactive-layout animate-fade-in">
          {/* Left: Interactive SVG Palm Diagram */}
          <div className="palm-svg-card">
            <h3 className="section-title">Sacred Hasta Rekha Map</h3>
            <p className="section-subtitle">नीचे किसी भी रेखा के नाम पर क्लिक करें और उसका प्रभाव देखें</p>

            <div className="palm-svg-wrapper">
              <svg viewBox="0 0 400 480" className="palm-svg">
                <defs>
                  <linearGradient id="palmSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <filter id="handGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Hand Silhouette */}
                <path 
                  d="M120,440 C110,410 100,340 100,280 C90,260 70,220 50,180 C40,160 50,140 70,150 C90,160 110,210 115,225 C110,180 105,120 105,90 C105,70 125,70 130,90 C135,130 145,190 145,210 C145,170 155,90 160,60 C165,40 185,40 190,60 C195,110 200,190 200,210 C205,170 220,110 230,95 C235,80 255,85 255,105 C255,145 250,205 250,230 C260,200 280,165 295,160 C310,155 320,175 305,200 C290,230 280,280 280,340 C280,390 270,420 260,440 Z" 
                  fill="url(#palmSkin)" 
                  stroke="#f59e0b" 
                  strokeWidth="2" 
                />

                {/* Heart Line (Hridaya Rekha) */}
                <path 
                  d="M120,190 C160,180 220,175 275,215" 
                  fill="none" 
                  stroke="#f43f5e" 
                  strokeWidth={selectedLine.id === 'heart' ? '6' : '3'}
                  strokeDasharray={selectedLine.id === 'heart' ? 'none' : 'none'}
                  filter={selectedLine.id === 'heart' ? 'url(#handGlow)' : ''}
                  className="interactive-line"
                  onClick={() => setSelectedLine(PALM_LINES.find(l => l.id === 'heart'))}
                />

                {/* Head Line (Mastishk Rekha) */}
                <path 
                  d="M115,230 C160,235 220,260 265,300" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth={selectedLine.id === 'head' ? '6' : '3'}
                  filter={selectedLine.id === 'head' ? 'url(#handGlow)' : ''}
                  className="interactive-line"
                  onClick={() => setSelectedLine(PALM_LINES.find(l => l.id === 'head'))}
                />

                {/* Life Line (Jeevan Rekha) */}
                <path 
                  d="M115,230 C125,270 145,340 170,410" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth={selectedLine.id === 'life' ? '6' : '3'}
                  filter={selectedLine.id === 'life' ? 'url(#handGlow)' : ''}
                  className="interactive-line"
                  onClick={() => setSelectedLine(PALM_LINES.find(l => l.id === 'life'))}
                />

                {/* Fate Line (Bhagya Rekha) */}
                <path 
                  d="M190,420 C188,340 185,260 180,185" 
                  fill="none" 
                  stroke="#fbbf24" 
                  strokeWidth={selectedLine.id === 'fate' ? '6' : '3'}
                  filter={selectedLine.id === 'fate' ? 'url(#handGlow)' : ''}
                  className="interactive-line"
                  onClick={() => setSelectedLine(PALM_LINES.find(l => l.id === 'fate'))}
                />

                {/* Sun Line (Surya Rekha) */}
                <path 
                  d="M225,320 L225,190" 
                  fill="none" 
                  stroke="#f59e0b" 
                  strokeWidth={selectedLine.id === 'sun' ? '6' : '3'}
                  filter={selectedLine.id === 'sun' ? 'url(#handGlow)' : ''}
                  className="interactive-line"
                  onClick={() => setSelectedLine(PALM_LINES.find(l => l.id === 'sun'))}
                />

                {/* Money Triangle */}
                <polygon 
                  points="160,235 185,280 215,260" 
                  fill="rgba(168, 85, 247, 0.25)" 
                  stroke="#a855f7" 
                  strokeWidth={selectedLine.id === 'money_triangle' ? '3' : '1.5'}
                  filter={selectedLine.id === 'money_triangle' ? 'url(#handGlow)' : ''}
                  className="interactive-line"
                  onClick={() => setSelectedLine(PALM_LINES.find(l => l.id === 'money_triangle'))}
                />
              </svg>
            </div>

            {/* Quick Line Selector Buttons */}
            <div className="line-buttons-grid">
              {PALM_LINES.map((l) => (
                <button
                  key={l.id}
                  className={`line-btn ${selectedLine.id === l.id ? 'line-btn-active' : ''}`}
                  onClick={() => setSelectedLine(l)}
                >
                  <span className="line-color-dot" style={{ backgroundColor: l.strokeColor }}></span>
                  <span>{l.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Palm Line Meaning & Remedies */}
          <div className="palm-details-card">
            <div className="line-detail-header">
              <span className="line-sanskrit-tag" style={{ color: selectedLine.strokeColor }}>
                {selectedLine.sanskrit}
              </span>
              <h2>{selectedLine.name}</h2>
              <p className="line-significance-text">{selectedLine.significance}</p>
            </div>

            <div className="line-props-grid">
              <div className="line-prop-box border-green">
                <div className="prop-title text-green-glow">
                  <CheckCircle size={18} />
                  <span>शुभ लक्षण (Auspicious Signs)</span>
                </div>
                <p>{selectedLine.goodSigns}</p>
              </div>

              <div className="line-prop-box border-red">
                <div className="prop-title text-red-glow">
                  <Info size={18} />
                  <span>अशुभ संकेत व बाधाएं (Flaws & Blocks)</span>
                </div>
                <p>{selectedLine.flaws}</p>
              </div>
            </div>

            <div className="line-remedy-box">
              <div className="box-title">
                <Flame size={18} className="text-gold" />
                <h4>इस रेखा को मजबूत करने का वैदिक उपाय:</h4>
              </div>
              <p>{selectedLine.remedy}</p>
            </div>

            <div className="kundali-palm-relation">
              <Compass size={18} className="text-cyan" />
              <p>
                <strong>कुंडली व हाथ का संबंध:</strong> कुंडली आपके पूर्व जन्म का संचित नक्शा है (Blueprint), 
                जबकि हाथ की लकीरें वर्तमान कर्म के अनुसार उसे बदलती हैं। अच्छे कर्म और ध्यान से हाथ की रेखाएं 
                6 से 12 महीनों में स्वतः अनुकूल होने लगती हैं।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Forehead Lines Tab */}
      {activeSubTab === 'forehead' && (
        <div className="forehead-layout animate-fade-in">
          <div className="forehead-hero-card">
            <div className="forehead-header">
              <Eye size={24} className="text-gold" />
              <h3>माथे की 7 रेखाएं और 7 ग्रह (सामुद्रिक शास्त्र)</h3>
            </div>
            <p className="forehead-intro">
              सामुद्रिक शास्त्र के अनुसार, मनुष्य के मस्तक पर 7 प्रमुख रेखाएं स्थित होती हैं, 
              जो सीधे तौर पर सौरमंडल के 7 प्रत्यक्ष ग्रहों (शनि, गुरु, मंगल, सूर्य, शुक्र, बुध, चंद्र) से जुड़ी होती हैं।
            </p>

            <div className="forehead-lines-list">
              {FOREHEAD_LINES.map((f, i) => (
                <div key={i} className="forehead-item-card">
                  <h4>{f.line}</h4>
                  <p>{f.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
