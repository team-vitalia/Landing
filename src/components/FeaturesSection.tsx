export default function FeaturesSection() {
  const features = [
    {
      title: "Gestión de expedientes",
      description:
        "Historias clínicas digitales completas, registro de signos vitales, antecedentes patológicos, recetas electrónicas y trazabilidad de consultas por médico.",
      badge: "Clínico",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )
    },
    {
      title: "Control de inventario",
      description:
        "Monitoreo centralizado de almacén, existencias mínimas de medicamentos, control de lotes y fechas de caducidad para evitar desabasto en tu farmacia.",
      badge: "Operativo",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      )
    },
    {
      title: "Notificaciones en tiempo real",
      description:
        "Comunicación activa vía WebSockets y correos automáticos para confirmación de citas, cambios de sala y avisos urgentes entre recepción y especialistas.",
      badge: "Conectividad",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      )
    },
    {
      title: "Asistente IA",
      description:
        "Inteligencia Artificial integrada para soporte en la toma de decisiones clínicas, sugerencias diagnósticas y validación de interacciones farmacológicas.",
      badge: "Innovación",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
            Capacidades de Vanguardia
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diseñado exclusivamente para el flujo de trabajo clínico
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Cada módulo de VITALIA está optimizado para agilizar la labor de médicos,
            enfermeros y personal administrativo mientras mantiene el estricto aislamiento de datos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700">
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
