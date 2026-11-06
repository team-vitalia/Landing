import { getPlans } from "@/data/plans";
import { Plan } from "@/types/plan";

interface PricingSectionProps {
  plans?: Plan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const currentPlans = plans || getPlans();

  return (
    <section id="planes" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
            Suscripciones Flexibles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Planes adaptados a la escala de tu clínica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comienza con la infraestructura SaaS adecuada para tu equipo.
            Pagos mensuales automatizados y seguros con PayPal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              data-testid="plan-card"
              className={`relative flex flex-col rounded-3xl p-8 bg-white transition-all ${
                plan.popular
                  ? "border-2 border-blue-600 shadow-xl shadow-blue-600/10 scale-100 lg:-translate-y-2"
                  : "border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                    ${plan.price.toLocaleString("es-MX")}
                  </span>
                  <span className="ml-2 text-sm font-medium text-slate-500">
                    /{plan.period}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700">
                    {plan.personalAccounts} cuentas
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                    {plan.patientLimit} pacientes
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-grow text-sm text-slate-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2.5 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={plan.paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`btn-contratar-${plan.id}`}
                  className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/30"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Contratar
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-sm text-slate-600">
            ¿Necesitas una implementación a la medida para un consorcio hospitalario?{" "}
            <a href="#contacto" className="text-blue-600 font-semibold hover:underline">
              Habla con un asesor de VITALIA Enterprise
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
