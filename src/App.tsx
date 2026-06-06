import { useState, useEffect, useRef } from 'react';
import {
  Monitor, Cpu, Wifi, Wrench, ShoppingBag, ChevronDown,
  CheckCircle, XCircle, Star, Phone, Mail, MapPin, Menu, X,
  Zap, Shield, Clock, Users, Home, Briefcase, GraduationCap,
  Gamepad2, Palette, HardDrive, MessageCircle, ArrowRight,
  ChevronRight, Award, Headphones, Truck
} from 'lucide-react';

const WHATSAPP_NUMBER = '524464770991';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function whatsappLink(msg: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimateIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'Mantenimiento de Computadoras',
    desc: 'Diagnóstico completo y optimización de tu equipo.',
    items: ['Limpieza interna y externa', 'Optimización del sistema', 'Eliminación de malware', 'Cambio de pasta térmica', 'Cambio de HDD a SSD', 'Migración de información'],
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Instalación de Programas',
    desc: 'Software profesional configurado y listo para usar.',
    items: ['AutoCAD & Revit', 'SolidWorks & MATLAB', 'Adobe Photoshop & Illustrator', 'Adobe Premiere Pro', 'Microsoft Office', 'Windows original'],
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'Soporte Remoto',
    desc: 'Asistencia técnica sin salir de casa u oficina.',
    items: ['Configuración de Office', 'Impresoras y periféricos', 'Internet y WiFi', 'Correos electrónicos', 'Configuración de software', 'Atención inmediata'],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Armado de PCs',
    desc: 'Equipos ensamblados a la medida de tus necesidades.',
    items: ['PCs Gamer de alto rendimiento', 'Workstations de ingeniería', 'Estaciones de diseño', 'Equipos de oficina', 'Equipos de hogar', 'Asesoría de componentes'],
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'Venta de Equipos',
    desc: 'Laptops, PCs y equipos reacondicionados con garantía.',
    items: ['Laptops nuevas y usadas', 'PCs de escritorio', 'Equipos reacondicionados', 'Garantía incluida', 'Soporte post-venta', 'Financiamiento disponible'],
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: 'Actualización de Hardware',
    desc: 'Dale nueva vida a tu equipo con mejoras de hardware.',
    items: ['Instalación de SSD NVMe', 'Ampliación de RAM', 'Cambio de pantallas', 'Teclados y trackpads', 'Baterías para laptops', 'Fuentes de poder'],
  },
];

const beforeAfter = [
  {
    before: ['Encendido en 3-5 minutos', 'Ventiladores ruidosos', 'Sobrecalentamiento constante', 'Programas tardan en abrir'],
    after: ['Inicio en menos de 15 seg', 'Operación silenciosa', 'Temperatura controlada', 'Rendimiento fluido'],
  },
  {
    before: ['Virus y malware activos', 'Pantallas de error frecuentes', 'Disco duro lento y lleno', 'Sistema inestable'],
    after: ['Sistema limpio y seguro', 'Operación estable', 'Almacenamiento optimizado', 'Sin errores ni fallas'],
  },
];

const packages = [
  {
    name: 'Plan Esencial',
    price: '$400',
    currency: 'MXN',
    highlight: false,
    features: [
      'Limpieza interna básica',
      'Limpieza externa',
      'Optimización del sistema',
      'Actualizaciones de Windows',
      'Eliminación de malware',
    ],
  },
  {
    name: 'Plan HighTech Pro',
    price: '$800',
    currency: 'MXN',
    highlight: true,
    badge: 'Más recomendado',
    features: [
      'Todo lo del Plan Esencial',
      'Desensamble completo',
      'Cambio de pasta térmica',
      'Limpieza profunda con aire',
      'Pruebas de estabilidad',
      'Reporte de diagnóstico',
    ],
  },
];

const reasons = [
  { icon: <Clock className="w-6 h-6" />, text: 'Atención rápida y puntual' },
  { icon: <Headphones className="w-6 h-6" />, text: 'Soporte remoto disponible' },
  { icon: <Truck className="w-6 h-6" />, text: 'Servicio a domicilio' },
  { icon: <Shield className="w-6 h-6" />, text: 'Equipos revisados y probados' },
  { icon: <Users className="w-6 h-6" />, text: 'Asesoría personalizada' },
  { icon: <Zap className="w-6 h-6" />, text: 'Experiencia en hardware y software' },
  { icon: <Award className="w-6 h-6" />, text: 'Garantía en cada servicio' },
  { icon: <CheckCircle className="w-6 h-6" />, text: 'Soluciones para estudiantes, oficinas y empresas' },
];

const audiences = [
  { icon: <GraduationCap className="w-8 h-8" />, label: 'Estudiantes', desc: 'Computadoras listas para clases, proyectos y software educativo.' },
  { icon: <Briefcase className="w-8 h-8" />, label: 'Oficinas', desc: 'Equipos confiables para maximizar la productividad de tu equipo.' },
  { icon: <Wrench className="w-8 h-8" />, label: 'Ingenierías', desc: 'Workstations potentes para AutoCAD, Revit, SolidWorks y MATLAB.' },
  { icon: <Palette className="w-8 h-8" />, label: 'Diseño y Edición', desc: 'Rendimiento óptimo para Adobe Creative Cloud y edición de video.' },
  { icon: <Gamepad2 className="w-8 h-8" />, label: 'Gaming', desc: 'PCs Gamer armadas con los mejores componentes del mercado.' },
  { icon: <Home className="w-8 h-8" />, label: 'Hogar', desc: 'Soporte amigable para toda la familia, desde tablets hasta PCs.' },
];

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Estudiante de Ingeniería',
    text: 'Llevé mi laptop casi sin vida y me la regresaron como nueva. El cambio de HDD a SSD hizo una diferencia enorme. Excelente servicio y muy buen precio.',
    stars: 5,
  },
  {
    name: 'Laura G.',
    role: 'Diseñadora Gráfica',
    text: 'Necesitaba instalar todo el paquete Adobe y configurar mi PC para edición. Lo hicieron en el mismo día. Muy profesionales y rápidos.',
    stars: 5,
  },
  {
    name: 'Roberto S.',
    role: 'Dueño de Negocio',
    text: 'Llevé 4 computadoras de mi oficina para mantenimiento. Las dejaron perfectas y el soporte remoto que me ofrecen es muy valioso.',
    stars: 5,
  },
  {
    name: 'Ana P.',
    role: 'Trabajadora desde Casa',
    text: 'Mi computadora tardaba 10 minutos en encender. Ahora enciende en segundos. La atención fue muy buena y el soporte a domicilio, perfecto.',
    stars: 5,
  },
];

const faqs = [
  {
    q: '¿Cuánto tiempo tarda un mantenimiento?',
    a: 'El tiempo varía según el servicio. Un mantenimiento básico puede completarse en el mismo día. Servicios más complejos pueden tomar 24-48 horas.',
  },
  {
    q: '¿Ofrecen garantía en sus servicios?',
    a: 'Sí, todos nuestros servicios tienen garantía. Si el problema persiste después del servicio, lo revisamos sin costo adicional.',
  },
  {
    q: '¿Pueden venir a mi domicilio?',
    a: 'Sí, contamos con servicio a domicilio en Monterrey y área metropolitana. El costo depende de la ubicación y tipo de servicio.',
  },
  {
    q: '¿Cómo funciona el soporte remoto?',
    a: 'A través de una aplicación segura accedemos a tu equipo con tu permiso. Resolvemos problemas de software, configuraciones e instalaciones sin que salgas de casa.',
  },
  {
    q: '¿Hacen cotizaciones sin costo?',
    a: 'Sí, el diagnóstico y cotización son completamente gratuitos y sin compromiso. Escríbenos por WhatsApp para comenzar.',
  },
  {
    q: '¿Venden refacciones y componentes?',
    a: 'Sí, contamos con acceso a SSD, RAM, pantallas, teclados, baterías y más. Todos con garantía de funcionamiento.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
      ))}
    </div>
  );
}

function WhatsAppCTABanner({ message = '¿Necesitas ayuda? Escríbenos por WhatsApp' }: { message?: string }) {
  return (
    <div className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border-y border-cyan-500/20 py-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white font-medium text-center sm:text-left">{message}</p>
        <a
          href={whatsappLink('Hola, me gustaría obtener información sobre sus servicios.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 whitespace-nowrap text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Escribir ahora
        </a>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors duration-200"
      >
        <span className="font-semibold text-white pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}>
        <p className="px-5 pb-5 text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', telefono: '', servicio: '', mensaje: '' });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Precios', href: '#precios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hola HighTech! Mi nombre es ${formData.nombre}.\nTeléfono: ${formData.telefono}\nServicio: ${formData.servicio}\n${formData.mensaje}`;
    window.open(whatsappLink(msg), '_blank');
    setFormSent(true);
  }

  return (
    <div className="min-h-screen bg-[#080c10] text-white font-sans overflow-x-hidden">

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080c10]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-white text-base">HighTech</span>
              <span className="block text-[10px] text-cyan-400 font-medium tracking-wider uppercase">Equipos y Soporte</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink('Hola, me gustaría solicitar una cotización.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-300 hover:text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'} bg-[#0d1117] border-b border-white/10`}>
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 font-medium py-2 border-b border-white/5">
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink('Hola, me gustaría solicitar una cotización.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-4 py-3 rounded-lg text-sm mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background grid & glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8 text-cyan-400 text-sm font-medium animate-pulse">
            <Zap className="w-3.5 h-3.5" />
            Servicio Técnico Profesional — Monterrey, N.L.
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
            ¿Tu computadora está{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              lenta o presenta fallas?
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Diagnóstico, mantenimiento, actualizaciones, instalación de programas y soporte técnico profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={whatsappLink('Hola, me gustaría solicitar una cotización sin compromiso.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              <CheckCircle className="w-5 h-5" />
              Solicitar Cotización
            </a>
            <a
              href={whatsappLink('Hola! Necesito soporte técnico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/40 hover:border-green-400 text-green-400 hover:text-green-300 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Directo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {[
              { icon: <CheckCircle className="w-4 h-4" />, text: 'Atención personalizada' },
              { icon: <Wifi className="w-4 h-4" />, text: 'Servicio remoto' },
              { icon: <Truck className="w-4 h-4" />, text: 'Servicio a domicilio' },
              { icon: <Shield className="w-4 h-4" />, text: 'Cotización sin compromiso' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                {b.icon}
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        <a href="#servicios" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      <WhatsAppCTABanner />

      {/* Services */}
      <section id="servicios" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Nuestros Servicios</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Soluciones técnicas <span className="text-cyan-400">completas</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Todo lo que tu equipo necesita para funcionar al máximo rendimiento.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="group bg-[#0d1117] border border-white/8 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 h-full">
                  <div className="w-14 h-14 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-4 transition-colors duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hola, me interesa el servicio de ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors group/btn"
                  >
                    Solicitar servicio
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTABanner message="Obtén tu diagnóstico gratuito hoy mismo" />

      {/* Before & After */}
      <section className="py-24 px-4 sm:px-6 bg-[#0a0e13]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Transformación Real</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Antes <span className="text-gray-500">&</span> Después
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Resultados comprobables en cada servicio que realizamos.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfter.map((item, i) => (
              <AnimateIn key={i} delay={i * 150}>
                <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/8">
                  <div className="bg-red-950/30 border-r border-white/8 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="font-bold text-red-400 text-sm uppercase tracking-wider">Antes</span>
                    </div>
                    <ul className="space-y-3">
                      {item.before.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                          <XCircle className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-teal-950/30 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                      <span className="font-bold text-teal-400 text-sm uppercase tracking-wider">Después</span>
                    </div>
                    <ul className="space-y-3">
                      {item.after.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="precios" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Paquetes de Mantenimiento</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Planes <span className="text-cyan-400">simples y claros</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Sin sorpresas. Precios fijos para mantener tu equipo en perfectas condiciones.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {packages.map((pkg, i) => (
              <AnimateIn key={i} delay={i * 150}>
                <div className={`relative rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-cyan-950/60 to-teal-950/60 border-2 border-cyan-500/60 shadow-xl shadow-cyan-500/15'
                    : 'bg-[#0d1117] border border-white/10 hover:border-cyan-500/30'
                }`}>
                  {pkg.highlight && pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black text-xs font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-5">
                    <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? 'text-cyan-400' : 'text-white'}`}>{pkg.name}</h3>
                    <div className="flex items-end gap-1 mt-3">
                      <span className={`text-4xl font-black ${pkg.highlight ? 'text-white' : 'text-gray-200'}`}>{pkg.price}</span>
                      <span className="text-gray-500 mb-1 text-sm">{pkg.currency}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-gray-300 text-sm">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${pkg.highlight ? 'text-cyan-400' : 'text-teal-500'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hola, me interesa el ${pkg.name} de $${pkg.price} MXN.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black hover:shadow-lg hover:shadow-cyan-500/30'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar ahora
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTABanner message="¿Tienes dudas sobre el servicio? Te asesoramos por WhatsApp" />

      {/* Why Us */}
      <section id="nosotros" className="py-24 px-4 sm:px-6 bg-[#0a0e13]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Por qué elegirnos</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                La diferencia <span className="text-cyan-400">HighTech</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Nos comprometemos a brindar el mejor servicio técnico en Monterrey.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="flex items-start gap-3 bg-[#0d1117] border border-white/8 hover:border-cyan-500/30 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-10 h-10 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0 transition-colors duration-300">
                    {r.icon}
                  </div>
                  <p className="text-gray-300 text-sm font-medium leading-snug pt-1.5">{r.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Para quién es</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Servimos a <span className="text-cyan-400">todos</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Desde estudiantes hasta empresas, tenemos la solución que necesitas.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {audiences.map((a, i) => (
              <AnimateIn key={i} delay={i * 70}>
                <div className="group bg-[#0d1117] border border-white/8 hover:border-cyan-500/40 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 cursor-default">
                  <div className="w-14 h-14 bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mx-auto mb-3 transition-colors duration-300">
                    {a.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{a.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{a.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 bg-[#0a0e13]">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Testimonios</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Lo que dicen nuestros <span className="text-cyan-400">clientes</span>
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="bg-[#0d1117] border border-white/8 hover:border-cyan-500/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">
                  <StarRating count={t.stars} />
                  <p className="text-gray-400 text-sm leading-relaxed my-4 flex-1">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-cyan-400/70 text-xs">{t.role}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTABanner message="¿Listo para mejorar tu equipo? Contáctanos ahora" />

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Preguntas Frecuentes</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Resolvemos tus <span className="text-cyan-400">dudas</span>
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 px-4 sm:px-6 bg-[#0a0e13]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Contacto</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-4">
                Hablemos de tu <span className="text-cyan-400">equipo</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Cuéntanos tu problema y te damos solución rápida. Sin costo de diagnóstico.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info */}
            <AnimateIn className="lg:col-span-2">
              <div className="space-y-5 h-full">
                <div className="bg-[#0d1117] border border-white/8 rounded-2xl p-6 space-y-5">
                  <h3 className="font-bold text-white text-lg">HighTech Equipos y Soporte</h3>
                  <div className="space-y-4">
                    <a
                      href={whatsappLink('Hola HighTech!')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">WhatsApp</p>
                        <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">+52 446 477 0991</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Ubicación</p>
                        <p className="text-white font-semibold text-sm">Monterrey, Nuevo León</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Horario</p>
                        <p className="text-white font-semibold text-sm">Lun–Sáb 9:00 – 19:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappLink('Hola HighTech! Quiero una cotización.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                </a>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn delay={150} className="lg:col-span-3">
              <div className="bg-[#0d1117] border border-white/8 rounded-2xl p-7">
                {formSent ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                    <p className="text-gray-400">Te redirigimos a WhatsApp. Te responderemos a la brevedad.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Nombre *</label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={e => setFormData(p => ({ ...p, nombre: e.target.value }))}
                          placeholder="Tu nombre"
                          className="w-full bg-white/5 border border-white/10 hover:border-cyan-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Teléfono *</label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={e => setFormData(p => ({ ...p, telefono: e.target.value }))}
                          placeholder="Tu teléfono"
                          className="w-full bg-white/5 border border-white/10 hover:border-cyan-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Servicio requerido</label>
                      <select
                        value={formData.servicio}
                        onChange={e => setFormData(p => ({ ...p, servicio: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 hover:border-cyan-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors duration-200 appearance-none"
                      >
                        <option value="" className="bg-[#0d1117]">Selecciona un servicio</option>
                        <option value="Mantenimiento de Computadora" className="bg-[#0d1117]">Mantenimiento de Computadora</option>
                        <option value="Instalación de Programas" className="bg-[#0d1117]">Instalación de Programas</option>
                        <option value="Soporte Remoto" className="bg-[#0d1117]">Soporte Remoto</option>
                        <option value="Armado de PC" className="bg-[#0d1117]">Armado de PC</option>
                        <option value="Venta de Equipo" className="bg-[#0d1117]">Venta de Equipo</option>
                        <option value="Actualización de Hardware" className="bg-[#0d1117]">Actualización de Hardware</option>
                        <option value="Otro" className="bg-[#0d1117]">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Mensaje</label>
                      <textarea
                        rows={4}
                        value={formData.mensaje}
                        onChange={e => setFormData(p => ({ ...p, mensaje: e.target.value }))}
                        placeholder="Describe el problema o servicio que necesitas..."
                        className="w-full bg-white/5 border border-white/10 hover:border-cyan-500/30 focus:border-cyan-500 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Enviar por WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
              <Cpu className="w-4 h-4 text-black" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">HighTech Equipos y Soporte</span>
              <p className="text-gray-600 text-xs">Monterrey, Nuevo León, México</p>
            </div>
          </div>
          <p className="text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} HighTech Equipos y Soporte. Todos los derechos reservados.
          </p>
          <a
            href={whatsappLink('Hola HighTech!')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            +52 446 477 0991
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink('Hola HighTech! Necesito ayuda con mi equipo.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-3.5 rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:shadow-green-500/60 hover:-translate-y-1"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline text-sm pr-1">WhatsApp</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-ping" />
      </a>

    </div>
  );
}
