"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EliminacionCuentaPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [confirmo, setConfirmo] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim() || !correo.trim()) {
      setError("Por favor completa tu nombre y correo electrónico.");
      return;
    }

    if (!confirmo) {
      setError("Debes confirmar la solicitud marcando la casilla de verificación.");
      return;
    }

    setEnviado(true);
  };

  const handleEnviarCorreoDirecto = () => {
    const subject = encodeURIComponent("Solicitud de Eliminacion de Cuenta - Vitalia");
    const body = encodeURIComponent(
      `Nombre completo: ${nombre}\nCorreo de la cuenta: ${correo}\nMotivo: ${motivo}\n\nConfirmo la solicitud de eliminacion definitiva de mi cuenta y revoco el consentimiento de datos no clinicos.`
    );
    window.location.href = `mailto:vitaliaorg98@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-slate-50 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver al inicio
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 uppercase tracking-wide mb-4">
              Transparencia y Supresión de Datos
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solicitud de Eliminación de Cuenta
            </h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              En cumplimiento con las directrices de privacidad y protección de datos, puedes solicitar en cualquier momento la eliminación definitiva de tu cuenta y datos de acceso asociados a la plataforma VITALIA.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Retención médica obligatoria:</strong> Conforme a la legislación de salud (NOM-004-SSA3), los historiales clínicos de pacientes deben conservarse bajo resguardo por un período mínimo de 5 años. La eliminación de tu cuenta dará de baja inmediata a tus credenciales, sesiones y datos de perfil no clínicos.
            </div>

            {enviado ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <h2 className="text-lg font-bold text-emerald-950">
                    Solicitud registrada correctamente
                  </h2>
                </div>
                <p className="text-sm text-emerald-900 leading-relaxed mb-5">
                  Hemos generado tu solicitud de eliminación para <strong>{correo}</strong>. Nuestro equipo de soporte procesará la baja y enviará confirmación en un plazo no mayor a 48 horas hábiles.
                </p>
                <button
                  type="button"
                  onClick={handleEnviarCorreoDirecto}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 shadow-sm transition-all"
                >
                  Abrir cliente de correo para enviar copia
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Nombre Completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Dr. Roberto Sánchez Morales"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="correo"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Correo Electrónico de la Cuenta
                  </label>
                  <input
                    id="correo"
                    type="email"
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="motivo"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Motivo de la baja (Opcional)
                  </label>
                  <textarea
                    id="motivo"
                    rows={3}
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    placeholder="Coméntanos brevemente el motivo..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="confirmo"
                    type="checkbox"
                    checked={confirmo}
                    onChange={(e) => setConfirmo(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
                  />
                  <label htmlFor="confirmo" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    Confirmo que deseo solicitar la baja definitiva de mi cuenta en VITALIA y entiendo los términos de custodia legal clínica.
                  </label>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 shadow-md shadow-rose-600/20 transition-all"
                  >
                    Solicitar Eliminación
                  </button>

                  <button
                    type="button"
                    onClick={handleEnviarCorreoDirecto}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all"
                  >
                    Enviar vía Correo Directo
                  </button>
                </div>
              </form>
            )}

            <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
              <span>Desarrollado por Jared Gonzalez Ortega</span>
              <a
                href="mailto:vitaliaorg98@gmail.com"
                className="text-teal-700 font-medium hover:underline"
              >
                vitaliaorg98@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
