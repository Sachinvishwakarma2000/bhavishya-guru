import React, { useState } from 'react';
import { User, Mail, Lock, Sparkles, X, CheckCircle, ArrowRight } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin, currentUser }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '1996-07-15',
    time: '08:30',
    place: 'New Delhi, India',
    phone: '9876543210'
  });

  const DEMO_PROFILES = [
    {
      name: 'Aarav Sharma',
      email: 'aarav@bhavishyaguru.com',
      dob: '1995-10-24',
      time: '07:15',
      place: 'Varanasi, India',
      phone: '9820156789',
      role: 'Tech Founder & Innovator (Mulank 6)'
    },
    {
      name: 'Priya Iyer',
      email: 'priya@bhavishyaguru.com',
      dob: '1998-04-09',
      time: '14:20',
      place: 'Chennai, India',
      phone: '9444123456',
      role: 'Creative Designer & Astrologer (Mulank 9)'
    },
    {
      name: 'Vikram Malhotra',
      email: 'vikram@bhavishyaguru.com',
      dob: '1990-01-19',
      time: '11:45',
      place: 'Mumbai, India',
      phone: '9819988771',
      role: 'Finance Director (Mulank 1 - Royal Leader)'
    }
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && isSignUp) return;
    const userToSave = {
      name: formData.name || (isSignUp ? 'New Seeker' : 'Cosmic Pilgrim'),
      email: formData.email,
      dob: formData.dob,
      time: formData.time,
      place: formData.place,
      phone: formData.phone
    };
    onLogin(userToSave);
    onClose();
  };

  const handleSelectDemo = (demo) => {
    onLogin(demo);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="auth-header">
          <div className="auth-emblem">
            <Sparkles size={28} className="gold-sparkle" />
          </div>
          <h2 className="auth-title">
            {isSignUp ? 'Begin Your Cosmic Journey' : 'Welcome to Bhavishya Guru'}
          </h2>
          <p className="auth-subtitle">
            Unlock your sacred destiny blueprint, Nakshatra remedies, and multi-dimensional numerology
          </p>
        </div>

        {/* Quick Demo Login Pills */}
        <div className="demo-profiles-container">
          <div className="demo-label">✨ Quick 1-Click Cosmic Seeker Profiles:</div>
          <div className="demo-pills-grid">
            {DEMO_PROFILES.map((p) => (
              <button
                key={p.email}
                className="demo-pill-btn"
                onClick={() => handleSelectDemo(p)}
              >
                <div className="demo-pill-name">{p.name}</div>
                <div className="demo-pill-role">{p.role}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="auth-divider">
          <span>Or Enter Custom Credentials</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <div className="form-group">
              <label>Full Sacred Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                required
                placeholder="your.email@universe.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Cosmic Key / Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          {isSignUp && (
            <>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Birth Time</label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Birth Place</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={formData.place}
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          <button type="submit" className="btn-primary btn-gold-shimmer auth-submit-btn">
            {isSignUp ? 'Create Cosmic Account' : 'Enter Oracle Portal'}
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="auth-footer-toggle">
          {isSignUp ? (
            <span>
              Already initiated?{' '}
              <button className="link-btn" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </span>
          ) : (
            <span>
              First time seeker?{' '}
              <button className="link-btn" onClick={() => setIsSignUp(true)}>
                Create Free Account
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
