import React from 'react';
import { 
  Sparkles, Sun, Moon, Smartphone, User, FileText, 
  Volume2, VolumeX, LogIn, ChevronDown, Compass, Flame 
} from 'lucide-react';
import { sound } from '../engines/soundEngine';

export default function Navbar({ 
  currentTab, 
  onSelectTab, 
  userProfile, 
  onOpenAuth, 
  onOpenReport,
  isAudioOn,
  onToggleAudio
}) {
  return (
    <header className="cosmic-navbar">
      <div className="navbar-container">
        {/* Brand Logo & Title */}
        <div className="navbar-brand" onClick={() => onSelectTab('dashboard')}>
          <div className="brand-logo-frame">
            <img src="/bhavishya-logo.jpg" alt="Bhavishya Guru Emblem" className="brand-img" />
          </div>
          <div className="brand-titles">
            <div className="brand-name">
              <span className="brand-text-gold">BHAVISHYA</span>{' '}
              <span className="brand-text-white">GURU</span>
            </div>
            <div className="brand-tagline">Vedic Astrology & Numerology Oracle</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="navbar-nav">
          <button 
            className={`nav-link ${currentTab === 'quick' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('quick')}
          >
            <Sparkles size={16} className="text-gold" />
            <span>⚡ सरल भविष्य</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'dashboard' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('dashboard')}
          >
            <Compass size={16} />
            <span>Dashboard</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'dob' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('dob')}
          >
            <Moon size={16} />
            <span>Kundali & Dasha</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'palmistry' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('palmistry')}
          >
            <span>✋ हस्तरेखा</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'mulank' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('mulank')}
          >
            <Sun size={16} />
            <span>Mulank</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'phone' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('phone')}
          >
            <Smartphone size={16} />
            <span>Phone</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'name' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('name')}
          >
            <span>✍️ Name</span>
          </button>

          <button 
            className={`nav-link ${currentTab === 'remedies' ? 'nav-link-active' : ''}`}
            onClick={() => onSelectTab('remedies')}
          >
            <Flame size={16} />
            <span>Remedies</span>
          </button>
        </nav>

        {/* Right Side Controls */}
        <div className="navbar-actions">
          {/* Audio Chime/Drone Quick Toggle */}
          <button 
            className={`icon-action-btn ${isAudioOn ? 'icon-btn-active' : ''}`}
            title={isAudioOn ? 'Cosmic Sound Active (Tap to Mute)' : 'Play Cosmic Drone'}
            onClick={onToggleAudio}
          >
            {isAudioOn ? <Volume2 size={18} className="text-gold" /> : <VolumeX size={18} />}
          </button>

          {/* Download Kundali Report Button */}
          <button 
            className="btn-gold-outline-sm btn-report-nav" 
            onClick={onOpenReport}
            title="Download full Certified Report"
          >
            <FileText size={16} />
            <span className="hide-mobile">Dossier</span>
          </button>

          {/* User Account / Login Button */}
          {userProfile ? (
            <div className="user-profile-pill" onClick={onOpenAuth}>
              <div className="user-avatar-initial">
                {userProfile.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-name-snippet hide-mobile">
                {userProfile.name.split(' ')[0]}
              </div>
              <ChevronDown size={14} className="user-chevron" />
            </div>
          ) : (
            <button className="btn-primary btn-gold-shimmer btn-sm" onClick={onOpenAuth}>
              <LogIn size={16} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
