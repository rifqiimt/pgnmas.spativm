import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  FileText, 
  Car, 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Apple,
  Play,
  Instagram,
  Facebook,
  User 
} from 'lucide-react';

// --- BAGIAN 1: DATA & KONFIGURASI ---

const services = [
  {
    title: "Sewa Kendaraan",
    description: "Layanan penyewaan unit kendaraan terbaru lepas kunci untuk kebutuhan operasional harian atau jangka panjang perusahaan Anda.",
    icon: <Car size={24} className="text-[#1f4374]" />,
  },
  {
    title: "Sewa Kendaraan dengan Supir",
    description: "Paket penyewaan lengkap dengan pengemudi profesional yang terlatih, bersertifikasi, dan berpengalaman.",
    icon: <User size={24} className="text-[#1f4374]" />,
  },
  {
    title: "Fleet Management",
    description: "Solusi lengkap mencakup administrasi handal, bengkel resmi, kartu BBM Pertamina nasional, driver bersertifikasi, serta opsi converter kit.",
    icon: <MapPin size={24} className="text-[#1f4374]" />,
  },
];

const features = [
  {
    title: "Asuransi All-Risk",
    description: "Perlindungan menyeluruh untuk setiap unit kendaraan.",
    icon: <ShieldCheck size={32} className="text-white" />,
  },
  {
    title: "Servis Berkala",
    description: "Jadwal servis rutin di bengkel resmi.",
    icon: <Wrench size={32} className="text-white" />,
  },
  {
    title: "Toolkit Lengkap",
    description: "Setiap unit dilengkapi peralatan darurat standar.",
    icon: <Car size={32} className="text-white" />,
  },
  {
    title: "Dokumen Lengkap",
    description: "Jaminan kelengkapan surat-surat kendaraan.",
    icon: <FileText size={32} className="text-white" />,
  },
];

// --- BAGIAN 2: KOMPONEN UI ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <img 
              src="fleedy.png" 
              alt="PGN MAS Logo" 
              className="h-8 w-auto object-contain" 
            />
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                className="text-gray-600 hover:text-[#1f4374] text-sm font-medium transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1f4374] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#1f4374]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'Services', 'Why Us', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                onClick={(e) => handleScroll(e, item.toLowerCase().replace(' ', '-'))}
                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-24 relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#fefefe]">
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-[500px] h-[500px] bg-[#67c7ef] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-6 animate-fade-up text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full text-[#1f4374] font-semibold text-xs mx-auto">
            <span className="w-1.5 h-1.5 bg-[#1f4374] rounded-full animate-pulse"></span>
            Solusi Transportasi Terpercaya
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1f4374] leading-tight font-mark-pro max-w-4xl mx-auto">
            Your Business Partner on <span className="text-[#67c7ef]">The Road</span>
          </h1>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-base text-gray-600 leading-relaxed">
              Layanan Sewa Kendaraan dan Fleet Management profesional untuk menunjang operasional bisnis Anda.
            </p>
            <p className="text-base text-gray-500">
              Powered by <span className="font-bold text-[#1f4374]">@pgnmas</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-[#1f4374] text-white rounded-xl text-sm font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 group cursor-pointer"
            >
              Hubungi Kami
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-6 py-2.5 bg-white text-[#1f4374] border-2 border-[#1f4374]/10 rounded-xl text-sm font-bold hover:bg-gray-50 transition cursor-pointer flex items-center justify-center"
            >
              Lihat Katalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-16 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[#1f4374] text-2xl lg:text-3xl font-bold mb-3 font-mark-pro">Services</h2>
          <p className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto">
            Kami menyediakan solusi komprehensif untuk kebutuhan mobilitas perusahaan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1f4374] p-6 rounded-xl shadow-sm border border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-mark-pro leading-tight">{service.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="scroll-mt-16 py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-[#1f4374] text-2xl lg:text-3xl font-bold mb-4 font-mark-pro">Why Us?</h2>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-6">
              Komitmen kami adalah memberikan ketenangan pikiran bagi bisnis Anda. 
              Fokus pada bisnis inti Anda, biarkan kami yang mengurus armadanya.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden group rounded-xl h-[240px] p-6 flex flex-col justify-end transition-all duration-500 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#67c7ef]/20 via-transparent to-[#67c7ef]/20 border border-[#f6f6f6] rounded-xl z-0"></div>
                <div className="absolute inset-0 bg-[#1f4374] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div className="relative z-20 transform group-hover:-translate-y-1 transition-transform duration-500">
                  <div className="w-10 h-10 bg-[#1f4374] rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/20 backdrop-blur-sm shadow-lg">
                    {React.cloneElement(feature.icon, { className: "text-white", size: 20 })}
                  </div>
                  <h3 className="text-lg font-bold text-[#1f4374] group-hover:text-white mb-1 transition-colors font-mark-pro leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer & CTA Gabungan ---
const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-16 relative pt-24 pb-6 lg:pb-7 overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE FULL AREA */}
      <div className="absolute inset-0 z-0">
        <img 
          src="bg.png" 
          alt="Fleedy Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* 2. BAGIAN CTA */}
        <div className="text-center mb-16 px-6 animate-fade-up">
          <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight font-mark-pro">
            Ready for experience <br/> a service of fleedy?
          </h2>
        </div>

        {/* 3. BAGIAN FOOTER CARD - WARNA PUTIH */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* UBAH DISINI: bg-[#1f4374] text-white -> bg-white text-gray-900 */}
          <div className="bg-white text-gray-900 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                   <div className="inline-block">
                     {/* UBAH DISINI: Hapus brightness-0 invert agar logo berwarna asli */}
                     <img 
                       src="fleedy.png" 
                       alt="PGN MAS Logo" 
                       className="h-8 w-auto object-contain" 
                     />
                   </div>
                </div>
                {/* UBAH DISINI: text-gray-300 -> text-gray-600 */}
                <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
                  Memberikan solusi transportasi terbaik dengan standar keselamatan dan kenyamanan tertinggi untuk mitra bisnis kami.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a href="https://apps.apple.com/us/app/fleedy/id1605578677" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition w-fit">
                    <img src="ios.svg" alt="Download on the App Store" className="h-8 w-auto" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.pgnmas.fleedy&hl=id" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition w-fit">
                     <img src="android.png" alt="Get it on Google Play" className="h-8 w-auto" />
                  </a>
                </div>
              </div>
              
              <div>
                {/* UBAH DISINI: text-white -> text-[#1f4374] */}
                <h4 className="font-bold text-[#1f4374] text-base mb-4 font-mark-pro">Quick Links</h4>
                {/* UBAH DISINI: text-gray-300 -> text-gray-600, hover:text-[#1f4374] */}
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li><a href="#home" className="hover:text-[#1f4374] transition">Home</a></li>
                  <li><a href="#why-us" className="hover:text-[#1f4374] transition">About Us</a></li>
                  <li><a href="#services" className="hover:text-[#1f4374] transition">Services</a></li>
                  <li><a href="#contact" className="hover:text-[#1f4374] transition">Contact</a></li>
                </ul>
              </div>

              <div>
                {/* UBAH DISINI: text-white -> text-[#1f4374] */}
                <h4 className="font-bold text-[#1f4374] text-base mb-4 font-mark-pro">Contact</h4>
                {/* UBAH DISINI: text-gray-300 -> text-gray-600 */}
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">
                    {/* Icon sudah text-[#1f4374], tapi di code sebelumnya text-[#67c7ef]. Ubah ke #1f4374 agar kontras */}
                    <Phone size={16} className="text-[#1f4374]" />
                    <a href="https://api.whatsapp.com/send/?phone=6285775407472&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#1f4374] transition">+62 857-7540-7472 (WA)</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={16} className="text-[#1f4374]" />
                    <a href="mailto:commercial@pgnmas.co.id" className="hover:text-[#1f4374] transition">commercial@pgnmas.co.id</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram size={16} className="text-[#1f4374]" />
                    <a href="https://www.instagram.com/fleedy.id/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1f4374] transition">@fleedy.id</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Facebook size={16} className="text-[#1f4374]" />
                    <a href="https://www.facebook.com/p/Fleedy-100070852897394/?locale=id_ID" target="_blank" rel="noopener noreferrer" className="hover:text-[#1f4374] transition">Fleedy</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#1f4374]" />
                    <span>Jakarta, Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* UBAH DISINI: border-white/10 -> border-gray-200, text-gray-400 -> text-gray-500 */}
            <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
              <p>© 2024 PGN MAS. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#1f4374] transition">Privacy Policy</a>
                <a href="#" className="hover:text-[#1f4374] transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#67c7ef] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Mark Pro', 'Plus Jakarta Sans', sans-serif; }
        .font-mark-pro { font-family: 'Mark Pro', 'Plus Jakarta Sans', sans-serif; }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>

      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
      </main>
      <Footer />
    </div>
  );
}