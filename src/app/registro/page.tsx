"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { getPlans } from "@/data/plans";
import { PayPalSubscriptionButton } from "@/components/PayPalSubscriptionButton";

function RegistroContent() {
  const searchParams = useSearchParams();
  const planIdParam = searchParams.get("plan_id") || "";

  const allPlans = getPlans();
  const selectedPlan =
    allPlans.find((p) => p.paypalPlanId === planIdParam) ||
    allPlans.find((p) => p.id === "clinica") ||
    allPlans[0];

  const [paso, setPaso] = useState<1 | 2 | 3>(1);
  const [nombreClinica, setNombreClinica] = useState("");
  const [nombreAdmin, setNombreAdmin] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [clinicaIdRegistrada, setClinicaIdRegistrada] = useState<number | null>(null);
  const [subscriptionIdFinal, setSubscriptionIdFinal] = useState<string>("");
  const [cargando, setCargando] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
  const [mensajeExito, setMensajeExito] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMensaje(null);

    if (!nombreClinica.trim() || !nombreAdmin.trim() || !correo.trim() || !password.trim()) {
      setErrorMensaje("Todos los campos son obligatorios.");
      return;
    }

    setCargando(true);

    try {
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
      setClinicaIdRegistrada(datos.clinica_id);
      setMensajeExito(datos.mensaje || "Datos validados correctamente.");
      setPaso(2);
    } catch (err: any) {
      console.error("Error en pre-registro:", err.message);
      setErrorMensaje(err.message || "Error al conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  };

  const handleApproveSuccess = async (subscriptionId: string) => {
    setSubscriptionIdFinal(subscriptionId);
    setCargando(true);
    setErrorMensaje(null);

    try {
      const res = await fetch(`${apiUrl}/api/suscripciones/confirmar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscription_id: subscriptionId,
          clinica_id: clinicaIdRegistrada,
          paypal_plan_id: selectedPlan.paypalPlanId,
          correo: correo.trim().toLowerCase() || undefined,
        }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.detail || "Error al confirmar la suscripción en el servidor.");
      }

      setPaso(3);
    } catch (err: any) {
      console.error("Error al confirmar suscripción:", err);
      setErrorMensaje(
        "El pago fue aprobado por PayPal (ID: " +
          subscriptionId +
          "), pero hubo un problema al sincronizar con el servidor: " +
          err.message
      );
      setPaso(3);
    } finally {
      setCargando(false);
    }
  };

  const handlePaypalError = (err: any) => {
    console.error("Error en pasarela PayPal:", err);
    setErrorMensaje("Ocurrió un error al procesar el pago con PayPal. Intenta de nuevo.");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-teal-50 border border-teal-100 p-1">
              <Image
                src="/logo.png"
                alt="Vitalia"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              VITALIA
            </span>
          </Link>

          <Link
            href="/#planes"
            className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
          >
            ← Cambiar Plan
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            {paso === 1 && (
              <>
                <div className="mb-8">
                  <span className="text-xs font-bold text-teal-800 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Paso 1 de 2: Datos de la Cuenta
                  </span>
                  <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Registra o Vincula tu Clínica
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    Completa tus datos de acceso. Si ya tienes cuenta registrada en VITALIA, ingresa tu correo y contraseña actuales para actualizar el plan de tu clínica sin perder tu información.
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
                      placeholder="Ej. Consultorio Médico San Rafael"
                      value={nombreClinica}
                      onChange={(e) => setNombreClinica(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
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
                      placeholder="Ej. Dr. Alejandro Morales"
                      value={nombreAdmin}
                      onChange={(e) => setNombreAdmin(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={cargando}
                    data-testid="btn-submit-registro"
                    className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-700 text-white font-semibold text-base hover:bg-teal-800 active:bg-teal-900 disabled:opacity-50 transition-all shadow-lg shadow-teal-700/25"
                  >
                    {cargando ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Verificando cuenta...
                      </span>
                    ) : (
                      <>
                        <span>Continuar al Pago Seguro con PayPal</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setPaso(2)}
                      className="text-xs text-teal-700 hover:text-teal-800 font-semibold underline underline-offset-4"
                    >
                      ¿Ya te registraste previamente? Haz clic aquí para pagar directamente con PayPal
                    </button>
                  </div>
                </form>
              </>
            )}

            {paso === 2 && (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-teal-800 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    Paso 2 de 2: Autorizar Suscripción
                  </span>
                  <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Pago Integrado con PayPal
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">
                    Haz clic en el botón oficial de PayPal para autorizar tu suscripción. Se abrirá una ventana emergente segura y no saldrás de este sitio.
                  </p>
                </div>

                {mensajeExito && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{mensajeExito}</span>
                  </div>
                )}

                {errorMensaje && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errorMensaje}</span>
                  </div>
                )}

                <div className="mb-6 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Plan Seleccionado:</span>
                    <span className="font-bold text-slate-900">{selectedPlan.name} (${selectedPlan.price} MXN/mes)</span>
                  </div>
                  {nombreClinica && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clínica:</span>
                      <span className="font-semibold text-slate-800">{nombreClinica}</span>
                    </div>
                  )}
                  {correo && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Cuenta / Correo:</span>
                      <span className="font-semibold text-slate-800">{correo}</span>
                    </div>
                  )}
                </div>

                <div className="my-6">
                  <PayPalSubscriptionButton
                    planId={selectedPlan.paypalPlanId}
                    clinicaId={clinicaIdRegistrada}
                    layout={
                      selectedPlan.id === "profesional" || selectedPlan.id === "empresarial"
                        ? "horizontal"
                        : "vertical"
                    }
                    onApproveSuccess={handleApproveSuccess}
                    onError={handlePaypalError}
                  />
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setPaso(1)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    ← Modificar datos de la cuenta
                  </button>
                  <span className="text-xs text-slate-400">Transacción segura 256-bit SSL</span>
                </div>
              </div>
            )}

            {paso === 3 && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Suscripción Activada
                </span>

                <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  ¡Bienvenido a VITALIA!
                </h1>

                <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Tu suscripción al <strong>Plan {selectedPlan.name}</strong> ha sido confirmada con éxito y tu clínica ya se encuentra plenamente activa en la plataforma.
                </p>

                {subscriptionIdFinal && (
                  <div className="mt-5 inline-block bg-slate-100 border border-slate-200 px-4 py-2 rounded-xl text-xs text-slate-700 font-mono">
                    ID de Suscripción: {subscriptionIdFinal}
                  </div>
                )}

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="http://localhost:8081"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-700 text-white font-semibold text-sm hover:bg-teal-800 transition-all shadow-lg shadow-teal-700/25"
                  >
                    Iniciar Sesión en VITALIA
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all"
                  >
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Resumen del Plan
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
                <span className="font-mono text-xs text-teal-300">{selectedPlan.paypalPlanId}</span>
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
              Pago procesado directamente mediante los botones oficiales de PayPal Smart Payment Buttons. Tus datos y transacciones se encuentran cifrados bajo los estándares PCI-DSS.
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 bg-white">
        © 2026 VITALIA. Todos los derechos reservados.
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
