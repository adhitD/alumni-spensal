import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2>Tentang Kami</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Kami adalah mahasiswa PPL dari Universitas Negeri Gorontalo 
              yang telah melaksanakan program pengabdian masyarakat di SMPN 1 Limboto. 
              Selama 4 Bulan, kami berdedikasi untuk memberikan kontribusi positif dalam 
              pengembangan pendidikan dan pemberdayaan masyarakat di lingkungan sekolah.
            </p>
            <p>
              Program KKN ini merupakan wujud nyata dari Tri Dharma Perguruan Tinggi, 
              dimana kami mengaplikasikan ilmu yang telah kami peroleh untuk kemajuan 
              pendidikan di SMPN 1 Limboto.
            </p>
          </motion.div>

          <div className="about-stats">
            {[
              { icon: <FaGraduationCap />, number: "4", label: "Bulan" },
              { icon: <FaUsers />, number: "13", label: "Anggota Tim" },
              { icon: <FaHeart />, number: "5", label: "Program Utama" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;