import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
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
          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-300/60 overflow-hidden ring-1 ring-slate-900/5">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-2 text-xs font-medium text-slate-500 hidden sm:inline-block">
                  vitalia.app/clinica
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Sistema en línea
              </div>
            </div>

            <div className="p-4 sm:p-8 bg-gradient-to-br from-slate-50 via-white to-teal-50/20">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="hidden sm:flex flex-col gap-2 w-48 flex-shrink-0 border-r border-slate-200/80 pr-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-50 text-teal-800 font-semibold text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Agenda del Día
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Pacientes
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Expedientes
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-xs">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Farmacia
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Consultorio Médico San Rafael
                      </h3>
                      <p className="text-xs text-slate-500">
                        Doctor a cargo: Dr. Alejandro Morales - Medicina General
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        12 Citas Hoy
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                        3 en Espera
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-300 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center">
                          MT
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            María Elena Torres
                          </p>
                          <p className="text-xs text-slate-500">
                            Control Hipertensión - Expediente #4821
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-slate-600 hidden sm:inline-block">
                          10:30 AM
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
                          En consulta
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-300 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                          CM
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Carlos Mendoza Vega
                          </p>
                          <p className="text-xs text-slate-500">
                            Revisión de Análisis Clínicos - Expediente #3904
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-slate-600 hidden sm:inline-block">
                          11:15 AM
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                          En espera
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-teal-300 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">
                          SM
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Sofía Morales Castro
                          </p>
                          <p className="text-xs text-slate-500">
                            Consulta General - Primera Vez
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-slate-600 hidden sm:inline-block">
                          12:00 PM
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                          Confirmada
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -top-5 -right-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl max-w-xs animate-bounce duration-1000">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Receta Digital Emitida</p>
                <p className="text-[11px] text-slate-500">Sincronizada con Farmacia</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                IA
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Asistente Clínico Activo</p>
                <p className="text-[11px] text-slate-500">Sin interacciones adversas detectadas</p>
              </div>
            </div>
          </div>
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
