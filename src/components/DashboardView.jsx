import React from 'react';
import { 
  Sparkles, Sun, Moon, Compass, Shield, Heart, Briefcase, 
  Activity, Star, ArrowUpRight, Flame, Bell, CheckCircle2, AlertTriangle
} from 'lucide-react';
import { getTodaysPanchang } from '../engines/remediesData';

export default function DashboardView({ 
  userProfile, 
  mulankData, 
  bhagyankData, 
  horoscopeData, 
  phoneData, 
  nameData,
  onNavigate,
  onOpenReport
}) {
  const panchang = getTodaysPanchang();

  return (
    <div className="dashboard-view animate-fade-in">
      {/* Top Welcome Hero Banner */}
      <div className="hero-cosmic-card">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="text-gold" />
            <span>Sacred Cosmic Sanctuary</span>
          </div>
          <h1 className="hero-title">
            Namaste, <span className="gold-gradient-text">{userProfile?.name || 'Cosmic Seeker'}</span>
          </h1>
          <p className="hero-subtitle">
            Your cosmic coordinates reveal strong vibrations governed by{' '}
            <strong className="text-gold">{mulankData?.ruler?.name || mulankData?.name || 'Surya'}</strong> and Nakshatra{' '}
            <strong className="text-gold">{horoscopeData?.nakshatra?.name || 'Ashwini'} (Pada {horoscopeData?.nakshatra?.pada || 1})</strong>.
          </p>

          <div className="hero-stats-row">
            <div className="hero-stat-pill">
              <span className="stat-label">Birth Mulank:</span>
              <span className="stat-val stat-gold">{mulankData?.mulank || 1}</span>
              <span className="stat-sub">({(mulankData?.ruler?.name || mulankData?.name || 'Surya').split(' ')[0]})</span>
            </div>
            <div className="hero-stat-pill">
              <span className="stat-label">Destiny Bhagyank:</span>
              <span className="stat-val stat-cyan">{bhagyankData?.bhagyank || 1}</span>
              <span className="stat-sub">({(bhagyankData?.ruler?.name || bhagyankData?.name || 'Surya').split(' ')[0]})</span>
            </div>
            <div className="hero-stat-pill">
              <span className="stat-label">Lagna Ascendant:</span>
              <span className="stat-val stat-purple">{horoscopeData?.ascendantSign?.name || 'Aries'}</span>
            </div>
            <div className="hero-stat-pill">
              <span className="stat-label">Chandra Rashi:</span>
              <span className="stat-val stat-emerald">{horoscopeData?.moonSign?.name || 'Aries'}</span>
            </div>
          </div>
        </div>

        <div className="hero-action-box">
          <button className="btn-primary btn-gold-shimmer" onClick={onOpenReport}>
            <Sparkles size={18} />
            <span>Download Kundali Dossier</span>
          </button>
          <div className="report-note">Certified Vedic Future Report</div>
        </div>
      </div>

      {/* Today's Panchang & Auspicious Muhurat Strip */}
      <div className="panchang-strip-card">
        <div className="panchang-heading">
          <Compass size={20} className="text-gold" />
          <span>Today's Cosmic Panchang ({panchang.dateFormatted})</span>
        </div>
        <div className="panchang-grid">
          <div className="panchang-item">
            <span className="item-title">Vedic Day & Tithi</span>
            <span className="item-val">{panchang.dayName} • {panchang.tithi}</span>
            <span className="item-sub">{panchang.paksha}</span>
          </div>
          <div className="panchang-item">
            <span className="item-title">Abhijit Muhurat (Most Auspicious)</span>
            <span className="item-val text-green-glow">{panchang.abhijitMuhurat}</span>
            <span className="item-sub">Ideal for new starts & deals</span>
          </div>
          <div className="panchang-item">
            <span className="item-title">Rahu Kaal (Avoid Big Initiatives)</span>
            <span className="item-val text-red-glow">{panchang.rahuKaal}</span>
            <span className="item-sub">Reserve for meditation & routine</span>
          </div>
          <div className="panchang-item">
            <span className="item-title">Auspicious Colors Today</span>
            <span className="item-val text-gold">{panchang.todayAuspiciousColor}</span>
            <span className="item-sub">Amplifies positive aura vibrations</span>
          </div>
        </div>
      </div>

      {/* 4 Specialized Future Portals Grid */}
      <div className="section-header-row">
        <div>
          <h2 className="section-title">Your 4 Future Prediction Portals</h2>
          <p className="section-subtitle">Delve into specialized modules tailored for Mulank, Kundali, Mobile & Sacred Name</p>
        </div>
      </div>

      <div className="portals-grid">
        {/* Portal 1: Mulank & Bhagyank */}
        <div className="portal-card" onClick={() => onNavigate('mulank')}>
          <div className="portal-badge-row">
            <span className="portal-tag tag-gold">Numerology Master</span>
            <ArrowUpRight size={18} className="portal-arrow" />
          </div>
          <div className="portal-icon-box bg-gold-translucent">
            <Sun size={28} className="text-gold" />
          </div>
          <h3 className="portal-title">Mulank {mulankData?.mulank || 1} Future Analysis</h3>
          <p className="portal-desc">
            Ruler: {mulankData?.ruler?.name || mulankData?.name || 'Surya'}. Personality blueprint, Lo Shu 3x3 magic grid, lucky colors, 
            gemstones, and year 2026 destiny forecasts.
          </p>
          <div className="portal-footer">
            <span className="portal-metric">Friendly: {mulankData?.ruler?.favorableNumbers?.join(', ') || mulankData?.favorableNumbers?.join(', ') || '1, 2, 3'}</span>
            <span className="portal-link-text">Explore Mulank →</span>
          </div>
        </div>

        {/* Portal 2: DOB & Kundali */}
        <div className="portal-card" onClick={() => onNavigate('dob')}>
          <div className="portal-badge-row">
            <span className="portal-tag tag-cyan">Vedic Kundali & Nakshatra</span>
            <ArrowUpRight size={18} className="portal-arrow" />
          </div>
          <div className="portal-icon-box bg-cyan-translucent">
            <Moon size={28} className="text-cyan" />
          </div>
          <h3 className="portal-title">Nakshatra {horoscopeData.nakshatra.name} Chart</h3>
          <p className="portal-desc">
            Interactive North Indian Lagna diamond chart, Pada {horoscopeData.nakshatra.pada}, Gandanta analysis, 
            Manglik status, and four pillars of life predictions.
          </p>
          <div className="portal-footer">
            <span className="portal-metric">Doshas: {horoscopeData.doshas.manglik.isManglik ? 'Manglik Active' : 'Clear'}</span>
            <span className="portal-link-text">Open Kundali →</span>
          </div>
        </div>

        {/* Portal 3: Phone Numerology */}
        <div className="portal-card" onClick={() => onNavigate('phone')}>
          <div className="portal-badge-row">
            <span className="portal-tag tag-emerald">Mobile Energy</span>
            <ArrowUpRight size={18} className="portal-arrow" />
          </div>
          <div className="portal-icon-box bg-emerald-translucent">
            <Activity size={28} className="text-emerald" />
          </div>
          <h3 className="portal-title">Phone Number {userProfile.phone || '9876543210'}</h3>
          <p className="portal-desc">
            {phoneData 
              ? `Compound sum ${phoneData.totalSum} reduces to Root ${phoneData.root} (${phoneData.ruler.name}). Vibrational harmony score: ${phoneData.score}%.`
              : 'Analyze mobile vibration, business luck, caller reception, and lucky wallpapers.'}
          </p>
          <div className="portal-footer">
            <span className="portal-metric">{phoneData ? `Resonance: ${phoneData.score}%` : 'Calculate Now'}</span>
            <span className="portal-link-text">Inspect Mobile →</span>
          </div>
        </div>

        {/* Portal 4: Name Numerology */}
        <div className="portal-card" onClick={() => onNavigate('name')}>
          <div className="portal-badge-row">
            <span className="portal-tag tag-purple">Chaldean & AI Correction</span>
            <ArrowUpRight size={18} className="portal-arrow" />
          </div>
          <div className="portal-icon-box bg-purple-translucent">
            <Sparkles size={28} className="text-purple" />
          </div>
          <h3 className="portal-title">Name Vibration: {userProfile.name}</h3>
          <p className="portal-desc">
            {nameData 
              ? `Chaldean Compound ${nameData.chaldean.compound} (Root ${nameData.chaldean.root}). Compatibility with Mulank: ${nameData.compatibility.status}.`
              : 'Calculate Chaldean and Pythagorean vibrations with lucky name spelling corrector.'}
          </p>
          <div className="portal-footer">
            <span className="portal-metric">{nameData ? nameData.compatibility.status : 'Check Name'}</span>
            <span className="portal-link-text">Harmonize Name →</span>
          </div>
        </div>
      </div>

      {/* Good and Bad Dual Inspection Section */}
      <div className="dual-future-section">
        <div className="future-card card-positive">
          <div className="card-top-icon text-green-glow">
            <CheckCircle2 size={24} />
            <h3>Auspicious Strengths & Future Boons (शुभ फल)</h3>
          </div>
          <ul className="future-points-list">
            <li>
              <strong>Planetary Blessing:</strong> Guided by {mulankData?.ruler?.name || mulankData?.name || 'Surya'}, granting natural leadership and authority in your professional sphere.
            </li>
            <li>
              <strong>Nakshatra Energy:</strong> Born in {horoscopeData.nakshatra.name}, blessed by deity {horoscopeData.nakshatra.deity} with {horoscopeData.nakshatra.benefits[0].toLowerCase()}.
            </li>
            <li>
              <strong>Royal Yogas:</strong>{' '}
              {horoscopeData.yogas.length > 0 
                ? horoscopeData.yogas.map(y => y.name).join(' and ') 
                : 'Steady cosmic currents without sudden obstructions.'}
            </li>
            <li>
              <strong>Wealth Resonance:</strong> High potential in long-term enterprise and asset accumulation when adhering to dharmic principles.
            </li>
          </ul>
          <button className="btn-secondary btn-green-outline" onClick={() => onNavigate('remedies')}>
            Maximize Your Boons →
          </button>
        </div>

        <div className="future-card card-caution">
          <div className="card-top-icon text-red-glow">
            <AlertTriangle size={24} />
            <h3>Vulnerabilities & Cosmic Caution (अशुभ फल व सावधानियां)</h3>
          </div>
          <ul className="future-points-list">
            <li>
              <strong>Nakshatra Shadow:</strong> {horoscopeData.nakshatra.flaws[0]}. Beware of hasty overconfidence.
            </li>
            <li>
              <strong>Dosha Status:</strong>{' '}
              {horoscopeData.doshas.manglik.isManglik
                ? `Manglik Dosha detected (${horoscopeData.doshas.manglik.severity}). Requires marital matching and Hanuman rituals.`
                : 'Free from severe Manglik afflictions.'}
            </li>
            <li>
              <strong>Sade Sati Phase:</strong> {horoscopeData.doshas.sadeSati.details}
            </li>
            <li>
              <strong>Missing Elemental Frequencies:</strong> Inspect your Lo Shu grid in Mulank panel to balance missing digits.
            </li>
          </ul>
          <button className="btn-secondary btn-red-outline" onClick={() => onNavigate('remedies')}>
            Fix Your Nakshatra & Doshas Now →
          </button>
        </div>
      </div>
    </div>
  );
}
