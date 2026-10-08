import React, { useState } from 'react';

// Sacred Lo Shu Grid 3x3 Magic Square with 8 Planes and Missing Number Remedies
export default function LoShuGrid({ loShuData }) {
  const [activePlane, setActivePlane] = useState(null);
  const [selectedMissing, setSelectedMissing] = useState(null);

  if (!loShuData) return null;

  const { counts, planes, missingNumbers } = loShuData;

  // 3x3 Layout coordinates:
  // Row 1: 4, 9, 2
  // Row 2: 3, 5, 7
  // Row 3: 8, 1, 6
  const gridCells = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ];

  const cellNames = {
    4: 'Rahu (Wealth)',
    9: 'Mars (Fame)',
    2: 'Moon (Marriage)',
    3: 'Jupiter (Family)',
    5: 'Mercury (Balance)',
    7: 'Ketu (Children)',
    8: 'Saturn (Knowledge)',
    1: 'Sun (Career)',
    6: 'Venus (Friends)'
  };

  return (
    <div className="loshu-container">
      <div className="loshu-header">
        <div>
          <h3 className="section-title">Sacred Lo Shu Grid (3x3 Magic Square)</h3>
          <p className="section-subtitle">Vedic Numerological Matrix of Destiny Planes & Elemental Balance</p>
        </div>
      </div>

      <div className="loshu-flex-layout">
        {/* The 3x3 Grid */}
        <div className="loshu-grid-wrapper">
          <div className="loshu-grid">
            {gridCells.flat().map((num) => {
              const count = counts[num] || 0;
              const isPresent = count > 0;
              const isHighlight = activePlane && activePlane.digits.includes(num);

              return (
                <div
                  key={num}
                  className={`loshu-cell ${isPresent ? 'cell-present' : 'cell-missing'} ${isHighlight ? 'cell-highlight' : ''}`}
                  onClick={() => {
                    if (!isPresent) {
                      const miss = missingNumbers.find(m => m.digit === num);
                      setSelectedMissing(miss || null);
                    }
                  }}
                >
                  <div className="cell-top">
                    <span className="cell-num">{num}</span>
                    {isPresent && <span className="cell-badge">×{count}</span>}
                  </div>
                  <div className="cell-label">{cellNames[num]}</div>
                  {!isPresent && <span className="cell-missing-tag">Missing (Tap)</span>}
                </div>
              );
            })}
          </div>

          <p className="grid-hint">
            💡 Tap any missing red cell above to inspect its personalized Vedic remedy!
          </p>
        </div>

        {/* Planes Status List */}
        <div className="loshu-planes-list">
          <h4 className="planes-heading">Vibrational Planes Assessment</h4>
          <div className="planes-scroll">
            {planes.map((p) => (
              <div
                key={p.code}
                className={`plane-card ${p.active ? 'plane-complete' : 'plane-partial'} ${activePlane?.code === p.code ? 'plane-active-selected' : ''}`}
                onMouseEnter={() => setActivePlane(p)}
                onMouseLeave={() => setActivePlane(null)}
                onClick={() => setActivePlane(activePlane?.code === p.code ? null : p)}
              >
                <div className="plane-card-header">
                  <div className="plane-title-group">
                    <span className="plane-name">{p.name}</span>
                    <span className={`plane-status-pill ${p.active ? 'status-active' : 'status-partial'}`}>
                      {p.active ? '100% Active Yoga' : `${p.partial}/3 Present`}
                    </span>
                  </div>
                  <span className="plane-digits">Digits: {p.digits.join(' - ')}</span>
                </div>
                <p className="plane-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Missing Number Modal/Drawer */}
      {selectedMissing && (
        <div className="missing-remedy-banner">
          <div className="missing-content">
            <div className="missing-icon-badge">Digit {selectedMissing.digit} Missing</div>
            <div className="missing-text">
              <strong>Vedic Neutralization Remedy:</strong>
              <p>{selectedMissing.remedy}</p>
            </div>
          </div>
          <button className="btn-close-missing" onClick={() => setSelectedMissing(null)}>Dismiss</button>
        </div>
      )}
    </div>
  );
}
