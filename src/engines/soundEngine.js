// Sacred Web Audio API Synthesizer: 136.1Hz Cosmic Om Drone & Tibetan Singing Bowl Chime

class SacredSoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.droneGain = null;
    this.isPlayingDrone = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play Tibetan Singing Bowl bell chime
  playBell(freq = 432) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Primary tone
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Harmonic overtone
      const oscHarmonic = this.ctx.createOscillator();
      const gainHarmonic = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(freq * 2.76, now); // Singing bowl harmonic ratio

      // Envelopes
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      gainHarmonic.gain.setValueAtTime(0.001, now);
      gainHarmonic.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
      gainHarmonic.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      oscHarmonic.connect(gainHarmonic);
      gainHarmonic.connect(this.ctx.destination);

      osc.start(now);
      oscHarmonic.start(now);

      osc.stop(now + 3.0);
      oscHarmonic.stop(now + 3.0);
    } catch (e) {
      console.warn('Audio play chime error:', e);
    }
  }

  // Toggle ambient 136.1Hz Cosmic OM drone
  toggleOmDrone() {
    if (this.isPlayingDrone) {
      this.stopDrone();
      return false;
    } else {
      this.startDrone();
      return true;
    }
  }

  startDrone() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneGain = this.ctx.createGain();

      // 136.1 Hz = Om Frequency (Earth Year resonance)
      this.droneOsc1.type = 'triangle';
      this.droneOsc1.frequency.setValueAtTime(136.1, now);

      // 272.2 Hz octave harmonic
      this.droneOsc2.type = 'sine';
      this.droneOsc2.frequency.setValueAtTime(272.2, now);

      this.droneGain.gain.setValueAtTime(0.001, now);
      this.droneGain.gain.exponentialRampToValueAtTime(0.15, now + 1.5);

      this.droneOsc1.connect(this.droneGain);
      this.droneOsc2.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);

      this.droneOsc1.start();
      this.droneOsc2.start();
      this.isPlayingDrone = true;
    } catch (e) {
      console.warn('Drone start error:', e);
    }
  }

  stopDrone() {
    if (!this.isPlayingDrone || !this.droneGain || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      setTimeout(() => {
        if (this.droneOsc1) { this.droneOsc1.stop(); this.droneOsc1.disconnect(); }
        if (this.droneOsc2) { this.droneOsc2.stop(); this.droneOsc2.disconnect(); }
        this.isPlayingDrone = false;
      }, 900);
    } catch (e) {
      this.isPlayingDrone = false;
    }
  }
}

export const sound = new SacredSoundEngine();
