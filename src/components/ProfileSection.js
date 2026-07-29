import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import profiles from '../data/profiles';

const ProfileSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="profiles" className="profile-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2>Profil Anggota</h2>
          <div className="section-divider"></div>
          <p>Kenali kami lebih dekat, 13 pejuang pendidikan dari Universitas Negeri Gorontalo</p>
        </motion.div>

        <div className="profile-grid">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              className="profile-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
            {/*  Di ProfileSection.js, update bagian image */}
<div className="profile-image">
  <img 
    src={profile.photo} 
    alt={profile.name}
    onError={(e) => {
      // Fallback jika gambar gagal dimuat
      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=667eea&color=fff&size=300`;
    }}
    loading="lazy"
  />
  <div className="profile-role">{profile.role}</div>
</div>
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <p className="profile-nim">{profile.nim}</p>
                <p className="profile-jurusan">{profile.jurusan}</p>
                <p className="profile-univ">{profile.universitas}</p>
                <p className="profile-quote">"{profile.quote}"</p>
                <div className="profile-social">
                  <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;