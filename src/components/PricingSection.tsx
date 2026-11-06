import Link from "next/link";
import { getPlans } from "@/data/plans";
import { Plan } from "@/types/plan";

interface PricingSectionProps {
  plans?: Plan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const currentPlans = plans || getPlans();

  return (
    <section id="planes" className="py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 tracking-wide uppercase">
            Planes Transparentes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Elige el plan ideal para tu clínica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sin plazos forzosos ni comisiones ocultas. Selecciona el paquete que mejor se adapte a tu equipo e inicia en minutos con activación segura vía PayPal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              data-testid="plan-card"
              className={`relative flex flex-col rounded-3xl p-8 bg-white transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-teal-600 shadow-2xl shadow-teal-900/10 ring-4 ring-teal-600/10 lg:-translate-y-2.5 z-10"
                  : "border border-slate-200/90 shadow-sm hover:border-teal-300 hover:shadow-xl hover:shadow-slate-200/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-700 to-emerald-600 text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-teal-700/25">
                  Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-500 min-h-[36px] leading-relaxed">
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
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-100">
                    {plan.personalAccounts} cuentas
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {plan.patientLimit} pacientes
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow text-sm text-slate-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <Link
                  href={`/registro?plan_id=${plan.paypalPlanId}`}
                  data-testid={`btn-contratar-${plan.id}`}
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-200 group ${
                    plan.popular
                      ? "bg-teal-700 text-white hover:bg-teal-800 shadow-lg shadow-teal-700/30 hover:shadow-xl hover:shadow-teal-700/40"
                      : "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg"
                  }`}
                >
                  Contratar Plan
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
