import type { Metadata } from "next";
import "./globals.css";
import "gooey-toast/styles.css";

export const metadata: Metadata = {
  title: {
    default: "Vitalia",
    template: "Vitalia",
  },
  description:
    "Software integral para consultorios, clínicas y centros médicos. Agenda, expedientes de pacientes, inventario de medicamentos y recetas en un solo lugar.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
