"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [tabActiva, setTabActiva] = useState<"resumen" | "salas">("resumen");
  const [menuActivo, setMenuActivo] = useState<string>("inicio");
  const [modalAbierto, setModalAbierto] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.teal.100),white)] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            Software de Gestión Médica Integral
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            La forma más ágil y sencilla de{" "}
            <span className="text-teal-700 bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
              gestionar tu clínica
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Organiza citas, consulta expedientes de pacientes al instante, emite recetas electrónicas y mantén tu inventario médico bajo control. Más tiempo para tus pacientes, menos papeleo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-teal-700 text-white hover:bg-teal-800 shadow-lg shadow-teal-700/25 transition-all transform hover:-translate-y-0.5"
            >
              Ver Planes y Precios
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>

            <a
              href="#caracteristicas"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-white text-slate-700 hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
            >
              Conocer Funciones
            </a>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-300/60 overflow-hidden ring-1 ring-slate-900/5">
            <div className="flex items-center justify-between px-4 py-3 bg-[#0F172A] border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <div className="ml-3 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 text-xs text-slate-300 border border-slate-700 font-mono">
                  <svg className="w-3.5 h-3.5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.vitalia.clinic/doctor
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Panel Clínico Activo
              </div>
            </div>

            <div className="flex min-h-[560px] bg-[#F8FAFC]">
              <aside className="w-16 sm:w-64 bg-white border-r border-[#E2E8F0] p-3 sm:p-5 flex flex-col justify-between flex-shrink-0">
                <div>
                  <div className="flex flex-col items-center mb-6 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F4C45]/10 border border-[#0F4C45]/20 flex items-center justify-center p-2 mb-2 shadow-sm">
                      <Image
                        src="/logo.png"
                        alt="Vitalia Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="hidden sm:block text-lg font-black text-[#0F4C45] tracking-widest leading-none">
                      VITALIA
                    </span>
                    <span className="hidden sm:block text-[10px] text-slate-500 font-medium mt-1">
                      Gestión clínica inteligente
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-3 p-2.5 rounded-xl bg-gradient-to-br from-[#0F4C45] to-[#0A3732] text-white mb-5 shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-extrabold text-sm">
                      D
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">Dr. Alejandro Morales</p>
                      <p className="text-[10px] text-teal-200 truncate">Medicina General</p>
                    </div>
                  </div>

                  <span className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    Menú Principal
                  </span>

                  <nav className="space-y-1">
                    <button
                      type="button"
                      onClick={() => setMenuActivo("inicio")}
                      className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        menuActivo === "inicio"
                          ? "bg-[#0F4C45]/10 text-[#0F4C45] border-l-4 border-[#0F4C45]"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="hidden sm:inline">Inicio</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setMenuActivo("consultas");
                        setModalAbierto("consultas");
                      }}
                      className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        menuActivo === "consultas"
                          ? "bg-[#0F4C45]/10 text-[#0F4C45] border-l-4 border-[#0F4C45]"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="hidden sm:inline">Mis consultas</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setMenuActivo("pacientes");
                        setModalAbierto("pacientes");
                      }}
                      className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        menuActivo === "pacientes"
                          ? "bg-[#0F4C45]/10 text-[#0F4C45] border-l-4 border-[#0F4C45]"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="hidden sm:inline">Mis pacientes</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setMenuActivo("interacciones");
                        setModalAbierto("interacciones");
                      }}
                      className={`w-full flex items-center gap-3 px-2 sm:px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        menuActivo === "interacciones"
                          ? "bg-[#0F4C45]/10 text-[#0F4C45] border-l-4 border-[#0F4C45]"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <svg className="w-4 h-4 flex-shrink-0 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="hidden sm:inline">Evaluador IA</span>
                    </button>
                  </nav>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-rose-600 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="hidden sm:inline">Cerrar sesión</span>
                  </div>
                </div>
              </aside>

              <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F172A] to-[#0F4C45] p-5 text-white shadow-lg mb-5 border border-white/10">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xl font-black text-white">
                        D
                      </div>
                      <div>
                        <p className="text-xs text-white/80">Buenos días</p>
                        <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                          Dr. Alejandro Morales
                        </h2>
                        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-teal-300 font-bold">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span>Doctor</span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-[11px] font-semibold text-teal-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                        Consultorio 102
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-200/60 border border-slate-300/80 mb-5 max-w-sm">
                  <button
                    type="button"
                    onClick={() => setTabActiva("resumen")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                      tabActiva === "resumen"
                        ? "bg-white text-[#0F4C45] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Resumen
                  </button>

                  <button
                    type="button"
                    onClick={() => setTabActiva("salas")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                      tabActiva === "salas"
                        ? "bg-white text-[#0F4C45] shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Mi sala y horarios
                  </button>
                </div>

                {tabActiva === "resumen" ? (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-extrabold text-[#0F4C45]">
                        Resumen de hoy
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
                        <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-2xl sm:text-3xl font-extrabold text-[#0F4C45]">12</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                          Consultas programadas
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
                        <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <p className="text-2xl sm:text-3xl font-extrabold text-[#0F4C45]">4</p>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                          Pacientes en atención
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-[#0F4C45]/10 text-[#0F4C45] flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-extrabold text-[#0F4C45]">
                        Accesos rápidos
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <div
                        onClick={() => setModalAbierto("consultas")}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#0F4C45]">Mis consultas</h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              Consulta tus citas y pacientes programados.
                            </p>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <div
                        onClick={() => setModalAbierto("pacientes")}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#0F4C45]">Mis pacientes</h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              Consulta la información de los pacientes asignados.
                            </p>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <div
                        onClick={() => setModalAbierto("expedientes")}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#0F4C45]">Expedientes clínicos</h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              Accede y consulta los expedientes de tus pacientes.
                            </p>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      <div
                        onClick={() => setModalAbierto("interacciones")}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white/90 border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#0F4C45]">Evaluador de Interacciones</h4>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              Verifica incompatibilidades farmacológicas con IA.
                            </p>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm">
                      <div className="w-8 h-8 rounded-xl bg-[#0F4C45]/10 text-[#0F4C45] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-[#0F4C45]">Sistema listo</p>
                        <p className="text-[11px] text-slate-500">
                          Tu sesión está activa y protegida en la plataforma clínica.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-extrabold text-[#0F4C45]">
                        Mis salas y horario de uso
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 rounded-2xl bg-white border border-[#E4EEEB] shadow-sm">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-extrabold text-[#26443F]">
                            Consultorio 102 - Medicina General
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            Activa
                          </span>
                        </div>
                        <p className="text-[11px] text-[#879691] mt-1 mb-3">
                          Consulta Externa · Piso 1 · Equipamiento Básico Completo
                        </p>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <p className="text-xs font-semibold text-[#247F76]">
                            Lunes a Viernes: 08:00 – 14:00
                          </p>
                          <p className="text-xs font-semibold text-[#247F76]">
                            Sábado: 09:00 – 13:00
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-[#E4EEEB] shadow-sm">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-extrabold text-[#26443F]">
                            Sala de Procedimientos Menores B
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800">
                            Disponible
                          </span>
                        </div>
                        <p className="text-[11px] text-[#879691] mt-1 mb-3">
                          Curaciones y Toma de Muestras · Piso 1
                        </p>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                          <p className="text-xs font-semibold text-[#247F76]">
                            Martes y Jueves: 15:00 – 18:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                  <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mb-2" />
                  <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                    VITALIA · Gestión clínica inteligente
                  </p>
                </div>
              </main>
            </div>
          </div>

          {modalAbierto && (
            <div className="absolute inset-0 z-30 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white rounded-2xl p-6 border border-slate-200 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-[#0F4C45]">
                    {modalAbierto === "consultas" && "Vista previa: Mis consultas"}
                    {modalAbierto === "pacientes" && "Vista previa: Mis pacientes"}
                    {modalAbierto === "expedientes" && "Vista previa: Expedientes"}
                    {modalAbierto === "interacciones" && "Evaluador de Interacciones IA"}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setModalAbierto(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>
                <div className="py-4 text-xs text-slate-600 leading-relaxed">
                  {modalAbierto === "consultas" && (
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 flex justify-between items-center">
                        <span className="font-bold text-teal-900">10:00 AM - María Elena Torres</span>
                        <span className="text-[10px] bg-teal-200 text-teal-800 px-2 py-0.5 rounded">En consulta</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                        <span className="font-bold text-slate-800">11:00 AM - Carlos Mendoza</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded">En espera</span>
                      </div>
                    </div>
                  )}
                  {modalAbierto === "pacientes" && (
                    <p>
                      Módulo directo para consulta de historial clínico, alergias y recetas asignadas al médico.
                    </p>
                  )}
                  {modalAbierto === "expedientes" && (
                    <p>
                      Consulta conforme a la norma de expedientes electrónicos NOM-004-SSA3 con notas de evolución inmutables.
                    </p>
                  )}
                  {modalAbierto === "interacciones" && (
                    <p>
                      Herramienta asistencial integrada para prevenir combinaciones de medicamentos contraindicadas.
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setModalAbierto(null)}
                  className="w-full py-2.5 rounded-xl bg-[#0F4C45] text-white text-xs font-bold hover:bg-[#0A3732] transition-colors"
                >
                  Entendido
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              +500
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              Clínicas y Consultorios
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              100%
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              En la Nube, sin descargas
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              0 Min
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              Tiempo de espera en alta
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              PayPal
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              Activación y cobro seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
