"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
              V
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                VITALIA
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                SaaS Clínico
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#caracteristicas"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Características
            </a>
            <a
              href="#planes"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Planes y Precios
            </a>
            <a
              href="#seguridad"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Multi-Tenant
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#planes"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/30"
            >
              Comenzar Ahora
            </a>
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
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-3">
          <a
            href="#caracteristicas"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Características
          </a>
          <a
            href="#planes"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Planes y Precios
          </a>
          <a
            href="#seguridad"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Multi-Tenant
          </a>
          <a
            href="#planes"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Comenzar Ahora
          </a>
        </div>
      )}
    </header>
  );
}
