import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VITALIA - Plataforma Integral de Gestión Clínica SaaS",
  description:
    "Solución Multi-Tenant para clínicas y centros médicos. Gestión de expedientes, inventario, notificaciones en tiempo real y asistente IA con integración directa a PayPal.",
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
