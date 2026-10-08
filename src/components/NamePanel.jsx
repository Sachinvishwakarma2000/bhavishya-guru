import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, AlertTriangle, Wand2, 
  ArrowRight, HeartHandshake, BookOpen, RefreshCw, User
} from 'lucide-react';
import { calculateNameNumerology, CHALDEAN_COMPOUND_MEANINGS } from '../engines/numerologyEngine';

export default function NamePanel({ initialName, userMulank, onUpdateName }) {
  const [nameInput, setNameInput] = useState(initialName || 'Aarav Sharma');
  const [appliedName, setAppliedName] = useState(initialName || 'Aarav Sharma');

  const nameResult = calculateNameNumerology(appliedName, userMulank);

  const handleApply = (e) => {
    e.preventDefault();
    setAppliedName(nameInput);
    if (onUpdateName) {
      onUpdateName(nameInput);
    }
  };

  const handleApplySuggestion = (sug) => {
    setNameInput(sug.name);
    setAppliedName(sug.name);
    if (onUpdateName) {
      onUpdateName(sug.name);
    }
  };

  return (
    <div className="name-panel animate-fade-in">
      {/* Panel Hero Header */}
      <div className="panel-hero-header">
        <div className="panel-title-group">
          <div className="panel-icon-circle bg-purple-translucent">
            <Sparkles size={28} className="text-purple" />
          </div>
          <div>
            <h1 className="panel-main-title">Sacred Name Numerology & AI Correction Oracle</h1>
            <p className="panel-main-subtitle">
              Decode Chaldean and Pythagorean compound vibrations, evaluate harmony with your birth Mulank, and optimize your spelling for royal fortune
            </p>
          </div>
        </div>
      </div>

      {/* Name Input Bar */}
      <form onSubmit={handleApply} className="name-input-bar">
        <div className="input-field-group flex-1">
          <label>Enter Full Sacred Name</label>
          <div className="input-with-icon">
            <User size={18} className="input-icon" />
            <input 
              type="text" 
              required
              placeholder="e.g. Aarav Sharma" 
              value={nameInput} 
              onChange={(e) => setNameInput(e.target.value)} 
            />
          </div>
        </div>
        <button type="submit" className="btn-primary btn-gold-shimmer apply-btn">
          <RefreshCw size={16} />
          <span>Calculate Name Frequency</span>
        </button>
      </form>

      {nameResult && (
        <>
          {/* Dual System Showcase Cards: Chaldean & Pythagorean */}
          <div className="dual-systems-grid">
            {/* Chaldean Sacred System */}
            <div className="system-card chaldean-card">
              <div className="system-top-badge tag-gold">Ancient Chaldean System (Highest Vedic Accuracy)</div>
              <div className="system-number-row">
                <div className="system-giant-num text-gold">
                  {nameResult.chaldean.compound}
                  <span className="system-sub-root">➔ Root {nameResult.chaldean.root}</span>
                </div>
                <div className="system-ruler-meta">
                  <h3>{nameResult.chaldean.ruler.name}</h3>
                  <p>{nameResult.chaldean.ruler.title}</p>
                </div>
              </div>
              <div className="compound-meaning-box">
                <strong>Ancient Mystery Meaning:</strong>
                <p>{nameResult.chaldean.meaning}</p>
              </div>
            </div>

            {/* Pythagorean System */}
            <div className="system-card pythagorean-card">
              <div className="system-top-badge tag-cyan">Pythagorean Western System</div>
              <div className="system-number-row">
                <div className="system-giant-num text-cyan">
                  {nameResult.pythagorean.compound}
                  <span className="system-sub-root">➔ Root {nameResult.pythagorean.root}</span>
                </div>
                <div className="system-ruler-meta">
                  <h3>Western Life Expression</h3>
                  <p>Represents outer public resonance in global environments</p>
                </div>
              </div>
              <div className="sub-vibrations-row">
                <div className="sub-vib-pill">
                  <span className="vib-label">Soul Urge (Heart Vowels):</span>
                  <span className="vib-val text-gold">{nameResult.soulUrge}</span>
                </div>
                <div className="sub-vib-pill">
                  <span className="vib-label">Personality (Consonants):</span>
                  <span className="vib-val text-purple">{nameResult.personality}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Letter by Letter Breakdown Ribbon */}
          <div className="letter-breakdown-card">
            <h3 className="section-title">Chaldean Letter-by-Letter Numerical Blueprint</h3>
            <div className="letters-scroll-row">
              {nameResult.chaldean.letterDetails.map((item, idx) => (
                item.char === ' ' ? (
                  <div key={idx} className="letter-space-divider">•</div>
                ) : (
                  <div key={idx} className="letter-chip">
                    <span className="letter-char">{item.char}</span>
                    <span className="letter-val">{item.val}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Compatibility with Birth Mulank */}
          <div className="harmony-banner-card">
            <div className="harmony-left">
              <HeartHandshake size={32} className="text-gold" />
              <div>
                <span className="harmony-tag">Mulank Alignment Diagnostic</span>
                <h3 className="harmony-status">{nameResult.compatibility.status}</h3>
                <p className="harmony-reason">{nameResult.compatibility.reason}</p>
              </div>
            </div>
            <div className="harmony-right">
              <div className="harmony-score-circle">
                <span className="score-val">{nameResult.compatibility.score}%</span>
                <span className="score-lbl">Sync Index</span>
              </div>
            </div>
          </div>

          {/* AI Name Correction Engine */}
          <div className="ai-correction-section">
            <div className="ai-correction-header">
              <div className="ai-badge">
                <Wand2 size={20} className="text-gold" />
                <span>AI Vedic Name Correction Engine</span>
              </div>
              <h2 className="section-title">Auspicious Spelling Adjustments for Royal Fortune</h2>
              <p className="section-subtitle">
                Subtle single-letter adjustments designed to shift your name into master compound numbers (19, 23, 24, 37, 46) for elevated prosperity and status
              </p>
            </div>

            {nameResult.suggestions.length > 0 ? (
              <div className="suggestions-grid">
                {nameResult.suggestions.map((sug, i) => (
                  <div key={i} className="suggestion-card">
                    <div className="sug-header">
                      <span className="sug-tag tag-gold">{sug.modifiedPart}</span>
                      <span className="sug-compound">Compound {sug.compoundNumber} • Root {sug.rootNumber}</span>
                    </div>
                    <div className="sug-name-display">{sug.name}</div>
                    <p className="sug-benefit">{sug.benefit}</p>
                    <button 
                      className="btn-secondary btn-gold-outline sug-apply-btn"
                      onClick={() => handleApplySuggestion(sug)}
                    >
                      <span>Adopt This Spelling</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="perfect-vibration-box">
                <CheckCircle2 size={28} className="text-emerald" />
                <div>
                  <h4>Supreme Sacred Vibration Already Achieved!</h4>
                  <p>Your current name spelling '{nameResult.cleanName}' resonates at an auspicious frequency. No modifications necessary.</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
