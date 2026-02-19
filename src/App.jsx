import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Instagram, Twitter, Mail, ChevronDown, CheckCircle2, Facebook } from 'lucide-react';

// --- 1. Komponen Logo Spativm (Image) ---
const SpativmLogo = ({ className = "w-full h-full" }) => (
  <img 
    src="spati.png" // Placeholder logo
    alt="Spativm Logo" 
    className={`${className} object-contain`} 
  />
);

// --- 2. Komponen Count Up Animation ---
const CountUp = ({ end, duration = 1500, suffix = "", decimals = 0, isVisible, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;
    let timeoutId;

    // Fungsi animasi frame-by-frame
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Menghitung persentase kelengkapan (0 sampai 1)
      const percentage = Math.min(progress / duration, 1);
      
      // Fungsi Easing (Ease Out Expo) agar melambat di akhir
      const ease = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
      
      setCount(ease(percentage) * end);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      // Delay start sesuai dengan delay fade-in agar sinkron
      timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay);
    }
    // Else block dihapus agar tidak reset ke 0

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible, end, duration, delay]);

  // Format angka sesuai desimal yang diinginkan
  return (
    <span>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

// --- Komponen Animasi Fade In Up (Updated: Trigger Once) ---
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Jika elemen masuk viewport
        if (entry.isIntersecting) {
          setVisible(true);
          // PENTING: Stop observe setelah terlihat pertama kali agar animasi tidak berulang
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px" 
    });

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      // Cleanup safety
      if (current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-none' 
          : 'opacity-0 translate-y-20 blur-sm'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Support Render Props: Mengirim state isVisible ke children jika children berupa fungsi */}
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
};

const SpativmPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi Smooth Scroll
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      id: 1,
      title: "Building Maintenance",
      category: "Perawatan Gedung & Fasilitas",
      description: "Pemeriksaan rutin, perbaikan ringan, hingga pemeliharaan sistem utilitas (listrik, air, AC).",
      image: "https://pgnmas.co.id/assets/images/facilitymanagement/1.JPG"
    },
    {
      id: 2,
      title: "Housekeeping & Hygiene",
      category: "Kebersihan & Sanitasi",
      description: "Pengelolaan kebersihan menyeluruh untuk menciptakan lingkungan kerja yang sehat dan nyaman.",
      image: "https://pgnmas.co.id/assets/images/facilitymanagement/3.JPG"
    },
    {
      id: 3,
      title: "HSE & Security",
      category: "K3 & Pengamanan",
      description: "Pengawasan aspek K3 (Keselamatan & Kesehatan Kerja) serta manajemen keamanan lingkungan.",
      image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&q=80&w=2000"
    },
    {
      id: 4,
      title: "Office Support",
      category: "Layanan Pendukung",
      description: "Resepsionis, operator telepon, tata usaha umum, hingga pengelolaan ruang meeting & coworking.",
      image: "https://pgnmas.co.id/assets/images/facilitymanagement/4.JPG"
    }
  ];

  // Data Clients dengan Logo
  const clients = [
    { name: "Kementerian BUMN", logo: "kemenbumn.png"},
    { name: "SKK Migas", logo: "skk.png" },
    { name: "Pertamina", logo: "pertamina.png" },
    { name: "PGN Group", logo: "https://e7.pngegg.com/pngimages/674/919/png-clipart-pt-perusahaan-gas-negara-tbk-pertamina-natural-gas-joint-company-negara-blue-text-thumbnail.png" },
    { name: "Pertamina EP", logo: "ep.png" },
    { name: "BULOG", logo: "https://logowik.com/content/uploads/images/bulog-202463310.logowik.com.webp" },
    { name: "Bank Mega", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bank_Mega_2013.svg/320px-Bank_Mega_2013.svg.png" },
    { name: "ASDP", logo: "asdp.svg" },
    { name: "Medco E&P", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Logo_MedcoEnergi.png" },
    { name: "Pertamina Hulu Energi", logo: "energi.png" }, 
    { name: "Pertagas", logo: "pertagas.png" },
    { name: "Saka Indonesia", logo: "https://lh6.googleusercontent.com/proxy/hySUaqshZuhxUBlBBMFulbiwc--1Z06TME42Y6m_U1AfIy3RIavUps0jqhjiX0xkRyFpwg5Lo1aaYvpy2wv_MhqIdXO2-gAF39Cj4udi8-mW5syb4_OuUfYA-Do-cNPR2mTZDTYP5Sgc3w9X" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-b border-slate-200 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer z-50 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className={`w-14 h-12 relative transition-all duration-500 group-hover:scale-105 flex items-center justify-center 
                ${!scrolled ? 'brightness-0 invert' : ''} 
             `}>
                <SpativmLogo />
             </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-10 text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-cyan-500 transition-colors">Tentang Kami</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-cyan-500 transition-colors">Layanan</a>
            <a href="#stats" onClick={(e) => handleNavClick(e, 'stats')} className="hover:text-cyan-500 transition-colors">Kinerja</a>
            <a href="#clients" onClick={(e) => handleNavClick(e, 'clients')} className="hover:text-cyan-500 transition-colors">Klien</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-cyan-600 transition-colors">Kontak</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden z-50 p-2 rounded-full transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMenuOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 text-2xl font-light tracking-wide text-slate-900">
            <a onClick={(e) => handleNavClick(e, 'about')} href="#about" className="hover:text-cyan-600 transition-colors">Tentang Kami</a>
            <a onClick={(e) => handleNavClick(e, 'services')} href="#services" className="hover:text-cyan-600 transition-colors">Layanan</a>
            <a onClick={(e) => handleNavClick(e, 'stats')} href="#stats" className="hover:text-cyan-600 transition-colors">Kinerja</a>
            <a onClick={(e) => handleNavClick(e, 'clients')} href="#clients" className="hover:text-cyan-600 transition-colors">Klien</a>
            <a onClick={(e) => handleNavClick(e, 'contact')} href="#contact" className="hover:text-cyan-600 transition-colors">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2500"
            alt="Modern Corporate Building"
            className="w-full h-full object-cover transform scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        </div>
        
        <FadeInSection className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <span className="inline-block mb-4 text-xs md:text-sm tracking-[0.3em] uppercase opacity-90 text-cyan-400 font-bold">
            Regional Building Management Services and Office Facilities
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight drop-shadow-lg">
            SIMPLIFY THE<br/>
            <span className="italic font-light text-slate-200">COMPLICATED ONE</span>
          </h1>
          <p className="max-w-lg mx-auto text-base md:text-lg text-slate-200 font-light leading-relaxed mb-10">
            Memastikan gedung Anda beroperasi dengan aman, terjaga, dan prima. 
            Solusi pengelolaan terpadu untuk aset bernilai tinggi.
          </p>
          <div className="flex justify-center">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="group flex items-center gap-3 text-xs tracking-widest uppercase hover:bg-cyan-600 transition-all bg-[#005494] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
              Lihat Layanan
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInSection>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={28} opacity={0.6} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeInSection>
            <span className="text-cyan-600 text-xs tracking-widest uppercase mb-3 block font-bold">Profil Perusahaan</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight text-[#1F2A44]">
              Menjaga Kualitas,<br />
              <span className="text-cyan-500">Standar Tinggi.</span>
            </h2>
            <div className="bg-slate-50 p-6 border-l-4 border-[#005494] shadow-lg rounded-r-xl">
                <h3 className="text-base font-bold uppercase tracking-widest mb-4 text-[#1F2A44]">Tim Ahli Kami</h3>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs md:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Tenant Relation Officer</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Teknisi (ME & Sipil)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Housekeeper</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Petugas Keamanan</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Tata Usaha Umum</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>Tukang Kebun</li>
                </ul>
            </div>
          </FadeInSection>
          <FadeInSection delay={200} className="space-y-5 text-sm md:text-base text-slate-600 font-light leading-relaxed">
            <p>
              <strong className="text-[#1F2A44] font-semibold">SPATIVM</strong> menyediakan jasa pengelolaan dan perawatan gedung kantor, hotel/wisma, stasiun, kawasan bisnis, gudang, serta layanan pengelolaan lainnya. 
              Kami bertekad memberikan kinerja optimal guna memastikan gedung beroperasi dengan aman, terjaga, dan terawat.
            </p>
            <p>
              Layanan kami mencakup kegiatan pemeriksaan rutin, pembersihan, perbaikan ringan, hingga pemeliharaan sistem utilitas seperti listrik, air, dan AC. 
              Kami tidak hanya berfokus pada aspek teknis, tetapi juga kenyamanan, keselamatan (K3), efisiensi energi, dan keberlanjutan lingkungan.
            </p>
            <div className="mt-6 pt-5 border-t border-slate-200">
               <h4 className="text-xs font-bold text-[#1F2A44] uppercase tracking-wide mb-2">Pendekatan Teknologi</h4>
               <p className="text-xs text-slate-500">Dilengkapi sistem pemantauan berbasis teknologi untuk memastikan respons cepat terhadap gangguan serta pelaporan yang transparan.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="flex justify-between items-end mb-12">
            <div>
              <span className="text-cyan-600 text-xs tracking-widest uppercase mb-2 block font-bold">Lingkup Pekerjaan</span>
              <h2 className="text-3xl font-bold tracking-tight text-[#1F2A44]">Facility Services</h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <FadeInSection 
                key={service.id} 
                delay={index * 150}
                className={`group cursor-pointer ${index % 2 === 1 ? 'md:translate-y-20' : ''}`}
              >
                <div className="relative overflow-hidden aspect-[16/9] mb-4 bg-white rounded-lg shadow-sm">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col border-b border-slate-200 pb-4 group-hover:border-cyan-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#1F2A44] group-hover:text-cyan-600 transition-colors">{service.title}</h3>
                    <span className="text-cyan-600 text-[10px] font-bold uppercase tracking-widest border border-cyan-200 bg-cyan-50 px-2 py-0.5 rounded">{service.category}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={300} className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
             <div>
                <h4 className="font-bold text-[#1F2A44] mb-4 uppercase tracking-widest text-base border-b border-slate-100 pb-2">Layanan Tambahan</h4>
                <ul className="space-y-3 text-slate-600">
                   <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cyan-500"/> <span className="text-xs md:text-sm font-medium">Pengelolaan Fasilitas Parkir & Valet</span></li>
                   <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cyan-500"/> <span className="text-xs md:text-sm font-medium">Manajemen Coworking Space & Meeting</span></li>
                   <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cyan-500"/> <span className="text-xs md:text-sm font-medium">Unit Diklat & Rumah Dinas</span></li>
                   <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cyan-500"/> <span className="text-xs md:text-sm font-medium">Penyediaan Aksesoris Gedung</span></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-[#1F2A44] mb-4 uppercase tracking-widest text-base border-b border-slate-100 pb-2">Layanan Internal PGN</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-loose">
                  Kami menangani pemutakhiran data aset non-jaringan, perbaikan utilitas & atap, perawatan <strong>fire alarm system</strong>, 
                  <strong> waterproofing</strong> (Kantor Pusat Ketapang), serta perbaikan gedung arsip Klender untuk memastikan operasional tanpa henti.
                </p>
             </div>
          </FadeInSection>
        </div>
      </section>

      {/* Metrics / Stats (UPDATED with Counting Animation) */}
      <section id="stats" className="py-20 bg-[#0f172a] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-12">
             <span className="text-cyan-400 text-xs tracking-widest uppercase mb-2 block font-bold">Pencapaian 2024</span>
             <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Kinerja & Produktivitas</h2>
          </FadeInSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center border-t border-slate-800 pt-12">
            {[
              { val: 425, suffix: " M+", label: "Pendapatan FM (IDR)", decimals: 0 },
              { val: 20.35, suffix: "%", label: "Pertumbuhan YoY", decimals: 2 },
              { val: 419, suffix: " Ribu", label: "Total Luasan (m²)", decimals: 0 },
              { val: 14, suffix: "", label: "Partisipasi Lelang", decimals: 0 }
            ].map((stat, idx) => (
              <FadeInSection key={idx} delay={idx * 100} className="space-y-2">
                {/* Menggunakan render prop pattern untuk mengakses isVisible */}
                {(isVisible) => (
                  <>
                    <div className="text-4xl font-light text-white">
                      {/* Animasi counting yang dimulai setelah delay fade-in (100ms * idx) */}
                      <CountUp 
                        end={stat.val} 
                        suffix={stat.suffix} 
                        decimals={stat.decimals} 
                        isVisible={isVisible}
                        delay={idx * 100} 
                      />
                    </div>
                    <div className="text-cyan-400 text-[10px] md:text-xs tracking-widest uppercase font-bold">{stat.label}</div>
                  </>
                )}
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={400} className="mt-12 text-center border-t border-slate-800 pt-6">
            <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Total pengelolaan gedung dan fasilitas seluas <strong>228.058,97 m²</strong> (Bangunan) dan <strong>191.363,53 m²</strong> (Tanah Kosong). 
              Pendapatan spesifik manajemen gedung mencapai <strong>Rp 174,99 Miliar</strong>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FadeInSection className="md:col-span-1">
                 <span className="text-cyan-600 text-xs tracking-widest uppercase mb-3 block font-bold">Mitra Strategis</span>
                 <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5 text-[#1F2A44]">
                    Dipercaya oleh Institusi Vital
                 </h2>
                 <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    SPATIVM aktif melakukan ekspansi pasar dan sinergi dengan BUMN, KKKS Migas, serta Pemerintah.
                    Kami telah memenangkan 6 dari 14 lelang strategis pada tahun 2024.
                 </p>
              </FadeInSection>
              <div className="md:col-span-2">
                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {clients.map((client, idx) => (
                       <FadeInSection key={idx} delay={idx * 50}>
                         <div className="bg-white p-4 border border-slate-200 rounded-lg flex flex-col items-center justify-center text-center h-28 hover:border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default relative overflow-hidden">
                            {client.logo ? (
                              <img 
                                src={client.logo} 
                                alt={`Logo ${client.name}`} 
                                className="w-auto h-12 max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-slate-400 group-hover:text-cyan-600">{client.name.charAt(0)}</span>
                              </div>
                            )}
                         </div>
                       </FadeInSection>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6">
        <FadeInSection className="max-w-2xl mx-auto text-center">
          <span className="text-cyan-600 text-xs tracking-widest uppercase mb-3 block font-bold">Hubungi Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-[#1F2A44]">
            Diskusikan Kebutuhan<br/>Fasilitas Anda.
          </h2>
          
          <div className="bg-slate-50 p-8 md:p-10 shadow-xl rounded-xl text-left border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-bold">Nama Perusahaan</label>
                  <input type="text" id="name" className="w-full bg-white border border-slate-200 p-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm text-slate-800" placeholder="PT Contoh Indonesia" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-bold">Email Kontak</label>
                  <input type="email" id="email" className="w-full bg-white border border-slate-200 p-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm text-slate-800" placeholder="nama@perusahaan.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-wider text-slate-500 mb-2 font-bold">Detail Kebutuhan</label>
                <textarea id="message" rows={4} className="w-full bg-white border border-slate-200 p-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all rounded-sm text-slate-800" placeholder="Ceritakan tentang gedung atau fasilitas yang perlu dikelola..."></textarea>
              </div>
              <button className="w-full bg-[#1F2A44] text-white py-4 px-8 uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all font-bold rounded-sm shadow-lg">
                Kirim Permintaan
              </button>
            </form>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-20 h-20 relative">
                    <SpativmLogo />
                 </div>
              </div>
              
              <p className="text-slate-500 max-w-xs font-light text-xs leading-relaxed">
                Unit bisnis Facility Management terdepan yang mengutamakan kinerja optimal, keamanan, dan keberlanjutan lingkungan kerja.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-[#1F2A44]">Kantor</h4>
              <ul className="space-y-3 text-slate-600 font-light text-xs">
                <li>Jl. KH Zainul Arifin No.20, West Jakarta, Indonesia, Jakarta</li>
                <li>(021) 1234-5678</li>
                <li>info@spatium.co.id</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-[#1F2A44]">Sosial</h4>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/spativm.id/" className="p-2.5 bg-slate-50 rounded-full hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  <Instagram size={16} className="text-slate-700" />
                </a>
                <a href="https://www.facebook.com/spativm.id/" className="p-2.5 bg-slate-50 rounded-full hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  <Facebook size={16} className="text-slate-700" />
                </a>
                <a href="mailto:commercial@pgnmas.co.id" className="p-2.5 bg-slate-50 rounded-full hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                  <Mail size={16} className="text-slate-700" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-100 text-slate-400 text-[10px]">
            <p className="uppercase tracking-wider">&copy; {new Date().getFullYear()} SPATIUM Facility Management.</p>
            <p className="mt-2 md:mt-0 uppercase tracking-wider">Simplify the Complicated One</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <SpativmPage />;
}