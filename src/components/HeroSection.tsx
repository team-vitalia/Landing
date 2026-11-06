"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [seccionActiva, setSeccionActiva] = useState<"inicio" | "notificaciones" | "consultas" | "pacientes">("inicio");
  const [tabDoctor, setTabDoctor] = useState<"resumen" | "salas">("resumen");
  const [modalInteracciones, setModalInteracciones] = useState(false);

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
          <div className="rounded-2xl border border-slate-800 bg-[#0B1220] shadow-2xl shadow-slate-950/60 overflow-hidden ring-1 ring-slate-800">
            <div className="flex items-center justify-between px-4 py-3 bg-[#111A2C] border-b border-[#1F2A44] text-white">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <div className="ml-3 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1220] text-xs text-slate-300 border border-[#1F2A44] font-mono">
                  <svg className="w-3.5 h-3.5 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.vitalia.clinic/doctor
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#22D3EE]">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                Sistema Vitalia Conectado
              </div>
            </div>

            <div className="flex min-h-[580px] bg-[#0B1220]">
              <aside className="w-16 sm:w-68 bg-[#111A2C] border-r border-[#1F2A44] p-3 sm:p-5 flex flex-col justify-between flex-shrink-0">
                <div>
                  <div className="flex flex-col items-center mb-6 text-center">
                    <div className="w-14 h-14 rounded-[18px] bg-white/[0.06] border border-white/10 flex items-center justify-center p-2.5 mb-2.5 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                      <Image
                        src="/logo.png"
                        alt="Vitalia Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="hidden sm:block text-xl font-extrabold text-[#22D3EE] tracking-[1.5px] leading-tight">
                      VITALIA
                    </span>
                    <span className="hidden sm:block text-[11px] text-[#8FA3BF] font-normal mt-0.5">
                      Gestión clínica inteligente
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-[#04222B] mb-5 shadow-[0_4px_14px_rgba(34,211,238,0.3)]">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/35 flex items-center justify-center font-extrabold text-white text-base">
                      D
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-extrabold text-white truncate">
                        Dr. Alejandro Morales
                      </p>
                      <p className="text-[10px] text-white/80 truncate">
                        doctor@vitalia.clinic
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:block text-[10px] font-bold text-[#8FA3BF] uppercase tracking-wider px-2 mb-2.5">
                    Menú Principal
                  </span>

                  <nav className="space-y-1.5">
                    <button
                      type="button"
                      onClick={() => setSeccionActiva("inicio")}
                      className={`relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all ${
                        seccionActiva === "inicio"
                          ? "bg-[#22D3EE]/14 text-[#22D3EE] font-bold"
                          : "text-[#E6EDF7] font-semibold hover:bg-white/[0.04]"
                      }`}
                    >
                      {seccionActiva === "inicio" && (
                        <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#22D3EE]" />
                      )}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${seccionActiva === "inicio" ? "bg-white/[0.06]" : ""}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <span className="hidden sm:inline">Inicio</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeccionActiva("notificaciones")}
                      className={`relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all ${
                        seccionActiva === "notificaciones"
                          ? "bg-[#22D3EE]/14 text-[#22D3EE] font-bold"
                          : "text-[#E6EDF7] font-semibold hover:bg-white/[0.04]"
                      }`}
                    >
                      {seccionActiva === "notificaciones" && (
                        <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#22D3EE]" />
                      )}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${seccionActiva === "notificaciones" ? "bg-white/[0.06]" : ""}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                      <span className="hidden sm:inline">Notificaciones</span>
                      <span className="hidden sm:inline-block ml-auto w-2 h-2 rounded-full bg-[#22D3EE]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeccionActiva("consultas")}
                      className={`relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all ${
                        seccionActiva === "consultas"
                          ? "bg-[#22D3EE]/14 text-[#22D3EE] font-bold"
                          : "text-[#E6EDF7] font-semibold hover:bg-white/[0.04]"
                      }`}
                    >
                      {seccionActiva === "consultas" && (
                        <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#22D3EE]" />
                      )}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${seccionActiva === "consultas" ? "bg-white/[0.06]" : ""}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span className="hidden sm:inline">Mis consultas</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeccionActiva("pacientes")}
                      className={`relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs transition-all ${
                        seccionActiva === "pacientes"
                          ? "bg-[#22D3EE]/14 text-[#22D3EE] font-bold"
                          : "text-[#E6EDF7] font-semibold hover:bg-white/[0.04]"
                      }`}
                    >
                      {seccionActiva === "pacientes" && (
                        <span className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#22D3EE]" />
                      )}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${seccionActiva === "pacientes" ? "bg-white/[0.06]" : ""}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <span className="hidden sm:inline">Mis pacientes</span>
                    </button>
                  </nav>
                </div>

                <div className="pt-4 border-t border-[#1F2A44]">
                  <div className="flex items-center justify-center sm:justify-start gap-2.5 px-3 py-2.5 rounded-xl bg-[#F87171]/14 text-[#F87171] text-xs font-bold cursor-pointer hover:bg-[#F87171]/20 transition-all">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span className="hidden sm:inline">Cerrar sesión</span>
                  </div>

                  <div className="hidden sm:block text-center mt-3 pt-2 text-[10px] text-[#8FA3BF]">
                    <div className="flex items-center justify-center gap-1">
                      <svg className="w-3 h-3 text-[#8FA3BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Sistema seguro · Sesión protegida</span>
                    </div>
                    <p className="opacity-70 mt-0.5">VITALIA · v1.0</p>
                  </div>
                </div>
              </aside>

              <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-[#0B1220]">
                {seccionActiva === "inicio" && (
                  <>
                    <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#0F172A] to-[#0F4C45] p-5 text-white shadow-[0_8px_18px_rgba(30,42,120,0.22)] mb-5 border border-white/10">
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/[0.08] pointer-events-none" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5">
                          <div className="w-[52px] h-[52px] rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-xl font-extrabold text-white">
                            D
                          </div>
                          <div>
                            <p className="text-xs text-white/85">Buenos días</p>
                            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                              Dr. Alejandro Morales
                            </h2>
                            <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#2DD4BF] font-bold">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              <span>Doctor</span>
                            </div>
                          </div>
                        </div>

                        <div className="hidden sm:flex flex-col items-end">
                          <span className="text-[11px] font-bold text-teal-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                            Consultorio 102
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-1 rounded-2xl bg-[#111A2C] border border-[#1F2A44] mb-5 max-w-sm">
                      <button
                        type="button"
                        onClick={() => setTabDoctor("resumen")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                          tabDoctor === "resumen"
                            ? "bg-[#22D3EE]/14 text-[#22D3EE]"
                            : "text-[#8FA3BF] hover:text-[#E6EDF7]"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Resumen
                      </button>

                      <button
                        type="button"
                        onClick={() => setTabDoctor("salas")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                          tabDoctor === "salas"
                            ? "bg-[#22D3EE]/14 text-[#22D3EE]"
                            : "text-[#8FA3BF] hover:text-[#E6EDF7]"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Mi sala y horarios
                      </button>
                    </div>

                    {tabDoctor === "resumen" ? (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-sm font-extrabold text-[#E6EDF7]">
                            Resumen de hoy
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-5">
                          <div className="p-4 rounded-[18px] bg-[#111A2C] border border-[#1F2A44] shadow-sm">
                            <div className="w-9 h-9 rounded-xl bg-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center mb-2.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-[#E6EDF7]">12</p>
                            <p className="text-xs text-[#8FA3BF] font-medium mt-1">
                              Consultas programadas
                            </p>
                          </div>

                          <div className="p-4 rounded-[18px] bg-[#111A2C] border border-[#1F2A44] shadow-sm">
                            <div className="w-9 h-9 rounded-xl bg-[#34D399]/20 text-[#34D399] flex items-center justify-center mb-2.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl font-extrabold text-[#E6EDF7]">4</p>
                            <p className="text-xs text-[#8FA3BF] font-medium mt-1">
                              Pacientes en atención
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-[#22D3EE]/20 text-[#22D3EE] flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-sm font-extrabold text-[#E6EDF7]">
                            Accesos rápidos
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                          <div
                            onClick={() => setSeccionActiva("consultas")}
                            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] hover:border-[#22D3EE] transition-all cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-[13px] bg-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-[#E6EDF7]">Mis consultas</h4>
                                <p className="text-[11px] text-[#8FA3BF] line-clamp-1">
                                  Consulta tus citas y pacientes programados.
                                </p>
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[#8FA3BF] group-hover:text-[#22D3EE] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>

                          <div
                            onClick={() => setSeccionActiva("pacientes")}
                            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] hover:border-[#22D3EE] transition-all cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-[13px] bg-[#34D399]/20 text-[#34D399] flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-[#E6EDF7]">Mis pacientes</h4>
                                <p className="text-[11px] text-[#8FA3BF] line-clamp-1">
                                  Consulta la información de los pacientes asignados.
                                </p>
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[#8FA3BF] group-hover:text-[#22D3EE] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>

                          <div
                            onClick={() => setSeccionActiva("pacientes")}
                            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] hover:border-[#22D3EE] transition-all cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-[13px] bg-[#22D3EE]/20 text-[#22D3EE] flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-[#E6EDF7]">Expedientes clínicos</h4>
                                <p className="text-[11px] text-[#8FA3BF] line-clamp-1">
                                  Accede y consulta los expedientes de tus pacientes.
                                </p>
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[#8FA3BF] group-hover:text-[#22D3EE] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>

                          <div
                            onClick={() => setModalInteracciones(true)}
                            className="flex items-center justify-between p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] hover:border-[#22D3EE] transition-all cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-[13px] bg-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-[#E6EDF7]">Evaluador de Interacciones</h4>
                                <p className="text-[11px] text-[#8FA3BF] line-clamp-1">
                                  Verifica incompatibilidades farmacológicas entre medicamentos.
                                </p>
                              </div>
                            </div>
                            <svg className="w-4 h-4 text-[#8FA3BF] group-hover:text-[#22D3EE] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44]">
                          <div className="w-9 h-9 rounded-xl bg-[#22D3EE]/14 text-[#22D3EE] flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#E6EDF7]">Sistema listo</p>
                            <p className="text-[11px] text-[#8FA3BF]">
                              Tu sesión está activa y protegida en la plataforma clínica.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-[#34D399]/20 text-[#34D399] flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h3 className="text-sm font-extrabold text-[#E6EDF7]">
                            Mis salas y horario de uso
                          </h3>
                        </div>

                        <div className="space-y-3">
                          <div className="p-4 rounded-2xl bg-[#111A2C] border border-[#1F2A44] shadow-sm">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-extrabold text-[#E6EDF7]">
                                Consultorio 102 - Medicina General
                              </h4>
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#34D399]/20 text-[#34D399]">
                                Activa
                              </span>
                            </div>
                            <p className="text-[11px] text-[#8FA3BF] mt-1 mb-3">
                              Consulta Externa · Piso 1 · Activa
                            </p>
                            <div className="p-3 rounded-xl bg-[#0B1220] border border-[#1F2A44] space-y-1">
                              <p className="text-xs font-semibold text-[#22D3EE]">
                                Lunes a Viernes: 08:00 – 14:00
                              </p>
                              <p className="text-xs font-semibold text-[#22D3EE]">
                                Sábado: 09:00 – 13:00
                              </p>
                            </div>
                          </div>

                          <div className="p-4 rounded-2xl bg-[#111A2C] border border-[#1F2A44] shadow-sm">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-extrabold text-[#E6EDF7]">
                                Sala de Curaciones B
                              </h4>
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#60A5FA]/20 text-[#60A5FA]">
                                Disponible
                              </span>
                            </div>
                            <p className="text-[11px] text-[#8FA3BF] mt-1 mb-3">
                              Procedimientos Menores · Piso 1
                            </p>
                            <div className="p-3 rounded-xl bg-[#0B1220] border border-[#1F2A44]">
                              <p className="text-xs font-semibold text-[#22D3EE]">
                                Martes y Jueves: 15:00 – 18:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {seccionActiva === "notificaciones" && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1F2A44]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/20 text-[#22D3EE] flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                        <h3 className="text-base font-extrabold text-[#E6EDF7]">
                          Centro de Notificaciones
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-[#22D3EE] bg-[#22D3EE]/10 px-2.5 py-1 rounded-full">
                        3 nuevas
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44]">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#E6EDF7]">Cita confirmada por recepción</span>
                          <span className="text-[#8FA3BF] text-[10px]">Hace 10 min</span>
                        </div>
                        <p className="text-xs text-[#8FA3BF] mt-1">
                          María Elena Torres ha confirmado su cita de seguimiento para hoy a las 10:00 AM en Consultorio 102.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44]">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#E6EDF7]">Receta surtida en farmacia</span>
                          <span className="text-[#8FA3BF] text-[10px]">Hace 45 min</span>
                        </div>
                        <p className="text-xs text-[#8FA3BF] mt-1">
                          Los medicamentos prescritos para el paciente Carlos Mendoza fueron entregados sin observaciones.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44]">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#E6EDF7]">Aviso de asignación de sala</span>
                          <span className="text-[#8FA3BF] text-[10px]">Hace 2 horas</span>
                        </div>
                        <p className="text-xs text-[#8FA3BF] mt-1">
                          Coordinación médica ha validado tu disponibilidad en Sala de Procedimientos Menores B.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {seccionActiva === "consultas" && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1F2A44]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h3 className="text-base font-extrabold text-[#E6EDF7]">
                          Mis consultas de hoy
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-[#60A5FA] bg-[#60A5FA]/10 px-2.5 py-1 rounded-full">
                        3 pacientes
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] flex items-center justify-between">
                        <div>
                          <p className="text-sm font-extrabold text-[#E6EDF7]">María Elena Torres</p>
                          <p className="text-xs text-[#8FA3BF]">10:00 AM – Consulta General · Primera vez</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#34D399]/20 text-[#34D399]">
                          En atención
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] flex items-center justify-between">
                        <div>
                          <p className="text-sm font-extrabold text-[#E6EDF7]">Carlos Mendoza Vega</p>
                          <p className="text-xs text-[#8FA3BF]">11:30 AM – Revisión de Análisis Clínicos</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FBBF24]/20 text-[#FBBF24]">
                          En espera
                        </span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] flex items-center justify-between">
                        <div>
                          <p className="text-sm font-extrabold text-[#E6EDF7]">Ana Lucía Peña</p>
                          <p className="text-xs text-[#8FA3BF]">13:00 PM – Seguimiento Post-tratamiento</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#22D3EE]/20 text-[#22D3EE]">
                          Confirmada
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {seccionActiva === "pacientes" && (
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1F2A44]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#34D399]/20 text-[#34D399] flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h3 className="text-base font-extrabold text-[#E6EDF7]">
                          Mis pacientes asignados
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] flex items-center justify-between">
                        <div>
                          <p className="text-sm font-extrabold text-[#E6EDF7]">María Elena Torres</p>
                          <p className="text-xs text-[#8FA3BF]">Expediente #4821 · 54 años · Hipertensión</p>
                        </div>
                        <span className="text-xs font-semibold text-[#22D3EE]">Ver expediente →</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#111A2C] border border-[#1F2A44] flex items-center justify-between">
                        <div>
                          <p className="text-sm font-extrabold text-[#E6EDF7]">Carlos Mendoza Vega</p>
                          <p className="text-xs text-[#8FA3BF]">Expediente #3904 · 42 años · Control glucémico</p>
                        </div>
                        <span className="text-xs font-semibold text-[#22D3EE]">Ver expediente →</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-[#1F2A44] text-center">
                  <div className="w-12 h-1 bg-[#1F2A44] rounded-full mx-auto mb-2" />
                  <p className="text-[10px] text-[#8FA3BF] font-medium tracking-wide">
                    VITALIA · Gestión clínica inteligente
                  </p>
                </div>
              </main>
            </div>
          </div>

          {modalInteracciones && (
            <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-[#111A2C] rounded-2xl p-6 border border-[#1F2A44] shadow-2xl text-white">
                <div className="flex items-center justify-between pb-3 border-b border-[#1F2A44]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-bold text-[#E6EDF7]">
                      Evaluador de Interacciones
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalInteracciones(false)}
                    className="p-1 rounded-lg text-[#8FA3BF] hover:text-white hover:bg-white/10"
                  >
                    ✕
                  </button>
                </div>
                <div className="py-4 text-xs text-[#8FA3BF] space-y-2.5">
                  <div className="p-3 rounded-xl bg-[#0B1220] border border-[#1F2A44]">
                    <p className="font-bold text-[#E6EDF7] mb-1">Medicamentos evaluados:</p>
                    <p className="text-xs text-[#22D3EE]">• Amoxicilina 500mg cápsulas</p>
                    <p className="text-xs text-[#22D3EE]">• Paracetamol 500mg tabletas</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#34D399]/14 border border-[#34D399]/30 text-[#34D399]">
                    <p className="font-bold">Resultado del análisis:</p>
                    <p className="text-[11px] mt-0.5">No se encontraron contraindicaciones ni interacciones medicamentosas graves.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setModalInteracciones(false)}
                  className="w-full py-2.5 rounded-xl bg-[#22D3EE] text-[#04222B] text-xs font-bold hover:bg-[#22D3EE]/90 transition-colors"
                >
                  Cerrar Evaluador
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
