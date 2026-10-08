import React from 'react';
import { X, Printer, Sparkles, CheckCircle2, Shield, Flame, Compass } from 'lucide-react';

export default function ReportModal({ 
  isOpen, 
  onClose, 
  userProfile, 
  mulankData, 
  bhagyankData, 
  horoscopeData, 
  phoneData, 
  nameData 
}) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop report-backdrop" onClick={onClose}>
      <div className="modal-card report-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar (Hidden in Print) */}
        <div className="report-control-bar no-print">
          <div className="report-title-badge">
            <Sparkles size={16} className="text-gold" />
            <span>Certified Vedic Bhavishya Kundali Dossier</span>
          </div>
          <div className="report-actions">
            <button className="btn-primary btn-gold-shimmer" onClick={handlePrint}>
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Certificate & Report Body */}
        <div className="report-document" id="printable-report">
          {/* Header Banner */}
          <div className="doc-header">
            <div className="doc-emblem-box">
              <img src="/bhavishya-logo.jpg" alt="Bhavishya Guru" className="doc-logo" />
            </div>
            <div className="doc-header-text">
              <h1 className="doc-main-title">BHAVISHYA GURU (भविष्य गुरु)</h1>
              <p className="doc-sub">VEDIC ASTROLOGY, MULANK & NUMEROLOGY SANCTUARY</p>
              <div className="doc-certificate-line">
                CERTIFICATE OF SACRED HOROSCOPE & NUMEROLOGICAL DESTINY
              </div>
            </div>
          </div>

          {/* Seeker Profile Grid */}
          <div className="doc-seeker-grid">
            <div className="seeker-col">
              <span className="lbl">Sacred Seeker Name:</span>
              <strong className="val">{userProfile.name}</strong>
            </div>
            <div className="seeker-col">
              <span className="lbl">Date of Birth:</span>
              <strong className="val">{userProfile.dob}</strong>
            </div>
            <div className="seeker-col">
              <span className="lbl">Birth Time & Place:</span>
              <strong className="val">{userProfile.time || '12:00'} • {userProfile.place || 'India'}</strong>
            </div>
            <div className="seeker-col">
              <span className="lbl">Registered Mobile:</span>
              <strong className="val">{userProfile.phone || '9876543210'}</strong>
            </div>
          </div>

          {/* Core Astral Coordinates Bar */}
          <div className="doc-coordinates-bar">
            <div className="coord-cell">
              <span className="c-lbl">Birth Mulank</span>
              <strong className="c-val">{mulankData?.mulank || 1}</strong>
              <span className="c-sub">{(mulankData?.ruler?.name || mulankData?.name || 'Surya').split(' ')[0]}</span>
            </div>
            <div className="coord-cell">
              <span className="c-lbl">Destiny Bhagyank</span>
              <strong className="c-val">{bhagyankData?.bhagyank || 1}</strong>
              <span className="c-sub">{(bhagyankData?.ruler?.name || bhagyankData?.name || 'Surya').split(' ')[0]}</span>
            </div>
            <div className="coord-cell">
              <span className="c-lbl">Ascendant (Lagna)</span>
              <strong className="c-val">{horoscopeData.ascendantSign.name}</strong>
              <span className="c-sub">{horoscopeData.ascendantSign.sanskrit}</span>
            </div>
            <div className="coord-cell">
              <span className="c-lbl">Moon Sign (Rashi)</span>
              <strong className="c-val">{horoscopeData.moonSign.name}</strong>
              <span className="c-sub">{horoscopeData.moonSign.sanskrit}</span>
            </div>
            <div className="coord-cell">
              <span className="c-lbl">Janma Nakshatra</span>
              <strong className="c-val">{horoscopeData.nakshatra.name}</strong>
              <span className="c-sub">Pada {horoscopeData.nakshatra.pada} (Lord {horoscopeData.nakshatra.lord})</span>
            </div>
          </div>

          {/* Planetary Houses Table */}
          <div className="doc-section">
            <h3 className="doc-sec-title">1. Vedic Sidereal Planetary Positions (नवग्रह स्थिति)</h3>
            <div className="doc-table-wrapper">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Graha (Planet)</th>
                    <th>Zodiac Rashi</th>
                    <th>Bhava (House)</th>
                    <th>Degree</th>
                    <th>Significance</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(horoscopeData.planetHouses).map(([name, p]) => (
                    <tr key={name}>
                      <td><strong>{name}</strong></td>
                      <td>{p.sign}</td>
                      <td>House {p.house}</td>
                      <td>{p.deg}°</td>
                      <td>{name === 'Sun' ? 'Soul & Atma' : name === 'Moon' ? 'Mind & Emotions' : name === 'Jupiter' ? 'Wisdom & Fortune' : 'Planetary Influence'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Four Pillars Future Predictions */}
          <div className="doc-section">
            <h3 className="doc-sec-title">2. Four Pillars Life Predictions (भविष्यफल)</h3>
            <div className="doc-pillars-list">
              <div className="doc-pillar-item">
                <h4>💼 Professional Career & Wealth Fortune</h4>
                <p><strong>Auspicious Boon:</strong> {horoscopeData.predictions.career.positive}</p>
                <p className="doc-caution"><strong>Cautionary Guard:</strong> {horoscopeData.predictions.career.caution}</p>
              </div>

              <div className="doc-pillar-item">
                <h4>❤️ Love, Marriage & Matrimonial Harmony</h4>
                <p><strong>Auspicious Boon:</strong> {horoscopeData.predictions.love.positive}</p>
                <p className="doc-caution"><strong>Cautionary Guard:</strong> {horoscopeData.predictions.love.caution}</p>
              </div>

              <div className="doc-pillar-item">
                <h4>🌿 Pranic Health & Physical Constitution</h4>
                <p><strong>Auspicious Boon:</strong> {horoscopeData.predictions.health.positive}</p>
                <p className="doc-caution"><strong>Cautionary Guard:</strong> {horoscopeData.predictions.health.caution}</p>
              </div>

              <div className="doc-pillar-item">
                <h4>🔮 Karmic Mission & Spiritual Evolution</h4>
                <p><strong>Auspicious Boon:</strong> {horoscopeData.predictions.destiny.positive}</p>
                <p className="doc-caution"><strong>Cautionary Guard:</strong> {horoscopeData.predictions.destiny.caution}</p>
              </div>
            </div>
          </div>

          {/* Dosha & Yogas Status */}
          <div className="doc-section">
            <h3 className="doc-sec-title">3. Dosha Diagnostics & Auspicious Yogas</h3>
            <div className="doc-dosha-summary">
              <p>
                <strong>Manglik Dosha:</strong> {horoscopeData.doshas.manglik.isManglik ? `Active (${horoscopeData.doshas.manglik.severity}) in House ${horoscopeData.doshas.manglik.marsHouse}` : 'Free from Manglik Dosha.'}
              </p>
              <p>
                <strong>Kaal Sarp Dosha:</strong> {horoscopeData.doshas.kaalSarp.status}
              </p>
              <p>
                <strong>Shani Sade Sati:</strong> {horoscopeData.doshas.sadeSati.details}
              </p>
              {horoscopeData.yogas.length > 0 && (
                <p>
                  <strong>Royal Yogas:</strong> {horoscopeData.yogas.map(y => y.name).join(', ')}
                </p>
              )}
            </div>
          </div>

          {/* Sacred Remedial Protocol to Fix Nakshatra */}
          <div className="doc-section doc-remedies-highlight">
            <h3 className="doc-sec-title">4. Prescribed Nakshatra Shanti & Remedial Action Plan</h3>
            <div className="doc-remedy-grid">
              <div>
                <strong>Sacred Beej Mantra:</strong>
                <p>{horoscopeData.nakshatra.remedy.beejMantra}</p>
              </div>
              <div>
                <strong>Sacred Tree Ritual:</strong>
                <p>{horoscopeData.nakshatra.remedy.treeRitual}</p>
              </div>
              <div>
                <strong>Prescribed Daan (Charity):</strong>
                <p>{horoscopeData.nakshatra.remedy.daan}</p>
              </div>
              <div>
                <strong>Auspicious Gemstone & Metal:</strong>
                <p>{horoscopeData.nakshatra.remedy.gemstone}</p>
              </div>
            </div>
          </div>

          {/* Footer Seal */}
          <div className="doc-footer">
            <div className="seal-text">
              <Sparkles size={16} />
              <span>Certified under Classical Parashara & Chaldean Vedic Tradition</span>
            </div>
            <div className="seal-date">
              Generated on: {new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
