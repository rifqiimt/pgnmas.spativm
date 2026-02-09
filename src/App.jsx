import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Flame, 
  Package, 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  ArrowRight, 
  MapPin, 
  Menu, 
  X, 
  Phone, 
  Mail,
  CheckCircle2,
  Trophy,
  Users,
  BarChart3,
  Landmark,
  Briefcase
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper component for Links to avoid repetition
  const NavLink = ({ href, children }) => (
    <a href={href} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
      {children}
    </a>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between md:justify-center relative">
        
        {/* Left Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#beranda">Beranda</NavLink>
          <NavLink href="#layanan">Layanan</NavLink>
        </div>

        {/* Center Logo */}
        <div className="flex items-center gap-3 md:mx-12">
          <div className="relative w-10 h-10">
             <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="url(#blue-gradient)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <path d="M20,80 L80,65 L80,35 L20,50 L20,20 L80,5" />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-wider ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              SPATIUM
            </span>
            <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Building Management
            </span>
          </div>
        </div>

        {/* Right Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#klien">Klien</NavLink>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Menu Button (Positioned absolutely on the right for mobile) */}
        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 border-t border-slate-100">
          {['Beranda', 'Layanan', 'Klien'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-slate-600 font-medium py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-50 to-transparent rounded-tr-[100px] -z-10 opacity-60"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
              <Sparkles size={16} />
              <span>Unit Bisnis PERMATA</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Manajemen Fasilitas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Terintegrasi & Profesional
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Solusi Building Management komprehensif mulai dari Housekeeping, Security, hingga Maintenance Teknis untuk aset vital dan komersial Anda.
            </p>
            <p className="text-xl font-medium text-slate-800 italic">
              "Simplify the Complicated One"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-all hover:shadow-xl">
                Jelajahi Layanan <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-all bg-white">
                Hubungi Tim Ahli
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="bg-slate-100 rounded-2xl overflow-hidden h-64 md:h-96 w-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 z-0"></div>
                  <Building2 size={120} className="text-slate-300 relative z-10" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 text-green-600 rounded-full">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">Operational Excellence</p>
                        <p className="text-xs text-slate-500">Standar Pengelolaan BUMN</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- New Stats Component ---
const StatsSection = () => {
  return (
    <section id="statistik" className="py-12 bg-slate-900 text-white -mt-10 relative z-20 mx-4 md:mx-12 rounded-3xl shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
          <div className="p-4">
            <div className="text-4xl font-bold text-cyan-400 mb-2">419 Ribu+</div>
            <p className="text-sm text-slate-300 uppercase tracking-wider">m² Total Luas Dikelola</p>
            <p className="text-xs text-slate-500 mt-1">(Gedung & Tanah)</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-cyan-400 mb-2">20.35%</div>
            <p className="text-sm text-slate-300 uppercase tracking-wider">Pertumbuhan Kinerja</p>
            <p className="text-xs text-slate-500 mt-1">Year on Year (2024)</p>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-cyan-400 mb-2">174 M+</div>
            <p className="text-sm text-slate-300 uppercase tracking-wider">Pendapatan Gedung</p>
            <p className="text-xs text-slate-500 mt-1">Building Management Revenue</p>
          </div>
          <div className="p-4">
             <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
             <p className="text-sm text-slate-300 uppercase tracking-wider">Klien Strategis</p>
             <p className="text-xs text-slate-500 mt-1">BUMN, Migas & Pemerintah</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScopeCard = ({ icon: Icon, title, description, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={24} className="text-white" />
    </div>
    <h4 className="text-lg font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServiceSection = () => {
  return (
    <section id="layanan" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solusi Pemeliharaan Menyeluruh</h2>
          <p className="text-slate-600">
            Kami memastikan setiap sudut aset Anda terawat dengan standar keteknikan dan kebersihan tertinggi, dari kantor pusat hingga fasilitas vital.
          </p>
        </div>

        {/* Main 3 Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Service 1: Building Maintenance */}
          <div className="flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="h-48 bg-blue-600 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-90"></div>
              <Building2 size={64} className="text-white/20 absolute -right-4 -bottom-4 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
              <Building2 size={48} className="text-white relative z-10" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Building Management</h3>
              <p className="text-sm font-medium text-blue-600 mb-4">Gedung, Kawasan & Fasilitas Kantor</p>
              <p className="text-slate-600 mb-6 flex-1 text-sm">
                Pengelolaan gedung komersial dan perkantoran yang mencakup perawatan fisik, kebersihan, dan kenyamanan penghuni.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={16} className="text-cyan-500" /> Housekeeping & Cleaning</li>
                <li className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={16} className="text-cyan-500" /> Security Management</li>
                <li className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={16} className="text-cyan-500" /> Mechanical Electrical</li>
              </ul>
            </div>
          </div>

          {/* Service 2: Station Gas */}
          <div className="flex flex-col h-full bg-slate-900 text-white rounded-3xl overflow-hidden group hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 relative">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-yellow-500 text-yellow-950 text-xs font-bold px-3 py-1 rounded-full">Vital Asset</span>
            </div>
            <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
               <Flame size={64} className="text-white/10 absolute -right-4 -bottom-4 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
               <Flame size={48} className="text-yellow-500 relative z-10" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Gas Station Facility</h3>
              <p className="text-sm font-medium text-yellow-500 mb-4">Stasiun Gas & Fasilitas Pendukung</p>
              <p className="text-slate-300 mb-6 flex-1 text-sm">
                Pemeliharaan khusus untuk lingkungan aset jaringan gas dengan standar HSSE yang ketat.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle2 size={16} className="text-yellow-500" /> Maintenance Sipil & Utilitas</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle2 size={16} className="text-yellow-500" /> Fire Alarm System</li>
                <li className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle2 size={16} className="text-yellow-500" /> Pengamanan Objek Vital</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Storage */}
          <div className="flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="h-48 bg-cyan-600 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-500 opacity-90"></div>
              <Package size={64} className="text-white/20 absolute -right-4 -bottom-4 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
              <Package size={48} className="text-white relative z-10" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Storage & Logistics</h3>
              <p className="text-sm font-medium text-cyan-600 mb-4">Area Penyimpanan Barang</p>
              <p className="text-slate-600 mb-6 flex-1 text-sm">
                 Pengelolaan gudang arsip dan logistik untuk memastikan barang terorganisir, aman, dan terjaga kondisinya.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Kebersihan Gudang</li>
                <li className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Kontrol Akses</li>
                <li className="flex items-center gap-3 text-slate-700 text-sm"><CheckCircle2 size={16} className="text-blue-500" /> Perbaikan Fasilitas Rak</li>
              </ul>
            </div>
          </div>

          {/* Additional Services List (New Request) */}
          <div className="col-span-1 lg:col-span-3 mt-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fasilitas & Layanan Pendukung Lainnya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Resepsionis & Operator Telepon",
                  "Pengelolaan Parkir & Valet",
                  "Coworking Space Management",
                  "Meeting Room Services",
                  "Unit Diklat & Rumah Dinas",
                  "Pengelolaan Limbah & Lingkungan",
                  "K3 (Health & Safety) Management",
                  "Penyediaan Aksesoris Gedung"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-cyan-300 transition-colors">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                      <Sparkles size={14} />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- New Client / Portfolio Section ---
const ClientSection = () => {
  const clients = [
    { category: "Oil & Gas / Energy", items: ["PT Pertamina Hulu Energi", "PT Pertamina EP", "Pertagas", "PT Transportasi Gas Indonesia", "SAKA Indonesia Pangkah", "Medco E&P", "SKK Migas"] },
    { category: "Pemerintah & BUMN", items: ["Kementerian BUMN", "BULOG", "ASDP Indonesia Ferry"] },
    { category: "Korporasi & Lainnya", items: ["Bank Mega", "PT Perta Samtan Gas", "PT Pertamina Lubricants"] },
  ];

  return (
    <section id="klien" className="py-20 bg-slate-50">
       <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Portfolio Kami</span>
            <h2 className="text-3xl font-bold text-slate-900">Dipercaya Oleh Industri Vital</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              SPATIUM telah membuktikan keandalannya melalui kerjasama strategis dengan berbagai BUMN, instansi pemerintah, dan perusahaan multinasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((group, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  {idx === 0 ? <Flame className="text-yellow-500" size={24}/> : 
                   idx === 1 ? <Landmark className="text-blue-600" size={24}/> : 
                   <Briefcase className="text-cyan-500" size={24}/>}
                  <h3 className="font-bold text-lg text-slate-800">{group.category}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((client, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                <Trophy size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Prestasi Internal PGN Group</h4>
                <p className="text-sm text-slate-600">Perbaikan utilitas gedung pusat (Ketapang), gedung arsip (Klender), & manajemen aset non-jaringan.</p>
              </div>
            </div>
            <div className="text-right hidden md:block">
               <span className="text-2xl font-bold text-slate-800 block">Rp 425.34 Miliar</span>
               <span className="text-xs text-slate-500 uppercase tracking-wide">Total Pendapatan FM 2024</span>
            </div>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-cyan-400 rounded-lg flex items-center justify-center">
                 <span className="font-bold text-xl text-cyan-400">S</span>
              </div>
              <span className="text-2xl font-bold tracking-wider">SPATIUM</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Unit bisnis Facility Management dari PERMATA. Mitra terpercaya dalam pengelolaan fasilitas gedung, keamanan, dan layanan pendukung perkantoran.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Layanan</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Building Management</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Facility Management</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Office Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">HSE & Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="tel:02112345678" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group">
                  <Phone size={18} className="text-cyan-500 group-hover:text-cyan-400" />
                  <span>(021) 1234-5678</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@spatium.co.id" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group">
                  <Mail size={18} className="text-cyan-500 group-hover:text-cyan-400" />
                  <span>hello@spatium.co.id</span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group">
                  <MapPin size={18} className="text-cyan-500 group-hover:text-cyan-400" />
                  <span>Jakarta, Indonesia</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SPATIUM by PERMATA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div 
      className="font-sans antialiased text-slate-800 bg-white selection:bg-cyan-200 selection:text-cyan-900"
      style={{ zoom: '80%' }}
    >
      <Navbar />
      <Hero />
      <StatsSection />
      <ServiceSection />
      <ClientSection />
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mengelola Aset Anda?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan mitra strategis kami di sektor Migas, Pemerintah, dan BUMN untuk pengelolaan fasilitas yang lebih efisien.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-slate-100 transition-all transform hover:-translate-y-1">
            Hubungi Spatium Sekarang
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;