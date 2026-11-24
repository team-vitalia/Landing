"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const slides = [
  { src: "/carrusel-1.jpg", alt: "Vitalia - Gestión de citas médicas" },
  { src: "/carrusel-2.jpg", alt: "Vitalia - Expedientes clínicos digitales" },
  { src: "/carrusel-3.jpg", alt: "Vitalia - Recetas electrónicas" },
  { src: "/carrusel-4.jpg", alt: "Vitalia - Control de inventario médico" },
  { src: "/carrusel-5.jpg", alt: "Vitalia - App móvil para pacientes" },
];

const TOTAL = slides.length;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TOTAL);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      dx > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        style={{
          display: "flex",
          width: `${TOTAL * 100}%`,
          transform: `translateX(-${(current * 100) / TOTAL}%)`,
          transition: "transform 600ms ease-in-out",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            style={{ width: `${100 / TOTAL}%`, flexShrink: 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              sizes="100vw"
              priority={i === 0}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 45%, transparent 100%)",
          zIndex: 2,
        }}
      />

      <button
        type="button"
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 active:bg-black/80 transition-colors backdrop-blur-sm touch-manipulation"
        style={{ zIndex: 10 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 active:bg-black/80 transition-colors backdrop-blur-sm touch-manipulation"
        style={{ zIndex: 10 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-3 px-4"
        style={{ zIndex: 10 }}
      >
        <div className="hidden sm:flex flex-row items-center gap-3">
          <a
            href="#planes"
            className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold rounded-xl bg-teal-700 text-white hover:bg-teal-800 shadow-lg shadow-teal-900/40 transition-all touch-manipulation"
          >
            Ver Planes y Precios
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="#caracteristicas"
            className="inline-flex items-center justify-center px-7 py-3 text-base font-semibold rounded-xl bg-white text-slate-800 hover:bg-slate-50 shadow-sm transition-all touch-manipulation"
          >
            Conocer Funciones
          </a>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className={`transition-all duration-300 rounded-full touch-manipulation ${
                i === current ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
