import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import QuickPredictor from './components/QuickPredictor';
import DashboardView from './components/DashboardView';
import MulankPanel from './components/MulankPanel';
import DobKundaliPanel from './components/DobKundaliPanel';
import PalmistryPanel from './components/PalmistryPanel';
import PhonePanel from './components/PhonePanel';
import NamePanel from './components/NamePanel';
import RemediesPanel from './components/RemediesPanel';
import AuthModal from './components/AuthModal';
import ReportModal from './components/ReportModal';

import { calculateMulank, calculateBhagyank, calculatePhoneNumerology, calculateNameNumerology } from './engines/numerologyEngine';
import { calculateVedicHoroscope } from './engines/astrologyEngine';
import { sound } from './engines/soundEngine';

const DEFAULT_PROFILE = {
  name: 'Aarav Sharma',
  email: 'aarav@bhavishyaguru.com',
  dob: '1995-10-24',
  time: '07:15',
  place: 'Varanasi, India',
  phone: '9820156789'
};

export default function App() {
  const [currentTab, setCurrentTab] = useState('quick');
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('bhavishya_user_profile');
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch (e) {
      return DEFAULT_PROFILE;
    }
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  // Computed data memoized based on user profile
  const mulankData = useMemo(() => {
    const day = parseInt(userProfile.dob?.split('-')[2] || '24', 10);
    return calculateMulank(day);
  }, [userProfile.dob]);

  const bhagyankData = useMemo(() => {
    return calculateBhagyank(userProfile.dob);
  }, [userProfile.dob]);

  const horoscopeData = useMemo(() => {
    return calculateVedicHoroscope(userProfile.dob, userProfile.time, userProfile.place);
  }, [userProfile.dob, userProfile.time, userProfile.place]);

  const phoneData = useMemo(() => {
    return calculatePhoneNumerology(userProfile.phone, mulankData.mulank);
  }, [userProfile.phone, mulankData.mulank]);

  const nameData = useMemo(() => {
    return calculateNameNumerology(userProfile.name, mulankData.mulank);
  }, [userProfile.name, mulankData.mulank]);

  // Handle Profile Update
  const handleLoginOrUpdateProfile = (newProfile) => {
    const merged = { ...userProfile, ...newProfile };
    setUserProfile(merged);
    try {
      localStorage.setItem('bhavishya_user_profile', JSON.stringify(merged));
    } catch (e) {}
    sound.playBell(528); // celebratory bell chime
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f59e0b', '#fbbf24', '#ffd700', '#38bdf8']
    });
  };

  const handleUpdateBirthDetails = (dob, time, place) => {
    handleLoginOrUpdateProfile({ dob, time, place });
  };

  const handleUpdatePhone = (phone) => {
    handleLoginOrUpdateProfile({ phone });
  };

  const handleUpdateName = (name) => {
    handleLoginOrUpdateProfile({ name });
  };

  const handleToggleAudio = () => {
    const active = sound.toggleOmDrone();
    setIsAudioOn(active);
  };

  const handleOpenReport = () => {
    sound.playBell(432);
    setIsReportOpen(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ffd700', '#f59e0b', '#a855f7', '#06b6d4']
    });
  };

  return (
    <div className="app-root cosmic-theme">
      {/* Background Starscape Overlay */}
      <div className="cosmic-bg-overlay"></div>

      {/* Main Celestial Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        userProfile={userProfile}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenReport={handleOpenReport}
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Content Body */}
      <main className="main-content-area">
        <div className="content-container">
          {currentTab === 'quick' && (
            <QuickPredictor
              horoscopeData={horoscopeData}
              userProfile={userProfile}
              onNavigate={setCurrentTab}
            />
          )}

          {currentTab === 'dashboard' && (
            <DashboardView
              userProfile={userProfile}
              mulankData={mulankData}
              bhagyankData={bhagyankData}
              horoscopeData={horoscopeData}
              phoneData={phoneData}
              nameData={nameData}
              onNavigate={setCurrentTab}
              onOpenReport={handleOpenReport}
            />
          )}

          {currentTab === 'dob' && (
            <DobKundaliPanel
              initialDob={userProfile.dob}
              initialTime={userProfile.time}
              initialPlace={userProfile.place}
              onUpdateBirthDetails={handleUpdateBirthDetails}
              onNavigateToRemedies={() => setCurrentTab('remedies')}
            />
          )}

          {currentTab === 'palmistry' && (
            <PalmistryPanel />
          )}

          {currentTab === 'mulank' && (
            <MulankPanel
              dob={userProfile.dob}
              onChangeDob={(newDob) => handleLoginOrUpdateProfile({ dob: newDob })}
            />
          )}

          {currentTab === 'phone' && (
            <PhonePanel
              initialPhone={userProfile.phone}
              userMulank={mulankData.mulank}
              onUpdatePhone={handleUpdatePhone}
            />
          )}

          {currentTab === 'name' && (
            <NamePanel
              initialName={userProfile.name}
              userMulank={mulankData.mulank}
              onUpdateName={handleUpdateName}
            />
          )}

          {currentTab === 'remedies' && (
            <RemediesPanel
              userNakshatra={horoscopeData.nakshatra}
              userMulank={mulankData.mulank}
            />
          )}
        </div>
      </main>

      {/* Global Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={userProfile}
        onLogin={handleLoginOrUpdateProfile}
      />

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        userProfile={userProfile}
        mulankData={mulankData}
        bhagyankData={bhagyankData}
        horoscopeData={horoscopeData}
        phoneData={phoneData}
        nameData={nameData}
      />

      {/* Celestial Footer */}
      <footer className="cosmic-footer">
        <div className="footer-container">
          <div className="footer-left">
            <span className="footer-brand">BHAVISHYA GURU • भविष्य गुरु</span>
            <span className="footer-copy">© 2026 Sacred Astrological & Numerological Sciences</span>
          </div>
          <div className="footer-right">
            <span>Parashara Hora • Chaldean Systems • 27 Nakshatras • Vedic Shanti</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
