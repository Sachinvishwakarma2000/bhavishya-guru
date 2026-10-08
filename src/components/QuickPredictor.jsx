import React, { useState } from 'react';
import { 
  Sparkles, Briefcase, Coins, Heart, Activity, 
  HelpCircle, CheckCircle2, AlertTriangle, ArrowRight, 
  Flame, Award, Shield, Compass, Calendar
} from 'lucide-react';

export default function QuickPredictor({ horoscopeData, userProfile, onNavigate }) {
  const [selectedDomain, setSelectedDomain] = useState('career');
  const simple = horoscopeData?.simpleAnswers;
  const dasha = horoscopeData?.dashaTimeline;
  const transits = horoscopeData?.gocharTransits;

  return (
    <div className="quick-predictor animate-fade-in">
      {/* Top Friendly Hero Banner */}
      <div className="simple-hero-card">
        <div className="simple-hero-badge">
          <Sparkles size={16} className="text-gold" />
          <span>सरल भविष्यफल • 1-Click Simple Future Forecast</span>
        </div>
        <h1 className="simple-hero-title">
          {userProfile?.name ? userProfile.name.split(' ')[0] : 'प्रिय साधक'}, आपका सीधा व सटीक भविष्य
        </h1>
        <p className="simple-hero-sub">
          कठिन ज्योतिषीय शब्दों के बिना — सीधे, स्पष्ट और व्यावहारिक रूप में जानिए कि आपका आने वाला समय कैसा रहेगा।
        </p>

        {/* Current Running Mahadasha Highlight Pill */}
        {dasha?.activeMahadasha && (
          <div className="active-dasha-spotlight">
            <div className="dasha-icon-pulse">⚡</div>
            <div className="dasha-spotlight-text">
              <span className="dasha-label">वर्तमान सक्रिय समय (Active Period 2026):</span>
              <strong className="dasha-val text-gold">
                {dasha.activeMahadasha.lord} महादशा ➔ {dasha.activeAntardasha} अंतर्दशा ({dasha.activeMahadasha.startYear} - {dasha.activeMahadasha.endYear})
              </strong>
              <span className="dasha-desc">{dasha.activeForecast?.headline}</span>
            </div>
          </div>
        )}
      </div>

      {/* Accuracy Comparison Section (Direct Answer to User's Question) */}
      <div className="accuracy-shastra-card">
        <div className="shastra-header">
          <Award size={22} className="text-gold" />
          <div>
            <h3 className="shastra-title">भविष्य देखने का कौन सा तरीका सबसे सटीक है? (Accuracy Matrix)</h3>
            <p className="shastra-sub">
              कुंडली, हस्तरेखा (हाथ की लकीर), सामुद्रिक शास्त्र (माथे की लकीर), अंकशास्त्र (Numerology) — जानें किसकी कितनी सटीकता है
            </p>
          </div>
        </div>

        <div className="accuracy-bars-grid">
          {/* #1 Kundali + Mahadasha */}
          <div className="accuracy-bar-card rank-one-card">
            <div className="acc-rank-badge">🏆 #1 सबसे सटीक (92% - 96%)</div>
            <h4 className="acc-name">जन्म कुंडली व विंशोत्तरी महादशा (Vedic Kundali)</h4>
            <div className="acc-meter-wrapper">
              <div className="acc-meter-fill bg-gold-gradient" style={{ width: '95%' }}></div>
            </div>
            <p className="acc-reason">
              <strong>क्यों सबसे सटीक?</strong> यह जन्म के ठीक समय, स्थान और चंद्र नक्षत्र की डिग्री पर आधारित होती है। 
              यह अकेली ऐसी विद्या है जो समय (Timing of Event - कौन से वर्ष व महीने में विवाह/नौकरी होगी) सबसे सटीक बताती है।
            </p>
          </div>

          {/* #2 Hasta Rekha */}
          <div className="accuracy-bar-card">
            <div className="acc-rank-badge rank-two">🥈 #2 कर्म का प्रमाण (82% - 86%)</div>
            <h4 className="acc-name">हस्तरेखा शास्त्र (Palmistry / हाथ की लकीरें)</h4>
            <div className="acc-meter-wrapper">
              <div className="acc-meter-fill bg-cyan-gradient" style={{ width: '84%' }}></div>
            </div>
            <p className="acc-reason">
              <strong>सटीकता:</strong> हाथ की लकीरें आपके अवचेतन मस्तिष्क और कर्म का सीधा भौतिक रूप हैं। 
              यह स्वास्थ्य और जीवन शक्ति दर्शाती हैं, परंतु कर्म बदलने से हर 6 महीने में लकीरें बदलती हैं।
            </p>
          </div>

          {/* #3 Samudrik Shastra */}
          <div className="accuracy-bar-card">
            <div className="acc-rank-badge rank-three">🥉 #3 स्वभाव व भाग्य (76% - 80%)</div>
            <h4 className="acc-name">सामुद्रिक शास्त्र (माथे व चेहरे की लकीरें)</h4>
            <div className="acc-meter-wrapper">
              <div className="acc-meter-fill bg-purple-gradient" style={{ width: '78%' }}></div>
            </div>
            <p className="acc-reason">
              <strong>सटीकता:</strong> माथे की 7 रेखाएं 7 ग्रहों का प्रतिनिधित्व करती हैं। यह मनुष्य का स्वभाव, 
              आयु रेखा और संस्कार बताती हैं, लेकिन सटीक तारीख निकालना इसमें कठिन होता है।
            </p>
          </div>

          {/* #4 Numerology */}
          <div className="accuracy-bar-card">
            <div className="acc-rank-badge rank-four">🏅 #4 ऊर्जा व तरंग (70% - 75%)</div>
            <h4 className="acc-name">अंकशास्त्र (Numerology / मूलांक व नामांक)</h4>
            <div className="acc-meter-wrapper">
              <div className="acc-meter-fill bg-emerald-gradient" style={{ width: '73%' }}></div>
            </div>
            <p className="acc-reason">
              <strong>सटीकता:</strong> जन्म तारीख के अंकों की तरंग (Vibration)। नाम सुधारने, मोबाइल नंबर चुनने 
              और त्वरित स्वभाव समझने के लिए अद्भुत है।
            </p>
          </div>
        </div>
      </div>

      {/* 4 Direct Question Category Tabs */}
      <div className="simple-category-nav">
        <button 
          className={`simple-cat-btn ${selectedDomain === 'career' ? 'cat-active' : ''}`}
          onClick={() => setSelectedDomain('career')}
        >
          <Briefcase size={18} />
          <span>💼 करियर व नौकरी</span>
        </button>
        <button 
          className={`simple-cat-btn ${selectedDomain === 'wealth' ? 'cat-active' : ''}`}
          onClick={() => setSelectedDomain('wealth')}
        >
          <Coins size={18} />
          <span>💰 धन व समृद्धि</span>
        </button>
        <button 
          className={`simple-cat-btn ${selectedDomain === 'marriage' ? 'cat-active' : ''}`}
          onClick={() => setSelectedDomain('marriage')}
        >
          <Heart size={18} />
          <span>💍 विवाह व संबंध</span>
        </button>
        <button 
          className={`simple-cat-btn ${selectedDomain === 'health' ? 'cat-active' : ''}`}
          onClick={() => setSelectedDomain('health')}
        >
          <Activity size={18} />
          <span>🌿 स्वास्थ्य व फिटनेस</span>
        </button>
      </div>

      {/* Selected Domain Card */}
      <div className="simple-card-container">
        {selectedDomain === 'career' && simple?.career && (
          <div className="direct-answer-card border-gold-glow animate-fade-in">
            <div className="answer-top">
              <div className="answer-icon bg-gold-translucent text-gold">
                <Briefcase size={26} />
              </div>
              <div>
                <span className="answer-badge tag-gold">सफलता योग: {simple.career.luckScore}%</span>
                <h2 className="answer-q">{simple.career.question}</h2>
              </div>
            </div>
            
            <div className="answer-body-text">
              {simple.career.answer}
            </div>

            <div className="answer-highlights-grid">
              <div className="highlight-pill">
                <span className="hl-label">सर्वश्रेष्ठ क्षेत्र (Best Fields):</span>
                <strong className="hl-val text-gold">{simple.career.bestFields}</strong>
              </div>
              <div className="highlight-pill">
                <span className="hl-label">उन्नति का समय (Surge Window):</span>
                <strong className="hl-val text-cyan">{simple.career.timeline}</strong>
              </div>
              <div className="highlight-pill">
                <span className="hl-label">गोचर प्रभाव (Current Transit):</span>
                <strong className="hl-val">{transits?.jupiter?.blessing || 'गुरु की शुभ दृष्टि'}</strong>
              </div>
            </div>
          </div>
        )}

        {selectedDomain === 'wealth' && simple?.wealth && (
          <div className="direct-answer-card border-gold-glow animate-fade-in">
            <div className="answer-top">
              <div className="answer-icon bg-gold-translucent text-gold">
                <Coins size={26} />
              </div>
              <div>
                <span className="answer-badge tag-gold">धन योग: {simple.wealth.luckScore}%</span>
                <h2 className="answer-q">{simple.wealth.question}</h2>
              </div>
            </div>
            
            <div className="answer-body-text">
              {simple.wealth.answer}
            </div>

            <div className="answer-highlights-grid">
              <div className="highlight-pill">
                <span className="hl-label">धन आगमन का श्रेष्ठ समय:</span>
                <strong className="hl-val text-gold">{simple.wealth.timeline}</strong>
              </div>
              <div className="highlight-pill">
                <span className="hl-label">सावधानी (Caution):</span>
                <strong className="hl-val text-red-glow">बिना सोचे-समझे उधारी या सट्टे से बचें</strong>
              </div>
            </div>
          </div>
        )}

        {selectedDomain === 'marriage' && simple?.marriage && (
          <div className="direct-answer-card border-pink-glow animate-fade-in">
            <div className="answer-top">
              <div className="answer-icon bg-pink-translucent text-pink">
                <Heart size={26} />
              </div>
              <div>
                <span className="answer-badge tag-pink">सामंजस्य योग: {simple.marriage.luckScore}%</span>
                <h2 className="answer-q">{simple.marriage.question}</h2>
              </div>
            </div>
            
            <div className="answer-body-text">
              {simple.marriage.answer}
            </div>

            <div className="answer-highlights-grid">
              <div className="highlight-pill">
                <span className="hl-label">जीवनसाथी के लक्षण:</span>
                <strong className="hl-val text-pink">{simple.marriage.partnerTraits}</strong>
              </div>
              <div className="highlight-pill">
                <span className="hl-label">मांगलिक स्थिति:</span>
                <strong className="hl-val text-gold">
                  {horoscopeData?.doshas?.manglik?.isManglik ? 'मांगलिक (उपाय आवश्यक)' : 'निर्दोष (शुभ)'}
                </strong>
              </div>
            </div>
          </div>
        )}

        {selectedDomain === 'health' && simple?.health && (
          <div className="direct-answer-card border-emerald-glow animate-fade-in">
            <div className="answer-top">
              <div className="answer-icon bg-emerald-translucent text-emerald">
                <Activity size={26} />
              </div>
              <div>
                <span className="answer-badge tag-emerald">आरोग्य योग: {simple.health.luckScore}%</span>
                <h2 className="answer-q">{simple.health.question}</h2>
              </div>
            </div>
            
            <div className="answer-body-text">
              {simple.health.answer}
            </div>

            <div className="answer-highlights-grid">
              <div className="highlight-pill">
                <span className="hl-label">सावधानी के अंग:</span>
                <strong className="hl-val text-gold">{simple.health.cautionOrgans}</strong>
              </div>
              <div className="highlight-pill">
                <span className="hl-label">सर्वश्रेष्ठ दैनिक आदत:</span>
                <strong className="hl-val text-emerald">प्रातः सूर्य नमस्कार व ध्यान</strong>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Top 3 Simplest Actionable Remedies */}
      <div className="top-remedies-strip">
        <div className="strip-header">
          <Flame size={20} className="text-gold" />
          <h3>नक्षत्र व ग्रहों को शांत करने के 3 सबसे सरल उपाय (बिना किसी खर्च के)</h3>
        </div>
        <div className="remedies-trio-grid">
          {simple?.quickRemedies?.map((rem) => (
            <div key={rem.id} className="simple-rem-box">
              <div className="rem-number">0{rem.id}</div>
              <h4>{rem.title}</h4>
              <p>{rem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
