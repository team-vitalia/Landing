import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VITALIA - Gestión Clínica Inteligente",
  description:
    "Software integral para consultorios, clínicas y centros médicos. Agenda, expedientes de pacientes, inventario de medicamentos y recetas en un solo lugar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
