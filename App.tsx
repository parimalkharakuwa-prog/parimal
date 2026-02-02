
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Phone, Mail, MapPin, MessageCircle, Menu, X, 
  ChevronRight, ArrowRight, ShieldCheck, Star, 
  Globe, LayoutDashboard, Settings, UserCheck, 
  Search, Bell, Monitor, CheckCircle, Home, Clock,
  Users, Briefcase, FileText, GraduationCap, Award,
  Shield, Zap, Building, Handshake
} from 'lucide-react';
import { Language, Service, ServiceCategory, Lead, SiteSettings } from './types';
import { INITIAL_SERVICES, INITIAL_SETTINGS, ICON_MAP } from './constants';

// --- Sub-components ---

const LanguageToggle: React.FC<{ lang: Language, setLang: (l: Language) => void }> = ({ lang, setLang }) => (
  <button 
    onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
    className="flex items-center gap-2 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium transition-colors"
  >
    <Globe size={14} className="text-blue-600" />
    <span>{lang === 'en' ? 'मराठी' : 'English'}</span>
  </button>
);

const Navbar: React.FC<{ lang: Language, setLang: (l: Language) => void, onNav: (p: string) => void, current: string, settings: SiteSettings }> = ({ lang, setLang, onNav, current, settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { id: 'home', en: 'Home', mr: 'मुख्यपृष्ठ' },
    { id: 'services', en: 'Services', mr: 'सेवा' },
    { id: 'about', en: 'About Us', mr: 'आमच्याबद्दल' },
    { id: 'contact', en: 'Contact', mr: 'संपर्क' },
    { id: 'admin', en: 'Admin', mr: 'प्रशासक' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNav('home')}>
            <div className="w-10 h-10 bg-metallic rounded-lg flex items-center justify-center text-slate-900 shadow-md">
              <Monitor size={24} />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-900 block leading-none">Parimal</span>
              <span className="text-xs text-slate-500 font-medium">Computers & CSC</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => onNav(l.id)}
                className={`text-sm font-semibold transition-colors ${current === l.id ? 'text-yellow-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {lang === 'en' ? l.en : l.mr}
              </button>
            ))}
            <LanguageToggle lang={lang} setLang={setLang} />
            <a 
              href={`tel:${settings.mobile}`} 
              className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all"
            >
              <Phone size={14} /> {settings.mobile}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle lang={lang} setLang={setLang} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-1">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { onNav(l.id); setIsOpen(false); }}
              className={`block w-full text-left py-2 text-base font-semibold ${current === l.id ? 'text-yellow-600' : 'text-slate-600'}`}
            >
              {lang === 'en' ? l.en : l.mr}
            </button>
          ))}
          <a 
            href={`tel:${settings.mobile}`}
            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-lg font-bold"
          >
            <Phone size={18} /> {lang === 'en' ? 'Call Us' : 'आम्हाला कॉल करा'}
          </a>
        </div>
      )}
    </nav>
  );
};

const ServiceCard: React.FC<{ service: Service, lang: Language, onClick: () => void }> = ({ service, lang, onClick }) => {
  const Icon = ICON_MAP[service.icon] || Monitor;
  const docs = lang === 'en' ? service.docsEn : service.docsMr;

  return (
    <div 
      className={`group relative flex flex-col bg-white p-6 rounded-2xl shadow-sm border transition-all hover:shadow-lg hover:-translate-y-1 ${service.priority ? 'border-yellow-400 ring-4 ring-yellow-50' : 'border-slate-100'}`}
    >
      {service.priority && (
        <div className="absolute -top-3 right-4 bg-metallic text-slate-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
          {lang === 'en' ? 'Most Requested' : 'सर्वात लोकप्रिय'}
        </div>
      )}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${service.priority ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
        <Icon size={28} />
      </div>
      <h3 className={`font-bold text-lg mb-2 ${service.priority ? 'text-slate-900' : 'text-slate-800'}`}>
        {lang === 'en' ? service.nameEn : service.nameMr}
      </h3>
      <p className="text-slate-500 text-sm mb-4 line-clamp-2">
        {lang === 'en' ? service.descriptionEn : service.descriptionMr}
      </p>

      {docs && docs.length > 0 && (
        <div className="mb-6 pt-3 border-t border-slate-100">
           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
             {lang === 'en' ? 'Required Documents' : 'आवश्यक कागदपत्रे'}
           </p>
           <div className="flex flex-wrap gap-1.5">
             {docs.map((d, i) => (
               <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-700 rounded-md border border-slate-100 font-semibold flex items-center gap-1">
                 <CheckCircle size={10} className="text-green-500 flex-shrink-0" /> {d}
               </span>
             ))}
           </div>
        </div>
      )}

      <div className="mt-auto">
        <button 
          onClick={onClick}
          className={`w-full py-2 px-4 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${service.priority ? 'bg-metallic text-slate-900 hover:bg-yellow-500' : 'bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white'}`}
        >
          {lang === 'en' ? service.ctaTextEn : service.ctaTextMr} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const LeadForm: React.FC<{ lang: Language, services: Service[], initialServiceId?: string, onSubmit: (lead: Omit<Lead, 'id' | 'timestamp' | 'status'>) => void }> = ({ lang, services, initialServiceId, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    serviceId: initialServiceId || ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.serviceId) return;
    onSubmit(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {lang === 'en' ? 'Thank you!' : 'धन्यवाद!'}
        </h3>
        <p className="text-slate-600">
          {lang === 'en' ? 'We have received your enquiry. We will contact you shortly.' : 'आम्हाला तुमची चौकशी प्राप्त झाली आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.'}
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold text-blue-600">
          {lang === 'en' ? 'Submit another enquiry' : 'दुसरी चौकशी पाठवा'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        {lang === 'en' ? 'Quick Enquiry' : 'त्वरीत चौकशी'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'Full Name' : 'पूर्ण नाव'}</label>
          <input 
            type="text" 
            placeholder={lang === 'en' ? 'Enter your name' : 'तुमचे नाव प्रविष्ट करा'}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'Mobile Number' : 'मोबाईल नंबर'}</label>
          <input 
            type="tel" 
            placeholder="+91 00000 00000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.mobile}
            onChange={e => setFormData({...formData, mobile: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{lang === 'en' ? 'Service Required' : 'आवश्यक सेवा'}</label>
          <select 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            value={formData.serviceId}
            onChange={e => setFormData({...formData, serviceId: e.target.value})}
            required
          >
            <option value="">{lang === 'en' ? 'Select a Service' : 'सेवा निवडा'}</option>
            {services.map(s => (
              <option key={s.id} value={s.id}>{lang === 'en' ? s.nameEn : s.nameMr}</option>
            ))}
          </select>
        </div>
        <button 
          type="submit"
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-md active:scale-[0.98]"
        >
          {lang === 'en' ? 'Request Callback' : 'कॉलसाठी विनंती करा'}
        </button>
      </form>
    </div>
  );
};

// --- Pages ---

const HomePage: React.FC<{ lang: Language, services: Service[], onApply: (s: Service) => void }> = ({ lang, services, onApply }) => {
  const priorityService = services.find(s => s.priority) || services[0];
  const otherServices = services.filter(s => s.id !== priorityService.id).slice(0, 5);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-yellow-50 opacity-50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} /> Verified CSC Center
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              {lang === 'en' ? (
                <>Fast & Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Government Services</span> Under One Roof</>
              ) : (
                <>एकाच छताखाली जलद आणि विश्वसनीय <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">सरकारी सेवा</span></>
              )}
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              {lang === 'en' 
                ? "Providing transparent, reliable, and efficient citizen services for Chhatrapati Sambhajinagar residents since 2001."
                : "2001 पासून छत्रपती संभाजीनगरच्या रहिवाशांसाठी पारदर्शक, विश्वसनीय आणि कार्यक्षम नागरिक सेवा प्रदान करत आहोत."}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onApply(priorityService)}
                className="bg-metallic text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {lang === 'en' ? 'Apply for Leave & License' : 'भाडे करारनाम्यासाठी अर्ज करा'}
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('services-grid');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-900 transition-all"
              >
                {lang === 'en' ? 'Browse All' : 'सर्व सेवा पहा'}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-400/20 blur-2xl rounded-[2rem] -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1200" 
              alt="Official Agreement Signing" 
              className="relative rounded-3xl shadow-2xl border-4 border-white object-cover aspect-video"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <UserCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">23+ Years</p>
                  <p className="text-xs text-slate-500">Of Trusted Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Shield, titleEn: '100% Secure', titleMr: '१००% सुरक्षित', descEn: 'Direct government portal access.', descMr: 'थेट सरकारी पोर्टल प्रवेश.' },
                { icon: Zap, titleEn: 'Fast Processing', titleMr: 'जलद प्रक्रिया', descEn: 'Most services done same day.', descMr: 'बहुतेक सेवा एकाच दिवशी पूर्ण.' },
                { icon: Award, titleEn: 'Expert Guidance', titleMr: 'तज्ञ मार्गदर्शन', descEn: '23 years of legal experience.', descMr: '२३ वर्षांचा कायदेशीर अनुभव.' },
                { icon: Handshake, titleEn: 'Reliable Support', titleMr: 'विश्वसनीय समर्थन', descEn: 'Full support until completion.', descMr: 'काम पूर्ण होईपर्यंत पूर्ण समर्थन.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:border-yellow-400 transition-all">
                   <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:text-white transition-all">
                     <item.icon size={24} />
                   </div>
                   <h3 className="font-bold text-slate-900 mb-2">{lang === 'en' ? item.titleEn : item.titleMr}</h3>
                   <p className="text-sm text-slate-500">{lang === 'en' ? item.descEn : item.descMr}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'Our Featured Service' : 'आमची वैशिष्ट्यपूर्ण सेवा'}</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
             <div className="bg-slate-50 rounded-3xl p-8 border-4 border-yellow-400 flex flex-col md:flex-row gap-10 items-center shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200/50 rounded-full blur-3xl"></div>
                <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-2xl shadow-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <Home size={64} />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2">Pinnacle Priority</div>
                  <h3 className="text-3xl font-extrabold text-slate-900">{lang === 'en' ? priorityService.nameEn : priorityService.nameMr}</h3>
                  <p className="text-slate-600 text-lg">{lang === 'en' ? priorityService.descriptionEn : priorityService.descriptionMr}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === 'en' ? 'Key Features' : 'प्रमुख वैशिष्ट्ये'}</p>
                      <ul className="space-y-2 text-sm text-slate-700 font-medium">
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Government Portal Entry</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Biometric Verification</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Stamp Duty Support</li>
                        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Instant Receipt</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <FileText size={14} /> {lang === 'en' ? 'Documents Required' : 'आवश्यक कागदपत्रे'}
                      </p>
                      <ul className="space-y-2 text-sm text-slate-700 font-bold bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                        { (lang === 'en' ? priorityService.docsEn : priorityService.docsMr)?.map((doc, idx) => (
                          <li key={idx} className="flex items-center gap-2">• {doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button 
                    onClick={() => onApply(priorityService)}
                    className="mt-8 bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 justify-center md:justify-start shadow-lg"
                  >
                    {lang === 'en' ? 'Apply Now' : 'आताच अर्ज करा'} <ArrowRight size={20} />
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{lang === 'en' ? 'Popular Services' : 'लोकप्रिय सेवा'}</h2>
              <p className="text-slate-500">{lang === 'en' ? 'Get things done quickly with our expert assistance.' : 'आमच्या तज्ञ सहाय्याने गोष्टी त्वरीत पूर्ण करा.'}</p>
            </div>
            <button 
              onClick={() => onApply({ id: 'all' } as any)}
              className="text-yellow-600 font-bold hover:underline flex items-center gap-1"
            >
              {lang === 'en' ? 'View All' : 'सर्व पहा'} <ChevronRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map(s => (
              <ServiceCard key={s.id} service={s} lang={lang} onClick={() => onApply(s)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage: React.FC<{ lang: Language, services: Service[], onApply: (s: Service) => void }> = ({ lang, services, onApply }) => {
  const [filter, setFilter] = useState<ServiceCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return services
      .filter(s => filter === 'all' || s.category === filter)
      .filter(s => {
        const query = search.toLowerCase();
        return s.nameEn.toLowerCase().includes(query) || s.nameMr.toLowerCase().includes(query);
      })
      .sort((a, b) => (a.priority === b.priority ? 0 : a.priority ? -1 : 1));
  }, [services, filter, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{lang === 'en' ? 'All Services' : 'सर्व सेवा'}</h1>
        <p className="text-slate-500">{lang === 'en' ? 'Explore our range of professional digital and citizen services.' : 'आमच्या व्यावसायिक डिजिटल आणि नागरिक सेवांच्या श्रेणीचे अन्वेषण करा.'}</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="flex flex-wrap gap-2 justify-center">
          {['all', ...Object.values(ServiceCategory)].map(c => (
            <button
              key={c}
              onClick={() => setFilter(c as any)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === c ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-900'}`}
            >
              {c === 'all' ? (lang === 'en' ? 'All Categories' : 'सर्व वर्ग') : c}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder={lang === 'en' ? 'Search services...' : 'सेवा शोधा...'}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
        {filtered.map(s => (
          <ServiceCard key={s.id} service={s} lang={lang} onClick={() => onApply(s)} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-400">
            <Search size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg">{lang === 'en' ? 'No services found matching your search.' : 'तुमच्या शोधाशी जुळणारी कोणतीही सेवा सापडली नाही.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutUsPage: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
     <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-6">
           <div className="w-16 h-1 bg-yellow-400"></div>
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
             {lang === 'en' ? 'Bridging the Gap Between You and Government' : 'तुम्ही आणि सरकारमधील अंतर कमी करणे'}
           </h1>
           <p className="text-lg text-slate-600 leading-relaxed">
             {lang === 'en' 
               ? "Parimal Computers & CSC Center has been a cornerstone of Chhatrapati Sambhajinagar's digital infrastructure since 2001. We believe that accessing government services should be simple, transparent, and accessible to everyone."
               : "परिमल कॉम्प्युटर्स आणि सीएससी केंद्र २००१ पासून छत्रपती संभाजीनगरच्या डिजिटल पायाभूत सुविधांचा एक आधारस्तंभ आहे. आमचा असा विश्वास आहे की सरकारी सेवा मिळवणे सोपे, पारदर्शक आणि प्रत्येकासाठी सुलभ असावे."}
           </p>
           <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">23+</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{lang === 'en' ? 'Years Exp' : 'वर्षांचा अनुभव'}</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">10k+</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{lang === 'en' ? 'Happy Citizens' : 'आनंदी नागरिक'}</p>
              </div>
           </div>
        </div>
        <div className="relative">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Our Office" className="rounded-3xl shadow-2xl relative z-10" />
           <div className="absolute -top-6 -right-6 w-full h-full bg-yellow-400 rounded-3xl -z-10"></div>
        </div>
     </div>

     <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Building, titleEn: 'Authorized CSC', titleMr: 'अधिकृत सीएससी', descEn: 'We are a government-authorized Common Service Center.', descMr: 'आम्ही सरकार-अधिकृत कॉमन सर्व्हिस सेंटर आहोत.' },
          { icon: ShieldCheck, titleEn: 'Secure Data', titleMr: 'सुरक्षित डेटा', descEn: 'Your documents and personal data are handled with extreme privacy.', descMr: 'तुमची कागदपत्रे आणि वैयक्तिक डेटा अत्यंत गोपनीयतेने हाताळला जातो.' },
          { icon: Users, titleEn: 'Citizen Centric', titleMr: 'नागरिक केंद्रित', descEn: 'Our services are designed to minimize your visits to government offices.', descMr: 'आमच्या सेवा सरकारी कार्यालयातील तुमच्या फेऱ्या कमी करण्यासाठी तयार केल्या आहेत.' }
        ].map((v, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
             <div className="w-14 h-14 bg-white text-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm"><v.icon size={28} /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'en' ? v.titleEn : v.titleMr}</h3>
             <p className="text-slate-600 leading-relaxed">{lang === 'en' ? v.descEn : v.descMr}</p>
          </div>
        ))}
     </div>
  </div>
);

const ContactPage: React.FC<{ lang: Language, settings: SiteSettings }> = ({ lang, settings }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
       <div className="grid md:grid-cols-2 gap-16 items-start">
         <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">{lang === 'en' ? 'Get In Touch' : 'संपर्क करा'}</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {lang === 'en' 
                ? "Visit our office for quick assistance or reach out via phone/whatsapp. We are here to help you navigate through complex government procedures."
                : "त्वरीत मदतीसाठी आमच्या कार्यालयाला भेट द्या किंवा फोन/व्हॉट्सॲपद्वारे संपर्क साधा. आम्ही तुम्हाला गुंतागुंतीच्या सरकारी प्रक्रियांमध्ये मदत करण्यासाठी येथे आहोत."}
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin size={24} /></div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{lang === 'en' ? 'Office Address' : 'कार्यालयचा पत्ता'}</h3>
                  <p className="text-slate-600">{settings.address}</p>
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(settings.address)}`} target="_blank" className="text-blue-600 text-sm font-bold mt-2 inline-block hover:underline">Get Directions</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0"><Phone size={24} /></div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{lang === 'en' ? 'Call Support' : 'कॉल सपोर्ट'}</h3>
                  <p className="text-slate-600">{settings.mobile}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center flex-shrink-0"><Mail size={24} /></div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{lang === 'en' ? 'Email Us' : 'आम्हाला ईमेल करा'}</h3>
                  <p className="text-slate-600">{settings.email}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 rounded-3xl overflow-hidden border shadow-lg h-64 w-full">
               <iframe 
                src={settings.googleMapsEmbed}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </div>
         <div>
            <LeadForm lang={lang} services={INITIAL_SERVICES} onSubmit={(l) => console.log('Lead:', l)} />
            <div className="mt-8 bg-blue-600 text-white p-6 rounded-2xl flex items-center justify-between">
               <div>
                 <p className="text-sm opacity-80 mb-1">{lang === 'en' ? 'Response Time' : 'प्रतिसाद वेळ'}</p>
                 <p className="text-xl font-bold">~ 15 Minutes</p>
               </div>
               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                 <Clock size={24} />
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

const AdminDashboard: React.FC<{ leads: Lead[], services: Service[], settings: SiteSettings }> = ({ leads, services, settings }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <LayoutDashboard className="text-blue-600" /> Admin Dashboard
        </h1>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all">
             <Settings size={16} /> Site Settings
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Leads', value: leads.length, icon: Users, color: 'blue' },
          { label: 'New Bookings', value: leads.filter(l => l.status === 'new').length, icon: Bell, color: 'yellow' },
          { label: 'Active Services', value: services.length, icon: Briefcase, color: 'green' },
          { label: 'Completion Rate', value: '82%', icon: CheckCircle, color: 'indigo' },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
             <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600`}>
               <stat.icon size={24} />
             </div>
             <div>
               <p className="text-xs font-bold text-slate-500 uppercase">{stat.label}</p>
               <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="font-bold text-slate-900">Recent Enquiries</h2>
            <button className="text-xs text-blue-600 font-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {leads.length > 0 ? leads.map(l => (
                  <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{l.name}</p>
                      <p className="text-xs text-slate-500">{l.mobile}</p>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {services.find(s => s.id === l.serviceId)?.nameEn || l.serviceId}
                    </td>
                    <td className="px-6 py-4">
                       <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${l.status === 'new' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                         {l.status}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-500"><ChevronRight size={18} /></button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-slate-400">No leads found yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white rounded-2xl border shadow-sm p-6">
             <h2 className="font-bold text-slate-900 mb-4">Quick Settings</h2>
             <div className="space-y-4">
                <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Marathi Language</span>
                  <div className="w-10 h-5 bg-green-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">Priority Service Badge</span>
                  <div className="w-10 h-5 bg-green-500 rounded-full relative">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
             </div>
           </div>

           <div className="bg-slate-900 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="font-bold mb-2">Export Data</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">Download your lead and booking data in CSV format for offline reporting.</p>
              <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm">Download Report</button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Footer ---

const Footer: React.FC<{ lang: Language, settings: SiteSettings }> = ({ lang, settings }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 space-y-6">
           <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-metallic rounded-lg flex items-center justify-center text-slate-900 shadow-md">
              <Monitor size={18} />
            </div>
            <span className="font-bold text-xl text-white">Parimal Computers</span>
          </div>
          <p className="text-sm leading-relaxed">
            {lang === 'en' 
              ? "Your trusted partner for all government and citizen services. Fast, Reliable, and Professional."
              : "तुमच्या सर्व सरकारी आणि नागरिक सेवांसाठी तुमचा विश्वसनीय जोडीदार. जलद, विश्वसनीय आणि व्यावसायिक."}
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all"><MessageCircle size={16} className="text-white" /></a>
             <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all"><Phone size={16} className="text-white" /></a>
             <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all"><Mail size={16} className="text-white" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">{lang === 'en' ? 'Quick Links' : 'द्रुत दुवे'}</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-yellow-400 transition-all">{lang === 'en' ? 'Privacy Policy' : 'गोपनीयता धोरण'}</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">{lang === 'en' ? 'Terms of Service' : 'सेवा अटी'}</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">{lang === 'en' ? 'Service Charges' : 'सेवा शुल्क'}</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">{lang === 'en' ? 'Track Application' : 'अर्जाचा मागोवा घ्या'}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">{lang === 'en' ? 'Our Services' : 'आमच्या सेवा'}</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-yellow-400 transition-all">Leave & License</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Passport & PAN</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Travel Bookings</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all">Digital Payments</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">{lang === 'en' ? 'Office' : 'कार्यालय'}</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-yellow-400 flex-shrink-0" />
              <span>{settings.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-yellow-400 flex-shrink-0" />
              <span>{settings.mobile}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-yellow-400 flex-shrink-0" />
              <span>{settings.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
        <p>&copy; 2024 Parimal Computers. All Rights Reserved.</p>
        <p>Managed by CSC e-Governance Services India Limited</p>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleApply = (service: Service) => {
    if (service && service.id !== 'all') {
      setCurrentPage('contact');
    } else {
      setCurrentPage('services');
    }
  };

  const handleLeadSubmission = (newLead: Omit<Lead, 'id' | 'timestamp' | 'status'>) => {
    const lead: Lead = {
      ...newLead,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      status: 'new'
    };
    setLeads([lead, ...leads]);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage lang={lang} services={services} onApply={handleApply} />;
      case 'services': return <ServicesPage lang={lang} services={services} onApply={handleApply} />;
      case 'about': return <AboutUsPage lang={lang} />;
      case 'contact': return <ContactPage lang={lang} settings={settings} />;
      case 'admin': return <AdminDashboard leads={leads} services={services} settings={settings} />;
      default: return <HomePage lang={lang} services={services} onApply={handleApply} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-200 selection:text-yellow-900">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onNav={setCurrentPage} 
        current={currentPage} 
        settings={settings}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer lang={lang} settings={settings} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
         <a 
          href={`tel:${settings.mobile}`}
          className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all hover:scale-110 active:scale-95 md:hidden"
         >
           <Phone size={24} />
         </a>
         <a 
          href={settings.whatsappLink}
          target="_blank"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
         >
           <MessageCircle size={24} />
         </a>
      </div>
    </div>
  );
};

export default App;
