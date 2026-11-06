import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-900/50 border border-teal-700/50 flex items-center justify-center p-1">
                <Image
                  src="/logo.png"
                  alt="Vitalia"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                VITALIA
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Software de gestión clínica integral para consultorios, clínicas y centros médicos.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Producto
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#caracteristicas" className="hover:text-white transition-colors">
                  Expedientes Digitales
                </Link>
              </li>
              <li>
                <Link href="/#caracteristicas" className="hover:text-white transition-colors">
                  Control de Inventario
                </Link>
              </li>
              <li>
                <Link href="/#caracteristicas" className="hover:text-white transition-colors">
                  Asistente Clínico Inteligente
                </Link>
              </li>
              <li>
                <Link href="/#planes" className="hover:text-white transition-colors">
                  Planes y Precios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Legal y Transparencia
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/eliminacion-cuenta" className="hover:text-white transition-colors">
                  Eliminación de Cuenta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Atención y Soporte
            </h4>
            <p className="text-sm text-slate-400 mb-2 font-medium">
              vitaliaorg98@gmail.com
            </p>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Carretera del Departamento del D.F. km 7.5, Ejido de Santa María Atarasquillo, Lerma, Estado de México.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 VITALIA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="hover:text-slate-400">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-slate-400">
              Términos
            </Link>
            <Link href="/eliminacion-cuenta" className="hover:text-slate-400">
              Eliminación de Datos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
