export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-16 pb-20 md:pt-24 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Arquitectura Multi-Tenant Segura y Cumplimiento Normativo
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight md:leading-none">
            La plataforma clínica integral que potencia tu{" "}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              institución médica
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Centraliza expedientes de pacientes, inventario de medicamentos,
            notificaciones en tiempo real y diagnósticos asistidos por Inteligencia
            Artificial en una solución SaaS escalable con aislamiento garantizado.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#planes"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Ver Planes
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
              Conocer Características
            </a>
          </div>

          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                100%
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Aislamiento Multi-Tenant
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                99.9%
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Disponibilidad SLA
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Seguro
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Cifrado Punto a Punto
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                PayPal
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                Cobro Recurrente Confiable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
