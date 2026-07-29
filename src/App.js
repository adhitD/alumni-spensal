import React from 'react';
import './styles/App.css';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <VideoSection />
      <ProfileSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;