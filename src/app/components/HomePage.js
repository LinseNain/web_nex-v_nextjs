"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

// 🔹 Iconos profesionales
import {
  Globe,
  Smartphone,
  Search,
  BarChart3,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Zap,
  Star,
  Rocket,
  Monitor,
  Cpu,
  Cloud,
  Lock,
  Wifi,
  ChevronRight,
} from "lucide-react";

import Navbar from "./Navbar";

const HomePage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'
  const [expandedSolution, setExpandedSolution] = useState(null);

  // 📌 Scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const y = element.offsetTop - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 📌 Manejo del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          nombre: formData.nombre.trim(),
          email: formData.email.trim(),
          telefono: formData.telefono.trim() || null,
          empresa: formData.empresa.trim() || null,
          servicio: formData.servicio || null,
          mensaje: formData.mensaje.trim() || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        empresa: "",
        servicio: "",
        mensaje: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error("Error:", err);
      setSubmitStatus("error");
    }
  };

  // 📌 Datos para la sección de Soluciones IT
  const solutions = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Soporte Remoto",
      shortDesc: "Asistencia técnica remota para resolver cualquier problema tecnológico de forma inmediata.",
      features: [
        "Resolución de problemas de lentitud y rendimiento",
        "Instalación y configuración de programas",
        "Eliminación de virus, malware y errores del sistema",
        "Configuración de correo electrónico y cuentas",
        "Solución de problemas con impresoras y periféricos"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Mantenimiento Automatizado",
      shortDesc: "Sistema inteligente que mantiene tus equipos siempre optimizados sin intervención manual.",
      features: [
        "Limpieza automática de archivos temporales y basura",
        "Actualizaciones automáticas de sistema y controladores",
        "Escaneo antivirus programado diario",
        "Optimización del registro de Windows",
        "Monitoreo de temperatura y rendimiento del hardware"
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Backup en la Nube",
      shortDesc: "Protección total de tus datos con copias de seguridad automáticas y monitoreo continuo.",
      features: [
        "Configuración de backup automático en Google Drive, OneDrive o Dropbox",
        "Sincronización en tiempo real de archivos importantes",
        "El cliente no necesita hacer nada: todo se guarda automáticamente",
        "Monitorización 24/7 del estado de las copias de seguridad",
        "Restauración rápida de archivos en caso de pérdida"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Optimización Digital Total",
      shortDesc: "Transformamos tu flujo de trabajo digital para máxima productividad y eficiencia.",
      features: [
        "Limpieza profunda del sistema operativo",
        "Desinstalación de software innecesario y bloatware",
        "Optimización del tiempo de arranque (hasta 70% más rápido)",
        "Configuración profesional de herramientas esenciales",
        "Personalización del entorno de trabajo según tus necesidades"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Plan de Seguridad Digital",
      shortDesc: "Protección integral para pequeños negocios y usuarios frecuentes con soporte incluido.",
      features: [
        "Antivirus premium + firewall avanzado + backup en la nube",
        "Actualizaciones automáticas de seguridad",
        "Auditoría de seguridad trimestral",
        "Gestión de contraseñas seguras y autenticación 2FA",
        "Formación en buenas prácticas de seguridad digital"
      ]
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Servicios Adicionales",
      shortDesc: "Soluciones complementarias para cubrir todas tus necesidades tecnológicas.",
      features: [
        "Instalación y configuración de redes WiFi profesionales",
        "Configuración de repetidores y puntos de acceso",
        "Asesoría tecnológica personalizada para tu negocio",
        "Migración completa de datos entre equipos",
        "Diagnóstico tecnológico para empresas y autónomos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative pt-20 md:pt-24 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Impulsa tu negocio con
              <span className="text-blue-600 block sm:inline"> presencia digital</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Ayudamos a pequeñas y medianas empresas a crecer online con páginas web profesionales, gestión de redes sociales y estrategias digitales efectivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Pide tu asesoría gratuita
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all"
              >
                Ver nuestros servicios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section
        id="quienes-somos"
        className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Quiénes <span className="text-blue-600">Somos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos ideas en presencia digital real. No somos solo otra agencia, somos tu socio estratégico.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Nuestra Misión</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Democratizar el acceso al marketing digital, proporcionando herramientas y estrategias que permitan a cualquier empresa competir en el mundo digital.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  Nuestros Valores
                </h3>
                <ul className="space-y-4">
                  {[
                    "Resultados medibles y reales",
                    "Trato cercano y personalizado",
                    "Precios transparentes, sin sorpresas",
                    "Innovación constante",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">Transformaciones Digitales </div>
                </div>
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-blue-200">
                  <p className="text-gray-600 mb-4">
                    ¿Quieres saber cómo podemos ayudarte a alcanzar tus objetivos?
                  </p>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    Habla con nuestro equipo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nuestros Servicios y Packs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones digitales completas adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-16 md:mb-20">
            {/* Pack Básico */}
            <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col min-h-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Básico</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600">299€</span>
                  <span className="text-gray-600 ml-1">/mes</span>
                </div>
                <p className="text-gray-600">Perfecto para empezar tu presencia digital</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Página web responsive",
                  "Gestión básica de redes",
                  "2 publicaciones semanales",
                  "Google My Business",
                  "Soporte por email",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-full font-semibold transition-colors mt-auto"
              >
                Solicitar Información
              </button>
            </div>

            {/* Pack Medio */}
            <div className="flex-1 relative bg-white border-2 border-blue-600 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col min-h-full">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-full text-white text-sm font-semibold">
                Más Popular
              </div>
              <div className="text-center mb-6 mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Medio</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600">599€</span>
                  <span className="text-gray-600 ml-1">/mes</span>
                </div>
                <p className="text-gray-600">La opción más popular para hacer crecer tu negocio</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Página web avanzada",
                  "Gestión completa de redes",
                  "5 publicaciones semanales",
                  "Blog mensual",
                  "SEO básico",
                  "Analíticas",
                  "Soporte prioritario",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all mt-auto"
              >
                Solicitar Información
              </button>
            </div>

            {/* Pack Premium */}
            <div className="flex-1 bg-white border-2 border-green-500 rounded-lg p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-green-600 transition-all duration-300 flex flex-col min-h-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pack Premium</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600">999€</span>
                  <span className="text-gray-600 ml-1">/mes</span>
                </div>
                <p className="text-gray-600">Solución completa para empresas ambiciosas</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Página web ilimitada",
                  "Gestión premium de redes",
                  "Publicaciones diarias",
                  "Blog con 4 artículos",
                  "SEO avanzado",
                  "Campañas de publicidad",
                  "Consultor dedicado",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all mt-auto"
              >
                Solicitar Información
              </button>
            </div>
          </div>

          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              También Ofrecemos Servicios Individuales
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Globe, title: "Desarrollo Web", desc: "Páginas rápidas y optimizadas" },
              { icon: Smartphone, title: "Redes Sociales", desc: "Contenido de calidad profesional" },
              { icon: Search, title: "SEO & SEM", desc: "Posicionamiento en Google" },
              { icon: BarChart3, title: "Analíticas", desc: "Medimos cada acción" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <div className="text-blue-600 mb-4">
                    <Icon className="w-10 h-10 mx-auto" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ¿Por Qué Elegirnos? */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Por Qué Elegir Nex-v?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos más que una agencia digital. Somos tu socio estratégico para el crecimiento online.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Users, title: "Trato Personalizado", desc: "Cada cliente es único para nosotros." },
              { icon: TrendingUp, title: "Resultados Medibles", desc: "Te mostramos el impacto real de nuestro trabajo." },
              { icon: MapPin, title: "Conocimiento Local", desc: "Entendemos tu mercado y competencia." },
              { icon: Zap, title: "Precios Transparentes", desc: "Sin costes ocultos ni sorpresas." },
              { icon: Rocket, title: "Soporte Continuo", desc: "Estamos aquí cuando nos necesites." },
              { icon: Clock, title: "Implementación Rápida", desc: "Primeros resultados en 30 días." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🔹 SECCIÓN: Soluciones IT Personalizadas */}
      <section id="soluciones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Soluciones IT Personalizadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No vendemos paquetes cerrados. Analizamos tu situación específica y creamos soluciones a medida que realmente resuelven tus problemas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{solution.shortDesc}</p>

                <button
                  onClick={() =>
                    setExpandedSolution(expandedSolution === index ? null : index)
                  }
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors"
                >
                  {expandedSolution === index ? "Ver menos" : "Ver detalles"}
                  <ChevronRight
                    className={`w-4 h-4 ml-1 transition-transform ${
                      expandedSolution === index ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {expandedSolution === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes un problema diferente?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              No te preocupes si no encuentras exactamente lo que necesitas. En Nex-V estamos preparados para abordar cualquier desafío tecnológico.
              Si podemos ayudarte, lo haremos. Si no, te lo diremos honestamente.
            </p>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Cuéntanos tu caso
              <ChevronRight className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Listo para Impulsar tu Negocio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solicita tu asesoría gratuita y descubre cómo podemos ayudarte a crecer digitalmente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicita tu Asesoría Gratuita</h3>

              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  ¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                  Hubo un error. Por favor, inténtalo de nuevo.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Servicio de Interés</label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors bg-white cursor-pointer"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="pack-basico">Pack Básico</option>
                    <option value="pack-medio">Pack Medio</option>
                    <option value="pack-premium">Pack Premium</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="redes">Redes Sociales</option>
                    <option value="seo">SEO & SEM</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="4"
                    maxLength="500"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.mensaje.length}/500 caracteres
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
                    submitStatus === "sending"
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-xl hover:scale-105"
                  }`}
                >
                  {submitStatus === "sending" ? "Enviando..." : "Solicitar Asesoría Gratuita"}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="hover:shadow-lg p-6 rounded-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dirección</h4>
                      <p className="text-gray-600">
                        Madrid, España
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
                      <p className="text-gray-600">
                        <a href="tel:+34692877125" className="hover:text-green-600 transition-colors">+34 692 87 71 25</a>
                        <br />
                        <a href="tel:+34692930604" className="hover:text-green-600 transition-colors">+34 692 93 06 04</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a
                          href="mailto:office.nexv@gmail.com"
                          className="hover:text-blue-600 transition-colors underline"
                        >
                          office.nexv@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Horario</h4>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-xl mb-4">¿Prefieres llamarnos?</h4>
                <p className="mb-4">Estamos aquí para resolver tus dudas.</p>
                <a
                  href="tel:+34692877125"
                  className="inline-block bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center w-full sm:w-auto"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;