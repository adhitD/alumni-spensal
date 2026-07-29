import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder images - ganti dengan foto asli
  const galleryImages = [
    { id: 1, src: "/images/galeri/pembukaan.jpeg", title: "Pembukaan KKN" },
    { id: 2, src: "/images/galeri/mengajar.jpeg", title: "Mengajar di Kelas" },
    { id: 3, src: "/images/galeri/apel.jpeg", title: "Kegiatan Apel Pagi" },
    { id: 4, src: "/images/galeri/praktek.jpeg", title: "Praktek Coding" },
    { id: 5, src: "images/galeri/pensi.jpeg", title: "Pentas Seni" },
    { id: 6, src: "images/galeri/upacara.jpeg", title: "Upacara Bendera" },
    { id: 7, src: "images/galeri/bimbel.jpeg", title: "Bimbingan Belajar" },
    { id: 8, src: "images/galeri/kerja.jpeg", title: "Kerja Bakti" },
    { id: 9, src: "images/galeri/foto.jpeg", title: "Foto Bersama" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2>Galeri Kegiatan</h2>
          <div className="section-divider"></div>
          <p>Momen-momen berharga selama PPL di SMPN 1 Limboto</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <motion.div 
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;