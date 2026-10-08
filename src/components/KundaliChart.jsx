import React from 'react';

// North Indian Style Vedic Diamond Kundali Chart (Lagna Chart)
// 12 Bhavas with Ascendant Sign and Grahas
export default function KundaliChart({ horoscope }) {
  if (!horoscope) return null;

  const { ascendantSign, housePlanets } = horoscope;
  const ascIndex = ascendantSign.id; // 1 to 12

  // North Indian chart house signs: House N has sign ((ascIndex - 1 + N - 1) % 12) + 1
  const getHouseSignNum = (hNum) => {
    return ((ascIndex - 1 + (hNum - 1)) % 12) + 1;
  };

  // Color badges for Grahas
  const getPlanetBadge = (planet) => {
    const colors = {
      Sun: { bg: '#fef3c7', text: '#b45309', border: '#fde68a' },
      Moon: { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' },
      Mars: { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' },
      Mercury: { bg: '#d1fae5', text: '#047857', border: '#6ee7b7' },
      Jupiter: { bg: '#fef9c3', text: '#a16207', border: '#fde047' },
      Venus: { bg: '#fce7f3', text: '#be185d', border: '#fbcfe8' },
      Saturn: { bg: '#e0e7ff', text: '#3730a3', border: '#c7d2fe' },
      Rahu: { bg: '#ede9fe', text: '#6d28d9', border: '#ddd6fe' },
      Ketu: { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' },
    };
    const c = colors[planet] || { bg: '#1e293b', text: '#f8fafc', border: '#475569' };
    return (
      <span
        key={planet}
        style={{
          backgroundColor: c.bg,
          color: c.text,
          border: `1px solid ${c.border}`,
          borderRadius: '4px',
          padding: '2px 5px',
          fontSize: '11px',
          fontWeight: '700',
          display: 'inline-block',
          margin: '2px'
        }}
      >
        {planet.slice(0, 2)}
      </span>
    );
  };

  return (
    <div className="kundali-container">
      <div className="kundali-header">
        <div className="kundali-title">
          <span>Lagna Kundali (लग्न कुंडली)</span>
          <span className="badge-ascendant">Ascendant: {ascendantSign.name} ({ascendantSign.sanskrit})</span>
        </div>
        <p className="kundali-subtitle">Vedic Sidereal Diamond Birth Chart with 12 Bhavas & Nine Grahas</p>
      </div>

      <div className="kundali-svg-wrapper">
        <svg viewBox="0 0 500 500" className="kundali-svg">
          <defs>
            <linearGradient id="chartBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c1024" />
              <stop offset="100%" stopColor="#060914" />
            </linearGradient>
            <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer Border */}
          <rect x="5" y="5" width="490" height="490" fill="url(#chartBg)" stroke="url(#goldGlow)" strokeWidth="3" rx="8" />

          {/* Diagonals */}
          <line x1="5" y1="5" x2="495" y2="495" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="495" y1="5" x2="5" y2="495" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Diamond Rhombus */}
          <polygon points="250,5 495,250 250,495 5,250" fill="none" stroke="url(#goldGlow)" strokeWidth="2.5" filter="url(#glow)" />

          {/* House 1 (Top Center Diamond) */}
          <g className="house-group" transform="translate(250, 125)">
            <text x="0" y="-35" textAnchor="middle" className="house-number">H1 (Tanu)</text>
            <text x="0" y="-18" textAnchor="middle" className="rashi-indicator">Rashi {getHouseSignNum(1)}</text>
            <foreignObject x="-70" y="-10" width="140" height="45">
              <div className="house-planets-flex">
                {housePlanets[1]?.map(p => getPlanetBadge(p))}
                {(!housePlanets[1] || housePlanets[1].length === 0) && <span className="empty-house">•</span>}
              </div>
            </foreignObject>
          </g>

          {/* House 2 (Top Left Triangle) */}
          <g className="house-group" transform="translate(125, 62)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H2 (Dhana)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(2)}</text>
            <foreignObject x="-55" y="5" width="110" height="40">
              <div className="house-planets-flex">
                {housePlanets[2]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 3 (Far Left Top Triangle) */}
          <g className="house-group" transform="translate(62, 125)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H3 (Sahaja)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(3)}</text>
            <foreignObject x="-50" y="5" width="100" height="40">
              <div className="house-planets-flex">
                {housePlanets[3]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 4 (Left Diamond) */}
          <g className="house-group" transform="translate(125, 250)">
            <text x="0" y="-35" textAnchor="middle" className="house-number">H4 (Sukha)</text>
            <text x="0" y="-18" textAnchor="middle" className="rashi-indicator">Rashi {getHouseSignNum(4)}</text>
            <foreignObject x="-65" y="-10" width="130" height="45">
              <div className="house-planets-flex">
                {housePlanets[4]?.map(p => getPlanetBadge(p))}
                {(!housePlanets[4] || housePlanets[4].length === 0) && <span className="empty-house">•</span>}
              </div>
            </foreignObject>
          </g>

          {/* House 5 (Far Left Bottom Triangle) */}
          <g className="house-group" transform="translate(62, 375)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H5 (Putra)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(5)}</text>
            <foreignObject x="-50" y="5" width="100" height="40">
              <div className="house-planets-flex">
                {housePlanets[5]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 6 (Bottom Left Triangle) */}
          <g className="house-group" transform="translate(125, 437)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H6 (Ripu)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(6)}</text>
            <foreignObject x="-55" y="5" width="110" height="40">
              <div className="house-planets-flex">
                {housePlanets[6]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 7 (Bottom Center Diamond) */}
          <g className="house-group" transform="translate(250, 375)">
            <text x="0" y="-35" textAnchor="middle" className="house-number">H7 (Kalatra)</text>
            <text x="0" y="-18" textAnchor="middle" className="rashi-indicator">Rashi {getHouseSignNum(7)}</text>
            <foreignObject x="-70" y="-10" width="140" height="45">
              <div className="house-planets-flex">
                {housePlanets[7]?.map(p => getPlanetBadge(p))}
                {(!housePlanets[7] || housePlanets[7].length === 0) && <span className="empty-house">•</span>}
              </div>
            </foreignObject>
          </g>

          {/* House 8 (Bottom Right Triangle) */}
          <g className="house-group" transform="translate(375, 437)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H8 (Ayur)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(8)}</text>
            <foreignObject x="-55" y="5" width="110" height="40">
              <div className="house-planets-flex">
                {housePlanets[8]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 9 (Far Right Bottom Triangle) */}
          <g className="house-group" transform="translate(437, 375)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H9 (Dharma)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(9)}</text>
            <foreignObject x="-50" y="5" width="100" height="40">
              <div className="house-planets-flex">
                {housePlanets[9]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 10 (Right Diamond) */}
          <g className="house-group" transform="translate(375, 250)">
            <text x="0" y="-35" textAnchor="middle" className="house-number">H10 (Karma)</text>
            <text x="0" y="-18" textAnchor="middle" className="rashi-indicator">Rashi {getHouseSignNum(10)}</text>
            <foreignObject x="-65" y="-10" width="130" height="45">
              <div className="house-planets-flex">
                {housePlanets[10]?.map(p => getPlanetBadge(p))}
                {(!housePlanets[10] || housePlanets[10].length === 0) && <span className="empty-house">•</span>}
              </div>
            </foreignObject>
          </g>

          {/* House 11 (Far Right Top Triangle) */}
          <g className="house-group" transform="translate(437, 125)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H11 (Labha)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(11)}</text>
            <foreignObject x="-50" y="5" width="100" height="40">
              <div className="house-planets-flex">
                {housePlanets[11]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>

          {/* House 12 (Top Right Triangle) */}
          <g className="house-group" transform="translate(375, 62)">
            <text x="0" y="-15" textAnchor="middle" className="house-number">H12 (Vyaya)</text>
            <text x="0" y="-2" textAnchor="middle" className="rashi-indicator">R {getHouseSignNum(12)}</text>
            <foreignObject x="-55" y="5" width="110" height="40">
              <div className="house-planets-flex">
                {housePlanets[12]?.map(p => getPlanetBadge(p))}
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* Planetary Degrees Ticker */}
      <div className="planet-ticker-grid">
        {Object.entries(horoscope.planetHouses).map(([name, p]) => (
          <div key={name} className="planet-chip">
            <span className="planet-name">{name}</span>
            <span className="planet-sign">{p.sign}</span>
            <span className="planet-house">H{p.house} ({p.deg}°)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
