import React, { useState } from 'react';
import { 
  Moon, Sun, Compass, Sparkles, AlertCircle, CheckCircle2, 
  Flame, ShieldAlert, Heart, Briefcase, Activity, RefreshCw 
} from 'lucide-react';
import KundaliChart from './KundaliChart';
import { calculateVedicHoroscope, NAKSHATRAS } from '../engines/astrologyEngine';

export default function DobKundaliPanel({ 
  initialDob, 
  initialTime, 
  initialPlace,
  onUpdateBirthDetails,
  onNavigateToRemedies
}) {
  const [dob, setDob] = useState(initialDob || '1995-10-24');
  const [time, setTime] = useState(initialTime || '07:15');
  const [place, setPlace] = useState(initialPlace || 'Varanasi, India');
  const [exploredNakshatraId, setExploredNakshatraId] = useState(null);

  const horoscope = calculateVedicHoroscope(dob, time, place);
  const activeNakshatra = exploredNakshatraId 
    ? NAKSHATRAS.find(n => n.id === parseInt(exploredNakshatraId, 10)) || horoscope.nakshatra
    : horoscope.nakshatra;

  const handleApply = (e) => {
    e.preventDefault();
    if (onUpdateBirthDetails) {
      onUpdateBirthDetails(dob, time, place);
    }
  };

  return (
    <div className="dob-kundali-panel animate-fade-in">
      {/* Panel Header */}
      <div className="panel-hero-header">
        <div className="panel-title-group">
          <div className="panel-icon-circle bg-cyan-translucent">
            <Moon size={28} className="text-cyan" />
          </div>
          <div>
            <h1 className="panel-main-title">Date of Birth & Kundali Oracle</h1>
            <p className="panel-main-subtitle">
              Authentic Vedic Sidereal Horoscope, 27 Nakshatras Analysis, Dosha Neutralization & Four-Pillar Future Predictions
            </p>
          </div>
        </div>
      </div>

      {/* Birth Input Customization Bar */}
      <form onSubmit={handleApply} className="birth-inputs-bar">
        <div className="input-field-group">
          <label>Birth Date</label>
          <input 
            type="date" 
            required 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
          />
        </div>
        <div className="input-field-group">
          <label>Birth Time</label>
          <input 
            type="time" 
            required 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
          />
        </div>
        <div className="input-field-group">
          <label>Birth Place</label>
          <input 
            type="text" 
            placeholder="City, Country" 
            value={place} 
            onChange={(e) => setPlace(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn-primary btn-gold-shimmer apply-btn">
          <RefreshCw size={16} />
          <span>Cast Chart</span>
        </button>
      </form>

      {/* Top Cosmic Pillars: Sun, Moon, Ascendant, Nakshatra */}
      <div className="astral-quad-grid">
        <div className="astral-card">
          <div className="astral-icon-box bg-gold-translucent">
            <Sun size={20} className="text-gold" />
          </div>
          <div className="astral-info">
            <span className="astral-label">Surya Rashi (Sun Sign)</span>
            <span className="astral-value text-gold">{horoscope.sunSign.name}</span>
            <span className="astral-sub">{horoscope.sunSign.sanskrit} • {horoscope.sunSign.element}</span>
          </div>
        </div>

        <div className="astral-card">
          <div className="astral-icon-box bg-cyan-translucent">
            <Moon size={20} className="text-cyan" />
          </div>
          <div className="astral-info">
            <span className="astral-label">Chandra Rashi (Moon Sign)</span>
            <span className="astral-value text-cyan">{horoscope.moonSign.name}</span>
            <span className="astral-sub">{horoscope.moonSign.sanskrit} • {horoscope.moonSign.element}</span>
          </div>
        </div>

        <div className="astral-card">
          <div className="astral-icon-box bg-purple-translucent">
            <Compass size={20} className="text-purple" />
          </div>
          <div className="astral-info">
            <span className="astral-label">Lagna (Ascendant)</span>
            <span className="astral-value text-purple">{horoscope.ascendantSign.name}</span>
            <span className="astral-sub">House 1 Rising Sign</span>
          </div>
        </div>

        <div className="astral-card">
          <div className="astral-icon-box bg-emerald-translucent">
            <Sparkles size={20} className="text-emerald" />
          </div>
          <div className="astral-info">
            <span className="astral-label">Janma Nakshatra</span>
            <span className="astral-value text-emerald">{horoscope.nakshatra.name}</span>
            <span className="astral-sub">Pada {horoscope.nakshatra.pada} • Lord {horoscope.nakshatra.lord}</span>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Kundali Chart (Left) + Nakshatra Deep Dive (Right) */}
      <div className="kundali-layout-grid">
        {/* Left Column: Interactive North Indian Lagna Kundali Chart */}
        <div className="chart-column">
          <KundaliChart horoscope={horoscope} />
        </div>

        {/* Right Column: Nakshatra Detailed Dossier & 'How to Fix Nakshatra' */}
        <div className="nakshatra-column">
          <div className="nakshatra-dossier-card">
            <div className="dossier-header">
              <div>
                <span className="dossier-badge tag-emerald">27 Sacred Lunar Constellations</span>
                <h3 className="dossier-title">
                  Nakshatra {activeNakshatra.name} ({activeNakshatra.sanskrit})
                </h3>
              </div>
              
              {/* Optional Dropdown to inspect any of the 27 Nakshatras */}
              <select 
                className="nakshatra-select"
                value={exploredNakshatraId || horoscope.nakshatra.id}
                onChange={(e) => setExploredNakshatraId(e.target.value)}
              >
                <option value="">Birth: {horoscope.nakshatra.name} (Pada {horoscope.nakshatra.pada})</option>
                {NAKSHATRAS.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.id}. {n.name} ({n.span.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>

            {/* Gandanta Alert if active */}
            {horoscope.nakshatra.isGandanta && (
              <div className="gandanta-alert-box">
                <AlertCircle size={20} className="text-red-glow" />
                <div>
                  <strong>Gandanta Nakshatra Dosha Detected ({horoscope.nakshatra.gandantaType})</strong>
                  <p>Born at the critical junction between water and fire signs. Requires Gandanta Shanti havan for psychic harmony.</p>
                </div>
              </div>
            )}

            {/* Nakshatra Meta Matrix */}
            <div className="nakshatra-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Planetary Lord:</span>
                <span className="meta-val text-gold">{activeNakshatra.lord}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Presiding Deity:</span>
                <span className="meta-val text-cyan">{activeNakshatra.deity}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Sacred Symbol:</span>
                <span className="meta-val text-purple">{activeNakshatra.symbol}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Gana & Nadi:</span>
                <span className="meta-val text-emerald">{activeNakshatra.gana} • {activeNakshatra.nadi}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Animal Totem:</span>
                <span className="meta-val">{activeNakshatra.animal}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Sacred Tree:</span>
                <span className="meta-val">{activeNakshatra.tree}</span>
              </div>
            </div>

            {/* Nakshatra Boons vs Flaws */}
            <div className="boons-flaws-row">
              <div className="boons-box">
                <div className="boon-heading text-green-glow">
                  <CheckCircle2 size={16} />
                  <span>Nakshatra Boons & Gifts (शुभ गुण)</span>
                </div>
                <ul>
                  {activeNakshatra.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="flaws-box">
                <div className="boon-heading text-red-glow">
                  <AlertCircle size={16} />
                  <span>Shadow Flaws & Vulnerabilities (दोष)</span>
                </div>
                <ul>
                  {activeNakshatra.flaws.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dedicated "HOW TO FIX YOUR NAKSHATRA" Box */}
            <div className="nakshatra-fix-box">
              <div className="fix-header">
                <Flame size={20} className="text-gold" />
                <h4>How to Fix Your Nakshatra & Unlock Divine Blessings (नक्षत्र शांति उपाय)</h4>
              </div>
              
              <div className="fix-grid">
                <div className="fix-item">
                  <span className="fix-tag">Vedic Beej Mantra</span>
                  <div className="fix-mantra-code">{activeNakshatra.remedy.beejMantra}</div>
                  <p className="fix-sub">Chant 108 times at sunrise facing {activeNakshatra.direction}.</p>
                </div>

                <div className="fix-item">
                  <span className="fix-tag">Sacred Tree Ritual</span>
                  <p className="fix-text">{activeNakshatra.remedy.treeRitual}</p>
                </div>

                <div className="fix-item">
                  <span className="fix-tag">Charity & Daan</span>
                  <p className="fix-text">{activeNakshatra.remedy.daan}</p>
                </div>

                <div className="fix-item">
                  <span className="fix-tag">Gemstone & Fast</span>
                  <p className="fix-text">
                    <strong>Stone:</strong> {activeNakshatra.remedy.gemstone} <br />
                    <strong>Fast:</strong> {activeNakshatra.remedy.fastDay}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doshas & Yogas Diagnostic Bar */}
      <div className="section-header-row mt-6">
        <div>
          <h2 className="section-title">Dosha Diagnostics & Royal Yogas (दोष व योग विश्लेषण)</h2>
          <p className="section-subtitle">Precise verification of Manglik Dosha, Kaal Sarp, Sade Sati and Auspicious Yogas</p>
        </div>
      </div>

      <div className="doshas-triplet-grid">
        {/* Manglik Card */}
        <div className={`diagnostic-card ${horoscope.doshas.manglik.isManglik ? 'border-amber' : 'border-emerald'}`}>
          <div className="diagnostic-header">
            <span className="diag-title">Manglik Dosha (मांगलिक दोष)</span>
            <span className={`diag-badge ${horoscope.doshas.manglik.isManglik ? 'tag-amber' : 'tag-emerald'}`}>
              {horoscope.doshas.manglik.isManglik ? `Active: ${horoscope.doshas.manglik.severity}` : 'No Dosha'}
            </span>
          </div>
          <p className="diag-desc">
            Mars is stationed in House {horoscope.doshas.manglik.marsHouse}.{' '}
            {horoscope.doshas.manglik.isManglik 
              ? 'Can induce marital impatience or delay unless matched with a compatible chart.' 
              : 'Mars occupies an auspicious house; matrimonial energies are peaceful.'}
          </p>
          <div className="diag-remedy-footer">
            <strong>Remedy:</strong> {horoscope.doshas.manglik.remedy}
          </div>
        </div>

        {/* Kaal Sarp Card */}
        <div className={`diagnostic-card ${horoscope.doshas.kaalSarp.hasKaalSarp ? 'border-purple' : 'border-emerald'}`}>
          <div className="diagnostic-header">
            <span className="diag-title">Kaal Sarp Dosha (काल सर्प दोष)</span>
            <span className={`diag-badge ${horoscope.doshas.kaalSarp.hasKaalSarp ? 'tag-purple' : 'tag-emerald'}`}>
              {horoscope.doshas.kaalSarp.hasKaalSarp ? 'Present' : 'Not Present (Free)'}
            </span>
          </div>
          <p className="diag-desc">
            {horoscope.doshas.kaalSarp.hasKaalSarp 
              ? 'All 7 Grahas are hemmed between the Rahu-Ketu nodal axis. May bring sudden shifts followed by grand spiritual awakenings.'
              : 'Grahas are distributed freely across the zodiac without nodal entrapment. Natural flow of fortune.'}
          </p>
          <div className="diag-remedy-footer">
            <strong>Remedy:</strong> {horoscope.doshas.kaalSarp.remedy}
          </div>
        </div>

        {/* Sade Sati Card */}
        <div className={`diagnostic-card ${horoscope.doshas.sadeSati.status !== 'Inactive' ? 'border-cyan' : 'border-emerald'}`}>
          <div className="diagnostic-header">
            <span className="diag-title">Shani Sade Sati (शनि साढ़े साती)</span>
            <span className={`diag-badge ${horoscope.doshas.sadeSati.status !== 'Inactive' ? 'tag-cyan' : 'tag-emerald'}`}>
              {horoscope.doshas.sadeSati.status}
            </span>
          </div>
          <p className="diag-desc">
            Saturn transit relative to natal Moon in {horoscope.moonSign.name}. {horoscope.doshas.sadeSati.details}
          </p>
          <div className="diag-remedy-footer">
            <strong>Remedy:</strong> {horoscope.doshas.sadeSati.remedy}
          </div>
        </div>
      </div>

      {/* Royal Yogas Detected */}
      {horoscope.yogas.length > 0 && (
        <div className="yogas-highlight-card">
          <div className="yogas-header">
            <Sparkles size={22} className="text-gold" />
            <h3>Auspicious Royal Yogas Active in Your Birth Chart</h3>
          </div>
          <div className="yogas-grid">
            {horoscope.yogas.map((yoga, i) => (
              <div key={i} className="yoga-item-box">
                <div className="yoga-name text-gold">{yoga.name}</div>
                <div className="yoga-tag">{yoga.status}</div>
                <p className="yoga-desc">{yoga.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Four Pillars Future Predictions Breakdown */}
      <div className="section-header-row mt-6">
        <div>
          <h2 className="section-title">Four Pillars of Future Life Predictions</h2>
          <p className="section-subtitle">Deep Vedic breakdown across Career, Matrimony, Physical Health, and Karmic Destiny</p>
        </div>
      </div>

      <div className="four-pillars-grid">
        {/* Career & Wealth */}
        <div className="pillar-card">
          <div className="pillar-top">
            <div className="pillar-icon bg-gold-translucent text-gold">
              <Briefcase size={22} />
            </div>
            <div className="pillar-score-badge">Fortune: {horoscope.predictions.career.score}%</div>
          </div>
          <h3 className="pillar-title">{horoscope.predictions.career.headline}</h3>
          <div className="pillar-body">
            <div className="pillar-positive">
              <strong>✨ Auspicious Flow:</strong> {horoscope.predictions.career.positive}
            </div>
            <div className="pillar-caution">
              <strong>⚠️ Caution:</strong> {horoscope.predictions.career.caution}
            </div>
          </div>
        </div>

        {/* Love & Marriage */}
        <div className="pillar-card">
          <div className="pillar-top">
            <div className="pillar-icon bg-pink-translucent text-pink">
              <Heart size={22} />
            </div>
            <div className="pillar-score-badge">Harmony: {horoscope.predictions.love.score}%</div>
          </div>
          <h3 className="pillar-title">{horoscope.predictions.love.headline}</h3>
          <div className="pillar-body">
            <div className="pillar-positive">
              <strong>✨ Auspicious Flow:</strong> {horoscope.predictions.love.positive}
            </div>
            <div className="pillar-caution">
              <strong>⚠️ Caution:</strong> {horoscope.predictions.love.caution}
            </div>
          </div>
        </div>

        {/* Health & Vitality */}
        <div className="pillar-card">
          <div className="pillar-top">
            <div className="pillar-icon bg-emerald-translucent text-emerald">
              <Activity size={22} />
            </div>
            <div className="pillar-score-badge">Vitality: {horoscope.predictions.health.score}%</div>
          </div>
          <h3 className="pillar-title">{horoscope.predictions.health.headline}</h3>
          <div className="pillar-body">
            <div className="pillar-positive">
              <strong>✨ Auspicious Flow:</strong> {horoscope.predictions.health.positive}
            </div>
            <div className="pillar-caution">
              <strong>⚠️ Caution:</strong> {horoscope.predictions.health.caution}
            </div>
          </div>
        </div>

        {/* Destiny & Dharma */}
        <div className="pillar-card">
          <div className="pillar-top">
            <div className="pillar-icon bg-purple-translucent text-purple">
              <Sparkles size={22} />
            </div>
            <div className="pillar-score-badge">Dharma: {horoscope.predictions.destiny.score}%</div>
          </div>
          <h3 className="pillar-title">{horoscope.predictions.destiny.headline}</h3>
          <div className="pillar-body">
            <div className="pillar-positive">
              <strong>✨ Auspicious Flow:</strong> {horoscope.predictions.destiny.positive}
            </div>
            <div className="pillar-caution">
              <strong>⚠️ Caution:</strong> {horoscope.predictions.destiny.caution}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
