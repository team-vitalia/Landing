"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getPaypalBaseUrl, getPlans } from "@/data/plans";
import { redirigirA } from "@/utils/navigation";

function RegistroContent() {
  const searchParams = useSearchParams();
  const planIdParam = searchParams.get("plan_id") || "";

  const allPlans = getPlans();
  const selectedPlan =
    allPlans.find((p) => p.paypalPlanId === planIdParam) ||
    allPlans.find((p) => p.id === "clinica") ||
    allPlans[0];

  const [nombreClinica, setNombreClinica] = useState("");
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMensaje(null);

    if (!nombreClinica.trim() || !nombreAdmin.trim() || !correo.trim() || !password.trim()) {
      setErrorMensaje("Todos los campos son obligatorios.");
      return;
    }

    setCargando(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

      const respuesta = await fetch(`${apiUrl}/api/suscripciones/pre-registro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_clinica: nombreClinica.trim(),
          nombre_admin: nombreAdmin.trim(),
          correo: correo.trim().toLowerCase(),
          password: password,
          paypal_plan_id: selectedPlan.paypalPlanId,
        }),
      });

      if (!respuesta.ok) {
        const errorData = await respuesta.json().catch(() => ({}));
        throw new Error(
          errorData.detail || "Ocurrió un error al procesar el pre-registro."
        );
      }

      const datos = await respuesta.json();
      const clinicaId = datos.clinica_id;

      const paypalBase = getPaypalBaseUrl();
      const paypalUrl = `${paypalBase}/${selectedPlan.paypalPlanId}?custom_id=${clinicaId}`;

      redirigirA(paypalUrl);
    } catch (err: any) {
      setErrorMensaje(err.message || "Error al conectar con el servidor.");
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              V
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              VITALIA
            </span>
          </Link>

          <Link
            href="/#planes"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            ← Cambiar Plan
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="mb-8">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Paso 1 de 2: Alta de Cuenta
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Registra tu Clínica en VITALIA
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Completa tus datos iniciales. Serás redirigido a PayPal para autorizar tu suscripción de forma segura.
              </p>
            </div>

            {errorMensaje && (
              <div
                data-testid="error-banner"
                className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errorMensaje}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" data-testid="formulario-registro">
              <div>
                <label
                  htmlFor="nombre_clinica"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Nombre Comercial de la Clínica
                </label>
                <input
                  id="nombre_clinica"
                  name="nombre_clinica"
                  type="text"
                  required
                  placeholder="Ej. Clínica Médica Santa Fe"
                  value={nombreClinica}
                  onChange={(e) => setNombreClinica(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="nombre_admin"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Nombre del Administrador
                </label>
                <input
                  id="nombre_admin"
                  name="nombre_admin"
                  type="text"
                  required
                  placeholder="Ej. Dr. Roberto Gómez Bolaños"
                  value={nombreAdmin}
                  onChange={(e) => setNombreAdmin(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="correo"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Correo Electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="admin@tuclinica.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Contraseña de Acceso
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={cargando}
                data-testid="btn-submit-registro"
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/25"
              >
                {cargando ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Preparando checkout en PayPal...
                  </span>
                ) : (
                  <>
                    <span>Continuar a PayPal Checkout</span>
                    <svg
                      className="w-5 h-5"
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
                  </>
                )}
              </button>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Conexión cifrada de 256 bits y protección contra fraude.</span>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Resumen de la Suscripción
            </span>
            <div className="mt-3 flex items-baseline justify-between border-b border-slate-800 pb-5">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Plan {selectedPlan.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Cobro recurrente mensual
                </p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-white">
                  ${selectedPlan.price.toLocaleString("es-MX")}
                </span>
                <span className="text-xs text-slate-400">/mes</span>
              </div>
            </div>

            <div className="py-6 border-b border-slate-800 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Cuentas de personal</span>
                <span className="font-semibold text-white">{selectedPlan.personalAccounts} usuarios</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Límite de pacientes</span>
                <span className="font-semibold text-white">{selectedPlan.patientLimit} registros</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Plan ID PayPal</span>
                <span className="font-mono text-xs text-blue-300">{selectedPlan.paypalPlanId}</span>
              </div>
            </div>

            <div className="py-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                Incluido en este plan:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {selectedPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed">
              Al hacer clic en Continuar, serás transferido al portal oficial de PayPal para autorizar el cargo. Tu clínica y accesos se activarán en cuanto el pago sea confirmado por Webhook.
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        © 2026 VITALIA Healthcare SaaS. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default function RegistroPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
          Cargando formulario de registro...
        </div>
      }
    >
      <RegistroContent />
    </Suspense>
  );
}
