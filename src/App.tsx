/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  Plus,
  Minus,
  Users,
  Smartphone,
  Star,
  ShieldCheck,
  FileCheck,
  Video,
  Monitor
} from "lucide-react";
import { 
  COMPANY_NAME,
  BRAND_NAME,
  MOTTO,
  SERVICES, 
  PORTFOLIO, 
  TESTIMONIALS, 
  USPs, 
  WORKFLOW, 
  BLOG_POSTS, 
  FAQS, 
  CERTIFICATIONS,
  VISI,
  MISI,
  TEAM,
  LEGALITY,
  CONSTRUCTION_DRONE
} from "./constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Tentang", href: "#tentang" },
    { name: "Blog", href: "#blog" },
    { name: "Kontak", href: "#kontak" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white border-b border-slate-200 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-1 mb-1">
              <div className="w-2 h-4 bg-brand-blue rounded-t-sm" />
              <div className="w-3 h-7 bg-slate-400 rounded-t-sm" />
              <div className="w-2 h-4 bg-brand-blue rounded-t-sm" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-black text-xl tracking-tighter uppercase leading-none ${isScrolled ? "text-slate-800" : "text-white"}`}>
                ART<span className="text-brand-blue">KAR</span>
              </span>
              <span className={`text-[7px] font-bold tracking-[0.4em] uppercase ${isScrolled ? "text-slate-400" : "text-white/40"}`}>
                {COMPANY_NAME}
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold transition-all hover:text-brand-blue ${isScrolled ? "text-slate-600" : "text-white/80 hover:text-white"}`}
            >
              {link.name}
              {link.name === "Beranda" && <div className="h-0.5 bg-brand-blue w-full mt-0.5 rounded-full" />}
            </a>
          ))}
          <a href="#kontak" className="bg-accent hover:bg-amber-600 text-slate-900 font-bold py-2 px-6 rounded text-xs uppercase tracking-wider transition-all shadow-sm">
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-800" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-800" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 md:hidden flex flex-col gap-4 border-t border-slate-100"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-slate-800 hover:text-brand-blue border-b border-slate-50 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#kontak" className="bg-primary text-white text-center py-3 rounded font-bold uppercase text-xs tracking-widest">
              Konsultasi Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <button 
        className="w-full flex justify-between items-center text-left p-4 hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-slate-800 text-sm">{question}</span>
        {isOpen ? <Minus className="w-4 h-4 flex-shrink-0 text-brand-blue" /> : <Plus className="w-4 h-4 flex-shrink-0 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-slate-100 mt-0">
              <p className="mt-4 text-slate-500 text-xs leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Construction" 
            className="w-full h-full object-cover scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60 backdrop-blur-[1px]" />
        </div>

        <div className="container mx-auto px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
               <div className="h-[2px] w-8 bg-accent" />
               Since 2012 • Professional Contractor
            </div>
            <h1 className="text-4xl md:text-6xl mb-8 leading-[1.1] font-extrabold tracking-tight text-white">
              {MOTTO}
            </h1>
            <p className="text-base text-blue-100/80 mb-10 max-w-lg leading-relaxed font-medium">
              Jasa Konstruksi Profesional {COMPANY_NAME}. Solusi Infrastruktur Terpercaya dengan komitmen pada kualitas dan inovasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#layanan" className="bg-accent hover:bg-amber-600 text-slate-900 font-bold py-4 px-10 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-accent/40">
                Layanan Kami <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#proyek" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 rounded text-xs uppercase tracking-widest text-center transition-all">
                Portofolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT & COMPLIANCE GRID */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
             {/* Left Principle Column */}
             <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="bg-primary text-white p-10 rounded-2xl shadow-xl flex-1 flex flex-col justify-center border border-white/10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-10 text-white/5">
                      <ShieldCheck className="w-40 h-40" />
                   </div>
                   <div className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-3 relative z-10">
                      <div className="h-[1px] w-8 bg-accent" />
                      Core Principles
                   </div>
                   <h2 className="text-4xl font-display font-black mb-8 leading-tight uppercase tracking-tighter relative z-10">VISI KAMI</h2>
                   <p className="text-blue-50 text-base mb-12 leading-relaxed font-medium bg-white/5 p-8 rounded-xl border-l-4 border-accent italic relative z-10">
                      "{VISI}"
                   </p>
                   <div className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-8 relative z-10">MISI STRATEGIS</div>
                   <div className="space-y-6 relative z-10">
                      {MISI.map((m, i) => (
                        <div key={i} className="flex items-start gap-4 group/misi">
                          <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-primary font-black text-xs flex-shrink-0 mt-0.5 group-hover/misi:scale-110 transition-transform">✓</div>
                          <span className="text-xs font-bold tracking-wide leading-snug group-hover/misi:text-accent transition-colors">{m}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Right Compliance Column */}
             <div className="lg:col-span-6 flex flex-col gap-8">
                <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex-1">
                   <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                         <ShieldCheck className="w-6 h-6 text-brand-blue" />
                         <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Profil Legalitas</div>
                      </div>
                      <div className="px-3 py-1 bg-blue-50 text-brand-blue text-[9px] font-black rounded-full uppercase tracking-widest">Verified PKP</div>
                   </div>
                   <div className="grid sm:grid-cols-2 gap-8">
                      {LEGALITY.map((leg, i) => (
                        <div key={i} className="group/leg">
                           <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest group-hover/leg:text-brand-blue transition-colors">{leg.title}</p>
                           <p className="text-xs font-black text-slate-800 border-l-2 border-slate-100 pl-3 py-1">{leg.details}</p>
                        </div>
                      ))}
                   </div>
                   <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                      <p className="text-xs text-slate-500 leading-relaxed italic text-center">
                        "{COMPANY_NAME} ({BRAND_NAME}) menjamin transparansi administratif dan kepatuhan penuh terhadap regulasi konstruksi nasional."
                      </p>
                   </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Cakupan Nasional</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">Seluruh Indonesia</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <p className="text-2xl font-black text-brand-blue leading-none mb-1">10+</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Tahun Pengalaman</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <p className="text-2xl font-black text-brand-blue leading-none mb-1">50+</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Proyek Selesai</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="layanan" className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-brand-blue font-bold text-[10px] tracking-widest uppercase mb-3">Layanan Kami</div>
              <h2 className="text-3xl font-bold text-slate-800">Solusi Konstruksi Terpadu.</h2>
            </div>
            <a href="#" className="text-xs font-bold text-brand-blue flex items-center gap-2 hover:underline">
              Semua Jasa <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-blue mb-4 shadow-sm border border-slate-100 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW & FAQ GRID */}
      <section id="blog" className="py-16">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Workflow Column */}
            <div className="lg:col-span-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">Alur Kerja Kami</div>
               <div className="grid md:grid-cols-2 gap-10 relative">
                  {WORKFLOW.map((step, index) => (
                    <div key={index} className="flex gap-6 relative z-10">
                       <span className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue font-bold text-sm flex-shrink-0 shadow-sm">
                          {step.step}
                       </span>
                       <div>
                          <p className="text-sm font-bold text-slate-800 mb-1">{step.title}</p>
                          <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.description}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Side Blog & FAQ */}
            <div className="lg:col-span-6 flex flex-col md:flex-row gap-8">
               <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Blog Terkini</div>
                  <div className="space-y-6">
                     {BLOG_POSTS.slice(0, 2).map(post => (
                       <div key={post.id} className="pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                          <h4 className="text-sm font-bold text-slate-800 hover:text-brand-blue transition-colors cursor-pointer mb-2 line-clamp-2">{post.title}</h4>
                          <div className="flex items-center gap-3">
                             <span className="text-[10px] font-bold text-slate-400 font-mono">{post.date}</span>
                             <div className="h-1 w-1 bg-slate-300 rounded-full" />
                             <span className="text-[10px] font-bold text-brand-blue">Read More</span>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="flex-1 space-y-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">FAQ</div>
                  {FAQS.slice(0, 3).map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portofolio" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-8 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
            <div>
              <div className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Portfolio Unggulan</div>
              <h2 className="text-4xl font-display font-black tracking-tighter uppercase">Karya Nyata {BRAND_NAME}.</h2>
            </div>
            <p className="max-w-md text-sm text-blue-100/60 leading-relaxed">
              Bukti nyata dedikasi kami dalam membangun infrastruktur berkualitas di seluruh Indonesia.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Durasi</p>
                      <p className="text-xs font-medium text-white/80">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Kapasitas</p>
                      <p className="text-xs font-medium text-white/80 line-clamp-1">{project.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* DRONE FOOTAGE / LIVE MONITORING */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full mb-6">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Site Monitoring</span>
                 </div>
                 <h2 className="text-4xl font-display font-black tracking-tighter uppercase mb-6 text-slate-800">Teknologi Drone <br />Untuk Akurasi Data.</h2>
                 <p className="text-sm text-slate-500 leading-relaxed mb-10 font-medium">
                    Kami menggunakan armada drone industri untuk melakukan pemetaan udara, inspeksi fasad, dan pemantauan progres harian guna menjamin transparansi data bagi klien dan investor.
                 </p>
                 <div className="space-y-6">
                    <div className="flex gap-6 p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 transition-all cursor-pointer">
                       <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                          <Video className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-800 text-sm mb-1">Real-time Footage</h4>
                          <p className="text-xs text-slate-400">Akses visual langsung ke lokasi pembangunan untuk stakeholder utama.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 p-4 rounded-xl border border-slate-100 hover:border-brand-blue/30 transition-all cursor-pointer">
                       <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                          <Monitor className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-800 text-sm mb-1">DASHBOARD LPSE/SPSE</h4>
                          <p className="text-xs text-slate-400">Integrasi pelaporan proyek dengan sistem pengadaan pemerintah yang transparan.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 <div className="grid grid-cols-2 gap-4">
                    {CONSTRUCTION_DRONE.map((drone, i) => (
                       <div key={i} className={`rounded-2xl overflow-hidden relative shadow-2xl ${i === 1 ? 'mt-8' : ''}`}>
                          <img 
                            src={drone.image} 
                            alt={drone.title} 
                            className="w-full aspect-[3/4] object-cover" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-6">
                             <p className="text-white font-bold text-xs">{drone.title}</p>
                             <p className="text-white/60 text-[10px]">{drone.description}</p>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white font-bold">4K HD FEED</div>
                       </div>
                    ))}
                 </div>
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 opacity-20 blur-2xl" />
              </div>
           </div>
        </div>
      </section>
      
      {/* TESTIMONIALS SECTION */}
      <section id="testimoni" className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase mb-4">Client Feedback</div>
            <h2 className="text-4xl font-display font-black tracking-tighter uppercase text-white">Kepuasan Klien Kami.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((testi, i) => (
              <motion.div 
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      className={`w-3 h-3 ${index < testi.rating ? "text-accent fill-accent" : "text-white/20"}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-blue-50/70 leading-relaxed mb-8 italic font-medium">
                  "{testi.content}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                   <img 
                    src={testi.avatar} 
                    alt={testi.name} 
                    className="w-10 h-10 rounded-full border border-white/20 object-cover"
                    referrerPolicy="no-referrer"
                   />
                   <div>
                      <h4 className="font-bold text-white text-xs">{testi.name}</h4>
                      <p className="text-[9px] font-bold text-accent uppercase tracking-wider">{testi.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & LEGALITY GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-8">
           <div className="text-center mb-16">
              <div className="text-brand-blue font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Compliance & Standard</div>
              <h2 className="text-4xl font-display font-black tracking-tighter uppercase text-slate-800">Sertifikasi & Legalitas.</h2>
           </div>
           <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-all group">
                   <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {cert.icon}
                   </div>
                   <p className="text-[11px] font-black text-slate-800 uppercase tracking-tight">{cert.name}</p>
                </div>
              ))}
           </div>
           <div className="mt-16 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {LEGALITY.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                       <FileCheck className="w-6 h-6 text-accent flex-shrink-0" />
                       <div>
                          <h4 className="font-bold text-slate-800 text-xs mb-1 uppercase tracking-wider">{item.title}</h4>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">{item.details}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 text-center mb-16">
           <div className="text-brand-blue font-bold text-[10px] tracking-widest uppercase mb-4 text-center">Executive Team</div>
           <h2 className="text-4xl font-display font-black tracking-tighter uppercase text-slate-800">Tim Profesional Kami.</h2>
        </div>
        <div className="container mx-auto px-8">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {TEAM.map((member, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                   <div className="w-24 h-24 mx-auto rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-slate-300 group-hover:border-accent group-hover:text-accent transition-all mb-8 overflow-hidden">
                      {member.avatar}
                   </div>
                   <h4 className="font-bold text-slate-800 mb-2 text-lg">{member.name}</h4>
                   <div className="inline-block px-3 py-1 bg-brand-blue/10 rounded-full">
                      <p className="text-[10px] text-brand-blue font-black tracking-[0.2em] uppercase">{member.nim}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer id="kontak" className="bg-slate-800 text-white py-8 border-t border-slate-700">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
           <p className="mb-4 md:mb-0">© 2024 {COMPANY_NAME}. All Rights Reserved.</p>
           <div className="flex gap-8">
              <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">📞 +221 466 22</span>
              <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">🌐 arthakaryacon.com</span>
           </div>
        </div>
        <div className="container mx-auto px-8 text-center text-[10px] font-bold uppercase tracking-widest text-white/20">
           {MOTTO}
        </div>
      </footer>
    </div>
  );
}
