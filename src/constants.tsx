import { 
  Building2, 
  Paintbrush, 
  Home, 
  Hammer, 
  ShieldCheck, 
  Clock, 
  Award, 
  Users,
  HardHat,
  Smartphone,
  PencilRuler,
  Leaf
} from "lucide-react";

export const COMPANY_NAME = "PT. Artha Karya";
export const BRAND_NAME = "ARTKAR";
export const MOTTO = "Mengarahkan Nilai, Mewujudkan Karya.";

export const SERVICES = [
  {
    id: "ser-1",
    title: "Infrastruktur & Layanan Teknik",
    description: "Pembangunan infrastruktur skala nasional dengan fokus pada daya tahan dan inovasi teknik.",
    icon: <Building2 className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "ser-2",
    title: "Konstruksi Profesional",
    description: "Layanan konstruksi untuk sektor pemerintah (BUMN) dan swasta dengan standar keamanan tinggi.",
    icon: <HardHat className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "ser-3",
    title: "Pengadaan Barang/Jasa (PBJ)",
    description: "Mitra resmi dalam pengadaan barang dan jasa konstruksi melalui sistem LPSE/SPSE.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "ser-4",
    title: "Kemitraan Strategis",
    description: "Kolaborasi jangka panjang dengan developer dan instansi pemerintah dalam pembangunan berkelanjutan.",
    icon: <Users className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
  }
];

export const PORTFOLIO = [
  {
    id: "p-1",
    title: "BUMN TOWER",
    category: "Jakarta Selatan",
    year: "20 bulan",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    details: "30 lantai + 3 basement, 45.000 m²"
  },
  {
    id: "p-2",
    title: "RSUD Artha Medika",
    category: "Bandung",
    year: "16 bulan",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=2070&auto=format&fit=crop",
    details: "12 lantai, 25.000 m²"
  },
  {
    id: "p-3",
    title: "Amanjiwo Resort",
    category: "Surabaya",
    year: "12 bulan",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    details: "Resort 1 lantai, 60.000 m²"
  }
];

export const TEAM = [
  { name: "Muhammad Iqbal M", nim: "2402213", avatar: <Users className="w-8 h-8" /> },
  { name: "Zuhud Ibrahim", nim: "2405210", avatar: <Users className="w-8 h-8" /> },
  { name: "Muhammad Dery L", nim: "2406084", avatar: <Users className="w-8 h-8" /> },
  { name: "Meisya Nur'Azizah", nim: "2406456", avatar: <Users className="w-8 h-8" /> }
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Dinas Kesehatan",
    role: "Klien Pemerintah",
    content: "Team PT. Artha Karya sangat profesional dalam menangani proyek RSUD. Finishing rapi dan tepat waktu.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-2",
    name: "Property Developer",
    role: "Klien Swasta",
    content: "Kemitraan strategis yang memuaskan. Kualitas material premium dan manajemen proyek yang handal.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-3",
    name: "Direktorat Infrastruktur",
    role: "Instansi Pemerintah",
    content: "Koordinasi yang luar biasa dalam proyek strategis nasional. Transparansi dan akuntabilitas terjaga.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-4",
    name: "Retail Mall Management",
    role: "Klien Komersial",
    content: "Pembangunan mall yang efisien dengan memperhatikan aspek keberlanjutan dan estetika modern.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 4
  }
];

export const LEGALITY = [
  { title: "Akta Pendirian", details: "Terdaftar Resmi" },
  { title: "NIB (Nomor Induk Berusaha)", details: "9123456789012" },
  { title: "NPWP Perusahaan", details: "Status PKP" },
  { title: "SBU (Sertifikat Badan Usaha)", details: "Klasifikasi Spesialis" },
  { title: "IUJK / SIUJK", details: "Izin Konstruksi Aktif" },
  { title: "SPT Tahunan", details: "Pelaporan Teratur" }
];

export const CONSTRUCTION_DRONE = [
  {
    id: "d-1",
    title: "Aerial View Project A",
    description: "Proses pembangunan struktur utama dilihat dari udara.",
    image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: "d-2",
    title: "Site Monitoring",
    description: "Pemantauan berkala menggunakan drone untuk akurasi progres.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
  }
];

export const USPs = [
  {
    title: "Sertifikasi GAPENSI",
    description: "Anggota resmi asosiasi kontraktor nasional dengan akreditasi terpercaya.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />
  },
  {
    title: "Strategi LPSE/SPSE",
    description: "Berpengalaman dalam sistem pengadaan barang dan jasa pemerintah secara elektronik.",
    icon: <Clock className="w-6 h-6 text-brand-blue" />
  },
  {
    title: "Inovasi & Teknologi",
    description: "Mengutamakan teknologi modern untuk meningkatkan efisiensi dan nilai tambah proyek.",
    icon: <Users className="w-6 h-6 text-brand-blue" />
  }
];

export const VISI = "Menjadi perusahaan konstruksi nasional terkemuka yang unggul dalam kualitas, inovasi, dan ketepatan pembangunan untuk mendukung kemajuan infrastruktur Indonesia.";
export const MISI = [
  "Memberikan layanan konstruksi yang berkualitas, aman, dan tepat waktu melalui perencanaan matang dan pengendalian proyek yang profesional.",
  "Mengutamakan inovasi dan teknologi modern untuk meningkatkan efisiensi dan nilai tambah pada setiap proyek.",
  "Membangun kemitraan strategis dengan pemerintah, swasta, dan pelaku industri untuk memperluas peluang dan memperkuat kapabilitas perusahaan.",
  "Mendukung pembangunan berkelanjutan melalui penggunaan material ramah lingkungan dan standar keselamatan kerja tinggi.",
  "Meningkatkan kompetensi SDM agar mampu bersaing di industri konstruksi berskala nasional dan internasional."
];

export const WORKFLOW = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Diskusi awal mengenai visi, anggaran, dan kebutuhan proyek Anda.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    step: "02",
    title: "Desain & Perencanaan",
    description: "Pembuatan sketsa, blueprint, dan pemilihan material yang sesuai.",
    icon: <PencilRuler className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Pengerjaan",
    description: "Proses pembangunan fisik dengan pengawasan ketat oleh engineer ahli.",
    icon: <HardHat className="w-6 h-6" />
  },
  {
    step: "04",
    title: "Serah Terima",
    description: "Inspeksi akhir dan penyerahan kunci bangunan yang siap befungsi.",
    icon: <Building2 className="w-6 h-6" />
  }
];

export const BLOG_POSTS = [
  {
    id: "b-1",
    title: "Tips Memilih Material Bangunan Berkualitas",
    date: "12 Apr 2024",
    excerpt: "Memahami perbedaan material penting untuk umur panjang bangunan Anda...",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop"
  }
];

export const FAQS = [
  {
    question: "Berapa lama rata-rata durasi proyek pembangunan infrastruktur?",
    answer: "Tergantung luas dan kerumitan desain, biasanya berkisar antara 12 hingga 36 bulan."
  },
  {
    question: "Apakah PT. Artha Karya melayani luar kota?",
    answer: "Ya, kami melayani proyek di seluruh wilayah Indonesia dengan fokus utama pada pembangunan infrastruktur strategis."
  },
  {
    question: "Apakah PT. Artha Karya terdaftar di sistem pengadaan pemerintah?",
    answer: "Ya, kami aktif berpartisipasi dalam tender melalui sistem LPSE dan SPSE sesuai regulasi pemerintah."
  }
];

export const CERTIFICATIONS = [
  { name: "Sertifikasi ISO 9001:2015", icon: <Award className="text-brand-blue" /> },
  { name: "Sertifikasi ISO 45001 (K3)", icon: <ShieldCheck className="text-brand-blue" /> },
  { name: "Sertifikasi ISO 14001", icon: <Leaf className="text-brand-blue" /> },
  { name: "Member of GAPENSI", icon: <Award className="text-brand-blue" /> },
  { name: "Vendor Terverifikasi LPSE/SPSE", icon: <ShieldCheck className="text-brand-blue" /> }
];
