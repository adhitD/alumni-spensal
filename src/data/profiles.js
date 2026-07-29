const profiles = [
  {
    id: 1,
    name: "Rahmat Pasulu",
    nim: "911423008",
    jurusan: "Pendidikan Ekonomi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Koordinator Sekolah",
    quote: "Membangun generasi melek ekonomi untuk Indonesia yang lebih sejahtera",
    photo: "images/profil/rahmat.jpg",
    social: {
      instagram: "https://www.instagram.com/rahmat_pasulu/",
      linkedin: "https://linkedin.com/in/rahmatpasulu"
    }
  },
  {
    id: 2,
    name: "Waode Harlina",
    nim: "532422082",
    jurusan: "Pendidikan Teknologi Informasi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Sekretaris",
    quote: "Mengintegrasikan teknologi untuk mencerdaskan kehidupan bangsa",
    photo: "images/profil/waode.jpg",
    social: {
      instagram: "https://www.instagram.com/waode_harlinaa/",
      linkedin: "https://linkedin.com/in/waodeharlina"
    }
  },
  {
    id: 3,
    name: "Anisa S. Tahuru",
    nim: "911423024",
    jurusan: "Pendidikan Ekonomi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Bendahara",
    quote: "Mengelola keuangan dengan bijak, mendidik dengan penuh dedikasi",
    photo: "images/profil/anisa_t.png",
    social: {
      instagram: "https://www.instagram.com/anisatahuru_013/",
      linkedin: "https://linkedin.com/in/anisatahuru"
    }
  },
  {
    id: 4,
    name: "Bagus Juliansyah",
    nim: "532422086",
    jurusan: "Pendidikan Teknologi Informasi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Publikasi, Dekorasi dan Dokumentasi",
    quote: "Mendokumentasikan setiap momen berharga dalam bingkai teknologi dan kreativitas",
    photo: "images/profil/bagus.JPG",
    social: {
      instagram: "https://www.instagram.com/bagusekaliii/",
      linkedin: "https://linkedin.com/in/bagusjuliansyah"
    }
  },
  {
    id: 5,
    name: "Restin Amara",
    nim: "321423121",
    jurusan: "Pendidikan Bahasa Inggris",
    universitas: "Universitas Negeri Gorontalo",
    role: "Acara",
    quote: "Breaking language barriers, building bridges of understanding through education",
    photo: "images/profil/restin.jpg",
    social: {
      instagram: "https://www.instagram.com/restinamara_/",
      linkedin: "https://linkedin.com/in/restinamara"
    }
  },
  {
    id: 6,
    name: "Rahmat Ferdinan Datau",
    nim: "532423001",
    jurusan: "Pendidikan Teknologi Informasi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Perlengkapan",
    quote: "Menyiapkan infrastruktur teknologi untuk mendukung pendidikan masa depan",
    photo: "images/profil/adhit.png",
    social: {
      instagram: "https://www.instagram.com/rhmtfrdnan/",
      linkedin: "https://linkedin.com/in/rahmatferdinan"
    }
  },
  {
    id: 7,
    name: "Selviana",
    nim: "911423014",
    jurusan: "Pendidikan Ekonomi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Menanamkan jiwa kewirausahaan sejak dini untuk masa depan gemilang",
    photo: "images/profil/selvi.jpg",
    social: {
      instagram: "https://www.instagram.com/selvyy_44/",
      linkedin: "https://linkedin.com/in/selviana"
    }
  },
  {
    id: 8,
    name: "Moh. Taufik Bokiu",
    nim: "532422091",
    jurusan: "Pendidikan Teknologi Informasi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Menciptakan solusi digital untuk mempermudah akses pendidikan di era modern",
    photo: "images/profil/upik.jpg",
    social: {
      instagram: "https://instagram.com/taufikbokiu_",
      linkedin: "https://linkedin.com/in/taufikbokiu"
    }
  },
  {
    id: 9,
    name: "Nur Amalia Syamsi",
    nim: "321423010",
    jurusan: "Pendidikan Bahasa Inggris",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Empowering young minds with the power of English for global communication",
    photo: "images/profil/amel.jpg",
    social: {
      instagram: "https://www.instagram.com/ameliasyamsi/",
      linkedin: "https://linkedin.com/in/nuramaliasyamsi"
    }
  },
  {
    id: 10,
    name: "Adelia Idrus",
    nim: "911423022",
    jurusan: "Pendidikan Ekonomi",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Mengajarkan literasi keuangan untuk membangun generasi yang mandiri secara ekonomi",
    photo: "images/profil/adel.jpg",
    social: {
      instagram: "https://www.instagram.com/adel.idruss/",
      linkedin: "https://linkedin.com/in/adeliaidrus"
    }
  },
  {
    id: 11,
    name: "Siti Anisa Panua",
    nim: "321423040",
    jurusan: "Pendidikan Bahasa Inggris",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Teaching English with heart, inspiring students to reach their global dreams",
    photo: "images/profil/anisa.jpg",
    social: {
      instagram: "https://www.instagram.com/its.nn1ssaaa/",
      linkedin: "https://linkedin.com/in/sitianisapanua"
    }
  },
  {
    id: 12,
    name: "Abdul Aziz B.K",
    nim: "321423096",
    jurusan: "Pendidikan Bahasa Inggris",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Unlocking students' potential through the power of English language education",
    photo: "images/profil/aziz.jpg",
    social: {
      instagram: "https://www.instagram.com/the_31_st/",
      linkedin: "https://linkedin.com/in/abdulazizbk"
    }
  },
  {
    id: 13,
    name: "Nurfadilla Abdussama",
    nim: "321423135",
    jurusan: "Pendidikan Bahasa Inggris",
    universitas: "Universitas Negeri Gorontalo",
    role: "Anggota",
    quote: "Inspiring young learners to embrace English as a window to the world",
    photo: "images/profil/fadila.webp",
    social: {
      instagram: "https://www.instagram.com/fadillaabdussama/",
      linkedin: "https://linkedin.com/in/nurfadillaabdussama"
    }
  }
];

export default profiles;