import React, { useState } from 'react';
import { 
  Phone, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, 
  TrendingUp, Award, Smartphone, RefreshCw, Palette, Image as ImageIcon
} from 'lucide-react';
import { calculatePhoneNumerology, PLANETARY_RULERS } from '../engines/numerologyEngine';

export default function PhonePanel({ initialPhone, userMulank, onUpdatePhone }) {
  const [phoneNumber, setPhoneNumber] = useState(initialPhone || '9820156789');
  const [appliedPhone, setAppliedPhone] = useState(initialPhone || '9820156789');

  const phoneResult = calculatePhoneNumerology(appliedPhone, userMulank);

  const handleApply = (e) => {
    e.preventDefault();
    setAppliedPhone(phoneNumber);
    if (onUpdatePhone) {
      onUpdatePhone(phoneNumber);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald';
    if (score >= 65) return 'text-gold';
    return 'text-red-glow';
  };

  return (
    <div className="phone-panel animate-fade-in">
      {/* Panel Hero Header */}
      <div className="panel-hero-header">
        <div className="panel-title-group">
          <div className="panel-icon-circle bg-emerald-translucent">
            <Smartphone size={28} className="text-emerald" />
          </div>
          <div>
            <h1 className="panel-main-title">Phone Number Numerology Oracle</h1>
            <p className="panel-main-subtitle">
              Decode the electro-magnetic frequency of your mobile number, compound vibrations, caller resonance, and lucky wallpaper remedies
            </p>
          </div>
        </div>
      </div>

      {/* Phone Number Input Form */}
      <form onSubmit={handleApply} className="phone-input-bar">
        <div className="input-field-group flex-1">
          <label>Enter 10-Digit Mobile Number to Analyze</label>
          <div className="input-with-icon">
            <Phone size={18} className="input-icon" />
            <input 
              type="tel" 
              required
              placeholder="e.g. 9820156789" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          </div>
        </div>
        <button type="submit" className="btn-primary btn-gold-shimmer apply-btn">
          <RefreshCw size={16} />
          <span>Analyze Mobile Energy</span>
        </button>
      </form>

      {phoneResult && (
        <>
          {/* Top Result Banner */}
          <div className="phone-hero-card">
            <div className="phone-hero-left">
              <span className="phone-tag tag-emerald">Mobile Vibrational Profile</span>
              <div className="phone-display-row">
                <span className="phone-raw-display">{phoneResult.rawNumber}</span>
                <span className="arrow-sep">➔</span>
                <span className="sum-tag">Sum: {phoneResult.totalSum}</span>
                <span className="arrow-sep">➔</span>
                <span className="root-pill text-gold">Root {phoneResult.root}</span>
              </div>
              <h2 className="phone-ruler-title">
                Governed by {phoneResult.ruler.name} ({phoneResult.ruler.title})
              </h2>
              <p className="phone-ruler-sub">
                Elemental Frequency: <strong>{phoneResult.ruler.element}</strong> • Favorable for: {phoneResult.ruler.luckyDays.join(', ')}
              </p>
            </div>

            <div className="phone-hero-right">
              <div className="resonance-gauge">
                <div className={`gauge-score ${getScoreColor(phoneResult.score)}`}>
                  {phoneResult.score}%
                </div>
                <span className="gauge-label">Vibrational Harmony Score</span>
              </div>
            </div>
          </div>

          {/* 4 Life Domains Suitability Matrix */}
          <div className="section-header-row mt-6">
            <div>
              <h2 className="section-title">Domain Suitability Assessment</h2>
              <p className="section-subtitle">How this specific number vibrates across business, career, romance, and wealth attraction</p>
            </div>
          </div>

          <div className="suitability-grid">
            <div className="suitability-card">
              <div className="suit-header">
                <TrendingUp size={20} className="text-gold" />
                <span className="suit-title">Business & Commerce</span>
              </div>
              <div className="suit-rating text-gold">{phoneResult.suitability.business}</div>
              <p className="suit-desc">Governs commercial negotiations, client acquisition, and profit closings.</p>
            </div>

            <div className="suitability-card">
              <div className="suit-header">
                <Award size={20} className="text-cyan" />
                <span className="suit-title">Career & Job Status</span>
              </div>
              <div className="suit-rating text-cyan">{phoneResult.suitability.career}</div>
              <p className="suit-desc">Affects communication with superiors, appraisals, and authority recognition.</p>
            </div>

            <div className="suitability-card">
              <div className="suit-header">
                <ShieldCheck size={20} className="text-emerald" />
                <span className="suit-title">Love & Family Harmony</span>
              </div>
              <div className="suit-rating text-emerald">{phoneResult.suitability.loveAndFamily}</div>
              <p className="suit-desc">Affects domestic phone peace, message empathy, and emotional responsiveness.</p>
            </div>

            <div className="suitability-card">
              <div className="suit-header">
                <Sparkles size={20} className="text-purple" />
                <span className="suit-title">Wealth Attraction</span>
              </div>
              <div className="suit-rating text-purple">{phoneResult.suitability.wealthAttraction}</div>
              <p className="suit-desc">Determines whether caller exchanges foster inflow of capital or cash leakage.</p>
            </div>
          </div>

          {/* Good vs Bad Breakdown */}
          <div className="section-header-row mt-6">
            <div>
              <h2 className="section-title">Vibrational Good vs Bad Analysis (शुभ व अशुभ प्रभाव)</h2>
              <p className="section-subtitle">Clear breakdown of positive frequencies and numerical friction points</p>
            </div>
          </div>

          <div className="dual-phone-grid">
            <div className="phone-pros-card">
              <div className="card-top-icon text-green-glow">
                <CheckCircle2 size={24} />
                <h3>Auspicious Energies Present (शुभ योग)</h3>
              </div>
              <ul className="phone-points-list">
                {phoneResult.goodPoints.map((gp, i) => (
                  <li key={i}>
                    <strong>Boon {i + 1}:</strong> {gp}
                  </li>
                ))}
                <li>
                  <strong>Last 4 Digits ({phoneResult.lastFour}):</strong> Shapes the subconscious impression callers experience when storing your contact.
                </li>
              </ul>
            </div>

            <div className="phone-cons-card">
              <div className="card-top-icon text-red-glow">
                <AlertTriangle size={24} />
                <h3>Cautionary Aspects & Pitfalls (सावधानियां)</h3>
              </div>
              <ul className="phone-points-list">
                {phoneResult.badPoints.length > 0 ? (
                  phoneResult.badPoints.map((bp, i) => (
                    <li key={i}>
                      <strong>Friction Point {i + 1}:</strong> {bp}
                    </li>
                  ))
                ) : (
                  <li>
                    <strong>Clean Vibrations:</strong> No severe 4-8 or 2-8 conflict combinations detected in this number sequence.
                  </li>
                )}
                <li>
                  <strong>Root Clashing:</strong> If your callers report unexpected misunderstandings, apply the wallpaper remedy below to stabilize the static.
                </li>
              </ul>
            </div>
          </div>

          {/* High Impact Mobile Remedies */}
          <div className="phone-remedies-hero">
            <div className="remedy-hero-header">
              <Sparkles size={24} className="text-gold" />
              <h3>High-Impact Mobile Neutralization Remedies (मोबाइल यंत्र व उपाय)</h3>
            </div>
            
            <div className="remedies-triplet">
              <div className="mobile-rem-card">
                <div className="rem-card-icon text-gold">
                  <ImageIcon size={22} />
                </div>
                <h4>Sacred Lockscreen Wallpaper</h4>
                <p>{phoneResult.remedies[0]}</p>
                <div className="rem-pill">Balances Incoming Calls</div>
              </div>

              <div className="mobile-rem-card">
                <div className="rem-card-icon text-cyan">
                  <Palette size={22} />
                </div>
                <h4>Harmonious Phone Case Color</h4>
                <p>{phoneResult.remedies[1]}</p>
                <div className="rem-pill">Neutralizes Electro-Magnetic Static</div>
              </div>

              <div className="mobile-rem-card">
                <div className="rem-card-icon text-purple">
                  <Smartphone size={22} />
                </div>
                <h4>Future SIM Number Guide</h4>
                <p>{phoneResult.remedies[3]}</p>
                <div className="rem-pill">Supreme Fortune Target</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
