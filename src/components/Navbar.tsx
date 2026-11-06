"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-teal-50 border border-teal-100 p-1">
              <Image
                src="/logo.png"
                alt="Vitalia"
                width={40}
                height={40}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                VITALIA
              </span>
              <span className="text-xs text-teal-700 font-medium">
                Gestión Clínica
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#caracteristicas"
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              Características
            </Link>
            <Link
              href="/#planes"
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              Planes y Precios
            </Link>
            <Link
              href="/privacidad"
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              Aviso de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              Términos
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#planes"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl bg-teal-700 text-white hover:bg-teal-800 transition-all shadow-sm shadow-teal-700/25"
            >
              Comenzar Ahora
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5 space-y-3">
          <Link
            href="/#caracteristicas"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700"
          >
            Características
          </Link>
          <Link
            href="/#planes"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700"
          >
            Planes y Precios
          </Link>
          <Link
            href="/privacidad"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700"
          >
            Aviso de Privacidad
          </Link>
          <Link
            href="/terminos"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700"
          >
            Términos y Condiciones
          </Link>
          <div className="pt-2">
            <Link
              href="/#planes"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl bg-teal-700 text-white hover:bg-teal-800 shadow-sm"
            >
              Comenzar Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
