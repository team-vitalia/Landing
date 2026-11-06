import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad - VITALIA",
  description:
    "Aviso y política de privacidad oficial de VITALIA Gestión Clínica Inteligente conforme a la normativa de protección de datos personales.",
};

export default function PrivacidadPage() {
  const secciones = [
    {
      numero: "01",
      titulo: "Identidad y Responsable del Tratamiento",
      parrafos: [
        "VITALIA Gestión Clínica Inteligente (en lo sucesivo 'VITALIA'), con domicilio en Carretera del Departamento del D.F. kilómetro 7.5, Ejido de Santa María Atarasquillo, C.P. 52044, Lerma, Estado de México, es la entidad responsable del uso, resguardo, tratamiento y protección de los datos personales recabados a través de la plataforma.",
        "El presente aviso rige para pacientes, médicos, personal de enfermería, recepcionistas y administradores que hagan uso de nuestras soluciones informáticas.",
      ],
    },
    {
      numero: "02",
      titulo: "Datos Personales y Médicos Recopilados",
      parrafos: [
        "Para proporcionar una atención clínica ágil y confiable, se procesan datos proporcionados voluntariamente:",
      ],
      puntos: [
        "Datos de Identificación y Contacto: Nombre completo, CURP, fecha de nacimiento, sexo biológico, teléfono de contacto y correo electrónico.",
        "Datos Clínicos y de Consulta: Antecedentes médicos, signos vitales, alergias, diagnósticos, recetas electrónicas y planes de tratamiento.",
        "Datos de Gestión y Citas: Fechas de consulta agendadas, asistencias, cancelaciones y notas de seguimiento.",
      ],
    },
    {
      numero: "03",
      titulo: "Finalidades del Tratamiento",
      parrafos: [
        "La información recabada se destina estrictamente a fines de atención y organización clínica:",
      ],
      puntos: [
        "Apertura, consulta y resguardo del expediente clínico digital.",
        "Programación de citas médicas y envío de recordatorios por correo.",
        "Emisión ordenada de recetas médicas y planes farmacológicos.",
        "Control de existencias de insumos y medicamentos en consultorio o farmacia.",
        "Comunicación directa entre el médico y su paciente.",
      ],
    },
    {
      numero: "04",
      titulo: "Confidencialidad y No Comercialización",
      parrafos: [
        "VITALIA mantiene un estricto principio ético de no comercialización. Bajo ninguna circunstancia vendemos, rentamos ni transferimos sus datos personales o historiales médicos a empresas publicitarias o terceros con fines de lucro.",
        "La información se conserva con los más altos estándares de reserva profesional y únicamente se comparte con profesionales interconsultantes que usted o su médico determinen.",
      ],
    },
    {
      numero: "05",
      titulo: "Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)",
      parrafos: [
        "Usted tiene pleno derecho a conocer qué datos personales tenemos, solicitar su corrección si están desactualizados, pedir su eliminación o limitar su uso.",
        "Para ejercer cualquiera de estos derechos, basta enviar un correo electrónico a nuestro equipo de atención:",
      ],
      destacado: "vitaliaorg98@gmail.com",
      nota: "Conforme a la NOM-004-SSA3, las notas médicas y expedientes clínicos deben conservarse por un período mínimo de 5 años por motivos de responsabilidad y seguimiento médico legal.",
    },
    {
      numero: "06",
      titulo: "Modificaciones al Aviso de Privacidad",
      parrafos: [
        "VITALIA podrá actualizar este aviso para reflejar cambios legales o mejoras operativas en la plataforma. Toda modificación estará disponible de manera pública y visible en esta misma página.",
      ],
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
              Documento Legal Oficial
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Aviso de Privacidad
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Última actualización: Enero de 2026 - VITALIA Gestión Clínica
            </p>

            <div className="mt-8 space-y-10">
              {secciones.map((sec) => (
                <div key={sec.numero} className="border-t border-slate-100 pt-8 first:border-t-0 first:pt-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                      {sec.numero}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      {sec.titulo}
                    </h2>
                  </div>

                  <div className="space-y-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                    {sec.parrafos.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {sec.puntos && (
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 pl-4 border-l-2 border-teal-200">
                      {sec.puntos.map((punto, idx) => (
                        <li key={idx} className="leading-relaxed">
                          • {punto}
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.destacado && (
                    <div className="mt-4 p-4 rounded-xl bg-teal-50 border border-teal-200/70">
                      <p className="text-xs font-semibold text-teal-900 uppercase">
                        Contacto directo:
                      </p>
                      <a
                        href={`mailto:${sec.destacado}`}
                        className="text-base font-bold text-teal-700 hover:underline"
                      >
                        {sec.destacado}
                      </a>
                    </div>
                  )}

                  {sec.nota && (
                    <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                      <strong>Nota importante:</strong> {sec.nota}
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
