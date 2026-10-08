import React, { useState } from 'react';
import { 
  Flame, Gem, Shield, Volume2, VolumeX, Sparkles, 
  RotateCcw, CheckCircle, Info, HeartHandshake, Compass
} from 'lucide-react';
import { VEDIC_GEMSTONES, RUDRAKSHA_BEADS, SACRED_MANTRAS } from '../engines/remediesData';
import { sound } from '../engines/soundEngine';

export default function RemediesPanel({ userNakshatra, userMulank }) {
  const [activeTab, setActiveTab] = useState('nakshatra-fix'); // nakshatra-fix, gemstones, rudraksha, mantras, daan
  const [selectedGemstone, setSelectedGemstone] = useState(VEDIC_GEMSTONES[0]);
  const [selectedMantra, setSelectedMantra] = useState(SACRED_MANTRAS[0]);
  const [japaCount, setJapaCount] = useState(0);
  const [isDroneOn, setIsDroneOn] = useState(false);

  const handleBeadClick = () => {
    sound.playBell(432);
    setJapaCount(prev => (prev >= 108 ? 1 : prev + 1));
  };

  const handleResetJapa = () => {
    setJapaCount(0);
  };

  const handleToggleDrone = () => {
    const active = sound.toggleOmDrone();
    setIsDroneOn(active);
  };

  return (
    <div className="remedies-panel animate-fade-in">
      {/* Panel Hero Header */}
      <div className="panel-hero-header">
        <div className="panel-title-group">
          <div className="panel-icon-circle bg-amber-translucent">
            <Flame size={28} className="text-gold" />
          </div>
          <div>
            <h1 className="panel-main-title">Vedic Remedies & Nakshatra Shanti Sanctuary</h1>
            <p className="panel-main-subtitle">
              Sacred remedial science: Fix your Nakshatra afflictions, energize your birth Grahas with authentic Gemstones, Rudraksha, and sound Japa
            </p>
          </div>
        </div>

        {/* Ambient Sound Drone Controller */}
        <div className="drone-sound-control">
          <button 
            className={`btn-drone ${isDroneOn ? 'btn-drone-active' : ''}`}
            onClick={handleToggleDrone}
          >
            {isDroneOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span>{isDroneOn ? 'Cosmic 136.1Hz Om Playing' : 'Start 136.1Hz Om Drone'}</span>
          </button>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="panel-tabs-bar">
        <button 
          className={`tab-btn ${activeTab === 'nakshatra-fix' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('nakshatra-fix')}
        >
          🔥 Fix Your Nakshatra ({userNakshatra?.name || 'Ashwini'})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'gemstones' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('gemstones')}
        >
          💎 9 Navratna Gemstones
        </button>
        <button 
          className={`tab-btn ${activeTab === 'rudraksha' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('rudraksha')}
        >
          📿 1-14 Mukhi Rudraksha
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mantras' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('mantras')}
        >
          🕉️ 108 Japa Chanting Mala
        </button>
        <button 
          className={`tab-btn ${activeTab === 'daan' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('daan')}
        >
          🌿 Karmic Daan & Charity
        </button>
      </div>

      {/* Tab 1: Fix Your Nakshatra Deep Dive */}
      {activeTab === 'nakshatra-fix' && userNakshatra && (
        <div className="tab-pane animate-fade-in">
          <div className="nakshatra-fix-master-card">
            <div className="fix-master-header">
              <span className="fix-master-badge tag-gold">Personalized Nakshatra Shanti Protocol</span>
              <h2>How to Fix Your Janma Nakshatra: {userNakshatra.name} ({userNakshatra.sanskrit})</h2>
              <p>Pada: {userNakshatra.pada} • Lord: {userNakshatra.lord} • Presiding Deity: {userNakshatra.deity}</p>
            </div>

            <div className="master-remedies-grid">
              <div className="master-card-box">
                <div className="box-icon-title">
                  <Sparkles size={20} className="text-gold" />
                  <h4>1. Sacred Beej Mantra Recitation</h4>
                </div>
                <div className="mantra-highlight-box">
                  {userNakshatra.remedy.beejMantra}
                </div>
                <p className="box-sub">
                  Chant every morning facing {userNakshatra.direction}. Complete at least 11 repetitions before sunrise.
                </p>
              </div>

              <div className="master-card-box">
                <div className="box-icon-title">
                  <Flame size={20} className="text-cyan" />
                  <h4>2. Sacred Tree (Vanaspati) Ritual</h4>
                </div>
                <p className="box-text">
                  Your Nakshatra tree is <strong>{userNakshatra.tree}</strong>. {userNakshatra.remedy.treeRitual}
                </p>
                <div className="box-note">
                  Vedic texts affirm that watering one’s Nakshatra tree dissolves karmic knots stored in the bio-energy field.
                </div>
              </div>

              <div className="master-card-box">
                <div className="box-icon-title">
                  <HeartHandshake size={20} className="text-emerald" />
                  <h4>3. Prescribed Daan (Charity Items)</h4>
                </div>
                <p className="box-text">{userNakshatra.remedy.daan}</p>
                <div className="box-note">
                  Perform donations during daytime with pure devotion without expecting commercial returns.
                </div>
              </div>

              <div className="master-card-box">
                <div className="box-icon-title">
                  <Shield size={20} className="text-purple" />
                  <h4>4. Auspicious Gemstone & Fasting Day</h4>
                </div>
                <p className="box-text">
                  <strong>Gemstone:</strong> {userNakshatra.remedy.gemstone} <br />
                  <strong>Fasting Day:</strong> {userNakshatra.remedy.fastDay}
                </p>
                <div className="box-note">
                  Fasting purifies internal bodily Agni and strengthens the nervous system against planetary stress.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 9 Navratna Gemstones */}
      {activeTab === 'gemstones' && (
        <div className="tab-pane animate-fade-in">
          <div className="gemstones-layout">
            {/* Gemstones Selector Pills */}
            <div className="gems-selector-row">
              {VEDIC_GEMSTONES.map((gem) => (
                <button
                  key={gem.id}
                  className={`gem-pill-btn ${selectedGemstone.id === gem.id ? 'gem-pill-active' : ''}`}
                  onClick={() => setSelectedGemstone(gem)}
                >
                  <span className="gem-dot" style={{ backgroundColor: gem.rulerColor }}></span>
                  <span>{gem.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Selected Gemstone Showcase */}
            <div className="gemstone-showcase-card">
              <div className="gem-showcase-header">
                <div>
                  <span className="gem-tag" style={{ color: selectedGemstone.rulerColor }}>
                    Navratna • Governed by {selectedGemstone.graha}
                  </span>
                  <h2 className="gem-title">{selectedGemstone.name}</h2>
                </div>
              </div>

              <div className="gem-specs-grid">
                <div className="spec-card">
                  <span className="spec-label">Ideal Metal</span>
                  <span className="spec-val">{selectedGemstone.metal}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Finger Placement</span>
                  <span className="spec-val">{selectedGemstone.finger}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Auspicious Activation Time</span>
                  <span className="spec-val">{selectedGemstone.dayTime}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Consecration Mantra</span>
                  <span className="spec-val text-gold">{selectedGemstone.mantra}</span>
                </div>
              </div>

              <div className="gem-benefits-box">
                <h4>Cosmic Boons & Aura Protection</h4>
                <p>{selectedGemstone.benefits}</p>
              </div>

              <div className="gem-caution-box">
                <h4>⚠️ Astrological Compatibility Warning</h4>
                <p>{selectedGemstone.caution}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: 1-14 Mukhi Rudraksha Guide */}
      {activeTab === 'rudraksha' && (
        <div className="tab-pane animate-fade-in">
          <div className="section-header-row">
            <div>
              <h2 className="section-title">Sacred 1 to 14 Mukhi Rudraksha Guide</h2>
              <p className="section-subtitle">Tears of Lord Shiva: Divine seeds that radiate electromagnetic pranic shielding</p>
            </div>
          </div>

          <div className="rudraksha-grid">
            {RUDRAKSHA_BEADS.map((rud) => (
              <div key={rud.mukhi} className="rudraksha-card">
                <div className="rud-top-row">
                  <span className="rud-mukhi tag-gold">{rud.mukhi}</span>
                  <span className="rud-planet">Graha: {rud.planet}</span>
                </div>
                <h3 className="rud-deity">{rud.deity}</h3>
                <p className="rud-benefit">{rud.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: 108 Japa Chanting Mala with Web Audio Bell */}
      {activeTab === 'mantras' && (
        <div className="tab-pane animate-fade-in">
          <div className="japa-mala-card">
            <div className="japa-header">
              <div className="japa-badge tag-gold">Interactive Vedic Chanting Sanctum</div>
              <h2>Sacred 108 Japa Mala Counter</h2>
              <p>Tap the Sacred Bead to chant and strike the 432Hz Tibetan singing bowl bell chime</p>
            </div>

            {/* Mantra Selector */}
            <div className="mantra-selector-pills">
              {SACRED_MANTRAS.map((m) => (
                <button
                  key={m.id}
                  className={`m-pill-btn ${selectedMantra.id === m.id ? 'm-pill-active' : ''}`}
                  onClick={() => setSelectedMantra(m)}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {/* Active Mantra Banner */}
            <div className="active-mantra-banner">
              <div className="mantra-sanskrit">{selectedMantra.sanskrit}</div>
              <div className="mantra-romanized">{selectedMantra.romanized}</div>
              <p className="mantra-purpose"><strong>Purpose:</strong> {selectedMantra.purpose}</p>
            </div>

            {/* Interactive Bead Clicker */}
            <div className="japa-counter-zone">
              <button className="giant-mala-bead-btn" onClick={handleBeadClick}>
                <div className="bead-inner-ring">
                  <div className="bead-count-number">{japaCount}</div>
                  <div className="bead-count-max">of 108 Chants</div>
                  <span className="bead-tap-hint">TAP TO CHANT</span>
                </div>
              </button>

              <div className="japa-progress-bar-wrapper">
                <div 
                  className="japa-progress-bar-fill" 
                  style={{ width: `${(japaCount / 108) * 100}%` }}
                ></div>
              </div>

              <div className="japa-controls-row">
                <button className="btn-secondary" onClick={handleResetJapa}>
                  <RotateCcw size={16} />
                  <span>Reset Mala</span>
                </button>
                {japaCount >= 108 && (
                  <div className="japa-complete-badge">
                    <CheckCircle size={18} />
                    <span>Mala Completed! Om Shanti Shanti Shanti.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Karmic Daan & Charity Guidelines */}
      {activeTab === 'daan' && (
        <div className="tab-pane animate-fade-in">
          <div className="daan-hero-card">
            <h2>Karmic Daan (Sacred Charity) Almanac</h2>
            <p>
              According to the Brihat Parashara Hora Shastra, voluntary conscious charity (Daan) is the most potent 
              remedy to neutralize planetary malefic influences without disturbing destiny.
            </p>

            <div className="daan-days-grid">
              <div className="daan-card">
                <span className="daan-day-pill tag-gold">Sunday (Ravivar) • Surya Daan</span>
                <h4>Donate: Wheat, Copper, Jaggery, or Red Cloth</h4>
                <p>Beneficiaries: Blind or elderly individuals, solar institutions, or morning temple offerings.</p>
              </div>

              <div className="daan-card">
                <span className="daan-day-pill tag-cyan">Monday (Somvar) • Chandra Daan</span>
                <h4>Donate: Milk, Rice, Silver, White Sweets, or Water</h4>
                <p>Beneficiaries: Destitute mothers, widows, or children in orphanages.</p>
              </div>

              <div className="daan-card">
                <span className="daan-day-pill tag-amber">Tuesday (Mangalvar) • Mangal Daan</span>
                <h4>Donate: Red Lentils (Masoor Dal), Pomegranate, or Jaggery</h4>
                <p>Beneficiaries: Laborers, military veterans, police welfare, or blood donation camps.</p>
              </div>

              <div className="daan-card">
                <span className="daan-day-pill tag-emerald">Wednesday (Budhvar) • Budh Daan</span>
                <h4>Donate: Green Mung Beans, Educational Books, or Green Clothes</h4>
                <p>Beneficiaries: Needy students, schools, or feeding green grass to sacred cows.</p>
              </div>

              <div className="daan-card">
                <span className="daan-day-pill tag-gold">Thursday (Guruvar) • Guru Daan</span>
                <h4>Donate: Chana Dal, Turmeric, Bananas, or Yellow Silk</h4>
                <p>Beneficiaries: Spiritual teachers, priests, students of philosophy, and libraries.</p>
              </div>

              <div className="daan-card">
                <span className="daan-day-pill tag-purple">Friday (Shukravar) • Shukra Daan</span>
                <h4>Donate: Ghee, Curd, Rice, Perfume, or White Garments</h4>
                <p>Beneficiaries: Destitute women, artisans, or women’s shelters.</p>
              </div>

              <div className="daan-card">
                <span className="daan-day-pill tag-cyan">Saturday (Shanivar) • Shani Daan</span>
                <h4>Donate: Mustard Oil, Black Sesame, Iron Utensils, or Blankets</h4>
                <p>Beneficiaries: Street sweepers, leprosy homes, physical laborers, and disabled individuals.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
