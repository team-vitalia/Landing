import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones - VITALIA",
  description:
    "Términos y condiciones de uso de la plataforma de gestión clínica VITALIA.",
};

export default function TerminosPage() {
  const clausulas = [
    {
      numero: "01",
      titulo: "Aceptación de las Condiciones",
      parrafos: [
        "Las presentes Condiciones de Servicio regulan el acceso y uso de la plataforma VITALIA para la gestión de clínicas, consultorios médicos y expedientes de pacientes.",
        "Al registrarse, contratar un plan o utilizar el sistema, el usuario declara haber leído, comprendido y aceptado íntegramente estas condiciones.",
      ],
    },
    {
      numero: "02",
      titulo: "Naturaleza del Servicio y Criterio Médico",
      parrafos: [
        "VITALIA es un software de apoyo a la gestión médica, agenda de citas, expediente electrónico y control de insumos de farmacia.",
        "Bajo ninguna circunstancia VITALIA emite diagnósticos médicos automatizados ni reemplaza el criterio, exploración física y juicio clínico de los profesionales de la salud tratantes.",
      ],
      alerta:
        "VITALIA no es un servicio de respuesta inmediata ante emergencias de vida o muerte. Ante una situación de urgencia médica, acuda inmediatamente al centro hospitalario más cercano o llame al 911.",
    },
    {
      numero: "03",
      titulo: "Cuentas de Usuario y Confidencialidad",
      parrafos: [
        "Cada cuenta de usuario asignada dentro de la clínica es personal e intransferible. El usuario es responsable de mantener la confidencialidad de sus claves de acceso.",
        "El acceso a módulos asistenciales de consulta y prescripción queda reservado exclusivamente a personal médico facultado conforme a las leyes sanitarias vigentes.",
      ],
    },
    {
      numero: "04",
      titulo: "Expedientes Clínicos y Responsabilidad",
      parrafos: [
        "La clínica y sus profesionales médicos son los depositarios legales y custodios de la información clínica registrada en la plataforma conforme a la NOM-004-SSA3-2012.",
        "Los médicos usuarios asumen plena responsabilidad sobre la exactitud de los diagnósticos, notas de evolución y recetas registradas.",
      ],
    },
    {
      numero: "05",
      titulo: "Planes, Suscripción y Pagos",
      parrafos: [
        "Los planes de VITALIA se contratan bajo modalidad de suscripción periódica con procesamiento seguro mediante la pasarela de pagos PayPal.",
        "El usuario puede solicitar el cambio de paquete o la cancelación de su suscripción en cualquier momento sin plazos forzosos.",
      ],
    },
    {
      numero: "06",
      titulo: "Contacto y Aclaraciones",
      parrafos: [
        "Para dudas sobre estas condiciones de servicio o soporte técnico en tu clínica, ponemos a tu disposición nuestro canal de atención:",
      ],
      contacto: "vitaliaorg98@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-slate-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 uppercase tracking-wide">
              Términos Oficiales
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Términos y Condiciones de Uso
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Vigentes para México y Latinoamérica - VITALIA Gestión Clínica
            </p>

            <div className="mt-8 space-y-10">
              {clausulas.map((c) => (
                <div key={c.numero} className="border-t border-slate-100 pt-8 first:border-t-0 first:pt-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                      {c.numero}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      {c.titulo}
                    </h2>
                  </div>

                  <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                    {c.parrafos.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {c.alerta && (
                    <div className="mt-4 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 leading-relaxed">
                      <strong>Aviso de urgencias:</strong> {c.alerta}
                    </div>
                  )}

                  {c.contacto && (
                    <div className="mt-4 p-4 rounded-xl bg-teal-50 border border-teal-200/70">
                      <p className="text-xs font-semibold text-teal-900 uppercase">
                        Correo de contacto:
                      </p>
                      <a
                        href={`mailto:${c.contacto}`}
                        className="text-base font-bold text-teal-700 hover:underline"
                      >
                        {c.contacto}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
