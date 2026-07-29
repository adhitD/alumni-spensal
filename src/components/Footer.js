import React from 'react';
import { FaHeart, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>UNG Mengajar SMPN 1 Limboto</h3>
            <p>Mengabdi untuk Negeri, Mendidik dengan Hati</p>
          </div>
          
          <div className="footer-section">
            <h4>Kontak Kami</h4>
            <p><FaEnvelope /> ungmengajarsmpn1limboto@gmail.com</p>
            <p>Universitas Negeri Gorontalo</p>
          </div>
          
          <div className="footer-section">
            <h4>Media Sosial</h4>
            <div className="social-links">
              {/* Ganti href="#" dengan URL asli atau gunakan button */}
              <a 
                href="https://www.instagram.com/ungmengajarsmpn1limboto_2026/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram KKN SMPN 1 Limboto"
              >
                <FaInstagram />
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2026 UNG Mengajar SMPN 1 Limboto. Dibuat dengan 
            <FaHeart className="heart-icon" /> oleh Tim KKN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;