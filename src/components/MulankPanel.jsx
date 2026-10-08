import React, { useState } from 'react';
import { Sun, Sparkles, Compass, Shield, Award, Calendar, Check, X, Info } from 'lucide-react';
import LoShuGrid from './LoShuGrid';
import { calculateMulank, calculateBhagyank, calculateLoShuGrid, PLANETARY_RULERS } from '../engines/numerologyEngine';

export default function MulankPanel({ dob, onChangeDob }) {
  const [selectedDay, setSelectedDay] = useState(parseInt(dob?.split('-')[2] || '15', 10));
  const [activeTab, setActiveTab] = useState('profile'); // profile, loshu, forecast, dosdonts

  // Compute Mulank for current selectedDay
  const mulankData = calculateMulank(selectedDay);
  const bhagyankData = calculateBhagyank(dob);
  const loShuData = calculateLoShuGrid(dob, mulankData.mulank, bhagyankData.bhagyank);

  return (
    <div className="mulank-panel animate-fade-in">
      {/* Panel Header */}
      <div className="panel-hero-header">
        <div className="panel-title-group">
          <div className="panel-icon-circle bg-gold-translucent">
            <Sun size={28} className="text-gold" />
          </div>
          <div>
            <h1 className="panel-main-title">Mulank & Bhagyank Numerology Oracle</h1>
            <p className="panel-main-subtitle">
              Decode the core psychic root numbers governing your soul essence, worldly destiny, and Lo Shu magic square
            </p>
          </div>
        </div>

        {/* Day Selector Quick Bar (1-9 quick buttons or custom day) */}
        <div className="mulank-quick-selector">
          <span className="selector-label">Inspect Mulank (Day of Birth):</span>
          <div className="number-pills-row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className={`num-circle-btn ${mulankData.mulank === num ? 'num-btn-active' : ''}`}
                onClick={() => setSelectedDay(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Mulank & Bhagyank Showcase Cards */}
      <div className="hero-dual-numbers-grid">
        {/* Mulank (Root / Psychic Number) */}
        <div className="core-number-card mulank-gradient-border">
          <div className="core-badge tag-gold">Mulank (मूलांक) • Psychic Root Number</div>
          <div className="core-number-display">
            <div className="giant-number text-gold">{mulankData.mulank}</div>
            <div className="core-details">
              <h2 className="ruler-name">{mulankData.ruler.name}</h2>
              <p className="ruler-title">{mulankData.ruler.title}</p>
              <div className="core-tags-row">
                <span className="tag-chip">Element: {mulankData.ruler.element}</span>
                <span className="tag-chip">Direction: {mulankData.ruler.direction}</span>
              </div>
            </div>
          </div>
          <p className="core-summary-text">
            Determined by birth day ({selectedDay}). Reflects your internal psychological core, 
            innate instincts, relationship desires, and how you perceive reality.
          </p>
        </div>

        {/* Bhagyank (Destiny Number) */}
        <div className="core-number-card bhagyank-gradient-border">
          <div className="core-badge tag-cyan">Bhagyank (भाग्यांक) • Life Path Destiny</div>
          <div className="core-number-display">
            <div className="giant-number text-cyan">{bhagyankData.bhagyank}</div>
            <div className="core-details">
              <h2 className="ruler-name">{bhagyankData.name}</h2>
              <p className="ruler-title">{bhagyankData.title}</p>
              <div className="core-tags-row">
                <span className="tag-chip">Element: {bhagyankData.element}</span>
                <span className="tag-chip">Direction: {bhagyankData.direction}</span>
              </div>
            </div>
          </div>
          <p className="core-summary-text">
            Determined by total DOB digits ({dob}). Governs your life’s overarching mission, 
            worldly opportunities, karma after age 32, and public legacy.
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="panel-tabs-bar">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          🌟 Cosmic Profile & Parameters
        </button>
        <button 
          className={`tab-btn ${activeTab === 'loshu' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('loshu')}
        >
          📐 Lo Shu 3×3 Magic Grid
        </button>
        <button 
          className={`tab-btn ${activeTab === 'forecast' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('forecast')}
        >
          🔮 2026 Future Year Forecast
        </button>
        <button 
          className={`tab-btn ${activeTab === 'dosdonts' ? 'tab-btn-active' : ''}`}
          onClick={() => setActiveTab('dosdonts')}
        >
          ⚖️ Good vs Bad & Dos and Don'ts
        </button>
      </div>

      {/* Tab 1: Cosmic Profile & Parameters */}
      {activeTab === 'profile' && (
        <div className="tab-pane animate-fade-in">
          {/* Key Parameters Matrix */}
          <div className="params-matrix-grid">
            <div className="param-card">
              <span className="param-label">Lucky Days</span>
              <span className="param-value text-gold">{mulankData.ruler.luckyDays.join(', ')}</span>
              <span className="param-note">Best for signing contracts & big ventures</span>
            </div>
            <div className="param-card">
              <span className="param-label">Lucky Colors</span>
              <span className="param-value text-cyan">{mulankData.ruler.color}</span>
              <span className="param-note">Amplifies mental poise and luck</span>
            </div>
            <div className="param-card">
              <span className="param-label">Sacred Gemstone</span>
              <span className="param-value text-purple">{mulankData.ruler.gemstone}</span>
              <span className="param-note">Metal: {mulankData.ruler.metal}</span>
            </div>
            <div className="param-card">
              <span className="param-label">Presiding Deity</span>
              <span className="param-value text-emerald">{mulankData.ruler.deity}</span>
              <span className="param-note">Offers divine shielding</span>
            </div>
          </div>

          {/* Numerical Compatibility Matrix */}
          <div className="compat-matrix-card">
            <h3 className="section-title">Vibrational Number Compatibility for Mulank {mulankData.mulank}</h3>
            <div className="compat-row-grid">
              <div className="compat-box box-favorable">
                <div className="compat-title">💚 Highly Friendly Numbers</div>
                <div className="compat-numbers">{mulankData.ruler.favorableNumbers.join(' , ')}</div>
                <p className="compat-desc">Best for business partners, marriage, flat/vehicle numbers, and close friendships.</p>
              </div>
              <div className="compat-box box-unfavorable">
                <div className="compat-title">💔 Conflicting / Unfavorable Numbers</div>
                <div className="compat-numbers">{mulankData.ruler.unfavorableNumbers.join(' , ')}</div>
                <p className="compat-desc">Brings delays, ego clashes, or financial misunderstandings. Keep relations strictly professional.</p>
              </div>
              <div className="compat-box box-neutral">
                <div className="compat-title">💛 Neutral Numbers</div>
                <div className="compat-numbers">{mulankData.ruler.neutralNumbers.join(' , ')}</div>
                <p className="compat-desc">Neutral energy: delivers neither sudden boons nor deep harm; smooth cooperation.</p>
              </div>
            </div>
          </div>

          {/* Career & Profession Blueprint */}
          <div className="career-matrix-card">
            <h3 className="section-title">Ideal Career & Profession Trajectories</h3>
            <div className="career-tags-flex">
              {mulankData.ruler.career.map((c, i) => (
                <span key={i} className="career-pill">
                  💼 {c}
                </span>
              ))}
            </div>
            <p className="career-summary">
              Under {mulankData.ruler.name}'s frequency, you achieve supreme heights when given autonomy, 
              creative command, and space to build without micromanagement.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Lo Shu 3x3 Magic Grid */}
      {activeTab === 'loshu' && (
        <div className="tab-pane animate-fade-in">
          <LoShuGrid loShuData={loShuData} />
        </div>
      )}

      {/* Tab 3: 2026 Future Year Forecast */}
      {activeTab === 'forecast' && (
        <div className="tab-pane animate-fade-in">
          <div className="forecast-hero-card">
            <div className="forecast-year-badge">Current Cosmic Cycle: Year 2026 (Universal Year 1)</div>
            <h3 className="forecast-heading">
              Mulank {mulankData.mulank} Destiny Roadmap for 2026 - 2027
            </h3>
            <p className="forecast-text">
              In 2026 (2 + 0 + 2 + 6 = 10 = 1, governed by the Sun), individuals of Mulank {mulankData.mulank}{' '}
              experience a profound initiation into leadership, enterprise, and career redefinition. 
              Old lethargy dissolves. Your ability to negotiate agreements and manifest financial rewards 
              reaches an 8-year peak.
            </p>

            <div className="quarters-grid">
              <div className="quarter-card">
                <span className="quarter-pill">Q1 (Jan - Mar)</span>
                <h4>Foundation & Strategy</h4>
                <p>Consolidate past learnings. Favorable for launching long-delayed initiatives and educational expansions.</p>
              </div>
              <div className="quarter-card">
                <span className="quarter-pill">Q2 (Apr - Jun)</span>
                <h4>Expansion & Wealth Surge</h4>
                <p>Major financial inflows and recognition from superiors. Excellent period for travel and networking.</p>
              </div>
              <div className="quarter-card">
                <span className="quarter-pill">Q3 (Jul - Sep)</span>
                <h4>Relationship & Domestic Balance</h4>
                <p>Prioritize family commitments. Avoid sudden disputes in partnerships; maintain diplomatic calm.</p>
              </div>
              <div className="quarter-card">
                <span className="quarter-pill">Q4 (Oct - Dec)</span>
                <h4>Harvest & Legacy</h4>
                <p>Harvesting fruits of your 2026 investments. Solidification of assets, public honors, and spiritual peace.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Good vs Bad & Dos and Don'ts */}
      {activeTab === 'dosdonts' && (
        <div className="tab-pane animate-fade-in">
          <div className="dos-donts-grid">
            <div className="dos-card">
              <div className="card-top-header text-green-glow">
                <Check size={24} />
                <h3>Sacred Boons & Golden Habits (क्या करें)</h3>
              </div>
              <ul className="rules-list">
                {mulankData.ruler.traits.map((trait, i) => (
                  <li key={i}>
                    <strong>Superpower {i + 1}:</strong> {trait}. Leverage this in negotiations and creative projects.
                  </li>
                ))}
                <li>
                  <strong>Daily Auspicious Practice:</strong> {mulankData.ruler.remedy}
                </li>
                <li>
                  <strong>Sacred Beej Mantra:</strong> Chant <em>{mulankData.ruler.mantra}</em> 11 times every morning.
                </li>
              </ul>
            </div>

            <div className="donts-card">
              <div className="card-top-header text-red-glow">
                <X size={24} />
                <h3>Karmic Pitfalls & What to Avoid (क्या न करें)</h3>
              </div>
              <ul className="rules-list">
                {mulankData.ruler.flaws.map((flaw, i) => (
                  <li key={i}>
                    <strong>Shadow Trap {i + 1}:</strong> {flaw}. Cultivate conscious mindfulness when stressed.
                  </li>
                ))}
                <li>
                  <strong>Number Conflict:</strong> Avoid signing crucial contracts on dates summing to {mulankData.ruler.unfavorableNumbers.join(' or ')}.
                </li>
                <li>
                  <strong>Color Caution:</strong> Avoid excessive use of dull or conflicting colors during high-stakes presentations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
