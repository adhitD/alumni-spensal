import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaSpinner } from 'react-icons/fa';

const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Ganti dengan FILE_ID dari Google Drive Anda
  const googleDriveFileId = "1SxHrpm0ayFXGXmaRXCllrzYpV3uDzKMI"; // GANTI INI
  const previewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${googleDriveFileId}&sz=w1080`;

  // Loading selesai setelah 2 detik (simulasi)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="video" className="video-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2>Video Perpisahan</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="video-content">
          <motion.div 
            className="video-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Video perpisahan ini merupakan rangkuman momen-momen indah selama kami 
              melaksanakan PPL di SMPN 1 Limboto. Terima kasih kepada seluruh guru, 
              staf, dan siswa-siswi yang telah menerima kami dengan hangat.
            </p>
            <p>
              Meskipun masa PPL telah berakhir, kenangan dan pelajaran yang kami 
              dapatkan akan selalu terkenang. Semoga ilmu yang kami bagikan dapat 
              bermanfaat untuk kemajuan SMPN 1 Limboto.
            </p>
          </motion.div>

          <motion.div 
            className="video-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="video-container">
              {/* Thumbnail dengan Overlay Play */}
              {!isPlaying && !hasError && (
                <motion.div 
                  className="video-thumbnail-overlay"
                  onClick={() => setIsPlaying(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${thumbnailUrl}) center/cover no-repeat`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    }}
                  >
                    <FaPlay style={{ fontSize: '2rem', color: '#667eea', marginLeft: '5px' }} />
                  </motion.div>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  }}>
                    Klik untuk Memutar Video Perpisahan
                  </p>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    fontSize: '0.9rem',
                    marginTop: '8px',
                  }}>
                    Kenangan PPL SMPN 1 Limboto
                  </p>
                </motion.div>
              )}

              {/* Loading Screen */}
              {isPlaying && isLoading && !hasError && (
                <motion.div 
                  className="video-loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  {/* Spinner Animation */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '4px solid rgba(255,255,255,0.3)',
                      borderTop: '4px solid white',
                      marginBottom: '20px',
                    }}
                  />
                  
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      textAlign: 'center',
                    }}
                  >
                    Memuat Video...
                  </motion.p>
                  
                  {/* Loading Dots */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 0.6, 
                          delay: i * 0.2 
                        }}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: 'white',
                        }}
                      />
                    ))}
                  </div>

                  <p style={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    fontSize: '0.8rem',
                    marginTop: '20px',
                  }}>
                    Mohon tunggu sebentar...
                  </p>
                </motion.div>
              )}

              {/* Error State */}
              {hasError && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: '#f8f9fa',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    padding: '40px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>😢</div>
                  <h3 style={{ color: '#2d3436', marginBottom: '10px' }}>
                    Video Tidak Dapat Dimuat
                  </h3>
                  <p style={{ color: '#636e72', marginBottom: '20px', lineHeight: '1.6' }}>
                    Maaf, video perpisahan belum tersedia saat ini.<br/>
                    Silakan coba lagi nanti.
                  </p>
                  <button
                    onClick={() => {
                      setHasError(false);
                      setIsPlaying(false);
                      setIsLoading(true);
                    }}
                    style={{
                      padding: '12px 30px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                    }}
                  >
                    Coba Lagi
                  </button>
                </motion.div>
              )}

              {/* Google Drive Video Iframe */}
              {isPlaying && (
                <iframe
                  src={previewUrl}
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Video Perpisahan KKN SMPN 1 Limboto"
                  onLoad={() => {
                    // Loading selesai setelah iframe dimuat
                    setTimeout(() => setIsLoading(false), 1000);
                  }}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                  style={{
                    border: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}
                />
              )}
            </div>
          </motion.div>

          <motion.div 
            className="video-message"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="message-card">
              <FaPlay className="message-icon" />
              <h3>Pesan Perpisahan</h3>
              <p>
                "Terima kasih SMPN 1 Limboto atas kesempatan dan pengalaman berharga ini. 
                Kami datang untuk mengabdi, namun justru kamilah yang banyak belajar. 
                Sampai jumpa di lain waktu, tetap semangat dan teruslah berkarya!"
              </p>
              <p className="message-signature">- Tim PPL 2025/2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;